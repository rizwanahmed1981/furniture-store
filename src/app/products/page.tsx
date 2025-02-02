'use client'
import React, { useEffect, useState } from 'react'

import Image from 'next/image'
import { ShoppingCart } from 'lucide-react'
import NewsLetter from '../_components/newsletter'
import { type SanityDocument } from "next-sanity";

import { client } from "@/sanity/lib/client";
import Link from 'next/link'
import { allProducts, fourProducts } from '@/sanity/lib/querie';
import { Product } from '../../../types/prodcuts';
import { urlFor } from '@/sanity/lib/image'


// const PRODUCTS_QUERY = `*[
//     _type == "product"
//     && defined(slug.current)
//   ]|{
//   title,"description": description[].children[].text,price,"slug":slug.current,"image":productImage.asset->url
// }`;

// const options = { next: { revalidate: 30 } };
export default  function Products() {
 const [product, setProduct] = useState<Product[]>([])

    useEffect(()=>{
        async function fetchProduct(){
            const fetchedProduct: Product[] = await client.fetch(allProducts)
            setProduct(fetchedProduct)
        }
        fetchProduct()
    },[])

    // const products = await client.fetch<SanityDocument[]>(PRODUCTS_QUERY, {}, options);

    return (
        <div>
            <div className='py-8'>
                {/* heading */}
                <h1 className='text-myBlack font-semibold text-start text-2xl md:4xl px-8 my-6 uppercase'>
                    Our Products
                </h1>

                {/* products section */}
                <div className='grid md:grid-cols-4 capitalize gap-6 p-6 font-semibold text-myBlack' >
                    {product.map((product, index: number) => (
                        <ul key={product._id}>
                            <Link href={`product.slug`}>
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
                                    <ShoppingCart className='bg-myBgGrey w-auto' />

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

