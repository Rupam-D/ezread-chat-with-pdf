import { Github, Instagram, Linkedin } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <section className='flex flex-col sm:flex-row justify-between py-4 px-8 items-center gap-4 bg-pink-100'>

      <div className='socials flex flex-row gap-4 text-gray-700'>
        <Instagram />
        <Linkedin />
        <Github />

      </div>
      <div className='text-sm font-semibold text-gray-700'>
        made with ❤ by Rupam Das
      </div>
    </section>
  )
}

export default Footer
