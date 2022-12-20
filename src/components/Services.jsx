function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const posts = [
  //SEGURIDAD Y SALUD
  {
    title: 'Diagnóstico del SG-SST',
    category: { name: 'Seguridad y Salud', color: 'bg-sky-100 text-sky-800' },
    description:
      'Diagnóstico inicial del SG-SST, verificando el cumplimiento de cada uno de los requisitos definidos en el Decreto 1072 de 2015 y resolución 0312 del 2019.',
    start: 'col-start-1 row-start-1',  
    list: false
  },
  {
    title: 'Diseño del sistema',
    category: { name: 'Seguridad y Salud', color: 'bg-sky-100 text-sky-800' },
    description:
      'Realizamos el sistema de gestión según su actividad económica y número de empleados.',
    start: 'col-start-1 row-start-2',  
    list: false
  },
  {
    title: 'Representación',
    category: { name: 'Seguridad y Salud', color: 'bg-sky-100 text-sky-800' },
    description:
      'Representamos a su empresa ante las ARL, ante sus clientes y entes de control.',
    start: 'col-start-1 row-start-3',  
    list: false
  },
  {
    title: 'Desarrollo',
    category: { name: 'Seguridad y Salud', color: 'bg-sky-100 text-sky-800' },
    description:
      'Desarrollamos actividades de promoción y prevención.',
    start: 'col-start-1 row-start-4',  
    list: false
  },
  {
    title: 'Aplicación',
    category: { name: 'Seguridad y Salud', color: 'bg-sky-100 text-sky-800' },
    description:
      'Aplicación de Batería Riesgo psicosocial.',
    start: 'col-start-1 row-start-5',  
    list: false
  },
  //CALIDAD
  {
    title: 'Gestión de Calidad',
    category: { name: 'Calidad', color: 'bg-rose-100 text-rose-800' },
    description:
      'Diseño e Implementación de Sistema de Gestión de Calidad, conforme a los requisitos de la norma ISO 9001:2015.',
    start: 'col-start-2 row-start-1',  
    list: false
  },
  {
    title: 'Direccionamiento',
    category: { name: 'Calidad', color: 'bg-rose-100 text-rose-800' },
    description:
      'Direccionamiento estratégico, organigrama, mapa de procesos, misión, visión, política, objetivos y valores corporativos.',
    start: 'col-start-2 row-start-2',  
    list: false
  },
  {
    title: 'Organización',
    category: { name: 'Calidad', color: 'bg-rose-100 text-rose-800' },
    description:
      'Organización de procesos, estructura del sistema de gestión.',
    start: 'col-start-2 row-start-3',  
    list: false
  },
  {
    title: 'Indicadores',
    category: { name: 'Calidad', color: 'bg-rose-100 text-rose-800' },
    description:
      'Definición y medición de indicadores.',
    start: 'col-start-2 row-start-4',  
    list: false
  },
  {
    title: 'Beneficios',
    category: { name: 'Calidad', color: 'bg-rose-100 text-rose-800' },
    description:
      '1) Participación y mejor calificación en licitaciones con el estado.',
    start: 'col-start-2 row-start-5',  
    list: false
  },
  // SEGURIDAD VIAL
  {
    title: 'Capacitaciones',
    category: { name: 'Seguridad Vial', color: 'bg-indigo-100 text-indigo-800' },
    description: 'Programa de capacitación, bienestar y trabajo en casa.',
    start: 'col-start-3 row-start-1',  
    list: false
  },
  {
    title: 'Manuales',
    category: { name: 'Seguridad Vial', color: 'bg-indigo-100 text-indigo-800' },
    description: 'Apoyo en la elaboración de los manuales de funciones.',
    start: 'col-start-3 row-start-2',  
    list: false
  },
  {
    title: 'Estrategias',
    category: { name: 'Seguridad Vial', color: 'bg-indigo-100 text-indigo-800' },
    description: 'Estrategias para evitar la rotación del personal.',
    start: 'col-start-3 row-start-3',  
    list: false
  },
  {
    title: 'Diseño y asesoría',
    category: { name: 'Seguridad Vial', color: 'bg-indigo-100 text-indigo-800' },
    description: 'Diseño y asesoría para elaborar el Reglamento Interno de Trabajo y el Reglamento de Higiene y Seguridad Industrial.',
    start: 'col-start-3 row-start-4',  
    list: false
  },
  {
    title: 'Medición',
    category: { name: 'Seguridad Vial', color: 'bg-indigo-100 text-indigo-800' },
    description: 'Medición de clima y productividad laboral. Apoyo en la selección de personal, permitiendo fidelización de los equipos de trabajo',
    start: 'col-start-3 row-start-5',  
    list: false
  },
  //GESTIÓN HUMANA
  {
    title: 'Plan Estratégico de Seguridad Vial',
    category: { name: 'Gestión Humana', color: 'bg-green-100 text-green-800' },
    description: 'Implementación del Plan Estratégico de Seguridad Vial, conforme a los requisitos de la Resolución 20223040040595 de 2022.',
    start: 'col-start-4 row-start-1',  
    list: false
  },
  {
    title: 'PESV',
    category: { name: 'Gestión Humana', color: 'bg-green-100 text-green-800' },
    description: 'Elaboración de los documentos y formatos soporte del PESV. Acompañamiento en la implementación del PESV. Auditorías al PESV verificando el cumplimiento de los requisitos.',
    start: 'col-start-4 row-start-2',  
    list: false
  },
  {
    title: 'Política de Seguridad vial',
    category: { name: 'Gestión Humana', color: 'bg-green-100 text-green-800' },
    description: 'Definición de la Política de Seguridad vial y demás políticas de regulación. Conformación del Comité de Seguridad vial.',
    start: 'col-start-4 row-start-3',
    list: false
  },
  {
    title: 'Plan de capacitación',
    category: { name: 'Gestión Humana', color: 'bg-green-100 text-green-800' },
    description: 'Definición del Plan de capacitación y plan de trabajo a desarrollar.',
    start: 'col-start-4 row-start-4',  
    list: false
  },
  {
    title: 'Indicadores',
    category: { name: 'Gestión Humana', color: 'bg-green-100 text-green-800' },
    description: 'Medición de indicadores de gestión aplicables ',
    start: 'col-start-4 row-start-5',  
    list: false
  },
]

export default function Services() {
  return (
    <div className="bg-white px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="relative mx-auto max-w-lg divide-y-2 divide-gray-200 lg:max-w-7xl">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-sky-600 sm:text-4xl text-center">Nuestros Servicios</h2>
          <p className="mt-3 text-xl text-gray-900 sm:mt-4">
            Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus
            arcu.
          </p>
        </div>
        <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-4 lg:gap-x-5 lg:gap-y-12">
          {posts.map((post) => (
            <div key={post.title} className={post.start}>
              <div>
                <span
                  className={classNames(
                    post.category.color,
                    'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium'
                  )}
                >
                  {post.category.name}
                </span>
              </div>
              <p className="text-xl font-semibold text-gray-900 text-left">{post.title}</p>
              <p className="mt-3 text-base text-gray-600 text-justify">{post.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}