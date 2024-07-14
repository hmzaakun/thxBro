'use client';

import React from 'react'
import { useState } from 'react';

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


const redeem = () => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleClick = () => {
    //à remplacer par le wallet
    // if (!0) {
    //   toast.error('Connect to your wallet first');
    //   return;
    // }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <section className="max-w-3xl px-4 md:px-0 mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-primary-foreground mb-4">Redeem my money 💸</h1>
        <p className="text-muted-foreground text-lg">
          Easily redeem your crypto using our secure and user-friendly platform. Enter your code and claim your funds instantly.😏
        </p>
      </section>
      <Card className="w-full max-w-md p-6 bg-card text-card-foreground shadow-lg rounded-lg">
        <div className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Redeem</h2>
            <div className="grid gap-2">
              <label htmlFor="">Name of campaign or reason of gift</label>
              <Input type="text" placeholder="Christmas for example" className="flex-1" />
              <label htmlFor="">My code :</label>
              <Input type="text" placeholder="23745631... for example" className="flex-1" />
            </div>
          </div>
          <AlertDialog open={open}>
          <AlertDialogTrigger asChild>
            <Button onClick={handleClick} variant="outline" className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors w-full">I want my Money 💸</Button>
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
                <Button variant="outline" onClick={handleClose}>Cancel</Button>
              </div>
            </div>
          </AlertDialogContent>
        </AlertDialog>
        </div>
      </Card>
    </div>
  )
}

export default redeem
