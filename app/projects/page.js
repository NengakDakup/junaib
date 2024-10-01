import Footer from '@/components/Footer'
import { Header } from '@/components/Header'
import ProjectsHero from '@/components/ProjectsHero'
import PropertyListing from '@/components/PropertyLisitings'
import React from 'react'

const page = () => {
  return (
    <>
        <Header />

        <ProjectsHero />

        <PropertyListing />

        <Footer />
    </>
  )
}

export default page