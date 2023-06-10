import Image from 'next/image'
import { Container } from '@/components/Container'
import segurosBolivar from '../images/segurosBolivar.jpg'
import main from '../images/logo_main.svg'
import quick from '../images/quick.svg'
import colpatria from '../images/colpatria.jpg'

const customers = [
  { name: 'Quick', img: quick },
  { name: 'Main', img: main },
  { name: 'Seguros Bolivar', img: segurosBolivar },
  { name: 'AX Colpatria', img: colpatria },

]

export function Allies() {
  return (
    <section id="allies" aria-label="allies" className="py-20 sm:py-32">
      <Container>
        <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-sky-600 sm:text-5xl">
          Nuestros Aliados.
        </h2>
        <div className="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-y-12 gap-x-32 sm:grid-cols-4 md:gap-x-16 lg:gap-x-32">
          {customers.map((customer) => (
            <div
              key={customer.name}
              className="flex items-center justify-center h-40 w-40"
            >
              <Image src={customer.img} alt={customer.name} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
