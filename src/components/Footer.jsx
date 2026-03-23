export default function Footer() {
  return (
    <footer className="bg-romantic-900 py-20 px-4 text-center border-t-4 border-gold-dark/40">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="font-script text-5xl md:text-6xl text-romantic-100 mb-6 drop-shadow-sm">
          Amal & Jenny
        </h2>
        
        <p className="text-romantic-300 font-serif italic text-lg md:text-xl max-w-sm mx-auto mb-10 leading-relaxed">
          "We cannot wait to celebrate this beautiful beginning with you."
        </p>
        
        <div className="w-24 h-px bg-gold-dark mb-10 opacity-50"></div>
        
        <div className="text-romantic-400 text-sm tracking-widest uppercase">
          <p className="mb-2">13 • 04 • 2026</p>
          <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
