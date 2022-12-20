import { Container } from '@/components/Container'
import clsx from 'clsx'
import Image from 'next/image'
import logo from '../images/logo.png'

const navigation = [
  { name: 'Inicio', href: '#' },
  { name: 'Servicios', href: '#services' },
  { name: 'Contacto', href: '#ContactUs' },
  { name: 'Quienes Somos', href: '#AboutUs' },
]

export function Header() {
  return (
    <header className="z-50 pb-3 pt-3 bg-gray-50/40 backdrop-blur-xl sticky top-0 w-full shadow-xl">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap py-4">
        <div className="mt-10 lg:mt-0 relative h-14 w-20">
          <Image src={logo} alt="logo" layout="fill" />
        </div>
        <div className="lg:justify-end">
          <nav className="pointer-events-auto md:block">
          <ul className="flex justify-center items-center py-3 rounded-full divide-x-2 bg-gradient-to-r from-sky-500 to-teal-400 px-3 text-sm font-medium text-white shadow-lg shadow-zinc-800/5">
            {navigation.map((item) => (
              <li key={item.name}>
              <a
                href={item.href} 
                className={clsx(
                  'relative px-3 transition py-3 hover:text-gray-200'
                )}
              >
                {item.name}
              </a>
              </li>
            ))}
          </ul>

          </nav>
        </div>
      </Container>
    </header>
  )
}
