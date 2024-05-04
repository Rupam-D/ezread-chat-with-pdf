import { getPdf } from '@/actions/getPdf'
import ChatWrapper from '@/components/ChatWrapper'
import PdfRenderer from '@/components/PdfRenderer'
import React from 'react'

const FileView = async ({ params }: { params: { filekey: string } }) => {
  console.log(params.filekey, "hbfjhf")
  const response = await getPdf(params.filekey)
  console.log(response, "[filekey]")

  return (
    <div className='flex-1 justify-between flex flex-col h-[calc(100vh-3.5rem)]'>
      <div className='mx-auto w-full max-w-8xl grow lg:flex xl:px-2'>
        {/* Left sidebar & main wrapper */}
        <div className='flex-1 xl:flex'>
          <div className='px-4 py-6 sm:px-6 lg:pl-8 xl:flex-1 xl:pl-6'>
            {/* Main area */}

            {/* {response.fileUrl} */}
            <PdfRenderer fileUrl={response.fileUrl} />
          </div>
        </div>
        {/* righr area */}
        <div className='shrink-0 flex-[0.75] border-t border-gray-200 lg:w-96 lg:border-l lg:border-t-0'>
          {/* user={response.user} */}
          <ChatWrapper fileKey={params.filekey} />
        </div>
      </div>
    </div>
  )
}

export default FileView
