'use client'
import { useEffect, useState } from 'react'
import NavbarLogout from '../components/navbar/navbar-logout'
import SignUpStyle from './signUp.module.css'
import { UserCircleIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import axios from 'axios'

const SignUp = () => {

    const [paises, setPaises] = useState([])

    useEffect(()=>{
        const fetchPaises = async() =>{
            const res = await axios.get('https://restcountries.com/v3.1/all')
            const sortedData = res.data.sort((a:any, b:any) => {
                if (a.name.common < b.name.common) return -1;
                if (a.name.common > b.name.common) return 1;
                return 0;
            })
            setPaises(sortedData)
        }

        fetchPaises()
    }, [])

    console.log(paises)

    return <>
        <NavbarLogout text='Registro' />
        <main className={SignUpStyle.flexContainer}>
            <form className='bg-white p-12 w-full'>
                <div className="w-full lg:w-1/2 backdrop-blur-sm flex flex-col m-auto">
                    <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Perfil</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                    Esta información se mostrará públicamente, así que ten cuidado con lo que compartes.
                    </p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                            Nombre de usuario
                        </label>
                        <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600 sm:max-w-md">
                            <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">workcation.com/</span>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                autoComplete="username"
                                className="block flex-1 pl-2 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                placeholder="janesmith"
                            />
                            </div>
                        </div>
                        </div>

                        <div className="col-span-full">
                        <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                            Acerca de
                        </label>
                        <div className="mt-2">
                            <textarea
                            id="about"
                            name="about"
                            rows={3}
                            className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            defaultValue={''}
                            placeholder='Este campo es opcional'
                            />
                        </div>
                        <p className="mt-3 text-sm leading-6 text-gray-600">Escribe algunas oraciones sobre ti.</p>
                        </div>

                        <div className="col-span-full">
                        <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                            Foto
                        </label>
                        <div className="mt-2 flex items-center gap-x-3">
                            <UserCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true" />
                            <button
                            type="button"
                            className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                            >
                            Cambiar
                            </button>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Informacion personal</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">Use una dirección permanente donde pueda recibir correo.</p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                            Primer nombre
                        </label>
                        <div className="mt-2">
                            <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                        </div>

                        <div className="sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                            Apellido
                        </label>
                        <div className="mt-2">
                            <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            autoComplete="family-name"
                            className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                        </div>

                        <div className="sm:col-span-4">
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Direccion de correo
                        </label>
                        <div className="mt-2">
                            <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                        </div>


                        <div className="sm:col-span-4">
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Contraseña
                        </label>
                        <div className="mt-2">
                            <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="password"
                            className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                        </div>


                        <div className="sm:col-span-4">
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Confirmar contraseña
                        </label>
                        <div className="mt-2">
                            <input
                            id="confirm-password"
                            name="confirm-password"
                            type="password"
                            autoComplete="confirm-password"
                            className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                        </div>

                        <div className="sm:col-span-3">
                        <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                            Pais
                        </label>
                        <div className="mt-2">
                            <select
                            id="country"
                            name="country"
                            autoComplete="country-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            >
                            {
                                paises.map((pais:any)=>(
                                    <option key={pais.name} value=""><Image alt='pais' src={pais.flags.svg} width={20} height={20} /> {pais.name.common}</option>
                                ))
                            }
                            </select>   
                        </div>
                        </div>

                        <div className="col-span-full">
                        <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                            Dirección de la calle
                        </label>
                        <div className="mt-2">
                            <input
                            type="text"
                            name="street-address"
                            id="street-address"
                            autoComplete="street-address"
                            className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                        </div>

                        <div className="sm:col-span-2 sm:col-start-1">
                        <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                            Ciudad
                        </label>
                        <div className="mt-2">
                            <input
                            type="text"
                            name="city"
                            id="city"
                            autoComplete="address-level2"
                            className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                        </div>

                        <div className="sm:col-span-2">
                        <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                            Estado / Provincia
                        </label>
                        <div className="mt-2">
                            <input
                            type="text"
                            name="region"
                            id="region"
                            autoComplete="address-level1"
                            className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                        </div>

                        <div className="sm:col-span-2">
                        <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                            ZIP / Codigo postal
                        </label>
                        <div className="mt-2">
                            <input
                            type="text"
                            name="postal-code"
                            id="postal-code"
                            autoComplete="postal-code"
                            className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Notificaciones</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                        Bueno, siempre te avisan de los cambios importantes, pero tú eliges qué más quieres escuchar.
                    </p>

                    <div className="mt-10 space-y-10">
                        <fieldset>
                        <legend className="text-sm font-semibold leading-6 text-gray-900">Por correo electronico</legend>
                        <div className="mt-6 space-y-6">
                            <div className="relative flex gap-x-3">
                            <div className="flex h-6 items-center">
                                <input
                                id="comments"
                                name="comments"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                                />
                            </div>
                            <div className="text-sm leading-6">
                                <label htmlFor="comments" className="font-medium text-gray-900">
                                    Comentarios
                                </label>
                                <p className="text-gray-500">Recibe una notificación cuando alguien publique un comentario en una publicación.</p>
                            </div>
                            </div>
                            <div className="relative flex gap-x-3">
                            <div className="flex h-6 items-center">
                                <input
                                id="offers"
                                name="offers"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                                />
                            </div>
                            <div className="text-sm leading-6">
                                <label htmlFor="offers" className="font-medium text-gray-900">
                                    Ofertas
                                </label>
                                <p className="text-gray-500">Recibe una notificación cuando un candidato acepte o rechace una oferta.</p>
                            </div>
                            </div>
                        </div>
                        </fieldset>
                        <fieldset>
                        <legend className="text-sm font-semibold leading-6 text-gray-900">Notificaciones Push</legend>
                        <p className="mt-1 text-sm leading-6 text-gray-600">Estos se envían a través de SMS a su teléfono móvil.</p>
                        <div className="mt-6 space-y-6">
                            <div className="flex items-center gap-x-3">
                            <input
                                id="push-everything"
                                name="push-notifications"
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600"
                            />
                            <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">
                                Todo
                            </label>
                            </div>
                            <div className="flex items-center gap-x-3">
                            <input
                                id="push-email"
                                name="push-notifications"
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600"
                            />
                            <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">
                                Igual que el correo electronico
                            </label>
                            </div>
                            <div className="flex items-center gap-x-3">
                            <input
                                id="push-nothing"
                                name="push-notifications"
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600"
                            />
                            <label htmlFor="push-nothing" className="block text-sm font-medium leading-6 text-gray-900">
                                Nada de notificaciones push
                            </label>
                            </div>
                        </div>
                        </fieldset>
                    </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                    Cancel
                    </button>
                    <button
                    type="submit"
                    className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >
                    Save
                    </button>
                </div>
            </form>
        </main>
    </>
}

export default SignUp