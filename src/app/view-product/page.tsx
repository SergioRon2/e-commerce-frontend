'use client'
import axios from "axios"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import Image from "next/image"
import { StarIcon } from '@heroicons/react/20/solid'
import classNames from "classnames"


const ViewproductView = () => {

    const searchParams = useSearchParams()
    const id = searchParams.get('id')


    const [productView, setProductView] = useState({
        id: '',
        title: '',
        url: '',
        thumbnailUrl: ''
    })
    useEffect(()=>{
        const fetchProduct = async() =>{
            const res = await axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`)
            setProductView(res.data)
        }
        fetchProduct()
    }, [id])

    return <>
        <main className="">
            <div className="flex flex-col lg:flex-row lg:p-24 lg:gap-x-6 gap-12 p-12">
                <div className="w-full lg:w-1/2 border-r border-gray-300">
                    <Image src={productView.url} alt={productView.thumbnailUrl} width={500} height={500} />
                </div>
                <div className="w-full lg:w-1/2 flex flex-col gap-6">
                    <h1 className="text-3xl text-center font-bold-700 select-none">{productView.title}</h1>    
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed qui veritatis autem architecto aliquam nostrum, laborum necessitatibus magni inventore. Blanditiis, optio ut? Quis explicabo est vel fugit quisquam nemo! Suscipit. </p>
                </div>
            </div>
        </main>
    </>
} 

export default ViewproductView