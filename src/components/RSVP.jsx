import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import SectionTitle from "./ui/SectionTitle";

export default function RSVP() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate network request
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  return (
    <section id="rsvp" className="py-24 px-4 bg-romantic-50 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle 
          eyebrow="RSVP"
          title="Will You Be Joining Us?"
          subtitle="Kindly let us know by March 15th, 2026."
        />

        <div className="mt-16 flex flex-col lg:flex-row gap-12 items-start justify-center">
          {/* Form Side */}
          <motion.div 
            className="w-full lg:w-3/5 bg-white/70 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-xl border border-white/60"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-16 text-center space-y-6">
                <CheckCircle2 className="w-20 h-20 text-green-500 animate-fade-in" />
                <h3 className="text-3xl font-serif text-romantic-900">Thank You!</h3>
                <p className="text-romantic-600">Your response has been received. We can't wait to see you soon.</p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="mt-4 text-gold-dark hover:underline underline-offset-4"
                >
                  Submit another response
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-romantic-900 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    placeholder="John Doe"
                    className="w-full px-5 py-4 bg-white/50 border border-romantic-200 rounded-xl focus:ring-2 focus:ring-gold-dark focus:border-transparent outline-none transition-all placeholder:text-romantic-300"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-romantic-900 mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      required 
                      placeholder="john@example.com"
                      className="w-full px-5 py-4 bg-white/50 border border-romantic-200 rounded-xl focus:ring-2 focus:ring-gold-dark focus:border-transparent outline-none transition-all placeholder:text-romantic-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium text-romantic-900 mb-2">Number of Guests</label>
                    <select 
                      id="guests" 
                      className="w-full px-5 py-4 bg-white/50 border border-romantic-200 rounded-xl focus:ring-2 focus:ring-gold-dark focus:border-transparent outline-none transition-all appearance-none"
                    >
                      <option>1 (Just me)</option>
                      <option>2 Guests</option>
                      <option>3 Guests</option>
                      <option>4+ Guests</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-romantic-900 mb-3">Will you attend?</label>
                  <div className="flex gap-4">
                    <label className="flex-1 cursor-pointer">
                      <input type="radio" name="attending" value="yes" className="peer sr-only" defaultChecked />
                      <div className="text-center py-4 border-2 border-romantic-200 rounded-xl peer-checked:border-gold-dark peer-checked:bg-gold-light/20 transition-all text-romantic-700 peer-checked:text-romantic-900 font-medium">
                        Joyfully accept
                      </div>
                    </label>
                    <label className="flex-1 cursor-pointer">
                      <input type="radio" name="attending" value="no" className="peer sr-only" />
                      <div className="text-center py-4 border-2 border-romantic-200 rounded-xl peer-checked:border-romantic-400 peer-checked:bg-romantic-100 transition-all text-romantic-700 font-medium">
                        Regretfully decline
                      </div>
                    </label>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-romantic-900 mb-2">Message for the couple (Optional)</label>
                  <textarea 
                    id="message" 
                    rows="3" 
                    placeholder="Looking forward to it! / Sending love from..."
                    className="w-full px-5 py-4 bg-white/50 border border-romantic-200 rounded-xl focus:ring-2 focus:ring-gold-dark focus:border-transparent outline-none transition-all resize-none placeholder:text-romantic-300"
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button 
                    type="submit" 
                    disabled={status === "submitting"}
                    className="w-full flex items-center justify-center gap-2 bg-romantic-800 text-white font-medium py-4 rounded-xl hover:bg-romantic-900 focus:ring-4 focus:ring-romantic-300 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? (
                      <span className="animate-pulse">Sending...</span>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mb-1" />
                        Send RSVP
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>

          {/* Info Side */}
          <motion.div 
            className="w-full lg:w-2/5 space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-romantic-800 text-romantic-50 p-8 md:p-10 rounded-3xl shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-[40px]"></div>
              
              <h3 className="text-2xl font-serif mb-6 text-gold-light">Need Assistance?</h3>
              <p className="mb-8 text-romantic-100 leading-relaxed">
                Reach out to us anytime for travel guidance, accommodation suggestions, or special dietary requirements.
              </p>
              
              <div className="space-y-6">
                <div className="border-b border-romantic-600 pb-4">
                  <span className="block text-sm uppercase tracking-widest text-romantic-300 mb-1">Bride's Family</span>
                  <strong className="text-lg font-medium tracking-wide">+91 9XX XX6 3XX</strong>
                </div>
                <div>
                  <span className="block text-sm uppercase tracking-widest text-romantic-300 mb-1">Groom's Family</span>
                  <strong className="text-lg font-medium tracking-wide">+91 9XX XX4 8XX</strong>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-romantic-100 text-center">
              <h4 className="font-serif text-xl text-romantic-900 mb-2">Gift Registry</h4>
              <p className="text-romantic-600 mb-6 text-sm">Your presence is our present. However, if you wish to honor us with a gift, a wishing well will be available at the reception.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
