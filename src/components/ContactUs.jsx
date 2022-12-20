import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

export function ContactUs() {
  return (
    <section id="ContactUs" className="py-20">
    <div className="relative bg-gray-100">
      <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
        <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div className="mx-auto max-w-lg">
            <h2 className="text-2xl font-bold tracking-tight text-teal-600 sm:text-3xl">Contáctanos</h2>
            <p className="mt-3 text-lg leading-6 text-gray-500">
              Estaremos respondiendo lo mas pronto posible.
            </p>
            <dl className="mt-8 text-base text-gray-500">
              <div className="mt-6">
                <dt className="sr-only">Número de teléfono</dt>
                <dd className="flex">
                  <PhoneIcon className="h-6 w-6 flex-shrink-0 text-gray-400 mr-3" aria-hidden="true" />
                  <a href="tel:+573023004987">+57 (302) 3004987</a>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <EnvelopeIcon className="h-6 w-6 flex-shrink-0 text-gray-400 mr-3" aria-hidden="true" />
                  <a href="mailto:sigconsultoriaintegralsas@gmail.com?Subject=Aquí%20el%20asunto%20del%20mail">sigconsultoriaintegralsas@gmail.com</a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div className="mx-auto max-w-lg lg:max-w-none">
            <form className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="name" className="sr-only">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                  placeholder="Nombre *"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                  placeholder="Email *"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Número de teléfono
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                  placeholder="Número de teléfono *"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                  placeholder="Mensaje *"
                  defaultValue={''}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-teal-600 py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}
