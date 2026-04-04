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
    <section id="events" className="py-24 px-4 bg-romantic-100 relative">
      <div className="max-w-6xl mx-auto">
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
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/80 hover:shadow-2xl hover:bg-white transition-all duration-500 relative overflow-hidden group"
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              whileHover={{ y: -8, scale: 1.02 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: index * 0.2, type: "spring" }}
            >
              {/* Decorative corner element */}
              <div className="absolute -top-16 -right-16 w-40 h-40 bg-romantic-200/50 rounded-full opacity-50 group-hover:scale-[2] group-hover:bg-romantic-300/30 transition-all duration-1000 ease-out"></div>

              <div className="relative z-10">
                <span className="inline-block px-5 py-2 rounded-full bg-romantic-100 text-romantic-800 text-sm font-semibold tracking-wide mb-6">
                  {event.date}
                </span>
                
                <h3 className="text-3xl md:text-4xl font-serif text-romantic-900 mb-6">{event.title}</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4">
                    <Clock className="w-5 h-5 text-gold-dark mt-1 shrink-0" />
                    <div>
                      <strong className="block text-romantic-900 font-medium">Time</strong>
                      <span className="text-romantic-600 text-lg">{event.time}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-gold-dark mt-1 shrink-0" />
                    <div>
                      <strong className="block text-romantic-900 font-medium">Venue</strong>
                      <span className="text-romantic-600 text-lg">{event.venue}</span>
                    </div>
                  </div>
                </div>

                <p className="text-romantic-700 italic mb-8 md:text-lg">{event.note}</p>

                <motion.a 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={event.mapLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-xl border-2 border-romantic-200 text-romantic-800 font-medium hover:border-gold-dark hover:text-gold-dark transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  View on Map
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Schedule Timeline */}
        <div className="mt-32 max-w-3xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-serif text-romantic-900">Itinerary</h3>
            <p className="text-romantic-600 md:text-lg">13 April 2026</p>
          </motion.div>
          
          <div className="relative border-l-2 border-gold-dark/20 ml-6 md:ml-0 md:border-none space-y-12 md:space-y-0">
            {schedule.map((item, i) => (
              <motion.div 
                key={item.title} 
                className="relative pl-10 md:pl-0 md:flex items-center justify-between md:mb-16"
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-9px] md:left-[50%] md:translate-x-[-8px] top-1 md:top-1/2 md:-translate-y-1/2 w-4 h-4 rounded-full bg-gold ring-4 ring-white shadow-md"></div>
                
                {/* Desktop layout lines */}
                <div className="hidden md:block absolute left-[50%] top-0 -bottom-16 w-px bg-gold-dark/20 -z-10"></div>
                
                <div className={`md:w-[45%] ${i % 2 === 0 ? 'md:text-right md:pr-16' : 'md:order-last md:pl-16'}`}>
                  <span className="block text-gold-dark font-bold text-lg mb-2 tracking-wide uppercase">{item.time}</span>
                  <h4 className="text-2xl font-serif text-romantic-900 mb-2">{item.title}</h4>
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
