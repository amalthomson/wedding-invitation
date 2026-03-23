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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 40 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 60, damping: 12 }
    }
  }

  return (
    <section id="gallery" className="py-24 px-4 bg-romantic-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionTitle 
          eyebrow="Moments"
          title="A Glimpse of Our Joy"
          subtitle="Cherished memories in the making, love captured in every frame."
        />

        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.alt}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className={`relative aspect-4/3 md:aspect-3/4 rounded-3xl overflow-hidden shadow-xl cursor-none group mt-${index % 2 !== 0 ? '0' : '8 md:mt-12'}`}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-romantic-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center">
                <span className="text-white font-serif italic text-xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  {image.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background soft aesthetic glow */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-gold-light/20 rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  )
}
