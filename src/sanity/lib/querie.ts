import { groq } from "next-sanity";

export const allProducts =groq`*[_type == 'product']`;
export const fourProducts = groq`*[_type == 'product'][0..3]`;
export const fiveProducts = groq`*[_type == 'product'][4..8]`;
export const sixProducts = groq`*[_type == 'product'][18..24]`;

export const eightProducts = groq`*[_type == 'product'][7..14]`;