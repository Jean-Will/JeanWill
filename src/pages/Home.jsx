import React from 'react'
import ServicesSection from '../components/ServicesCarrousel'
import ContactSection from '../components/ContactSection'
import MapSection from '../components/MapSection'
import AboutSection from '../components/AboutSection'
import Hero from '../components/Hero'
import FooterSection from '../components/Footer'

export default function Home() {
  return (
    <div>
     


      <Hero />

      <AboutSection />  
      {/* SERVICES */}
      <ServicesSection />
      
      {/*CONTACT */}
      <ContactSection />

      {/* MAPS */}
      <MapSection/>

      {/* FOOTER */}
      <FooterSection />

    </div>
  )
}
