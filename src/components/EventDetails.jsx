import { motion } from "framer-motion"
import { MapPin, Clock } from "lucide-react"
import SectionTitle from "./ui/SectionTitle"

export default function EventDetails() {
  const events = [
    {
      title: "Engagement Ceremony",
      date: "Monday, 06 April 2026",
      time: "05:00 PM",
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
    { time: "11:30 AM", title: "Photo Moments", note: "Family & friends" },
    { time: "01:30 PM", title: "Reception Lunch", note: "Celebration together" },
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
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {events.map((event, index) => (
            <motion.div 
              key={event.title}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-white/50 hover:shadow-2xl transition-shadow relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Decorative corner element */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-romantic-200 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700"></div>

              <div className="relative z-10">
                <span className="inline-block px-4 py-1.5 rounded-full bg-romantic-100 text-romantic-700 text-sm font-medium mb-6">
                  {event.date}
                </span>
                
                <h3 className="text-3xl font-serif text-romantic-900 mb-6">{event.title}</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4">
                    <Clock className="w-5 h-5 text-gold-dark mt-1 shrink-0" />
                    <div>
                      <strong className="block text-romantic-900 font-medium">Time</strong>
                      <span className="text-romantic-600">{event.time}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-gold-dark mt-1 shrink-0" />
                    <div>
                      <strong className="block text-romantic-900 font-medium">Venue</strong>
                      <span className="text-romantic-600">{event.venue}</span>
                    </div>
                  </div>
                </div>

                <p className="text-romantic-700 italic mb-8">{event.note}</p>

                <a 
                  href={event.mapLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl border-2 border-romantic-200 text-romantic-800 font-medium hover:bg-romantic-50 transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  View on Map
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Schedule Timeline */}
        <motion.div 
          className="mt-24 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-serif text-romantic-900">Itinerary</h3>
          </div>
          
          <div className="relative border-l border-gold-dark/30 ml-4 md:ml-0 md:border-none space-y-8 md:space-y-0">
            {schedule.map((item, i) => (
              <div key={item.title} className="relative pl-8 md:pl-0 md:flex items-center justify-between md:mb-12">
                {/* Timeline Dot */}
                <div className="absolute left-[-5px] md:left-[50%] md:translate-x-[-5px] top-1 md:top-1/2 md:-translate-y-1/2 w-2.5 h-2.5 rounded-full bg-gold-dark ring-4 ring-white"></div>
                
                {/* Desktop layout lines */}
                <div className="hidden md:block absolute left-[50%] top-0 bottom-[-3rem] w-px bg-gold-dark/30 -z-10"></div>
                
                <div className={`md:w-[45%] ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:order-last md:pl-12'}`}>
                  <span className="block text-gold-dark font-medium mb-1">{item.time}</span>
                  <h4 className="text-xl font-serif text-romantic-900 mb-1">{item.title}</h4>
                  <p className="text-romantic-600">{item.note}</p>
                </div>
                
                {/* Empty spacer for alternating layout */}
                <div className="hidden md:block md:w-[45%]"></div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
