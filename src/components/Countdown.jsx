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
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="relative rounded-[2.2rem] border border-white/90 ring-1 ring-gold-light/25 bg-gradient-to-b from-white via-romantic-50/40 to-white backdrop-blur-sm shadow-[0_28px_80px_rgba(82,60,50,0.14)] px-6 py-10 md:px-10 md:py-14 overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
          <div className="absolute -top-20 -right-16 w-56 h-56 rounded-full bg-gold-light/25 blur-3xl" />
          <div className="absolute -bottom-20 -left-16 w-56 h-56 rounded-full bg-romantic-200/40 blur-3xl" />

          <div className="relative z-10">
            <SectionTitle 
              eyebrow="The Big Day"
              title="Counting Down"
              subtitle="Every second brings us closer to eternity."
            />

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-7">
              {timeUnits.map((unit, i) => (
                <motion.div
                  key={unit.label}
                  className="relative flex flex-col items-center justify-center min-h-32 sm:min-h-36 md:min-h-40 rounded-2xl border border-gold-light/40 bg-white/80 shadow-[0_10px_30px_rgba(82,60,50,0.1)] backdrop-blur-sm overflow-hidden"
                  initial={{ opacity: 0, scale: 0.85, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.1 }}
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-dark/70 to-transparent" />
                  <span className="text-4xl sm:text-5xl md:text-6xl font-serif text-romantic-900 leading-none drop-shadow-sm">
                    {unit.value}
                  </span>
                  <span className="mt-2 text-[0.65rem] sm:text-xs uppercase tracking-[0.26em] text-gold-dark font-semibold">
                    {unit.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Soft floral/gradient blurred blobs in background */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-romantic-200 rounded-full blur-[90px] opacity-45 -z-0" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold-light/45 rounded-full blur-[90px] opacity-35 -z-0" />
    </section>
  )
}
