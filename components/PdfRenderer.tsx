"use client"
import { AlignLeft, AlignRight, ChevronDown, ChevronUp, Loader2, RotateCcw, RotateCw, Search } from 'lucide-react';
import { pdfjs } from 'react-pdf';
import { Document, Page } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { useToast } from './ui/use-toast';
import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useResizeDetector } from 'react-resize-detector';

import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import PdfFullScreen from './PdfFullScreen';

// worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;


const PdfRenderer = ({ fileUrl }: { fileUrl: string }) => {
  const { toast } = useToast()
  const [currPage, setCurrPage] = useState<number>(1)
  const [totalPage, setTotalPage] = useState<number>()
  const [scale, setScale] = useState<number>(1)
  const [rotate, setRotate] = useState<number>(0)
  const { width, height, ref } = useResizeDetector();
  return (
    <div className='w-full bg-white rounded-md shadow flex flex-col items-center'>
      <div className='h-14 w-full border-b border-zinc-200 flex items-center justify-between px-2'>
        <div className='flex items-center gap-1.5'>

          <Button aria-label='previous page' variant={"ghost"}
            disabled={currPage === 1 ? true : false}
            onClick={() => {
              currPage && setCurrPage((prevPage: number) => {
                if (prevPage <= totalPage! && prevPage !== 1)
                  return prevPage! - 1
                else {
                  return prevPage
                }
              })
            }}>
            <ChevronDown className='h-4 w-4' />
          </Button>
          <div className='flex items-center gap-1.5'>
            <span>
              {currPage}
            </span>
            {/* <Input className='w-12 h-8' value={currPage} /> */}
            <p className='text-zinc-700 text-sm space-x-1'>
              <span>/</span>
              <span>{!totalPage ? "--" : totalPage}</span>
            </p>

          </div>

          <Button aria-label='next page' variant={"ghost"}
            disabled={currPage === totalPage || totalPage === undefined}
            onClick={() => {
              currPage && setCurrPage((prevPage: number) => {
                if (prevPage < totalPage! && prevPage !== totalPage)
                  return prevPage + 1
                else {
                  return prevPage
                }
              })
            }}>
            <ChevronUp className='h-4 w-4' />
          </Button>


        </div>


        <div className='hidden sm:block space-x-2'>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className='gap-1.5' aria-label='zoom in' variant={"ghost"}>
                <Search className='h-4 w-4' />
                {scale * 100}%
                <ChevronDown className='h-3 w-3 opacity-50' />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onSelect={() => setScale(1)}>100%</DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setScale(1.5)}>150%</DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setScale(1.75)}>175%</DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setScale(2)}>200%</DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setScale(2.5)}>250%</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* rotate */}

          <Button variant={"ghost"} aria-label='rotate 90 degree clockwise'>
            <RotateCw className='h-4 w-4'
              onClick={() => {
                setRotate((prevState) => prevState + 90)
              }} />
          </Button>

          {/* fullscreen */}
          <PdfFullScreen fileUrl={fileUrl} />
        </div>

        <div className='block sm:hidden space-x-2'>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <AlignRight className=' text-gray-500 h-6 w-6' />
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end' className='text-center'>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className='gap-1.5' aria-label='zoom in' variant={"ghost"}>
                    <Search className='h-4 w-4' />
                    {scale * 100}%
                    <ChevronDown className='h-3 w-3 opacity-50' />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onSelect={() => setScale(1)}>100%</DropdownMenuItem>
                  <DropdownMenuItem onSelect={() => setScale(1.5)}>150%</DropdownMenuItem>
                  <DropdownMenuItem onSelect={() => setScale(1.75)}>175%</DropdownMenuItem>
                  <DropdownMenuItem onSelect={() => setScale(2)}>200%</DropdownMenuItem>
                  <DropdownMenuItem onSelect={() => setScale(2.5)}>250%</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenuSeparator />
              {/* fullscreen */}
              <PdfFullScreen fileUrl={fileUrl} />
              <DropdownMenuSeparator />
              {/* rotate */}

              <Button variant={"ghost"} aria-label='rotate 90 degree clockwise'>
                <RotateCw className='h-4 w-4'
                  onClick={() => {
                    setRotate((prevState) => prevState + 90)
                  }} />
              </Button>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className='flex-1 w-full max-h-screen'>
        <SimpleBar
          autoHide={false}
          className='max-h-[calc(100vh-10rem)]'>
          <div ref={ref}>
            {/* later */}
            <Document className={"max-h-full"} file={fileUrl} loading={
              <div className='flex justify-center'>
                <Loader2 className='my-24 h-6 w-6 animate-spin' />
              </div>

            }
              onLoadSuccess={(r) => setTotalPage(r._pdfInfo.numPages)}
              onLoadError={
                () => {
                  toast({
                    title: "Something went wrong here!",
                    description: "Unable to show the Pdf. Try again later...",
                    variant: "destructive"
                  })
                }
              }>
              <Page pageNumber={currPage} scale={scale} width={width ? width : 1} height={1} rotate={rotate} />
            </Document>
          </div>
        </SimpleBar>
      </div>
    </div>
  )
}

export default PdfRenderer
