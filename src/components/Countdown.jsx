import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";

const weddingDate = new Date("2026-04-13T10:30:00");

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const diff = Math.max(Number(weddingDate) - Number(now), 0);
      
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="py-24 px-4 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <SectionTitle 
          eyebrow="The Big Day"
          title="Counting Down"
          subtitle="Every second brings us closer to eternity."
        />

        <div className="mt-12 flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10">
          {timeUnits.map((unit, i) => (
            <motion.div
              key={unit.label}
              className="flex flex-col items-center justify-center bg-romantic-50 w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-2xl shadow-sm border border-romantic-200"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="text-3xl sm:text-4xl md:text-5xl font-serif text-romantic-900 mb-1">{unit.value}</span>
              <span className="text-xs sm:text-sm uppercase tracking-widest text-romantic-600">{unit.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Soft floral/gradient blurred blobs in background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-romantic-200 rounded-full blur-[80px] opacity-40 -z-0"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-light/40 rounded-full blur-[80px] opacity-30 -z-0"></div>
    </section>
  )
}
