"use client"
import { Loader2 } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const loading = () => {
  return (
    <div className='w-full mt-24 flex justify-center'>
      <div className='flex flex-col items-center gap-2'>
        {/* <Loader2 className='h-8 w-8 animate-spin text-zinc-800' /> */}
        {/* <Image src={"/assets/loader.webm"} alt='loader' width={150} height={150} /> */}
        <h3 className='font-semibold text-xl'>
          Setting up your account...
        </h3>
        <p>You will be redirected automatically.</p>
      </div>
    </div>
  )
}

export default loading
