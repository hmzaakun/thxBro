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
        <w3m-button />
      </header>
  )
}

export default Navbar
