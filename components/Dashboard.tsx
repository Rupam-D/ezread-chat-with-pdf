"use client"

import React, { useEffect, useState } from 'react'
import UploadbtnModal from './UploadbtnModal'
import { Ghost, MessageSquare, Plus, Trash } from 'lucide-react';
import Skeleton from 'react-loading-skeleton';
import Link from 'next/link';
import { compareAsc, format } from "date-fns";
import { Button } from './ui/button';
import GetUserFiles from './GetUserFiles';
import { trpc } from '@/app/_trpc/client';


const DashboardComp = () => {
  // fetch files
  const { data, isLoading } = trpc.getUserFiles.useQuery()
  // console.log(data, isLoading, "getUserFiles12")

  return (
    <main className='mx-auto max-w-7xl md:p-10'>
      <div className='mt-8 flex flex-col items-start justify-between gap-4 border-b border-gray-200 pb-5 sm:flex-row sm:items-center sm:gap-0'>
        <h1 className='mb-3 font-bold text-5xl text-gray-900'>
          My Files
        </h1>
        {/* upload btn modal */}
        <UploadbtnModal />
      </div>

      {/* display all files of user */}
      {
        isLoading ?
          <div>
            <Skeleton className='my-2' count={3} height={100} />
          </div>
          :
          // <div>hello</div>
          data && <GetUserFiles files={data.files} />
      }

    </main>
  )
}

export default DashboardComp
