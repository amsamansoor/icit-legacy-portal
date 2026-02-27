import React from 'react'
import Hero from '../components/HomePage/Hero'
import UpdatesGrid from '../components/HomePage/UpdatesGrid'
import Features from '../components/HomePage/Features'
import LatestCarousel from '../components/HomePage/LatestCarousel'
import PortalHighlights from '../components/HomePage/PortalHighlights'
import Testimonials from '../components/HomePage/Testimonials'

const Home: React.FC = () => {
  return (
    <div className="space-y-14">
      <Hero />

      <section className="pt-2">
        <h2 className="text-2xl font-semibold mb-4">Portal Overview</h2>
        <PortalHighlights />
      </section>

      <section id="latest-updates">
        <LatestCarousel />
      </section>

      <section id="projects" className="pt-2">
        <h2 className="text-2xl font-semibold mb-4">Projects & Featured FYPs</h2>
        <UpdatesGrid />
      </section>

      <section id="features">
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <Features />
      </section>

      <section id="testimonials">
        <h2 className="text-2xl font-semibold mb-4">Testimonials</h2>
        <Testimonials />
      </section>
    </div>
  )
}

export default Home
