'use client'
import React, { useEffect, useState } from 'react'
import { Product } from '../../../types/prodcuts'
import { client } from '@/sanity/lib/client'
import { fourProducts } from '@/sanity/lib/querie'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'






const Chair = () => {

    const [product, setProduct] = useState<Product[]>([])

    useEffect(()=>{
        async function fetchProduct(){
            const fetchedProduct: Product[] = await client.fetch(fourProducts)
            setProduct(fetchedProduct)
        }
        fetchProduct()
    },[])

  return (

    <div>
        {product.map((product)=>(
            <div key={product._id}>
                {product.title}

                {product.productImage && (
                    <Image 
                    src={urlFor(product.productImage).url()}
                    alt='image'
                    width={250}
                    height={250}
                    />
                    
                )}
            </div>
        ))}
    </div>
  )
}





export default Chair