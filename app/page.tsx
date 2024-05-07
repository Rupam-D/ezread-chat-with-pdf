import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowRight, ArrowRightIcon, Check, CircleUserRound, Github, HelpCircle, MessagesSquare, Minus, Sparkles, UploadCloud } from "lucide-react";
import Link from "next/link"
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { pricingItems } from "@/constants/constants";
import { PLANS } from "@/config/pricing-config";
import { cn } from "@/lib/utils";
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import UpgradeButton from "@/components/UpgradeBtn";



const Home = () => {
  return (
    <div className="bg-gray-50/20">
      <div className="relative bg-gray-50">

        {/* <div className="absolute bottom-0 right-0 overflow-hidden lg:inset-y-0">
          <img className="w-auto h-full" src="https://d33wubrfki0l68.cloudfront.net/1e0fc04f38f5896d10ff66824a62e466839567f8/699b5/images/hero/3/background-pattern.png" alt="" />
        </div> */}



        <section className=" py-12 sm:py-16 lg:pt-20 lg:pb-36">
          {/* <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-x-0 top-1 -z-10 transform-gpu overflow-hidden  '>
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className='relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]'
            />
          </div> */}

          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-1 gap-y-8 lg:items-center lg:grid-cols-2 sm:gap-y-20 xl:grid-cols-5">
              <div className="text-center xl:col-span-2 lg:text-left md:px-16 lg:px-0">
                <div className="max-w-sm mx-auto sm:max-w-md md:max-w-full">
                  <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj">
                    Chat with your{' '}
                    <span className='text-pink-600'>documents</span>{' '}
                    in minutes.
                  </h1>

                  <div className="mt-8 lg:mt-12 lg:flex lg:items-center">
                    <div className="flex justify-center flex-shrink-0 -space-x-4 overflow-hidden lg:justify-start">
                      <img className="inline-block rounded-full w-14 h-14 ring-2 ring-white" src="https://d33wubrfki0l68.cloudfront.net/3bfa6da479d6b9188c58f2d9a8d33350290ee2ef/301f1/images/hero/3/avatar-male.png" alt="" />
                      <img className="inline-block rounded-full w-14 h-14 ring-2 ring-white" src="https://d33wubrfki0l68.cloudfront.net/b52fa09a115db3a80ceb2d52c275fadbf84cf8fc/7fd8a/images/hero/3/avatar-female-1.png" alt="" />
                      <img className="inline-block rounded-full w-14 h-14 ring-2 ring-white" src="https://d33wubrfki0l68.cloudfront.net/8a2efb13f103a5ae2909e244380d73087a9c2fc4/31ed6/images/hero/3/avatar-female-2.png" alt="" />
                    </div>

                    <p className="mt-4 text-lg text-gray-900 lg:mt-0 lg:ml-4 font-pj">Used by <span className="font-bold">500+ Students,Researchers & Teachers</span> on their daily life.</p>
                  </div>
                </div>

                <div className=" z-50 mt-8 sm:flex sm:items-center sm:justify-center lg:justify-start sm:space-x-5 lg:mt-12">
                  <RegisterLink
                    className={buttonVariants({ variant: "default", size: "lg" })}>
                    Create Your Free Account
                    <ArrowRightIcon className='ml-2 w-5 h-5' />
                  </RegisterLink>


                  <Link
                    href='/'
                    target='_blank'>
                    <Button variant={"outline"} size={"default"} className="mt-5 sm:mt-0 border border-pink-500 shadow-sm ring-1 ring-pink-200">
                      <Github className='mr-2 h-5 w-5 ' />
                      Give us a star{' '}
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="xl:col-span-3">
                {/* <Image
                src='/assets/dashboard-preview.jpg'
                alt='product preview'
                width={500}
                height={300}
                quality={100}
                className='rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10'
              /> */}

                <img className="w-[87%] mx-auto scale-110 rounded-md bg-white p-2  shadow-lg shadow-pink-600/10 ring-1 ring-pink-900/10" src="/assets/dashboard-preview.png" alt="" />


              </div>


            </div>
          </div>

        </section>
      </div>


      {/* Feature section */}
      <MaxWidthWrapper>
        <div className='relative mx-auto mb-32 mt-32 max-w-5xl sm:mt-28'>
          <div className='mb-12 px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl sm:text-center'>
              <h2 className='mt-2 font-bold text-4xl text-gray-900 sm:text-5xl'>
                Start chatting in minutes !
              </h2>
              <p className='mt-4 text-lg text-gray-600'>
                Chatting to your PDF files has never been
                easier than before.
              </p>
            </div>
          </div>

          {/* steps */}
          <ol className='my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0'>
            <li className='md:flex-1'>
              <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
                <span className='bg-pink-100 text-pink-600 p-3 cursor-pointer w-fit rounded-xl'>
                  <CircleUserRound className='h-8 w-8' />
                </span>
                <span className='text-xl font-semibold'>
                  Sign up for an account
                </span>
                <span className='mt-2 text-zinc-700'>
                  Either starting out with a free plan or
                  choose our{' '}
                  <Link
                    href='/pricing'
                    className='text-pink-700 underline underline-offset-2'>
                    pro plan
                  </Link>
                  .
                </span>
              </div>
            </li>
            <li className='md:flex-1'>
              <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
                <span className='bg-pink-100 text-pink-600 p-3 cursor-pointer w-fit rounded-xl'>
                  <UploadCloud className='h-8 w-8' />
                </span>
                <span className='text-xl font-semibold'>
                  Upload your PDF file
                </span>
                <span className='mt-2 text-zinc-700'>
                  We&apos;ll process your file and make it
                  ready for you to chat with.
                </span>
              </div>
            </li>
            <li className='md:flex-1'>
              <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
                <span className='bg-pink-100 text-pink-600 p-3 cursor-pointer w-fit rounded-xl'>
                  <MessagesSquare className='h-8 w-8' />
                </span>
                <span className='text-xl font-semibold'>
                  Start asking questions
                </span>
                <span className='mt-2 text-zinc-700'>
                  It&apos;s that simple. Try out EzRead today -
                  it really takes less than a minute.
                </span>
              </div>
            </li>
          </ol>
          <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-x-0 top-60 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className='relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]'
            />
          </div>
          <div className='mx-auto max-w-6xl px-6 lg:px-8'>
            <div className='mt-16 flow-root sm:mt-24'>
              <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
                <Image
                  src='/assets/file-upload-preview.png'
                  alt='uploading preview'
                  width={1419}
                  height={732}
                  quality={100}
                  className='rounded-md bg-white p-1 shadow-2xl ring-1 ring-gray-900/10'
                />
              </div>
            </div>
          </div>

          {/* <div
          aria-hidden='true'
          className='pointer-events-none absolute inset-x-0 bottom-10 -z-10 transform-gpu overflow-hidden blur-3xl sm:bottom-10'>
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className='relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]'
          />
        </div> */}
        </div>
      </MaxWidthWrapper>

      {/* testimonial */}
      <section id="testimonials" aria-label="What our customers are saying" className="relative bg-gray-50 py-20  sm:mt-28">
        <div className="  mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl md:text-center">
            <h2 className="mt-2 font-bold text-4xl text-gray-900 sm:text-5xl">What Our Customers Are Saying</h2>
          </div>

          <ul role="list"
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
            <li>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                <li>
                  <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10"><svg aria-hidden="true"
                    width="105" height="78" className="absolute left-6 top-6 fill-slate-100">
                    <path
                      d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z">
                    </path>
                  </svg>
                    <blockquote className="relative">
                      <p className="text-lg tracking-tight text-slate-900">As a student, I found this app incredibly useful! Being able to chat with PDFs has revolutionized the way I study. No more juggling between multiple apps or windows. It&apos;s all in one place now. Thanks to this app, my productivity has soared!</p>
                    </blockquote>
                    <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                      <div>
                        <div className="font-display text-base text-slate-900">Rupam Das</div>
                      </div>
                      <div className="overflow-hidden rounded-full bg-slate-50">
                        <img alt="" className="h-14 w-14 object-cover" src="https://randomuser.me/api/portraits/men/25.jpg" />
                      </div>
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </li>
            <li>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                <li>
                  <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10"><svg aria-hidden="true"
                    width="105" height="78" className="absolute left-6 top-6 fill-slate-100">
                    <path
                      d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z">
                    </path>
                  </svg>
                    <blockquote className="relative">
                      <p className="text-lg tracking-tight text-slate-900">I&apos;m amazed by the simplicity and effectiveness of this app. As a professional, I deal with a lot of documents on a daily basis. This app has made collaboration so much easier. Sharing and discussing PDFs in real-time has never been smoother. Kudos to the team behind this brilliant creation!</p>
                    </blockquote>
                    <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                      <div>
                        <div className="font-display text-base text-slate-900">Pranay Bhowmik</div>
                      </div>
                      <div className="overflow-hidden rounded-full bg-slate-50">
                        <img alt="" className="h-14 w-14 object-cover" src="https://randomuser.me/api/portraits/men/12.jpg" />
                      </div>
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </li>
            <li>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                <li>
                  <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10"><svg aria-hidden="true"
                    width="105" height="78" className="absolute left-6 top-6 fill-slate-100">
                    <path
                      d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z">
                    </path>
                  </svg>
                    <blockquote className="relative">
                      <p className="text-lg tracking-tight text-slate-900">I&apos;ve tried many productivity apps, but none come close to this one. Chatting with PDFs has changed the game for me. Whether it&apos;s discussing project details with my team or reviewing documents with clients, this app has become my go-to tool. It&apos;s a must-have for anyone who deals with documents regularly.</p>
                    </blockquote>
                    <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                      <div>
                        <div className="font-display text-base text-slate-900">Rito Bose</div>
                      </div>
                      <div className="overflow-hidden rounded-full bg-slate-50">
                        <img alt="" className="h-14 w-14 object-cover" src="https://randomuser.me/api/portraits/men/45.jpg" />
                      </div>
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div
          aria-hidden='true'
          className='pointer-events-none absolute inset-x-0 top-20 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className='relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]'
          />
        </div>
      </section>


      <MaxWidthWrapper className='relative mb-8 mt-24 text-center max-w-5xl'>
        <div
          aria-hidden='true'
          className='pointer-events-none absolute inset-x-0 -top-[9rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className='relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]'
          />
        </div>
        <div className='mx-auto mb-10 sm:max-w-lg'>
          <h1 className='text-6xl font-bold sm:text-7xl  '>
            Pricing
          </h1>
          <p className='mt-5 text-gray-600 sm:text-lg'>
            Whether you&apos;re just trying out our service
            or need more, we&apos;ve got you covered.
          </p>
        </div>

        <div className='pt-12 grid grid-cols-1 gap-10 lg:grid-cols-2'>
          <TooltipProvider>
            {pricingItems.map(
              ({ plan, tagline, quota, features }) => {
                const price =
                  PLANS.find(
                    (p) => p.slug === plan.toLowerCase()
                  )?.price.amount || 0

                return (
                  <div
                    key={plan}
                    className={cn(
                      'relative rounded-2xl bg-white shadow-lg',
                      {
                        'border-2 border-pink-600 shadow-pink-200':
                          plan === 'Pro',
                        'border border-gray-200':
                          plan !== 'Pro',
                      }
                    )}>
                    {plan === 'Pro' && (
                      <div className='absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-gradient-to-r from-pink-600 to-red-600 px-3 py-2 text-sm font-medium text-white'>
                        Upgrade now
                      </div>
                    )}

                    <div className='p-5'>
                      <h3 className='my-3 text-center font-display text-3xl font-bold'>
                        {plan}
                      </h3>
                      <p className='text-gray-500'>
                        {tagline}
                      </p>
                      <p className='my-5 font-display text-6xl font-semibold'>
                        ${price}
                      </p>
                      <p className='text-gray-500'>
                        per month
                      </p>
                    </div>

                    <div className='flex h-20 items-center justify-center border-b border-t border-gray-200 bg-gray-50'>
                      <div className='flex items-center space-x-1'>
                        <p>
                          {quota.toLocaleString()} PDFs/mo
                          included
                        </p>

                        <Tooltip delayDuration={300}>
                          <TooltipTrigger className='cursor-default ml-1.5'>
                            <HelpCircle className='h-4 w-4 text-zinc-500' />
                          </TooltipTrigger>
                          <TooltipContent className='w-80 p-2'>
                            How many PDFs you can upload per
                            month.
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </div>

                    <ul className='my-10 space-y-5 px-8'>
                      {features.map(
                        ({ text, footnote, negative }) => (
                          <li
                            key={text}
                            className='flex space-x-5'>
                            <div className='flex-shrink-0'>
                              {negative ? (
                                <Minus className='h-6 w-6 text-gray-300' />
                              ) : (
                                <Check className='h-6 w-6 text-pink-500' />
                              )}
                            </div>
                            {footnote ? (
                              <div className='flex items-center space-x-1'>
                                <p
                                  className={cn(
                                    'text-gray-600',
                                    {
                                      'text-gray-400':
                                        negative,
                                    }
                                  )}>
                                  {text}
                                </p>
                                <Tooltip
                                  delayDuration={300}>
                                  <TooltipTrigger className='cursor-default ml-1.5'>
                                    <HelpCircle className='h-4 w-4 text-zinc-500' />
                                  </TooltipTrigger>
                                  <TooltipContent className='w-80 p-2'>
                                    {footnote}
                                  </TooltipContent>
                                </Tooltip>
                              </div>
                            ) : (
                              <p
                                className={cn(
                                  'text-gray-600',
                                  {
                                    'text-gray-400':
                                      negative,
                                  }
                                )}>
                                {text}
                              </p>
                            )}
                          </li>
                        )
                      )}
                    </ul>
                    <div className='border-t border-gray-200' />
                    {/* <Link href={"/pricing"}
                      className={buttonVariants({
                        className: 'w-full',
                      })}>
                      "Upgrade now"
                      <ArrowRight className='h-5 w-5 ml-1.5' />
                    </Link> */}
                    <div className='p-5'>
                      {plan === 'Free' ?
                        <Button className="w-full " variant={"outline"}>
                          <RegisterLink >
                            Register today
                            <ArrowRight className='h-5 w-5 ml-1.5' />
                          </RegisterLink>
                        </Button>

                        :
                        <UpgradeButton />
                      }
                    </div>
                  </div>
                )
              }
            )}
          </TooltipProvider>
        </div>
      </MaxWidthWrapper>
      {/* footer */}
      <footer className="flex flex-col sm:flex-row w-full py-5 px-7 bg-[#E4335A] text-white text-sm items-center justify-between ">
        <div>
          <p className=""><span className="font-bold">EzRead</span> - Developed by Rupam Das</p>
          <p className="text-white/90 text-sm block mt-1">Take 3 sleepless months to make it happen :D</p>
        </div>

        <div>
          <p className="sm:mt-3 text-white text-sm ">Special thanks to Pranay, Rito, Pritam & Koustav</p>
        </div>


      </footer>



    </div>
  )
}
export default Home