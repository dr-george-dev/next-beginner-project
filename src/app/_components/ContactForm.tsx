import React, { useActionState } from 'react'
import { ContactType } from '../_types/contact';


type ContactFormProps = {
  action: (prevState: any, formData: FormData) => Promise<any>;
  contact?: ContactType;
};

const ContactForm = ({action, contact}: ContactFormProps) => {
  const [state, formAction] = useActionState(action, null);

  return (
    <form action={formAction} className="space-x-4">
      
      {/* 3. This block displays the error message from the server */}
      {state?.message && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {state.message}
        </div>
      )}

      <div className="">
        <label className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input 
          type="email"
          name="email"
          placeholder='Enter your email'
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
        />
      </div>

      <div className="mt-3">
        <label className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input 
          type="password"
          name="password"
          placeholder='Enter your password'
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
        />
      </div>

      <button
        type='submit'
        disabled={isPending}
        className={`mt-3 w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-sm font-medium text-white 
        ${isPending ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}>
          {isPending ? "Logging in..." : "Login"}
      </button>
    </form>
  )
}

export default ContactForm
