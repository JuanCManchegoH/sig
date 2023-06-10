export default function Health() {
    return (<>
        <div className="lg:w-[73rem] lg:max-h-[60vh] w-auto max-h-[70vh] overflow-y-auto rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
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
    </>);
}