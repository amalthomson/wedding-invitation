export default function Footer() {
  return (
    <footer className="bg-romantic-900 py-14 md:py-16 px-4 text-center border-t-4 border-gold-dark/40">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <p className="mb-5 max-w-3xl mx-auto px-6 py-3.5 md:px-8 md:py-4 text-center leading-relaxed rounded-2xl border border-gold-light/20 bg-white/[0.03] backdrop-blur-sm shadow-[0_0_26px_rgba(255,215,160,0.1)]">
          <span className="block text-[1.35rem] md:text-[1.85rem] font-script font-bold text-romantic-100/95 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            "So they are no longer two, but one. Therefore what God has joined together, let no one separate."
          </span>
          <span className="block mt-2 text-gold-light/95 text-[0.74rem] md:text-[0.84rem] font-sans font-bold tracking-[0.16em]">
            Matthew 19:6
          </span>
        </p>

        <h2 className="font-script text-5xl md:text-6xl text-romantic-100 mb-4 drop-shadow-sm">
          Amal & Jenny
        </h2>
        
        <p className="text-romantic-300 font-serif italic text-lg md:text-xl max-w-sm mx-auto mb-6 leading-relaxed">
          "We cannot wait to celebrate this beautiful beginning with you."
        </p>
        
        <div className="w-24 h-px bg-gold-dark mb-6 opacity-50"></div>
        
        <div className="text-romantic-400 text-sm tracking-widest uppercase">
          <p className="mb-2">13 • 04 • 2026</p>
          <p className="text-xs">&copy; {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
