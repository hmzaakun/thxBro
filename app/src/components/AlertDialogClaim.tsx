import React from 'react'

import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const AlertDialogClaim = () => {
  return (
    <AlertDialog defaultOpen>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Alert</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="sm:max-w-[600px]">
        <AlertDialogHeader>
          <AlertDialogTitle>System Alert</AlertDialogTitle>
          <AlertDialogDescription>
            There is an issue with the payment processing system that may affect some user transactions. Our team is
            investigating the problem and working to resolve it as soon as possible.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="space-y-4 py-4">
          <Card>
            <CardHeader>
              <CardTitle>Sample Code</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="whitespace-pre-wrap break-all">{`display code there`}</pre>
            </CardContent>
          </Card>
          <div className="flex justify-end">
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <Button
              variant="outline"
              onClick={() => {
                const csvData =
                  'Title,Text\nSystem Alert,"There is an issue with the payment processing system that may affect some user transactions. Our team is investigating the problem and working to resolve it as soon as possible."'
                const csvBlob = new Blob([csvData], { type: "text/csv" })
                const csvUrl = URL.createObjectURL(csvBlob)
                const link = document.createElement("a")
                link.setAttribute("href", csvUrl)
                link.setAttribute("download", "system-alert.csv")
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
              }}
            >
              Export to CSV
            </Button>
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default AlertDialogClaim