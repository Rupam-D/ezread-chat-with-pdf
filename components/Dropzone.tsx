"use client"
import { Cloud, FileCheck, Loader2, UploadCloud } from 'lucide-react'
import { useState } from 'react'
import Dropzone from 'react-dropzone'
import { Progress } from './ui/progress'
import { useUploadThing } from '@/lib/generateReactHelpers '
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from 'next/navigation'
import { trpc } from '@/app/_trpc/client'


const DropzoneModal = () => {
  const { mutate: filePolling } = trpc.getSingleFile.useMutation({
    onSuccess: (data) => {
      router.push(`/dashboard/file/${data?.res.key}`)
    },
    retry: true,
    retryDelay: 500
  })
  const { toast } = useToast()
  const [loadingValue, setLoadingValue] = useState<number>(0)
  const [isUploading, setIsUploading] = useState<boolean>(false)
  const router = useRouter()
  const [isUploadedSuccessfully, setIsUploadedSuccessfully] = useState<boolean>()

  // uploadThing hook 
  const { startUpload } = useUploadThing("pdfUploader")

  // simulated progress bar for better uiux
  const stimulatedProgress = () => {
    // reset progressbar
    setLoadingValue(0)
    // progress bar increase 5% after 500ms
    const interval = setInterval(() => {
      setLoadingValue((prev) => {
        if (prev >= 95) {
          clearInterval(interval)
          return prev
        }
        return prev + 5
      })
    }, 500)

    return interval
  }

  return (
    <Dropzone multiple={false}
      onDrop={async (acceptedFiles) => {

        setIsUploading(true)
        const progressInterVal = stimulatedProgress()

        // file uploading initiates
        const response = await startUpload(acceptedFiles)

        // file upload done
        clearInterval(progressInterVal)
        setLoadingValue(100)

        if (!response) {
          toast({
            title: "Something went wrong!",
            description: "We couldn't run your Pdf. Please try again later.",
          })
        }
        else if (!response[0].key) {
          toast({
            title: "Something went wrong!",
            description: "We couldn't run your Pdf. Please try again later.",
          })
        }
        response && filePolling({ fileKey: response[0].key })

        console.log(response, "from uploadthing")
        // response && router.push(`/dashboard/file/${response[0].key}`)
        // setIsUploading(false)

      }

      }>

      {({ getRootProps, getInputProps, acceptedFiles }) => (
        <section>
          <div {...getRootProps()} className='border h-64 m-4 border-dashed border-gray-300 rounded-lg' >
            <div className='flex items-center justify-center h-full w-full'>

              <label
                htmlFor='dropzone-file'
                className='flex flex-col items-center justify-center w-full h-full rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100'>
                <div className='flex flex-col items-center justify-center pt-5 pb-6'>

                  <UploadCloud className='h-6 w-6 text-pink-500 mb-2' />
                  <p className='mb-2 text-sm text-zinc-700 font-semibold'>
                    Drag 'n' drop files here, <span className='font-normal'>or</span> click to select files
                  </p>
                  <p className='text-xs text-zinc-500'> PDF (upto 4MB)</p>

                </div>

                {
                  acceptedFiles && acceptedFiles[0] ?
                    (

                      <div className='max-w-xs bg-white flex items-center rounded-md overflow-hidden outline outline-[1px] outline-zinc-200 divide-x divide-zinc-200'>
                        <div className='px-3 py-2 h-full grid place-items-center'>
                          <FileCheck className='h-4 w-4 text-pink-500' />
                        </div>
                        <div className='px-3 py-2 h-full text-sm truncate'>
                          {acceptedFiles[0].name}
                        </div>
                      </div>
                    )
                    :
                    null
                }

                {/* progress bar */}
                {
                  isUploading ?
                    <div className='w-full mt-4 max-w-xs mx-auto'>
                      <Progress
                        indicatorCol={loadingValue === 100 ? "bg-green-500" : null}
                        value={loadingValue}
                        className='h-1 w-full bg-zinc-200'
                      />
                      {loadingValue === 100 ? (
                        <div className='flex gap-1 items-center justify-center text-sm text-zinc-700 text-center pt-2'>
                          <Loader2 className='h-3 w-3 animate-spin' />
                          Redirecting to chat page...
                        </div>
                      ) : null}
                    </div>
                    :
                    null
                }
                <input {...getInputProps()} className='bg-black' />
              </label>
            </div>

          </div>
        </section>
      )}

    </Dropzone>
  )
}

export default DropzoneModal
