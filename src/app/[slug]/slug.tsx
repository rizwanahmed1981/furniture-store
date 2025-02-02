import { type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import {PortableText} from '@portabletext/react'
import Image from "next/image";

const PRODUCT_QUERY = `*[_type == "product" && slug.current == $slug][0]{
  title,description,price,"slug":slug.current,"image":productImage.asset->url
}`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

    const options = { next: { revalidate: 30 } };

    export default async function ProductPage({
      params,
    }: {
      params: { slug: string };
    }) {
      // Ensure slug is passed correctly
      const { slug } = params;
      if (!slug) {
        return <p className="text-red-500 text-center">Invalid product slug.</p>;
      }
    
      // Fetch product details from Sanity
      const product = await client.fetch<SanityDocument>(PRODUCT_QUERY, { slug }, options);
    
      // Handle missing product
      if (!product) {
        return <p className="text-red-500 text-center">Product not found.</p>;
      }
    
      // Generate image URL
      const productImageUrl = product.image
        ? urlFor(product.image)?.width(550).height(310).url()
        : null;
      return (
        <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
          <Link href="/blog" className="hover:underline">
            ← Back to products
          </Link>
          {productImageUrl && (
            <Image
              src={productImageUrl}
              alt={product.title}
              className="aspect-video rounded-xl"
              width="700"
              height="500"
            />
          )}
          <h1 className="text-4xl font-bold mb-8">{product.title}</h1>
    
         
    
          {/* Main Content */}
          {product.description && (
            <div className="prose">
              <PortableText value={product.description} />
            </div>
          )}
    
          <div className="prose">
            {/* <p>Published: {new Date(post.publishedAt).toLocaleDateString()}</p> */}
          </div>
        </main>
      );
    }