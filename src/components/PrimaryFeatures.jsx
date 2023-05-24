import { useId } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import { Container } from '@/components/Container'
import { BriefcaseIcon, CheckBadgeIcon, TruckIcon, UserGroupIcon } from '@heroicons/react/24/solid'
// import screenshotContacts from '@/images/screenshots/contacts.png'
// import screenshotInventory from '@/images/screenshots/inventory.png'
// import screenshotProfitLoss from '@/images/screenshots/profit-loss.png'

const features = [
  {
    name: 'CERTIFICACIONES ISO Y RUC',
    summary: 'CERTIFICACIONES ISO Y RUC',
    icon: CheckBadgeIcon,
    description: ''
  },
  {
    name: 'SISTEMA DE GESTIÓN DE SEGURIDAD Y SALUD EN EL TRABAJO',
    summary: 'SISTEMA DE GESTIÓN DE SEGURIDAD Y SALUD EN EL TRABAJO.',
    description:
      '',
    subList:
      [
        {
          title: 'Valoraciones',
          list: [
            'Nutrición',
            'Optometría',
            'Donación Sangre',
          ],
        },
        {
          title: 'Bienestar',
          list: [
            'Cuidado Facial y Corporal',
            'Belleza y Estética',
            'Juegos',
            'Taller consumo sustancias psicoactivas',
          ]
        }
      ],
    icon: BriefcaseIcon,
  },
  {
    name: 'PLAN ESTRATEGICO DE SEGURIDAD VIAL',
    summary:
      'PLAN ESTRATEGICO DE SEGURIDAD VIAL.',
    description:
      '',
    list: [
      'Implementación del Plan Estratégico de Seguridad Vial, conforme a los requisitos de la Resolución 20223040040595 de 2022.',
      'Definición de la Política de Seguridad vial y demás políticas de regulación.',
      'Conformación del Comité de Seguridad vial.',
      'Elaboración de los documentos y formatos soporte del PESV.',
      'Definición del Plan de capacitación y plan de trabajo a desarrollar.',
      'Acompañamiento en la implementación del PESV.',
      'Auditorías al PESV verificando el cumplimiento de los requisitos.',
      'Medición de indicadores de gestión aplicables.'
    ],
    icon: TruckIcon,
  },
  {
    name: 'GESTIÓN HUMANA.',
    summary:
      'GESTIÓN HUMANA.',
    list: [
      'Programa de capacitación.',
      'Programa de bienestar.',
      'Apoyo en la elaboración de los manuales de funciones',
      'Estrategias para evitar la rotación del personal.',
      'Orientación a Trabajo en casa.',
      'Diseño y asesoría para elaborar el Reglamento Interno de Trabajo y el Reglamento de Higiene y Seguridad Industrial.',
      'Medición de clima y productividad laboral.',
      'Apoyo en la selección de personal, permitiendo fidelización de los equipos de trabajo'
    ],
    // image: screenshotContacts,
    icon: UserGroupIcon,
  },
]

function Feature({ feature, isActive, className, ...props }) {
  return (
    <div
      className={clsx(className, 'flex flex-col items-center text-center')}
      {...props}
    >
      <div
        className={clsx(
          'w-12 rounded-lg',
          isActive ? 'bg-sky-400' : 'bg-slate-100'
        )}
      >
        <svg aria-hidden="true" className={clsx(isActive ? 'text-white' : 'text-slate-700', 'h-12 w-12 p-2')} fill="none">
          <feature.icon />
        </svg>
      </div>
      <h3
        className={clsx(
          'mt-2 font-display text-base text-slate-900 text-center',
          isActive ? 'text-sky-400' : 'text-slate-600'
        )}
      >
        {feature.name}
      </h3>
    </div>
  )
}


