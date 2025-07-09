"use client"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import EmploymentApplicationForm from "./EmploymentApplicationForm"

export default function ApplyModal({ jobId, triggerText = "Apply Now" }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button className="bg-green-500 hover:bg-green-600 text-white" onClick={() => setOpen(true)}>
        {triggerText}
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Employment Application</DialogTitle>
          </DialogHeader>
          <EmploymentApplicationForm jobId={jobId} onSuccess={() => setOpen(false)} />
        </DialogContent>
      </Dialog>
    </>
  )
} 