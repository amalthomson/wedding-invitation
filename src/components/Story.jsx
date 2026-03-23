import { motion } from "framer-motion"
import SectionTitle from "./ui/SectionTitle"

const storySteps = [
  { 
    title: "First hello", 
    text: "A gentle beginning that felt like home. We met over coffee, and what was supposed to be a quick chat turned into hours of beautiful conversation. That very day, we somehow knew this was different.", 
    date: "2017",
    image: "/images/couple_story_1_1774252122058.png"
  },
  { 
    title: "Yes to forever", 
    text: "A promise made with prayer and joy. Under the beautiful golden sunset, the easiest question was asked, and the most wholehearted 'yes' was given.", 
    date: "2025",
    image: "/images/couple_story_2_1774252138586.png"
  },
  { 
    title: "Together always", 
    text: "Two families, one beautiful story. As our lives intertwine, we look forward to the promise of tomorrow, hand in hand, building a life founded on love and trust.", 
    date: "2026",
    image: "/images/couple_story_3_1774252156196.png"
  },
];

export default function Story() {
  return (
    <section id="story" className="py-24 px-4 bg-romantic-100 relative">
      <div className="max-w-5xl mx-auto relative z-10">
        <SectionTitle 
          eyebrow="Our Journey"
          title="A Story of Grace & Promise"
          subtitle="The beautiful chapters that led us to this special day."
        />

        <div className="mt-16 space-y-24">
          {storySteps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={step.title}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16`}
              >
                <motion.div 
                  className="w-full md:w-1/2"
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative group">
                    <img 
                      src={step.image} 
                      alt={step.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-romantic-900/10 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                </motion.div>

                <motion.div 
                  className="w-full md:w-1/2 text-center md:text-left"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <span className="inline-block text-gold-dark font-serif text-2xl mb-2">{step.date}</span>
                  <h3 className="text-3xl font-serif text-romantic-900 mb-4">{step.title}</h3>
                  <p className="text-romantic-700 leading-relaxed text-lg">
                    {step.text}
                  </p>
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
