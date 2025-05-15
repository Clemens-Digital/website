import { AboutUs } from '../components/AboutUs'
import { Hero } from '../components/Hero'
import { Navbar } from '../components/Navbar'
import Particle from '../components/Particle'
import { Services } from '../components/Services'
import { ContactUs } from '../components/ContactUs'
import { Footer } from '../components/Footer'

export const Home = () => {
  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      {/* Navbar */}
      <div className="sticky z-100 top-0">
        <Navbar />
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 -z-0" id="hero">
        <Particle />
      </div>

      {/* Hero Section */}
      <div className="relative z-20">
        <Hero />
      </div>

      {/* About Us Section */}
      <div className="relative z-20 mt-12" id="about">
        <AboutUs />
      </div>

      <div className="relative z-20 mt-12" id="services">
        <Services />
      </div>

      {/* Contact Us Section */}
      <div className="relative z-20 mt-12" id="contact">
        <ContactUs />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}