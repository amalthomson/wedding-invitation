import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import SectionTitle from "./ui/SectionTitle"

const storySteps = [
  { 
    title: "First hello", 
    text: "When we first crossed paths, it felt like just another meeting, but it turned into hours of laughter and talking. Somewhere in there, we realized this was something special.", 
    date: "2022",
    image: "/images/story_one.jpeg"
  },
  { 
    title: "Yes to forever", 
    text: "A promise made with prayer and joy. In a quiet golden moment, the easiest question was asked, and the most wholehearted 'yes' was given.", 
    date: "2024",
    image: "/images/story_two.jpeg"
  },
  { 
    title: "Together always", 
    text: "Two families, one beautiful story. As our lives intertwine, we look forward to the promise of tomorrow, hand in hand, building a life founded on love and trust.", 
    date: "2026",
    image: "/images/story_three.jpeg"
  },
];

export default function Story() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  // Scroll driven timeline connecting line
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section id="story" ref={containerRef} className="py-20 md:py-32 px-4 md:px-8 bg-romantic-100 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionTitle 
          eyebrow="Our Journey"
          title="A Story of Grace & Promise"
          subtitle="The beautiful chapters that led us to this special day."
        />

        <div className="mt-16 md:mt-24 space-y-24 md:space-y-40 relative">
          
          {/* Connecting vertical line for timeline effect (Desktop) */}
          <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-romantic-300 -translate-x-1/2 -z-10">
            <motion.div 
              className="w-full bg-gold-dark origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          {storySteps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={step.title}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-20`}
              >
                <motion.div 
                  className="w-full md:w-1/2"
                  initial={{ opacity: 0, x: isEven ? -60 : 60, scale: 0.95 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 1, type: "spring", stiffness: 40 }}
                >
                  <motion.div 
                    whileHover={{ scale: 1.02, rotate: isEven ? 1 : -1 }}
                    transition={{ duration: 0.4 }}
                    className="aspect-4/3 rounded-3xl overflow-hidden shadow-2xl relative group border-4 border-white/50"
                  >
                    <img 
                      src={step.image} 
                      alt={step.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-romantic-900/10 group-hover:bg-transparent transition-colors duration-500" />
                  </motion.div>
                </motion.div>

                {/* Timeline Dot (Desktop) */}
                <div className="hidden md:flex absolute left-[50%] -translate-x-1/2 justify-center items-center">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.5, delay: 0.3, type: "spring", stiffness: 200 }}
                    className="w-4 h-4 rounded-full bg-gold-dark ring-4 ring-romantic-100 shadow-xl"
                  />
                </div>

                <motion.div 
                  className="w-full md:w-1/2 text-center md:text-left"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <span className="inline-block text-gold-dark font-serif text-2xl md:text-3xl mb-3 tracking-wide">{step.date}</span>
                  <h3 className="text-4xl md:text-5xl font-script text-romantic-900 mb-5">{step.title}</h3>
                  <p className="text-romantic-700 leading-relaxed text-base md:text-lg">
                    {step.text}
                  </p>
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
      
      {/* Decorative Blob */}
      <div className="absolute top-[30%] -left-64 w-96 h-96 bg-romantic-200/50 rounded-full blur-[100px] z-0"></div>
    </section>
  )
}
