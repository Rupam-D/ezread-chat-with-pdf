"use client"
import React, { useContext } from 'react'
import { useChat } from 'ai/react'
import { cn } from '@/lib/utils'
import { chatContext } from '@/contexts/chatContexts/store'
import { Loader, Loader2, MessageSquare, User } from 'lucide-react'
import { Icons } from '@/icons/Icons'
import Skeleton from 'react-loading-skeleton';
import ReactMarkdown from 'react-markdown'
const Messages = () => {
  const { allMessages, loading } = useContext(chatContext)
  // console.log(allMessages)

  if (allMessages.length === 0) return (
    <div className='flex-1 flex flex-col items-center justify-center gap-2'>
      <MessageSquare className='h-8 w-8 text-pink-500' />
      <h3 className='font-semibold text-xl'>
        You&apos;re all set!
      </h3>
      <p className='text-zinc-500 text-sm'>
        Ask your first question to get started.
      </p>
    </div>
  )
  return (
    <div className="flex max-h-[calc(100vh-15rem)] border-zinc-200 flex-1 flex-col gap-4 p-3 overflow-y-auto scrollbar-thumb  scrollbar-track scrollbar-w-2 ">
      {allMessages.map(msg => (
        // <div key={m.id} className="whitespace-pre-wrap">
        //   {m.role === 'user' ? 'User: ' : 'AI: '}
        //   {m.content}
        // </div>

        <div key={msg.id}
          className={cn("flex gap-y-3",
            msg.role === 'user' ? "justify-end pl-10" : "justify-start pr-10"
          )}
        >
          <div className='flex flex-col gap-y-2'>
            {/* icon */}
            <span>
              {
                msg.role === "user" ?
                  // <User className='p-2 rounded-sm bg-pink-600 text-white h-8 w-8' />
                  null
                  :
                  <Icons.logo className=' p-1 rounded-sm bg-pink-600 fill-white h-7 w-7' />
              }
            </span>
            {/* content */}
            <div
              className={cn("rounded-sm px-3 text-base py-1 shadow-md ",
                msg.role === "user" ? "bg-pink-600 text-white" : "bg-gray-100 text-slate-800")}>
              {


                <ReactMarkdown
                  className={cn(msg.role === "user" ? "text-white" : "text-slate-800")}>
                  {msg.content}
                </ReactMarkdown>
              }

            </div>
            {/*  */}
          </div>

        </div>
      ))}
      {loading ?
        <div className='mt-2 flex flex-col gap-y-2'>
          {/* <span>
            <Icons.logo className=' p-1 rounded-sm bg-pink-600 fill-white h-7 w-7' />
          </span> */}
          <Skeleton width={20} height={20} className='mb-2' />
          <Skeleton width={150} height={50} />
          <Skeleton width={100} height={30} />
          {/* <Skeleton width={100} /> */}
        </div>
        :
        null
      }
    </div>
  )
}

export default Messages

//   < div key = { msg.id }
// className = {
//   cn("flex",
//     msg.role === 'user' ? "justify-end pl-10" : "justify-start pr-10"
//             )
// }
//   >
//   <div
//     className={cn("rounded-lg px-3 text-sm py-1 shadow-md ring-1 ring-gray-900/10",
//       msg.role === "user" ? "bg-pink-500 text-white" : "bg-gray-100 text-zinc-900"
//     )}>
//     {msg.content}
//   </div>
