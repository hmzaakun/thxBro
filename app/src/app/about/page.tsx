import React from 'react'

const about = () => {
  return (
    <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Our Website</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover the key aspects of our website and how we can help you achieve your goals.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <div className="flex items-center gap-4">
                  <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                    <BriefcaseIcon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-bold">Our Mission</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Our mission is to provide a comprehensive platform that empowers our users to achieve their goals and
                  reach new heights.
                </p>
                <img
                  src="/placeholder.svg"
                  width={300}
                  height={200}
                  alt="Mission"
                  className="rounded-md object-cover"
                />
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-4">
                  <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                    <UsersIcon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-bold">Our Team</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Our team of experts is dedicated to providing exceptional service and support to our users. Get to
                  know the people behind the scenes.
                </p>
                <img src="/placeholder.svg" width={300} height={200} alt="Team" className="rounded-md object-cover" />
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-4">
                  <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                    <RocketIcon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-bold">Our Vision</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Our vision is to be the leading platform in our industry, continuously innovating and pushing the
                  boundaries of what's possible.
                </p>
                <img src="/placeholder.svg" width={300} height={200} alt="Vision" className="rounded-md object-cover" />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Our Core Values</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                At the heart of our company are the values that guide our actions and decisions.
              </p>
            </div>
            <div className="mx-auto w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center gap-2">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <InfinityIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="text-lg font-bold">Integrity</h4>
                <p className="text-sm text-muted-foreground">
                  We are committed to honesty, transparency, and ethical behavior in all our dealings.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <InfoIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="text-lg font-bold">Innovation</h4>
                <p className="text-sm text-muted-foreground">
                  We continuously seek new and better ways to serve our customers and drive progress.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <CombineIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="text-lg font-bold">Collaboration</h4>
                <p className="text-sm text-muted-foreground">
                  We believe in the power of teamwork and work closely with our customers to achieve their goals.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <AwardIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="text-lg font-bold">Excellence</h4>
                <p className="text-sm text-muted-foreground">
                  We strive for the highest standards of quality and performance in everything we do.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Our History</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Learn about our journey and how we've evolved to become the leading platform in our industry.
              </p>
            </div>
            <div className="mx-auto w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col items-start gap-4">
                <img
                  src="/placeholder.svg"
                  width={400}
                  height={300}
                  alt="History"
                  className="rounded-md object-cover"
                />
                <div className="space-y-2">
                  <h4 className="text-lg font-bold">Our Humble Beginnings</h4>
                  <p className="text-sm text-muted-foreground">
                    Our company started as a small project in a garage, with a vision to revolutionize the industry.
                    Through hard work and dedication, we've grown to become a leading platform.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start gap-4">
                <img src="/placeholder.svg" width={400} height={300} alt="Growth" className="rounded-md object-cover" />
                <div className="space-y-2">
                  <h4 className="text-lg font-bold">Continuous Growth</h4>
                  <p className="text-sm text-muted-foreground">
                    Over the years, we've expanded our offerings and capabilities to better serve our customers. Our
                    commitment to innovation has been the driving force behind our growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Our Achievements</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We're proud of the milestones we've reached and the impact we've had on our industry.
              </p>
            </div>
            <div className="mx-auto w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col items-start gap-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <AwardIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-bold">Industry Awards</h4>
                  <p className="text-sm text-muted-foreground">
                    Our platform has been recognized with numerous industry awards, showcasing our commitment to
                    excellence and innovation.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start gap-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <UsersIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-bold">Satisfied Customers</h4>
                  <p className="text-sm text-muted-foreground">
                    We're proud to have a growing base of satisfied customers who have benefited from our platform and
                    services.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start gap-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <ScalingIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-bold">Continuous Innovation</h4>
                  <p className="text-sm text-muted-foreground">
                    We're constantly evolving and improving our platform to stay ahead of the curve and provide the best
                    possible experience for our users.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start gap-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <RocketIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-bold">Industry Impact</h4>
                  <p className="text-sm text-muted-foreground">
                    Our platform has had a significant impact on our industry, setting new standards and paving the way
                    for innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
  )
}

export default about

function AwardIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
        <circle cx="12" cy="8" r="6" />
      </svg>
    )
  }
  
  
  function BriefcaseIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        <rect width="20" height="14" x="2" y="6" rx="2" />
      </svg>
    )
  }
  
  
  function CombineIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="8" height="8" x="2" y="2" rx="2" />
        <path d="M14 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2" />
        <path d="M20 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2" />
        <path d="M10 18H5c-1.7 0-3-1.3-3-3v-1" />
        <polyline points="7 21 10 18 7 15" />
        <rect width="8" height="8" x="14" y="14" rx="2" />
      </svg>
    )
  }
  
  
  function InfinityIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z" />
      </svg>
    )
  }
  
  
  function InfoIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </svg>
    )
  }
  
  
  function RocketIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    )
  }
  
  
  function ScalingIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M14 15H9v-5" />
        <path d="M16 3h5v5" />
        <path d="M21 3 9 15" />
      </svg>
    )
  }
  
  
  function UsersIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  }
  
  
  function XIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    )
  }