import { motion } from "framer-motion"
import SectionTitle from "./ui/SectionTitle"

const galleryImages = [
  {
    src: "/images/gallery_wedding_1_1774252170906.png",
    alt: "Couple walking in garden",
  },
  {
    src: "/images/gallery_wedding_2_1774252189008.png",
    alt: "Wedding details and flowers",
  },
  {
    src: "/images/gallery_wedding_3_1774252207539.png",
    alt: "Couple laughing under fairy lights",
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 px-4 bg-romantic-50">
      <div className="max-w-6xl mx-auto">
        <SectionTitle 
          eyebrow="Moments"
          title="A Glimpse of Our Joy"
          subtitle="Cherished memories in the making, love captured in every frame."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.alt}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              {/* Optional overlay for elegant touch */}
              <div className="absolute inset-0 bg-gradient-to-t from-romantic-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