function FeaturesDesktop() {
  return (
    <Tab.Group as="div" className="hidden lg:mt-20 lg:block">
      {({ selectedIndex }) => (
        <>
          <Tab.List className="grid grid-cols-4 gap-x-8">
            {features.map((feature, featureIndex) => (
              <Feature
                key={feature.name}
                feature={{
                  ...feature,
                  name: (
                    <Tab className="[&:not(:focus-visible)]:focus:outline-none text-center">
                      <span className="absolute inset-0" />
                      {feature.name}
                    </Tab>
                  ),
                }}
                isActive={featureIndex === selectedIndex}
                className="relative"
              />
            ))}
          </Tab.List>
          <Tab.Panels className="relative mt-6 overflow-hidden rounded-4xl bg-slate-200 p-6">
            <div className="-mx-5 flex">
              {/*certificaciones*/}
              <Tab.Panel
                static
                className={clsx(
                  'px-5 transition duration-500 ease-in-out [&:not(:focus-visible)]:focus:outline-none',
                  0 !== selectedIndex && 'opacity-60'
                )}
                style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
                aria-hidden={0 !== selectedIndex}
              >
                <div className="w-[73rem] max-h-[60vh] overflow-y-auto rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                  <div className='prose prose-lg prose-indigo p-4 text-gray-500'>
                    <h3>CERTIFICACIONES ISO Y RUC </h3>
                    <h4>ISO 14001 - 2015</h4>
                    <div>
                      <ul role="list" className='ml-4'>
                        <li>
                          Diseño e Implementación de Sistema de Gestión de Calidad, conforme a los requisitos de la norma ISO 14001:2015.
                        </li>
                        <li>
                          Organización de procesos, estructura del sistema de gestión
                        </li>
                        <li>
                          Definición y medición de indicadores
                        </li>
                        <li>
                          Capacitación al personal
                        </li>
                        <li>
                          Reducción de impactos ambientales
                        </li>
                      </ul>
                    </div>
                    <h5>Beneficios</h5>
                    <div>
                      <ul role="list" className='ml-4'>
                        <li>
                          Reduce la posibilidad de que se la organización reciba sanciones por incumplimiento legal.
                        </li>
                        <li>
                          Alcanzar un compromiso por parte de la dirección y del resto de empleados con el medio ambiente.
                        </li>
                        <li>
                          Mejorar la imagen pública de la empresa.
                        </li>
                        <li>
                          Proporciona una ventaja competitiva a la organización.
                        </li>
                      </ul>
                    </div>

                    <h4>ISO 9001 - 2015</h4>
                    <div>
                      <ul role="list" className='ml-4'>
                        <li>
                          Diseño e Implementación de Sistema de Gestión de Calidad, conforme a los requisitos de la norma ISO 9001:2015.
                        </li>
                        <li>
                          Direccionamiento estratégico, organigrama, mapa de procesos, misión, visión, política, objetivos y valores corporativos.
                        </li>
                        <li>
                          Organización de procesos, estructura del sistema de gestión.
                        </li>
                        <li>
                          Capacitación al personal.
                        </li>
                        <li>
                          Definición y medición de indicadores.
                        </li>
                      </ul>
                    </div>
                    <h5>Beneficios</h5>
                    <div>
                      <ul role="list" className='ml-4'>
                        <li>
                          Participación y mejor calificación en licitaciones con el estado.
                        </li>
                        <li>
                          Optimización de tiempo y disminución de costos.
                        </li>
                        <li>
                          Proporcionamos herramientas que permiten la definición clara de funciones, metas para el desarrollo de las actividades diarias y programación de formación empresarial.
                        </li>
                        <li>
                          Oportunidad de realizar convenios con entidades estatales y universidades.
                        </li>
                        <li>
                          Analizamos su organización, diseñamos y documentamos elementos claves para la gestión, descripción de cargos (objetivo cargo, manual de funciones, perfil, competencias).
                        </li>
                      </ul>
                    </div>

                    <h4>ISO 45001 - 2018</h4>
                    <div>
                      <ul role="list" className='ml-4'>
                        <li>
                          Diseño e Implementación de Sistema de Gestión de Seguridad y Salud en el trabajo, conforme a los requisitos de la norma ISO 45001:2018.
                        </li>
                        <li>
                          Identificación de peligros y valoración de riesgos.
                        </li>
                        <li>
                          Planes de emergencias.
                        </li>
                        <li>
                          Conformación de los comités de seguridad y salud en el trabajo.
                        </li>
                        <li>
                          Definición y medición de indicadores.
                        </li>
                        <li>
                          Capacitación al personal.
                        </li>
                      </ul>
                    </div>
                    <h5>Beneficios</h5>
                    <div>
                      <ul role="list" className='ml-4'>
                        <li>
                          Participación y mejor calificación en licitaciones con el estado.
                        </li>
                        <li>
                          Minimizar índices de accidentalidad y enfermedades laborales.
                        </li>
                        <li>
                          Oportunidad de realizar convenios con entidades estatales y universidades.
                        </li>
                        <li>
                          Analizamos su organización, diseñamos y documentamos elementos claves para la gestión de los peligros identificados.
                        </li>
                        <li>
                          Garantizar un entorno de trabajo seguro para los empleados.
                        </li>
                        <li>
                          Mayor comunicación y participación de los trabajadores.
                        </li>
                      </ul>
                    </div>

                    <h4>ISO 39001 - 2012</h4>
                    <div>
                      <ul role="list" className='ml-4'>
                        <li>
                          Diseño e Implementación de Sistema de Gestión de Seguridad y Salud en el trabajo, conforme a los requisitos de la norma ISO 39001:2012.                        </li>
                        <li>
                          Identificación de peligros y valoración de riesgos viales
                        </li>
                        <li>
                          Programas para la prevención de accidentes viales
                        </li>
                      </ul>
                    </div>
                    <h5>Beneficios</h5>
                    <div>
                      <ul role="list" className='ml-4'>
                        <li>
                          Participación y mejor calificación en licitaciones con el estado.
                        </li>
                        <li>
                          Reducción de costes de reparación de los vehículos.
                        </li>
                        <li>
                          Reducir los índices de accidentes viales.
                        </li>
                        <li>
                          Minimizar el índice de ausentismo por causa medica.
                        </li>
                      </ul>
                    </div>

                    <h4>RUC - Registro único de contratistas.</h4>
                    <div>
                      <ul role="list" className='ml-4'>
                        <li>
                          Diseño e Implementación del RUC registro único de contratistas.
                        </li>
                      </ul>
                    </div>
                    <h5>Beneficios</h5>
                    <div>
                      <ul role="list" className='ml-4'>
                        <li>
                          Participación y mejor calificación en licitaciones con el estado.
                        </li>
                        <li>
                          Aumentar sus capacidades técnicas y legales en materia de seguridad, salud en el trabajo y protección ambiental y hacer visible su organización.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel
                static
                className={clsx(
                  'px-5 transition duration-500 ease-in-out [&:not(:focus-visible)]:focus:outline-none',
                  1 !== selectedIndex && 'opacity-60'
                )}
                style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
                aria-hidden={1 !== selectedIndex}
              >
                <div className="w-[73rem] max-h-[60vh] overflow-y-auto rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                  <div className='p-4'>
                    <dt className="text-base font-semibold leading-7 text-gray-900">SISTEMA DE GESTIÓN DE SEGURIDAD Y SALUD EN EL TRABAJO</dt>
                    <div className="prose prose-lg prose-indigo mt-6 text-gray-500">
                      <h4>SG-SST</h4>
                      <div>
                        <ul role="list" className='ml-4'>
                          <li>
                            Diagnóstico inicial del SG-SST, verificando el cumplimiento de cada uno de los requisitos definidos en el Decreto 1072 de 2015 y resolución 0312 del 2019.                        </li>
                          <li>
                            Diseño del sistema: Realizamos el sistema de gestión según su actividad económica y número de empleados.
                          </li>
                          <li>
                            Desarrollamos actividades de promoción y prevención.
                          </li>
                          <li>
                            Aplicación de Batería Riesgo psicosocial.
                          </li>
                        </ul>
                        <h4>Actividades de medicina preventiva y semana de la salud.</h4>
                        <div>
                          <ul role="list" className='ml-4'>
                            <h5>Valoraciones</h5>
                            <li>
                              Nutrición.
                            </li>
                            <li>
                              Optometría.
                            </li>
                            <li>
                              Donación Sangre.
                            </li>
                            <h5>Bienestar</h5>
                            <li>
                              Cuidado Facial y Corporal.
                            </li>
                            <li>
                              Belleza y Estética.
                            </li>
                            <li>
                              Juegos.
                            </li>
                            <li>
                              Taller consumo sustancias psicoactivas.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel
                static
                className={clsx(
                  'px-5 transition duration-500 ease-in-out [&:not(:focus-visible)]:focus:outline-none',
                  2 !== selectedIndex && 'opacity-60'
                )}
                style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
                aria-hidden={2 !== selectedIndex}
              >
                <div className="w-[73rem] max-h-[60vh] overflow-y-auto rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                  <div className='p-4'>
                    <dt className="text-base font-semibold leading-7 text-gray-900">PLAN ESTRATEGICO DE SEGURIDAD VIAL.</dt>
                    <div className="prose prose-lg prose-indigo mt-6 text-gray-500">
                      <div>
                        <ul role="list" className='ml-4'>
                          <li>
                            Implementación del Plan Estratégico de Seguridad Vial, conforme a los requisitos de la Resolución 20223040040595 de 2022.
                          </li>
                          <li>
                            Definición de la Política de Seguridad vial y demás políticas de regulación.
                          </li>
                          <li>
                            Conformación del Comité de Seguridad vial.
                          </li>
                          <li>
                            Elaboración de los documentos y formatos soporte del PESV.
                          </li>
                          <li>
                            Definición del Plan de capacitación y plan de trabajo a desarrollar.
                          </li>
                          <li>
                            Acompañamiento en la implementación del PESV.
                          </li>
                          <li>
                            Auditorías al PESV verificando el cumplimiento de los requisitos.
                          </li>
                          <li>
                            Medición de indicadores de gestión aplicables.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel
                static
                className={clsx(
                  'px-5 transition duration-500 ease-in-out [&:not(:focus-visible)]:focus:outline-none',
                  3 !== selectedIndex && 'opacity-60'
                )}
                style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
                aria-hidden={3 !== selectedIndex}
              >
                <div className="w-[73rem] max-h-[60vh] overflow-y-auto rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                  <div className='p-4'>
                    <dt className="text-base font-semibold leading-7 text-gray-900">GESTIÓN HUMANA.</dt>
                    <div className="prose prose-lg prose-indigo mt-6 text-gray-500">
                      <div>
                        <ul role="list" className='ml-4'>
                          <li>
                            Programa de capacitación.
                          </li>
                          <li>
                            Programa de bienestar.
                          </li>
                          <li>
                            Apoyo en la elaboración de los manuales de funciones.
                          </li>
                          <li>
                            Estrategias para evitar la rotación del personal.
                          </li>
                          <li>
                            Orientación a Trabajo en casa.
                          </li>
                          <li>
                            Diseño y asesoría para elaborar el Reglamento Interno de Trabajo y el Reglamento de Higiene y Seguridad Industrial.
                          </li>
                          <li>
                            Medición de clima y productividad laboral.
                          </li>
                          <li>
                            Apoyo en la selección de personal, permitiendo fidelización de los equipos de trabajo.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Panel>

            </div>
            <div className="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-inset ring-slate-900/10" />
          </Tab.Panels>
        </>
      )}
    </Tab.Group>
  )
}

export function PrimaryFeatures() {
  return (
    <section
      id="primary-features"
      aria-label="Features for simplifying everyday business tasks"
      className="pt-44 sm:pb-20 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Servicios
          </h2>
          {/* <p className="mt-4 text-lg tracking-tight text-slate-700">
            Because you’d probably be a little confused if we suggested you
            complicate your everyday business tasks instead.
          </p> */}
        </div>
        <FeaturesDesktop />
      </Container>
    </section>
  )
}
