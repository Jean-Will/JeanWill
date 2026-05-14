import React from 'react'
import ServicesSection from '../components/ServicesCarrousel'
import ContactSection from '../components/ContactSection'
import MapSection from '../components/MapSection'
import AboutSection from '../components/AboutSection'
import Hero from '../components/Hero'

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


    </div>
  )
}
