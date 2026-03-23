import { motion } from "framer-motion"
import { CalendarHeart } from "lucide-react"

export default function Hero() {
  const addCalendarEvent = () => {
    const start = "20260413T103000"
    const end = "20260413T133000"
    const title = encodeURIComponent("Amal & Jenny Wedding")
    const location = encodeURIComponent("St Josephs Church, Seethamount")
    const details = encodeURIComponent("Wedding ceremony")
    const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${details}&location=${location}`
    window.open(url, "_blank", "noopener")
  }

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center animate-subtle-float scale-105"
        style={{ backgroundImage: "url('/images/hero_background_romantic_1774252094501.png')" }}
      />
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-white/40 via-romantic-50/60 to-romantic-50/90 mix-blend-overlay" />
      <div className="absolute inset-0 z-1 bg-romantic-50/60 backdrop-blur-[2px]" />

      <motion.div 
        className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.p 
          className="uppercase tracking-[0.3em] text-gold-dark text-sm md:text-base font-semibold mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Together with their families
        </motion.p>
        
        <motion.h1 
          className="font-script text-7xl md:text-8xl lg:text-9xl text-romantic-800 drop-shadow-sm mb-6"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1.5 }}
        >
          Amal & Jenny
        </motion.h1>

        <motion.p 
          className="text-romantic-700 text-lg md:text-xl md:leading-relaxed font-serif italic max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Invite you to celebrate a day filled with love, faith, and everlasting promises.
        </motion.p>

        <motion.div
          className="glass rounded-2xl p-6 md:p-8 inline-block mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 1 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-romantic-900 border-b border-romantic-300 pb-6 mb-6">
            <div className="text-center">
              <span className="block text-sm uppercase tracking-widest text-romantic-600 mb-1">Date</span>
              <strong className="font-serif text-xl">Monday, 13 April 2026</strong>
            </div>
            <div className="hidden md:block w-px h-12 bg-romantic-300"></div>
            <div className="text-center">
              <span className="block text-sm uppercase tracking-widest text-romantic-600 mb-1">Venue</span>
              <strong className="font-serif text-xl break-words">St Josephs Church, Seethamount</strong>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={addCalendarEvent}
              className="flex items-center justify-center gap-2 bg-gold-dark text-white px-8 py-3 rounded-full font-medium hover:bg-gold transition-colors focus:ring-4 focus:ring-gold-light"
            >
              <CalendarHeart className="w-5 h-5" />
              Save the Date
            </button>
            <a 
              href="#rsvp"
              className="flex items-center justify-center gap-2 bg-romantic-800 text-white px-8 py-3 rounded-full font-medium hover:bg-romantic-700 transition-colors"
            >
              RSVP Now
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating particles effect container (CSS overlay) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] left-[10%] w-32 h-32 bg-gold-light/20 rounded-full blur-[50px] animate-pulse-slow"></div>
        <div className="absolute top-[60%] right-[15%] w-48 h-48 bg-romantic-300/30 rounded-full blur-[60px] animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>
    </section>
  )
}
