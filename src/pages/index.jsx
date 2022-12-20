import Head from 'next/head'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { ContactUs } from '@/components/ContactUs'
import { Speakers } from '@/components/Speakers'
import { Clients } from '@/components/Clients'
import Footer from '@/components/Footer'
import AboutUs from '@/components/AboutUs'
import Services from '@/components/Services'

export default function Home() {
  return (
    <>
      <Head>
        <title>SIG Consultoría Integral SAS</title>
      </Head>
      <Header />
      <main>
        <Hero />
        <Speakers />
        <ContactUs />
        <Services />
        <AboutUs />
        <Clients />
      </main>
      <Footer />
    </>
  )
}
