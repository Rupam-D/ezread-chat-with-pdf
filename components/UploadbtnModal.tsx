"use client"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "./ui/button"
import DropzoneModal from "./Dropzone"


const UploadbtnModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Upload new</Button>
      </DialogTrigger>
      <DialogContent>
        <DropzoneModal />
      </DialogContent>
    </Dialog>

  )
}

export default UploadbtnModal
