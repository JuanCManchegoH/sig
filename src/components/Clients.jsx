import Image from 'next/image'
import { Container } from '@/components/Container'
import cireem from '../images/cireem.png'
import commercial from '../images/commercial.png'
import megavet from '../images/megavet.png'
import perficort from '../images/perficort.png'
import procesos from '../images/procesos.png'
import hyperlimpia from '../images/hyperlimpia.jpg'
import firstInService from '../images/firstInService.jpg'
import oxicortes from '../images/oxicortes.jpg'

const customers = [
  { name: 'cireem', img: cireem },
  { name: 'commercial', img: commercial },
  { name: 'procesos', img: procesos },
  { name: 'megavet', img: megavet },
  { name: 'perficort', img: perficort },
  { name: 'firstInService', img: firstInService },
  { name: 'hyperlimpia', img: hyperlimpia },
  { name: 'oxicortes', img: oxicortes },
]

export function Clients() {
  return (
    <section id="clients" aria-label="clients" className="py-20 sm:py-32">
      <Container>
        <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-sky-600 sm:text-5xl">
          Nuestros Clientes.
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
