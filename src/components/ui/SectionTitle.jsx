import { motion } from "framer-motion"

export default function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16 space-y-4"
    >
      {eyebrow && <span className="text-gold tracking-widest uppercase text-sm font-semibold">{eyebrow}</span>}
      <h2 className="text-4xl md:text-5xl font-serif text-romantic-900">{title}</h2>
      {subtitle && <p className="text-romantic-600 max-w-2xl mx-auto italic">{subtitle}</p>}
    </motion.div>
  )
}
