'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { ShoppingCart } from 'lucide-react'
import NewsLetter from '../_components/newsletter'
import { client } from "@/sanity/lib/client";
import Link from 'next/link'
import { allProducts } from '@/sanity/lib/querie';
import { Product } from '../../../types/prodcuts';
import { urlFor } from '@/sanity/lib/image'
import { addToCart } from '../actions/actions'
import { Button } from '@/components/ui/button'
import Swal from 'sweetalert2'


export default function Products() {
    const [product, setProduct] = useState<Product[]>([])

    useEffect(() => {
        async function fetchProduct() {
            const fetchedProduct: Product[] = await client.fetch(allProducts)
            setProduct(fetchedProduct)
        }
        fetchProduct()
    }, [])

    const handleAddToCart = (e: React.MouseEvent, product: Product) => {
        e.preventDefault()
        Swal.fire({
            position: "top-right",
            icon: "success",
            title: `${product.title} added to cart`,
            showConfirmButton: false,
            timer: 1500,
            
        });
        addToCart(product)
       
    }

    return (
        <div>
            <div className='py-8'>
                {/* heading */}
                <h1 className='text-myBlack font-semibold text-start text-2xl md:4xl px-8 my-6 uppercase'>
                    Our Products
                </h1>

                {/* products section */}
                <div className='grid md:grid-cols-4 capitalize gap-6 p-6 font-semibold text-myBlack' >
                    {product.map((product) => (
                        <ul key={product._id}>
                            <Link href={`/product/${product.slug.current}`}>
                                <li className='flex flex-col gap-6 items-center md:items-start'>
                                    {product.productImage && (
                                        <Image
                                            src={urlFor(product.productImage).url()}
                                            alt='image'
                                            width={250}
                                            height={250} className='w-[400px] h-[400px] object-cover' />)}
                                </li>
                                <li className='flex items-center justify-between p-4'>
                                    <div className=' text-myBlack opacity-70 flex flex-col gap-3'>
                                        <h2>{product.title}</h2>

                                        <p>Price: <span className='text-myButton'> ${product.price}</span></p>
                                    </div>
                                    <Button className='bg-myButton text-white rounded-lg hover:bg-purple-400 hover:cursor-pointer shadow-lg hover:scale-110 px-4 py-2'
                                        onClick={(e) => handleAddToCart(e, product)}
                                    >

                                        <ShoppingCart /> add to cart
                                    </Button>

                                </li>
                            </Link>
                        </ul>
                    ))}
                </div>
            </div>
            <NewsLetter />
        </div>
    )
}

