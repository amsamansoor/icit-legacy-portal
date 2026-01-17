import React from 'react'
import Hero from '../components/HomePage/Hero'
import UpdatesGrid from '../components/HomePage/UpdatesGrid'
import Features from '../components/HomePage/Features'
import LatestCarousel from '../components/HomePage/LatestCarousel'

const Home: React.FC = () => {
  return (
    <div className="space-y-12">
      <Hero />

      <section id="latest-updates">
        <LatestCarousel />
      </section>

      <section id="projects" className="pt-6">
        <h2 className="text-2xl font-semibold mb-4">Projects & Featured FYPs</h2>
        <UpdatesGrid />
      </section>

      <section id="features">
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <Features />
      </section>
    </div>
  )
}

export default Home
