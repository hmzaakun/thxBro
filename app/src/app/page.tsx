import Image from "next/image";
import Link from "next/link";

import iconCard from "/public/card.svg";


export default function Home() {
  return (
    <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 bg-primary">
          <div className="container space-y-10 xl:space-y-16 px-4 md:px-6">
            <div className="grid gap-4 px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] text-primary-foreground">
                  The ultimate platform for crypto prepaid cards
                </h1>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
                  Create and distribute prepaid crypto cards easily. Secure, user-friendly, and ideal for gift campaigns or your friends.
                </p>
                <div className="space-x-4">
                  <Link
                    href="/generate"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary-foreground px-4 py-2 text-sm font-medium text-primary shadow transition-colors hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Get Started
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <Image
              src={iconCard}
              width="1270"
              height="300"
              alt="Hero"
              className="mx-auto aspect-[3/1] overflow-hidden rounded-t-xl object-cover"
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-muted-foreground">
                  New Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground">
                  Effortless crypto gifting. Instant redemption.
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Seamlessly generate and redeem crypto cards. Perfect for targeted gift campaigns without the need for wallet addresses.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold text-foreground">Simple, scalable, and secure</h3>
                <p className="text-sm text-muted-foreground">
                  Easily create multiple codes at once, ideal for large-scale gift campaigns.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold text-foreground">User-friendly and accessible</h3>
                <p className="text-sm text-muted-foreground">
                  Recipients can redeem their crypto without needing a wallet, thanks to embedded WalletConnect.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold text-foreground">Instant and hassle-free</h3>
                <p className="text-sm text-muted-foreground">
                  Generate and send crypto cards quickly. Recipients can redeem their value instantly.
                </p>
              </div>
            </div>
            <div className="flex justify-center flex-col sm:flex-row items-start gap-4">
              <Link
                href="/generate"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Generate Card
              </Link>
              <Link
                href="/redeem"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Redeem
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-foreground">
                A seamless workflow for the best crypto gifting experience.
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Focus on creating memorable experiences while we handle the infrastructure with automated processes and integrated collaboration tools.
              </p>
            </div>
          </div>
        </section>
      </main>
  );
}
