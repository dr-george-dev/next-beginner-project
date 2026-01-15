import ContactForm from '@/app/_components/ContactForm';
import React from 'react'

const NewConatactPage = () => {
  return <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
    <h1 className="text-2xl fontbold mb-6">Create New Contact</h1>
    <ContactForm />

  </div>;
};

export default NewConatactPage;
