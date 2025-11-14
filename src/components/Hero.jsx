import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import ParallaxLayers from './ParallaxLayers'
import NeuralParticles from './NeuralParticles'

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full bg-[#0A0A0C] text-[#E4EAF3]">
      <ParallaxLayers>
        <NeuralParticles />
        <div className="absolute inset-0" aria-hidden>
          <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        {/* Overlay gradients that don't block pointer events */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(circle at 60% 20%, rgba(41,240,232,0.12), rgba(0,0,0,0))'
          }} />
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6 md:px-10">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight" style={{ fontFamily: 'Space Grotesk, Inter, system-ui' }}>
              AIOps-360 — The Brain of Your Business
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.2 }}
              className="mt-4 max-w-2xl text-sm md:text-base text-[#E4EAF3]/80">
              An autonomous operations platform that predicts, self-heals and orchestrates your entire stack.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.35 }}
              className="mt-8 flex items-center gap-3">
              <a href="#get-started" className="inline-flex items-center px-5 py-3 rounded-md text-[#0A0A0C] font-semibold bg-[#FF1E99] hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#FF1E99] shadow-[0_0_30px_rgba(255,30,153,0.4)] transition">
                Get Started
              </a>
              <a href="#explore" className="inline-flex items-center px-5 py-3 rounded-md text-[#E4EAF3] font-semibold border border-white/10 hover:border-white/30 bg-white/5 backdrop-blur-sm transition">
                Explore Platform
              </a>
            </motion.div>
          </div>
        </div>
      </ParallaxLayers>
    </section>
  )
}
