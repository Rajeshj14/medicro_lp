import GrowMedicoContact from '@/component/Contact'
import AsproCTABanner from '@/component/contact-hero'
import Footer from '@/component/footer'
import Navbar from '@/component/navbar'
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar />
        <AsproCTABanner />
        <GrowMedicoContact />
        <Footer />
    </div>
  )
}

export default page
