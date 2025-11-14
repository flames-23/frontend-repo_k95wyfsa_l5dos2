import React, { useMemo } from 'react'
import { motion } from 'framer-motion'

export default function NeuralParticles({ count = 60 }) {
  const particles = useMemo(() => Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    hue: 180 + Math.floor(Math.random() * 120)
  })), [count])

  return (
    <div className="absolute inset-0 pointer-events-none mix-blend-screen">
      {particles.map(p => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: [0.15, 0.5, 0.15], y: [0, -8, 0], x: [0, 6, 0] }}
          transition={{ duration: 4 + Math.random() * 4, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            top: `${p.y}%`, left: `${p.x}%`, width: p.size, height: p.size,
            background: `radial-gradient(circle, hsl(${p.hue}, 100%, 70%), transparent)`
          }}
        />
      ))}
    </div>
  )
}
