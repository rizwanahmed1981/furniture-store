
import { client } from "@/sanity/lib/client";
import { Product } from "../../../../types/prodcuts";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Products5 from "@/app/_components/five_products";



interface ProductPageProps {
    params: Promise<{ slug: string }>
}

async function getProduct(slug: string): Promise<Product> {
    return client.fetch(
        groq`*[_type == "product"  && slug.current == $slug][0]{
        _id,
        title,
        _type,
        productImage,
        price,
        description,
        }`, { slug }
    )
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { slug } = await params;
    const product = await getProduct(slug);

    // five products fetch for featured products section

    return (
        <div className="p-12 m-8 flex flex-col gap-8">
            <div className="capitalize grid grid-cols-1 md:grid-cols-2 gap-2 my-8">
                <div>
                    {product.productImage && (
                        <Image
                            src={urlFor(product.productImage).url()}
                            alt='{product.title}'
                            width={250}

                            height={250} className='w-[550px] h-[550px] object-cover rounded-lg' />)}
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                        {product.title}
                    </h1>
                    <div className="bg-myButton text-white rounded-xl w-fit px-2">
                        price: $ {product.price}
                    </div>
                    <div className="h-[2px] w-auto bg-black my-6 opacity-50">
                    </div>
                    <div>
                        <p className="text-myBlack opacity-60 text-wrap font-normal text-sm text-justify">{product.description}</p>
                    </div>
                    <Button className="bg-myButton px-3 w-fit"><ShoppingCart /> add to cart</Button>
                </div>


            </div>
            <div>
                <div className="uppercase flex items-center justify-between" >
                    <h2 className="text-lg font-bold text-myBlack">featured products</h2>
                    <h4 className="text-base font-semibold text-myBlack underline">view all</h4>
                </div>

                <Products5 />
            </div>
        </div>
    )

}