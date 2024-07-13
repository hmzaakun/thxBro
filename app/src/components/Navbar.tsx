import React from 'react'
import Link from "next/link";
import Image from "next/image";

import iconCard from "/public/card.svg";

const Navbar = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center bg-background border-b">
        <Link href="/" className="flex items-center justify-center" prefetch={false}>
          <Image src={iconCard} alt="card icon"  className="h-6 w-6 text-primary" />
          <span className="sr-only">ThxBro</span>
          <h4 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] text-primary-foreground">
          ThxBro
        </h4>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="/generate"
            className="text-sm font-medium hover:underline underline-offset-4 text-primary-foreground"
            prefetch={false}
          >
            Generate Card
          </Link>
          <Link
            href="/redeem"
            className="text-sm font-medium hover:underline underline-offset-4 text-primary-foreground"
            prefetch={false}
          >
            Redeem
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4 text-primary-foreground"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4 text-primary-foreground"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
        <div className='ml-auto'>
          <w3m-button />
        </div>
        
      </header>
  )
}

export default Navbar
