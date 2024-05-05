"use client"

import { ArrowRight } from 'lucide-react'
import { Button } from './ui/button'
import Link from 'next/link'
// import { trpc } from '@/app/_trpc/client'

const UpgradeButton = () => {



  return (
    <Link href={"/pricing"}>
      <Button className='w-full'>
        Upgrade now <ArrowRight className='h-5 w-5 ml-1.5' />
      </Button>
    </Link>

  )
}

export default UpgradeButton