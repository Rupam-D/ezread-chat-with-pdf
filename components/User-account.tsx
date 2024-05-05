
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { Button } from './ui/button'
import { Avatar, AvatarFallback } from './ui/avatar'
import Image from 'next/image'

import Link from 'next/link'
import { Gem, User2Icon } from 'lucide-react'
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs'


interface UserAccountNavProps {
  email: string | undefined
  name: string
  imageUrl: string
}

const UserAccount = ({
  email,
  imageUrl,
  name,
}: UserAccountNavProps) => {
  // const subscriptionPlan = await getUserSubscriptionPlan()
  // Will Cahnge later...
  const subscriptionPlan = undefined

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className='overflow-visible'>
        <Button className='rounded-full h-8 w-8 aspect-square bg-slate-400'>
          <Avatar className='relative w-8 h-8'>
            {imageUrl ? (
              <div className='relative aspect-square h-full w-full'>
                <Image
                  fill
                  src={imageUrl}
                  alt='profile picture'
                  referrerPolicy='no-referrer'
                />
              </div>
            ) : (
              <AvatarFallback>
                <span className='sr-only'>{name}</span>
                <User2Icon className='h-4 w-4 text-zinc-900' />
              </AvatarFallback>
            )}
          </Avatar>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className='bg-white' align='end'>
        <div className='flex items-center justify-start gap-2 p-2'>
          <div className='flex flex-col space-y-0.5 leading-none'>
            {name && (
              <p className='font-medium text-sm text-black'>
                {name}
              </p>
            )}
            {email && (
              <p className='w-[200px] truncate text-xs text-zinc-700'>
                {email}
              </p>
            )}
          </div>
        </div>

        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <Link href='/dashboard'>Dashboard</Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link href='/pricing'>
            Upgrade{' '}
            <Gem className='text-pink-600 h-4 w-4 ml-1.5' />
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem className='cursor-pointer'>
          <LogoutLink>Log Out</LogoutLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserAccount