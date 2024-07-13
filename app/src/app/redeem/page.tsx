import React from 'react'

import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const redeem = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <section className="max-w-3xl px-4 md:px-0 mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-primary-foreground mb-4">Redeem my money 💸</h1>
        <p className="text-muted-foreground text-lg">
          Manage your finances with ease using our secure and user-friendly banking platform.
        </p>
      </section>
      <Card className="w-full max-w-md p-6 bg-card text-card-foreground shadow-lg rounded-lg">
        <div className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Redeem</h2>
            <div className="grid gap-2">
              <label htmlFor="">My code</label>
              <Input type="text" placeholder="23745631... for example" className="flex-1" />
            </div>
          </div>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors w-full">
            I want my Money 💸
          </Button>
        </div>
      </Card>
    </div>
  )
}

export default redeem