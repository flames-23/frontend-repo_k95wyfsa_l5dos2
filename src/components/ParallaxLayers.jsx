import React, { useRef, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

// Parallax container with 5 subtle depth layers
export default function ParallaxLayers({ children }) {
  const containerRef = useRef(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothedX = useSpring(mouseX, { stiffness: 60, damping: 20 })
  const smoothedY = useSpring(mouseY, { stiffness: 60, damping: 20 })

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      mouseX.set(x)
      mouseY.set(y)
    }

    el.addEventListener('mousemove', onMove)
    return () => el.removeEventListener('mousemove', onMove)
  }, [mouseX, mouseY])

  // Depth transforms
  const depth = (d) => ({
    x: useTransform(smoothedX, (v) => v * d),
    y: useTransform(smoothedY, (v) => v * d),
  })

  const d1 = depth(-30)
  const d2 = depth(-20)
  const d3 = depth(-10)
  const d4 = depth(6)
  const d5 = depth(12)

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden">
      <motion.div style={{ x: d1.x, y: d1.y }} className="absolute inset-0 pointer-events-none">
        {/* Hologram mist */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(circle at 60% 20%, rgba(41,240,232,0.12), rgba(0,0,0,0))'
        }} />
      </motion.div>
      <motion.div style={{ x: d2.x, y: d2.y }} className="absolute inset-0 pointer-events-none">
        {/* Soft spectral gradient mesh */}
        <div className="absolute -top-32 -left-32 w-[60vw] h-[60vw] rounded-full blur-3xl opacity-30" style={{
          background: 'linear-gradient(135deg, #6D41FF 0%, #29F0E8 80%)'
        }} />
      </motion.div>
      <motion.div style={{ x: d3.x, y: d3.y }} className="absolute inset-0 pointer-events-none">
        {/* Pulse gradient accent */}
        <div className="absolute -bottom-40 -right-40 w-[50vw] h-[50vw] rounded-full blur-3xl opacity-30" style={{
          background: 'linear-gradient(120deg, #FF1E99 0%, #6D41FF 100%)'
        }} />
      </motion.div>
      <motion.div style={{ x: d4.x, y: d4.y }} className="absolute inset-0 pointer-events-none">
        {/* Faint grid lines */}
        <div className="absolute inset-0 opacity-[0.08]" style={{
          backgroundImage: 'linear-gradient(#ffffff0d 1px, transparent 1px), linear-gradient(90deg, #ffffff0d 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </motion.div>
      <motion.div style={{ x: d5.x, y: d5.y }} className="absolute inset-0 pointer-events-none">
        {/* Neural scan lines */}
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, rgba(41,240,232,0.15) 0, rgba(41,240,232,0.15) 1px, transparent 1px, transparent 6px)'
        }} />
      </motion.div>

      {/* Foreground content */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  )
}
