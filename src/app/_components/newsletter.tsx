import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Product } from '../../../types/prodcuts'
import { client } from '@/sanity/lib/client'
import { sixProducts } from '@/sanity/lib/querie'
import { urlFor } from '@/sanity/lib/image'




const NewsLetter = () => {
    const [product, setProduct] = useState<Product[]>([])

    useEffect(() => {
        async function fetchProduct() {
            const fetchedProduct: Product[] = await client.fetch(sixProducts)
            setProduct(fetchedProduct)
        }
        fetchProduct()
    }, [])

    return (
        <div className='bg-myBgGrey p-12 my-12 capitalize text-myBlack items-center flex flex-col gap-10'>
            <div>
                <h1 className="scroll-m-20 text-2xl text-center font-extrabold tracking-tight lg:text-4xl ">
                    Or subscribe to the newsletter
                </h1>
            </div>
            <div className='flex md:flex-row flex-col gap-6 items-center justify-around'>
                <input type="text" placeholder='Email Address...' className='border-b-4 text-lg rounded-lg py-3 px-6' />
                <Button className='text-myBlack bg-myButton p-4'>Submit</Button>
            </div>
            <div>
                <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl opacity-60 text-center ">
                    Follow products and discounts on Instagram
                </h1>
            </div>
            {/* product Images */}
            <div className='grid md:grid-cols-6 capitalize gap-6 p-6 font-semibold text-myBlack' >
                {product.map((product) => (
                    <ul key={product._id}>
                        <li className='flex flex-col gap-6 items-center md:items-start'>
                            {product.productImage && (
                                <Image
                                    src={urlFor(product.productImage).url()}
                                    alt='image'
                                    width={250}
                                    height={250} className='w-[200px] h-[200px] object-cover' />)}
                        </li>

                    </ul>
                ))}
            </div>

        </div>
    )
}

export default NewsLetter