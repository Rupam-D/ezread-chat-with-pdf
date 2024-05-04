"use client"
import Link from 'next/link';
import { compareAsc, format } from "date-fns";
import { FileText, Ghost, MessageSquare, Plus, Trash } from 'lucide-react';
import React from 'react'
import { Button } from './ui/button';
import DeletefileBtn from './DeletefileBtn';
import { FileType } from '@/types/types';






// main comp
const GetUserFiles = async ({ files }: { files: FileType[] }) => {

  console.log(files, "getfiles")

  return (
    files && files.length !== 0 ?
      <ul className='mt-8 grid grid-cols-1 gap-6 divide-y divide-zinc-200 md:grid-cols-2 lg:grid-cols-3'>
        {
          // for date wise arrangement - current date at top
          files.sort((a: any, b: any) =>
            new Date(b.createdAt).getTime() -
            new Date(a.createdAt).getTime()
          ).map((file: FileType) => (
            <li
              key={file._id}
              className='col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow transition hover:shadow-lg'>
              <Link
                href={`/dashboard/file/${file.key}`}
                className='flex flex-col gap-2'>

                <div className='pt-6 px-6 flex w-full items-center justify-between space-x-6'>
                  <div className='h-10 w-10 flex-shrink-0 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 flex items-center justify-center' >
                    <FileText className='text-white h-6 w-6' />
                  </div>
                  <div className='flex-1 truncate'>
                    <div className='flex items-center space-x-3'>
                      <h3 className='truncate text-lg font-medium text-zinc-900'>
                        {file.fileName}

                      </h3>
                    </div>
                  </div>
                </div>
              </Link>

              <div className='px-6 mt-4 grid grid-cols-3 place-items-center py-2 gap-6 text-xs text-zinc-500'>
                {/* date */}
                <div className='flex items-center gap-2'>
                  <Plus className='h-4 w-4' />
                  {format(
                    new Date(file.createdAt),
                    'MMM yyyy'
                  )}
                </div>
                {/* chat icon */}
                <div className='flex items-center gap-2'>
                  <MessageSquare className='h-4 w-4' />
                  chat
                </div>
                {/* delete btn */}
                <DeletefileBtn fileId={file._id} />

              </div>
            </li>
          ))
        }
      </ul>
      :
      <div className='mt-16 flex flex-col gap-2 items-center'>
        <Ghost className='h-8 w-8 text-zinc-800' />
        <h3 className='font-semibold text-xl'>
          Pretty empty around here !
        </h3>
        <p>Let&apos;s upload your first PDF.</p>

      </div>

  )
}

export default GetUserFiles
