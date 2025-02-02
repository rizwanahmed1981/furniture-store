import { defineType, defineField } from "sanity"

const product = defineType({
    name: "product",
    title: "Product",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            validation: (rule) => rule.required(),
            type: "string"
        }),
        defineField({
            name: "slug",
            type: "slug",
            title: "Slug",
            options: {
              source: "title",
              maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
          }),
          defineField({
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [
              {
                type: 'block',
                styles: [
                  {title: 'Normal', value: 'normal'},
                  {title: 'H1', value: 'h1'},
                  {title: 'H2', value: 'h2'},
                  {title: 'H3', value: 'h3'},
                  {title: 'Quote', value: 'blockquote'},
                  
                ]
              },
             
            ] 
          }),
        defineField({
            name: "productImage",
            type: "image",
            validation: (rule) => rule.required(),
            title: "Product Image"
        }),
        defineField({
            name: "price",
            type: "number",
            validation: (rule) => rule.required(),
            title: "Price",
        }),
        defineField({
            name: "tags",
            type: "array",
            title: "Tags",
            of: [{ type: "string" }]
        }),
        defineField({
            name:"dicountPercentage",
            type:"number",
            title:"Discount Percentage",
        }),
        defineField({
            name:"isNew",
            type:"boolean",
            title:"New Badge",
        })
    ]
})

export default product