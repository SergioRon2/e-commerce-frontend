'use client'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Image from 'next/image'

export default function Products(){

    const [photos, setPhotos] = useState([])

    useEffect(()=>{
        const fetchPhotos = async() =>{
            const res = await axios.get('https://jsonplaceholder.typicode.com/photos')
            setPhotos(res.data)
            console.log(res)
        }
        fetchPhotos()
    }, [])

    return (
        <main className='relative flex flex-wrap w-full justify-center items-center gap-8 my-8'>
            {
                photos.slice(0, 100).map((photo:any)=>(
                    <div key={photo.id}>
                        <div className="relative flex w-64 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                            <div className="relative mx-4 mt-4 h-60 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                            <Image
                                width={256}
                                height={256}
                                alt={photo.thumbnailUrl}
                                src={photo.url}
                                className="h-full w-full object-cover"
                            />
                            </div>
                            <div className="p-6">
                            <div className="mb-2 flex items-center justify-between">
                                <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, sequi?
                                </p>
                                <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                                $99.99
                                </p>
                            </div>
                            <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                                With plenty of talk and listen time, voice-activated Siri access, and an
                                available wireless charging case.
                            </p>
                            </div>
                            <div className="p-6 pt-0">
                            <button
                                className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                            >
                                Add to Cart
                            </button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </main>
    )
}