import React from 'react'
import Hero from './_components/hero'
import CompanyList from './_components/company_list'
import Featured from './_components/featured'

const Page = () => {
  return (
    <div>
      <Hero/>
      <CompanyList/>
      <Featured/>
    </div>
  )
}

export default Page