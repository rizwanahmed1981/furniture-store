import React from 'react'
import Hero from './_components/hero'
import CompanyList from './_components/company_list'
import Featured from './_components/featured'
import TopCategories from './_components/top_categories'
import Product from './_components/product'
import OurProducts from './_components/our_prod'

const Page = () => {
  return (
    <div>
      <Hero/>
      <CompanyList/>
      <Featured/>
      <TopCategories/>
      <Product/>
      <OurProducts/>
    </div>
  )
}

export default Page