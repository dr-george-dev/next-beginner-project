import { stat } from 'fs'
import { NextResponse } from 'next/server'
import React from 'react'

export const GET = () => {
  return NextResponse.json (
    {
        message: "Hello from the API route!",
        status: "sucesss",

    }
    
  )
}

