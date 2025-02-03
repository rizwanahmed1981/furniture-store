'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { ShoppingCart } from 'lucide-react'

import { client } from "@/sanity/lib/client";
import Link from 'next/link';
import { fiveProducts } from "@/sanity/lib/querie";
import { Product } from '../../../types/prodcuts';
import { urlFor } from '@/sanity/lib/image'




export default function Products5() {
    const [product, setProduct] = useState<Product[]>([])

    useEffect(() => {
        async function fetchProduct() {
            const fetchedProduct: Product[] = await client.fetch(fiveProducts)
            setProduct(fetchedProduct)
        }
        fetchProduct()
    }, [])


    return (
        <div>
            <div className='py-8'>
                {/* products section */}
                <div className='grid grid-cols-1 md:grid-cols-5 capitalize gap-6 p-6 font-semibold text-myBlack' >
                    {product.map((product) => (
                        <ul key={product._id}>
                            <Link href={`/product/${product.slug.current}`}>
                                <li className='flex flex-col gap-6 items-center md:items-start'>
                                    {product.productImage && (
                                        <Image
                                            src={urlFor(product.productImage).url()}
                                            alt='image'
                                            width={250}
                                            height={250} className='w-[300px] h-[300px] object-cover' />)}
                                </li>
                                <li className='flex items-center justify-between p-4'>
                                    <div className=' text-myBlack opacity-70 flex flex-col gap-3'>
                                        <h2>{product.title}</h2>

                                        <p>Price: <span className='text-myButton'> ${product.price}</span></p>
                                    </div>
                                    <ShoppingCart className='bg-myBgGrey w-auto' />

                                </li>
                            </Link>
                        </ul>
                    ))}
                </div>
            </div>
        </div>
    )
}

