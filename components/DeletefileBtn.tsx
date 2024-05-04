"use client"

import { Loader2, Trash } from 'lucide-react'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { trpc } from '@/app/_trpc/client'




const DeletefileBtn = ({ fileId }: {
  fileId: string
}) => {

  const [deleteFileId, setDeleteFileId] = useState<string>("")

  // invalidate 
  const utils = trpc.useUtils()


  const { mutate: deleteTheFile } = trpc.deleteUserFile.useMutation({
    onSuccess: () => {
      utils.getUSerFiles.invalidate()
    },
    onMutate: ({ fileId }) => {
      setDeleteFileId(fileId)
    },
    onSettled: () => {
      setDeleteFileId("")
    }

  })



  return (
    <Button
      onClick={() => deleteTheFile({ fileId })}
      id={fileId}
      size='sm'
      className='w-full'
      variant='destructive'>
      {fileId === deleteFileId ?
        <Loader2 className='h-4 w-4 animate-spin' />
        :
        <Trash className='h-4 w-4' />
      }

    </Button>
  )
}

export default DeletefileBtn
