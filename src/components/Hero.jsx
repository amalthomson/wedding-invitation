import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { CalendarHeart, ChevronDown } from "lucide-react"

export default function Hero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  // Parallax effects
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "25%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const addCalendarEvent = () => {
    const start = "20260413T103000"
    const end = "20260413T133000"
    const title = encodeURIComponent("Amal & Jenny Wedding")
    const location = encodeURIComponent("St Josephs Church, Seethamount")
    const details = encodeURIComponent("Wedding Ceremony")
    const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${details}&location=${location}`
    window.open(url, "_blank", "noopener")
  }

  // Staggered text variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 15 }
    }
  }

  return (
    <section 
      id="hero" 
      ref={containerRef}
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden w-full bg-romantic-900"
    >
      {/* Background Image Wrapper for perfect Parallax without tearing */}
      <motion.div 
        className="absolute -top-[15%] -bottom-[15%] -left-[5%] -right-[5%] w-[110%] h-[130%] bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/images/hero_bg_moody_floral.png')",
          y: yBg
        }}
      />
      
      {/* Dramatic Moody Overlays for Text Legibility */}
      <div className="absolute inset-0 z-1 bg-black/40" />
      <div className="absolute inset-0 z-1 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.7)_100%)] mix-blend-multiply" />
      <div className="absolute inset-x-0 bottom-0 h-48 z-1 bg-gradient-to-t from-romantic-100 to-transparent" />

      <motion.div 
        className="relative z-10 text-center px-4 md:px-8 max-w-5xl mx-auto mt-12 w-full flex flex-col items-center justify-center"
        style={{ opacity }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p 
          className="uppercase tracking-[0.4em] md:tracking-[0.6em] text-gold-light text-[0.65rem] md:text-sm font-bold mb-8 opacity-90"
          variants={itemVariants}
        >
          Together with our families
        </motion.p>
        
        <motion.h1 
          className="font-script text-[5rem] sm:text-8xl md:text-9xl lg:text-[12rem] text-white drop-shadow-[0_0_40px_rgba(255,255,255,0.15)] mb-6 leading-none pb-2"
          variants={{
            hidden: { opacity: 0, scale: 0.95, filter: "blur(10px)" },
            visible: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { duration: 1.8, ease: "easeOut" } }
          }}
        >
          <span className="block">Amal</span>
          <span className="block text-[0.5em]">&</span>
          <span className="block">Jenny</span>
        </motion.h1>

        <motion.p 
          className="text-white/80 drop-shadow-md text-base sm:text-lg md:text-2xl font-serif italic max-w-2xl mx-auto mb-16 px-4"
          variants={itemVariants}
        >
          Invite you to celebrate a day filled with love, faith, and everlasting promises.
        </motion.p>

        <motion.div
          className="inline-block w-full max-w-4xl mt-2 md:mt-4 px-2 md:px-0"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-24 text-white border-y border-white/10 py-8 md:py-10 mb-8 md:mb-12 drop-shadow-xl mx-auto w-fit px-8 md:px-24 bg-black/20 backdrop-blur-md rounded-3xl md:rounded-[2.5rem]">
            <div className="text-center">
              <span className="block text-[0.65rem] md:text-sm uppercase tracking-[0.4em] text-gold-light mb-2 md:mb-4 opacity-100 font-semibold drop-shadow-md">Date</span>
              <strong className="font-serif text-2xl md:text-4xl font-light tracking-widest block drop-shadow-lg">13 April</strong>
              <p className="text-base md:text-lg text-white/80 font-serif italic mt-1 md:mt-2 drop-shadow">2026</p>
            </div>
            
            <div className="hidden md:block w-px h-24 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
            <div className="block md:hidden h-px w-24 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
            
            <div className="text-center">
              <span className="block text-[0.65rem] md:text-sm uppercase tracking-[0.4em] text-gold-light mb-2 md:mb-4 opacity-100 font-semibold drop-shadow-md">Venue</span>
              <strong className="font-serif text-2xl md:text-4xl font-light tracking-widest block drop-shadow-lg">St Joseph's Church</strong>
              <p className="text-base md:text-lg text-white/80 font-serif italic mt-1 md:mt-2 drop-shadow">Seethamount</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center w-full max-w-lg mx-auto pb-4 md:pb-16 relative z-10">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={addCalendarEvent}
              className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-gold-dark to-gold text-white px-8 py-4 md:py-5 rounded-full font-semibold tracking-widest text-sm hover:shadow-[0_8px_30px_rgba(212,175,55,0.4)] transition-all focus:ring-4 focus:ring-gold-light uppercase"
            >
              <CalendarHeart className="w-5 h-5" />
              Add to Calendar
            </motion.button>
            {/* <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#rsvp"
              className="w-full flex items-center justify-center gap-3 bg-white/95 text-romantic-900 px-8 py-4 md:py-5 rounded-full font-semibold tracking-widest text-sm hover:bg-white hover:text-romantic-950 transition-all shadow-[0_8px_30px_rgba(0,0,0,0.15)] uppercase"
            >
              RSVP Now
            </motion.a> */}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-2 md:bottom-2 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-3 text-romantic-900 drop-shadow-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-[0.3em] font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 opacity-70" />
        </motion.div>
      </motion.div>

      {/* Floating particles effect container (CSS overlay) */}
      <div className="absolute inset-0 pointer-events-none z-0 mix-blend-screen opacity-50">
        <div className="absolute top-[20%] left-[15%] w-40 h-40 bg-gold/20 rounded-full blur-[70px] animate-pulse-slow"></div>
        <div className="absolute top-[60%] right-[20%] w-64 h-64 bg-gold-dark/10 rounded-full blur-[90px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  )
}
