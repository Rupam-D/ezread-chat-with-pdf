"use client"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useResizeDetector } from "react-resize-detector"
import { Button } from "./ui/button"
import { Expand, Loader2 } from "lucide-react"
import SimpleBar from "simplebar-react"
import 'simplebar-react/dist/simplebar.min.css';
import { Document, Page } from "react-pdf"
import { useState } from "react"
import { useToast } from "./ui/use-toast"

const PdfFullScreen = ({ fileUrl }: { fileUrl: string }) => {
  const { ref, width, height } = useResizeDetector()
  const [totalPage, setTotalPage] = useState<number>()
  const { toast } = useToast()

  return (
    <Dialog>
      <DialogTrigger asChild={true}>
        <Button variant={"ghost"} aria-label="Show Pdf in full screen">
          <Expand className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-7xl w-full h-[90vh]">
        <SimpleBar
          autoHide={false}
          className='max-h-[calc(100vh-10rem)]'>
          <div ref={ref}>
            {/* later */}
            <Document file={fileUrl} loading={
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
              }
              className={"max-h-full"}>
              {
                new Array(totalPage).fill(0).map((page: any, index: number) => (
                  <Page width={width ? width : 1} pageNumber={index + 1} key={index} />
                ))
              }
            </Document>
          </div>
        </SimpleBar>
      </DialogContent>
    </Dialog>

  )
}

export default PdfFullScreen
