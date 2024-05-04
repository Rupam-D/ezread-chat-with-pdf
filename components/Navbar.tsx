"use client";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import MaxWidthWrapper from './MaxWidthWrapper'
import Link from 'next/link'
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { ArrowRightIcon } from 'lucide-react';
import { buttonVariants } from './ui/button';

const Navbar = () => {
  const {
    permissions,
    isLoading,
    user

  } = useKindeBrowserClient();


  return (
    <nav className='sticky h-16 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>

      <MaxWidthWrapper>
        <div className='flex h-16 items-center justify-between border-b border-zinc-200'>
          {/* logo */}
          <Link
            href='/'
            className='flex z-40 font-semibold'>
            <span className='underline underline-offset-4 decoration-2 decoration-pink-600'>EzRead.</span>
          </Link>

          {/* Mobile Nav will done later */}

          <div className='hidden sm:flex items-center gap-x-4'>
            <Link href={"/pricing"} className={buttonVariants({
              variant: "ghost"
            })}>
              Pricing
            </Link>

            {/* Login Logout */}
            {
              user && user !== null ?
                <LogoutLink className={buttonVariants({ variant: "outline", size: "sm" })}>Log out</LogoutLink>
                :
                <div className="flex items-center justify-center gap-4">
                  <LoginLink className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })}>Sign In</LoginLink>

                  <RegisterLink className={buttonVariants({ variant: 'default', size: "sm" })}>Started for Free <ArrowRightIcon className='ml-2 w-5 h-5' /></RegisterLink></div>
            }
          </div>

        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar