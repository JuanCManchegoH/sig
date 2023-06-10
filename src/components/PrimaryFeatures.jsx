import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import { Container } from '@/components/Container'
import { BriefcaseIcon, CheckBadgeIcon, TruckIcon, UserGroupIcon } from '@heroicons/react/24/solid'
import Iso from './TabsInformation/ISO'
import SecurityVial from './TabsInformation/SecurityVial'
import HumanManagement from './TabsInformation/HumanManagement'
import Health from './TabsInformation/Health'

const features = [
  {
    name: 'CERTIFICACIONES ISO Y RUC',
    summary: 'CERTIFICACIONES ISO Y RUC',
    icon: CheckBadgeIcon,
    description: Iso,
  },
  {
    name: 'SISTEMA DE GESTIÓN DE SEGURIDAD Y SALUD EN EL TRABAJO',
    summary: 'SISTEMA DE GESTIÓN DE SEGURIDAD Y SALUD EN EL TRABAJO.',
    icon: BriefcaseIcon,
    description: Health,
  },
  {
    name: 'PLAN ESTRATEGICO DE SEGURIDAD VIAL',
    summary: 'PLAN ESTRATEGICO DE SEGURIDAD VIAL.',
    description: SecurityVial,
    icon: TruckIcon,
  },
  {
    name: 'GESTIÓN HUMANA.',
    summary: 'GESTIÓN HUMANA.',
    icon: UserGroupIcon,
    description: HumanManagement,
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

function FeaturesMobile() {
  return (
    <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
      {features.map((feature) => (
        <div key={feature.name}>
          <Feature feature={feature} className="mx-auto max-w-2xl" isActive />
          <div className="relative mt-10 pb-10">
            <div className="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6" />
            <div className="overflow-y-auto max-h-[70vh]  relative mx-auto rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
            <feature.description/>
            </div>
          </div>
        </div>
      ))}
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
              {features.map((feature, featureIndex) => (
              <Tab.Panel
                key={featureIndex}
                static
                className={clsx(
                  'px-5 transition duration-500 ease-in-out [&:not(:focus-visible)]:focus:outline-none',
                  featureIndex !== selectedIndex && 'opacity-60'
                )}
                style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
                aria-hidden={featureIndex !== selectedIndex}
              >
              <feature.description/>
              </Tab.Panel>))}
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
        </div>
        <FeaturesMobile />
        <FeaturesDesktop />
      </Container>
    </section>
  )
}
