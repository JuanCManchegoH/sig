import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function Hero() {
  const backgroundImage = "https://images.unsplash.com/photo-1485627941502-d2e6429a8af0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
  return (
    <div className="relative pt-10 pb-20 sm:py-24">
      <div className="absolute inset-x-0 -top-48 -bottom-14 overflow-hidden">
       <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <div className="h-full w-full object-cover object-center backdrop-filter relative" >
            <Image
              src={backgroundImage}
              alt="backgroundImage"
              layout="fill"
            />
          </div>
        </div>
        <div aria-hidden="true" className="absolute inset-0 bg-gray-900 opacity-50" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-sky-600 sm:text-7xl text-justify">
            <span className="sr-only">DeceptiConf - </span>A design conference
            for the dark side.
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-teal-900 text-justify">
            <p>
              The next generation of web users are tech-savvy and suspicious.
              They know how to use dev tools, they can detect a phishing scam
              from a mile away, and they certainly aren’t accepting any checks
              from Western Union.
            </p>
            <p>
              At DeceptiConf you’ll learn about the latest dark patterns being
              developed to trick even the smartest visitors, and you’ll learn
              how to deploy them without ever being detected.
            </p>
          </div>
          <Button href="#" className="mt-10 w-full sm:hidden">
            Get your tickets
          </Button>
          <dl className="mt-10 grid grid-cols-2 gap-y-6 gap-x-10 sm:mt-16 sm:gap-y-10 sm:gap-x-16 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ['Speakers', '18'],
              ['People Attending', '2,091'],
              ['Venue', 'Staples Center'],
              ['Location', 'Los Angeles'],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-sky-600">{name}</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-teal-900">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  )
}
