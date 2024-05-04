// a hihger component for managing loading states, layouts
"use client"
import React, { useEffect, useState } from 'react'
import ChatInput from './ChatInput'
import Messages from './Messages'
import { trpc } from '@/app/_trpc/client'
import { ArrowLeftFromLine, Frown, Loader2 } from 'lucide-react'
import { buttonVariants } from './ui/button'
import Link from 'next/link'
import Store from '@/contexts/chatContexts/store'
import { useToast } from "@/components/ui/use-toast"


const ChatWrapper = ({ fileKey }: { fileKey: string }) => {
  const { toast } = useToast()
  //fetch pinecone status 
  const { data, isLoading, error } = trpc.getPineconeStatus.useQuery({ fileKey }, {
    retry: true,
    retryDelay: 500
  })
  // console.log(data)

  if (isLoading) return (

    <div className='relative min-h-full bg-zinc-50 flex divide-y divide-zinc-200 flex-col justify-between gap-2'>
      <div className='flex-1 flex justify-center items-center flex-col mb-28'>
        <div className='flex flex-col items-center gap-2'>
          <Loader2 className='h-8 w-8 text-pink-500 animate-spin' />
          <h3 className='font-semibold text-xl'>
            Just a minute...
          </h3>
          <p className='text-zinc-500 text-sm'>
            We&apos;re preparing your PDF.
          </p>
        </div>
      </div>

      <ChatInput isDisabled />
    </div>
  )
  // if (error) {
  //   toast({
  //     title: "Facing some errors!",
  //     description: "Try to Connect with developer",
  //     variant: "destructive"
  //   })
  // }
  if (data?.fileStatus === "PROCESSING")
    return (
      <div className='relative min-h-full bg-zinc-50 flex divide-y divide-zinc-200 flex-col justify-between gap-2'>
        <div className='flex-1 flex justify-center items-center flex-col mb-28'>
          <div className='flex flex-col items-center gap-2'>
            <Loader2 className='h-8 w-8 text-pink-500 animate-spin' />
            <h3 className='font-semibold text-xl'>
              Processing Pdf...
            </h3>
            <p className='text-zinc-500 text-sm'>
              Your Pdf is getting ready
            </p>
          </div>
        </div>

        <ChatInput isDisabled />
      </div>
    )
  else if (data?.fileStatus === "FAILED")
    return (
      <div className='relative min-h-full bg-zinc-50 flex divide-y divide-zinc-200 flex-col justify-between gap-2'>
        <div className='flex-1 flex justify-center items-center flex-col mb-28'>
          <div className='flex flex-col items-center gap-2'>
            <Frown className='h-8 w-8 text-red-500 ' />
            <h3 className='font-semibold text-xl'>
              Uh-huh! Unable to reach the pdf...
            </h3>
            <p className='text-zinc-500 text-sm'>
              Try again later
            </p>

            <Link
              href='/dashboard'
              className={buttonVariants({
                variant: 'secondary',
                className: 'mt-4',
              })}>
              <ArrowLeftFromLine className='h-3 w-3 mr-1.5' />
              Back
            </Link>
          </div>
        </div>

        <ChatInput isDisabled />
      </div>
    )
  else if (data?.fileStatus == "SUCCESS")
    return (
      <Store fileKey={fileKey}>
        <div className='relative min-h-full bg-zinc-50 flex divide-y divide-zinc-200 flex-cl justify-between gap-2'>
          <div className='flex-1 justify-between flex flex-col mb-28'>
            <Messages />
          </div>
          {/* input box */}
          <ChatInput />
        </div>

      </Store>

    )
}

export default ChatWrapper
