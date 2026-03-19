import { useEffect, useRef, useState } from "react";

const engagementDate = new Date("2026-04-06T17:00:00");
const weddingDate = new Date("2026-04-13T10:30:00");
const planningStart = new Date("2025-04-13T00:00:00");

const useCountdown = (targetDate, startDate) => {
  const [time, setTime] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
    progress: 0,
  });

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const diff = Math.max(targetDate - now, 0);
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      const totalPlanning = targetDate - startDate;
      const elapsed = now - startDate;
      const progress = Math.min(Math.max(elapsed / totalPlanning, 0), 1);

      setTime({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
        progress,
      });
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [targetDate, startDate]);

  return time;
};

const useScrollReveal = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) {
      return undefined;
    }

    const elements = containerRef.current.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("in-view", entry.isIntersecting);
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((element) => {
      element.classList.add("reveal");
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return containerRef;
};

const useActiveSection = () => {
  const [active, setActive] = useState("engagement");

  useEffect(() => {
    const handleScroll = () => {
      const sections = Array.from(document.querySelectorAll("main section"));
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;
      let current = sections[0]?.id || "engagement";

      sections.forEach((section) => {
        if (scrollPosition >= section.offsetTop) {
          current = section.id;
        }
      });
      setActive(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return active;
};

const addCalendarEvent = () => {
  const start = "20260413T103000";
  const end = "20260413T133000";
  const title = encodeURIComponent("Amal & Jenny Wedding");
  const location = encodeURIComponent("St Josephs Church, Seethamount");
  const details = encodeURIComponent("Wedding ceremony");
  const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${details}&location=${location}`;
  window.open(url, "_blank", "noopener");
};

const ThemeToggle = () => {
  const [isNight, setIsNight] = useState(
    () => localStorage.getItem("theme") === "night"
  );

  useEffect(() => {
    document.body.classList.toggle("night", isNight);
    localStorage.setItem("theme", isNight ? "night" : "day");
  }, [isNight]);

  return (
    <button
      className="theme-toggle"
      onClick={() => setIsNight((prev) => !prev)}
      aria-label="Toggle theme"
    >
      <span>{isNight ? "Day Mode" : "Night Mode"}</span>
      <div className="toggle-track">
        <div className="toggle-thumb"></div>
      </div>
    </button>
  );
};

const TimeBox = ({ label, value, pulseKey }) => (
  <div className="time-box">
    <span key={pulseKey} className={`time${label === "Seconds" ? " pulse" : ""}`}>
      {value}
    </span>
    <span className="time-label">{label}</span>
  </div>
);

const Monogram = () => (
  <div className="monogram" aria-hidden="true">
    <div className="monogram-ring"></div>
    <span>A</span>
    <span className="monogram-amp">&</span>
    <span>J</span>
  </div>
);

const CountdownCard = ({ title, subtitle, countdown }) => (
  <div className="countdown-card" data-reveal>
    <div className="countdown-header">
      <h3>{title}</h3>
      <span className="countdown-tag">{subtitle}</span>
    </div>
    <div className="countdown-grid">
      <TimeBox label="Days" value={countdown.days} />
      <TimeBox label="Hours" value={countdown.hours} />
      <TimeBox label="Minutes" value={countdown.minutes} />
      <TimeBox label="Seconds" value={countdown.seconds} pulseKey={countdown.seconds} />
    </div>
    <div className="countdown-progress">
      <span>Planning progress</span>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${Math.round(countdown.progress * 100)}%` }}
        ></div>
      </div>
    </div>
  </div>
);

const Hero = ({ onCalendarClick, activeSection }) => (
  <header className="hero">
    <nav className="nav">
      <div className="logo">A & J</div>
      <div className="nav-links">
        <a
          className={`nav-link${activeSection === "engagement" ? " active" : ""}`}
          href="#engagement"
        >
          Engagement
        </a>
        <a
          className={`nav-link${activeSection === "wedding" ? " active" : ""}`}
          href="#wedding"
        >
          Wedding
        </a>
        <a
          className={`nav-link${activeSection === "invitation" ? " active" : ""}`}
          href="#invitation"
        >
          Invitation
        </a>
        <a
          className={`nav-link${activeSection === "addresses" ? " active" : ""}`}
          href="#addresses"
        >
          Addresses
        </a>
      </div>
      <ThemeToggle />
    </nav>

    <div className="hero-content">
      <div className="hero-text" data-reveal>
        <Monogram />
        <p className="kicker">Together with their families</p>
        <h1>Amal & Jenny</h1>
        <p className="subtitle">invite you to celebrate their wedding</p>
        <div className="hero-meta">
          <div>
            <span className="label">Date</span>
            <span className="value">Monday, 13 April 2026 • 10:30 AM</span>
          </div>
          <div>
            <span className="label">Venue</span>
            <span className="value">St Josephs Church, Seethamount</span>
          </div>
        </div>
        <div className="hero-actions">
          <a className="primary-btn" href="#wedding">
            Wedding Details
          </a>
          <button className="ghost-btn" onClick={onCalendarClick}>
            Add to Calendar
          </button>
        </div>
      </div>
    </div>
  </header>
);

const Engagement = ({ countdown }) => (
  <section id="engagement" className="section engagement">
    <div className="section-title" data-reveal>
      <p>Engagement</p>
      <h2>Celebration of promise</h2>
    </div>
    <div className="event-grid">
      <div className="event-card" data-reveal>
        <div className="event-meta">
          <span className="event-label">Date</span>
          <span className="event-value">Monday, 06 April 2026</span>
        </div>
        <div className="event-meta">
          <span className="event-label">Venue</span>
          <span className="event-value">St Marys Church, Edamon</span>
        </div>
        <p className="event-note">
          We will celebrate our engagement with prayers and blessings.
        </p>
        <a
          className="map-link"
          href="https://maps.app.goo.gl/cD71kypzZEm5ygtw7?g_st=aw"
          target="_blank"
          rel="noreferrer"
        >
          Open map →
        </a>
      </div>
      <CountdownCard
        title="Engagement Countdown"
        subtitle="06 Apr 2026"
        countdown={countdown}
      />
    </div>
  </section>
);

const Wedding = ({ countdown }) => (
  <section id="wedding" className="section wedding">
    <div className="section-title" data-reveal>
      <p>Wedding Ceremony</p>
      <h2>The day we become one</h2>
    </div>
    <div className="event-grid">
      <div className="event-card" data-reveal>
        <div className="event-meta">
          <span className="event-label">Date & Time</span>
          <span className="event-value">Monday, 13 April 2026 • 10:30 AM</span>
        </div>
        <div className="event-meta">
          <span className="event-label">Venue</span>
          <span className="event-value">St Josephs Church, Seethamount</span>
        </div>
        <p className="event-note">
          Join us as we exchange vows in front of our loved ones.
        </p>
        <a
          className="map-link"
          href="https://maps.app.goo.gl/QU4bhcdVGSWmTktN8"
          target="_blank"
          rel="noreferrer"
        >
          Open map →
        </a>
      </div>
      <CountdownCard
        title="Wedding Countdown"
        subtitle="13 Apr 2026"
        countdown={countdown}
      />
    </div>
  </section>
);

const Invitation = () => (
  <section id="invitation" className="section invitation">
    <div className="section-title" data-reveal>
      <p>With joy</p>
      <h2>Invitation & blessings</h2>
    </div>
    <div className="invitation-layout">
      <div className="invite-message" data-reveal>
        <p className="invite-line">
          Cordially invite your esteemed presence along with your family for the
          wedding ceremony.
        </p>
        <p className="invite-line">
          Kindly grace the occasion with your presence and blessings.
        </p>
      </div>
      <div className="scripture-grid">
        <div className="scripture-card" data-reveal>
          <p className="scripture-text">
            "So they are no longer two, but one. Therefore what God has joined
            together, let no one separate."
          </p>
          <span className="scripture-ref">Matthew 19:6</span>
        </div>
        <div className="scripture-card" data-reveal>
          <p className="scripture-text">
            "Love bears all things, believes all things, hopes all things,
            endures all things."
          </p>
          <span className="scripture-ref">1 Corinthians 13:7</span>
        </div>
      </div>
    </div>
  </section>
);

const Addresses = () => (
  <section id="addresses" className="section addresses">
    <div className="section-title" data-reveal>
      <p>Family homes</p>
      <h2>Bride & groom addresses</h2>
    </div>
    <div className="address-grid">
      <div className="address-card" data-reveal>
        <div>
          <h3>Bride Address</h3>
          <p>Moolamparayil (H), Kunnam</p>
          <p>Vechoochira PO, Pathanamthitta</p>
        </div>
        <div className="qr-wrap">
          <img
            className="qr-code"
            src="https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=https%3A%2F%2Fmaps.app.goo.gl%2FcD71kypzZEm5ygtw7%3Fg_st%3Daw"
            alt="QR code for bride address"
            loading="lazy"
          />
          <a
            className="qr-link"
            href="https://maps.app.goo.gl/cD71kypzZEm5ygtw7?g_st=aw"
            target="_blank"
            rel="noreferrer"
          >
            Open map
          </a>
        </div>
      </div>
      <div className="address-card" data-reveal>
        <div>
          <h3>Groom Address</h3>
          <p>Njondanmakkel (H), Seethamount PO</p>
          <p>Pulpally, Wayanad</p>
        </div>
        <div className="qr-wrap">
          <img
            className="qr-code"
            src="https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=https%3A%2F%2Fmaps.app.goo.gl%2FQU4bhcdVGSWmTktN8"
            alt="QR code for groom address"
            loading="lazy"
          />
          <a
            className="qr-link"
            href="https://maps.app.goo.gl/QU4bhcdVGSWmTktN8"
            target="_blank"
            rel="noreferrer"
          >
            Open map
          </a>
        </div>
      </div>
    </div>
  </section>
);

const App = () => {
  const engagementCountdown = useCountdown(engagementDate, planningStart);
  const weddingCountdown = useCountdown(weddingDate, planningStart);
  const containerRef = useScrollReveal();
  const activeSection = useActiveSection();

  return (
    <div ref={containerRef}>
      <div className="background-orb orb-one" aria-hidden="true"></div>
      <div className="background-orb orb-two" aria-hidden="true"></div>
      <Hero onCalendarClick={addCalendarEvent} activeSection={activeSection} />
      <main>
        <Engagement countdown={engagementCountdown} />
        <Wedding countdown={weddingCountdown} />
        <Invitation />
        <Addresses />
      </main>
      <footer className="footer">
        <p>We cannot wait to celebrate with you.</p>
      </footer>
    </div>
  );
};

export default App;
