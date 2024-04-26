

export default function NotFound(){
    return (
        <main className="grid min-h-screen place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center select-none animate-fade-up">
                <p className="text-2xl font-semibold text-indigo-800">404</p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-blue-900 sm:text-5xl">Pagina no encontrada</h1>
                <p className="mt-6 text-base leading-7 text-black-600">Lo siento, esta ruta es equivocada.</p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a href={'/'} className="rounded-md bg-gradient-to-r from-blue-900 to-blue-950 px-3.5 py-2.5 text-sm font-semibold text-white transition duration-200 ease-in-out shadow-sm hover:bg-gradient-to-r from-blue-600 to-blue-650 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Regresar a la pagina principal  &rarr;</a>
                    {/* <a href="#" className="text-sm font-semibold text-gray-900">Contact support <span aria-hidden="true"></span></a> */}
                </div>
            </div>
        </main>
    )
}