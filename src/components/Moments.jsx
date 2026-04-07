import { motion } from "framer-motion"
import SectionTitle from "./ui/SectionTitle"

const engagementMoments = [
  {
    src: "/images/eng_one.jpeg",
    alt: "Engagement ceremony moment one",
  },
  {
    src: "/images/eng_two.jpeg",
    alt: "Engagement ceremony moment two",
  },
  {
    src: "/images/eng_three.jpeg",
    alt: "Engagement ceremony moment three",
  },
  {
    src: "/images/eng_four.jpeg",
    alt: "Engagement ceremony moment four",
  },
]

export default function Moments() {
  return (
    <section id="moments" className="py-24 px-4 bg-romantic-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionTitle
          eyebrow="Moments"
          title="Engagement Ceremony"
          subtitle="A few frames from our special day, filled with love, blessings, and joy."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {engagementMoments.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-xl"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute top-[-10%] right-[-10%] w-72 h-72 rounded-full bg-gold-light/20 blur-3xl" />
    </section>
  )
}
