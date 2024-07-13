import React from 'react'
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 ThxBro Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="https://ethglobal.com/" className="text-xs hover:underline underline-offset-4 text-muted-foreground" prefetch={false}>
            An ETH Global Project 
          </Link>
        </nav>
      </footer>
  )
}

export default Footer