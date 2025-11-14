import React from 'react'
import { motion } from 'framer-motion'

const Section = ({ title, children }) => (
  <section className="relative py-20 bg-[#0A0A0C] text-[#E4EAF3]">
    <div className="container mx-auto px-6 md:px-10">
      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-2xl md:text-4xl font-bold" style={{ fontFamily: 'Space Grotesk, Inter, system-ui' }}>
        {title}
      </motion.h2>
      <div className="mt-8">
        {children}
      </div>
    </div>
  </section>
)

export default function Sections() {
  return (
    <div className="bg-[#0A0A0C]">
      <Section title="AI Command Core">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="p-6 rounded-xl bg-[#15151A]/80 border border-white/10 backdrop-blur-sm">
              <div className="text-sm text-[#E4EAF3]/70">
                Live topology mapping, anomaly threads, self-healing automations.
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section title="Role-Based Intelligence Panels">
        <div className="flex gap-4 overflow-x-auto pb-4">
          {[...Array(6)].map((_, i) => (
            <motion.div key={i} whileHover={{ rotateX: 6, rotateY: -6 }} className="min-w-[280px] p-5 rounded-xl bg-[#15151A]/80 border border-white/10 backdrop-blur-sm">
              <div className="text-sm text-[#E4EAF3]/70">Panel {i+1}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section title="No-Code AI Flow Builder">
        <div className="relative p-6 rounded-2xl bg-[#15151A]/80 border border-white/10 backdrop-blur-sm">
          <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 60% 20%, rgba(41,240,232,0.18), transparent 40%)' }} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {['Ingest','Detect','Act'].map((label,i) => (
              <motion.div key={label} whileHover={{ scale: 1.02 }} className="p-6 rounded-xl bg-white/5 border border-white/10">
                <div className="font-mono text-xs text-[#29F0E8]">{label}</div>
                <div className="mt-2 text-[#E4EAF3]/80 text-sm">Drag, link, and automate complex runbooks with AI assistance.</div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section title="Predictive Insights / Reports">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="p-6 rounded-xl bg-gradient-to-br from-[#6D41FF]/10 to-[#29F0E8]/10 border border-white/10">
              <div className="text-xs font-mono text-[#E4EAF3]/60">AI Report {i}</div>
              <div className="mt-2 text-sm text-[#E4EAF3]/80">Forecast capacity, detect drift, and surface causal chains before impact.</div>
            </motion.div>
          ))}
        </div>
      </Section>

      <section id="get-started" className="relative py-24 bg-[#0A0A0C]">
        <div className="container mx-auto px-6 md:px-10">
          <div className="relative p-8 rounded-2xl border border-white/10 bg-[#15151A]/70 backdrop-blur-md">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#FF1E99] to-[#6D41FF] blur-xl opacity-25 pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
              <h3 className="text-xl md:text-2xl font-semibold text-[#E4EAF3]" style={{ fontFamily: 'Space Grotesk, Inter, system-ui' }}>Ready to activate autonomous ops?</h3>
              <a href="#" className="inline-flex items-center px-6 py-3 rounded-md text-[#0A0A0C] font-semibold bg-[#FF1E99] hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#FF1E99] shadow-[0_0_30px_rgba(255,30,153,0.4)] transition">Request a Demo</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
