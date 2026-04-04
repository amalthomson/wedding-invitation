import { motion } from "framer-motion"
import { MapPin, Clock } from "lucide-react"
import SectionTitle from "./ui/SectionTitle"

export default function EventDetails() {
  const events = [
    {
      title: "Engagement Ceremony",
      date: "Monday, 06 April 2026",
      time: "12:00 PM",
      venue: "St Marys Church, Edamon",
      note: "We will celebrate our engagement with prayers and blessings.",
      mapLink: "https://maps.app.goo.gl/cD71kypzZEm5ygtw7?g_st=aw",
    },
    {
      title: "Wedding Ceremony",
      date: "Monday, 13 April 2026",
      time: "10:30 AM",
      venue: "St Josephs Church, Seethamount",
      note: "Join us as we exchange vows in front of our loved ones.",
      mapLink: "https://maps.app.goo.gl/QU4bhcdVGSWmTktN8",
    }
  ];

  const schedule = [
    { time: "10:00 AM", title: "Guest Arrival", note: "Welcome & seating" },
    { time: "10:30 AM", title: "Wedding Ceremony", note: "Vows and blessings" },
    { time: "12:00 PM", title: "Photo Moments", note: "Family & friends" },
    { time: "01:00 PM", title: "Reception Lunch", note: "Celebration together" },
  ];

  return (
    <section id="events" className="py-24 px-4 bg-romantic-100 relative overflow-hidden">
      <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-gold-light/25 blur-3xl opacity-70" />
      <div className="pointer-events-none absolute -bottom-24 -right-20 w-80 h-80 rounded-full bg-romantic-300/35 blur-3xl opacity-70" />
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionTitle 
          eyebrow="Celebration Details"
          title="Join Our Joy"
          subtitle="Two sacred celebrations, one beautiful journey."
        />

        {/* Main Events Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mt-16">
          {events.map((event, index) => (
            <motion.div 
              key={event.title}
              className="bg-gradient-to-b from-white via-white to-romantic-50/90 rounded-[2rem] p-8 md:p-10 shadow-[0_20px_60px_rgba(82,60,50,0.12)] border border-white/90 ring-1 ring-gold-light/20 hover:shadow-[0_30px_70px_rgba(82,60,50,0.18)] transition-all duration-500 relative overflow-hidden group backdrop-blur-[2px]"
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              whileHover={{ y: -10, scale: 1.015 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: index * 0.2, type: "spring" }}
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

              {/* Decorative corner element */}
              <div className="absolute -top-20 -right-20 w-44 h-44 bg-gold-light/20 rounded-full opacity-70 group-hover:scale-[1.35] transition-all duration-1000 ease-out" />

              <div className="relative z-10">
                <span className="inline-block px-5 py-2 rounded-full bg-gold-light/35 text-romantic-800 text-sm font-semibold tracking-wide mb-6 border border-gold-light/60 shadow-[0_4px_16px_rgba(170,138,41,0.15)]">
                  {event.date}
                </span>
                
                <h3 className="text-3xl md:text-[2.35rem] font-serif text-romantic-900 mb-6 leading-tight">{event.title}</h3>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-4 rounded-xl bg-romantic-50/80 border border-romantic-100 px-4 py-3">
                    <div className="w-9 h-9 rounded-full bg-gold-light/35 flex items-center justify-center shrink-0 mt-0.5">
                      <Clock className="w-4 h-4 text-gold-dark" />
                    </div>
                    <div>
                      <strong className="block text-romantic-900 text-xs uppercase tracking-[0.18em] font-semibold mb-1">Time</strong>
                      <span className="text-romantic-700 text-lg font-medium">{event.time}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 rounded-xl bg-romantic-50/80 border border-romantic-100 px-4 py-3">
                    <div className="w-9 h-9 rounded-full bg-gold-light/35 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4 text-gold-dark" />
                    </div>
                    <div>
                      <strong className="block text-romantic-900 text-xs uppercase tracking-[0.18em] font-semibold mb-1">Venue</strong>
                      <span className="text-romantic-700 text-lg font-medium">{event.venue}</span>
                    </div>
                  </div>
                </div>

                <div className="h-px w-20 bg-gradient-to-r from-gold/70 to-transparent mb-5" />
                <p className="text-romantic-700 font-serif italic mb-8 md:text-lg leading-relaxed">"{event.note}"</p>

                <motion.a 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={event.mapLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-gradient-to-r from-gold-dark to-gold text-white font-semibold tracking-[0.08em] uppercase hover:shadow-[0_10px_28px_rgba(170,138,41,0.32)] transition-all"
                >
                  <MapPin className="w-4 h-4" />
                  View on Map
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Schedule Timeline */}
        <div className="mt-28 max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block mb-4 px-5 py-2 rounded-full bg-gold-light/30 border border-gold-light/60 text-romantic-800 text-xs md:text-sm tracking-[0.16em] uppercase font-semibold">
              Wedding Day Plan
            </span>
            <h3 className="text-4xl md:text-5xl font-serif text-romantic-900">Itinerary</h3>
            <p className="text-romantic-600 md:text-lg mt-2">13 April 2026</p>
          </motion.div>
          
          <div className="relative rounded-[2rem] bg-white/75 border border-white/90 ring-1 ring-gold-light/20 shadow-[0_20px_60px_rgba(82,60,50,0.1)] px-5 py-8 md:px-10 md:py-10 border-l-2 border-gold-dark/20 ml-2 md:ml-0 md:border-l-0 space-y-8 md:space-y-0 overflow-hidden backdrop-blur-[2px]">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
            <div className="absolute -top-14 -right-12 w-40 h-40 rounded-full bg-gold-light/20 blur-2xl" />
            {schedule.map((item, i) => (
              <motion.div 
                key={item.title} 
                className="relative pl-10 md:pl-0 md:flex items-center justify-between md:mb-12"
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-8px] md:left-[50%] md:translate-x-[-8px] top-2 md:top-1/2 md:-translate-y-1/2 w-4 h-4 rounded-full bg-gold ring-4 ring-white shadow-md"></div>
                
                {/* Desktop layout lines */}
                <div className="hidden md:block absolute left-[50%] top-0 -bottom-12 w-px bg-gold-dark/20 -z-10"></div>
                
                <div className={`md:w-[45%] rounded-2xl bg-white/85 border border-romantic-100 px-5 py-4 shadow-sm hover:shadow-md transition-shadow ${i % 2 === 0 ? 'md:text-right md:pr-8' : 'md:order-last md:pl-8'}`}>
                  <span className="block text-gold-dark font-bold text-base md:text-lg mb-1 tracking-[0.12em] uppercase">{item.time}</span>
                  <h4 className="text-2xl font-serif text-romantic-900 mb-1">{item.title}</h4>
                  <p className="text-romantic-600 md:text-lg">{item.note}</p>
                </div>
                
                {/* Empty spacer for alternating layout */}
                <div className="hidden md:block md:w-[45%]"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
