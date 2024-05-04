"use client"
import React, { useContext, useRef } from 'react'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { Loader2, SendHorizonal } from 'lucide-react'
import { useChat } from 'ai/react'
import { chatContext } from '@/contexts/chatContexts/store'

const ChatInput = ({ isDisabled }: { isDisabled?: boolean }) => {
  const { typedInp, handleInpChange, handleSmt, loading } = useContext(chatContext)


  const ref = useRef<HTMLTextAreaElement>(null)

  return (
    <div className='absolute bottom-0 left-0 w-full'>

      <div className='mx-2 flex flex-row gap-3 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl'>
        <div className='relative flex h-full flex-1 items-stretch md:flex-col'>
          <form className='relative flex flex-col w-full flex-grow p-4 ' onSubmit={handleSmt}>

            <Textarea
              ref={ref}
              disabled={isDisabled}
              rows={1} maxRows={4}
              autoFocus
              placeholder='Start asking questions...'
              value={typedInp}
              onChange={(e) => { handleInpChange(e) }}
              onKeyDown={(ev) => {
                console.log(ev.key)
                if (ev.key == "Enter" && !ev.shiftKey) {
                  ev.preventDefault()


                }
              }}
              className='resize-none pr-12 text-base py-3' />
            {
              loading ?
                <Button aria-label='generating'
                  className='absolute top-1/3 right-6 rounded-full'>
                  <Loader2 className='h-5 w-5 animate-spin' />
                </Button>
                :
                <Button aria-label='send message'
                  type='submit'
                  disabled={isDisabled}
                  // onClick={() => {
                  //   handleSubmit
                  //   ref.current?.focus()
                  // }}
                  className='absolute top-1/3 right-6 rounded-full'>
                  <SendHorizonal className='h-4 w-4' />
                </Button>
            }

          </form>
        </div>
      </div>
    </div>
  )
}

export default ChatInput
