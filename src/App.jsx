import { useEffect, useRef, useState } from "react";
import logo from "./assets/logo.png";

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
  const [active, setActive] = useState("countdown");

  useEffect(() => {
    const handleScroll = () => {
      const sections = Array.from(document.querySelectorAll("main section"));
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;
      let current = sections[0]?.id || "countdown";

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

const TimeUnit = ({ label, value, pulseKey }) => (
  <div className="time-unit">
    <span key={pulseKey} className={`time-value${label === "Seconds" ? " pulse" : ""}`}>
      {value}
    </span>
    <span className="time-label">{label}</span>
  </div>
);

const SectionTitle = ({ eyebrow, title, subtitle }) => (
  <div className="section-title" data-reveal>
    <p className="eyebrow">{eyebrow}</p>
    <h2>{title}</h2>
    {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
  </div>
);

const CountdownTile = ({ label, dateLabel, countdown }) => {
  const progress = Math.round(countdown.progress * 100);

  return (
    <div className="countdown-card" data-reveal>
      <div className="countdown-top">
        <div>
          <p className="eyebrow">{label}</p>
          <h3>{dateLabel}</h3>
        </div>
        <div className="progress-ring" style={{ "--progress": `${progress}%` }}>
          <span>{progress}%</span>
        </div>
      </div>
      <div className="time-grid">
        <TimeUnit label="Days" value={countdown.days} />
        <TimeUnit label="Hours" value={countdown.hours} />
        <TimeUnit label="Minutes" value={countdown.minutes} />
        <TimeUnit label="Seconds" value={countdown.seconds} pulseKey={countdown.seconds} />
      </div>
    </div>
  );
};

const EventCard = ({ title, date, time, venue, note, mapLink }) => (
  <article className="event-card" data-reveal>
    <div className="event-header">
      <h3>{title}</h3>
      <span className="event-pill">{date}</span>
    </div>
    <p className="event-detail">
      <strong>Time:</strong> {time}
    </p>
    <p className="event-detail">
      <strong>Venue:</strong> {venue}
    </p>
    <p className="event-note">{note}</p>
    <a className="text-link" href={mapLink} target="_blank" rel="noreferrer">
      Open map →
    </a>
  </article>
);

const App = () => {
  const engagementCountdown = useCountdown(engagementDate, planningStart);
  const weddingCountdown = useCountdown(weddingDate, planningStart);
  const containerRef = useScrollReveal();
  const activeSection = useActiveSection();

  const highlights = [
    { title: "Ceremony", value: "10:30 AM", detail: "Monday, 13 April 2026" },
    { title: "Reception", value: "01:30 PM", detail: "Family gathering" },
  ];

  const storySteps = [
    { title: "First hello", text: "A gentle beginning that felt like home.", date: "2017" },
    { title: "Yes to forever", text: "A promise made with prayer and joy.", date: "2025" },
    { title: "Together always", text: "Two families, one beautiful story.", date: "2026" },
  ];

  const schedule = [
    { time: "10:00 AM", title: "Guest arrival", note: "Welcome & seating" },
    { time: "10:30 AM", title: "Wedding ceremony", note: "Vows and blessings" },
    { time: "11:30 AM", title: "Photo moments", note: "Family & friends" },
    { time: "01:30 PM", title: "Reception lunch", note: "Celebration together" },
  ];

  const travelTips = [
    { title: "Nearest airport", detail: "Kannur International Airport (45 km)" },
    { title: "Parking", detail: "Available at church premises" },
    { title: "Best stay", detail: "Nearby hotels in Sulthan Bathery" },
  ];

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
      alt: "Engagement portrait",
      size: "tall",
    },
    {
      src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80",
      alt: "Couple portrait",
      size: "wide",
    },
    {
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",
      alt: "Holding hands",
    },
    {
      src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
      alt: "Wedding details",
    },
    {
      src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
      alt: "Bridal styling",
      size: "wide",
    },
    {
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80",
      alt: "Garden vows",
    },
    {
      src: "https://images.unsplash.com/photo-1470163395405-d2b80e7450ed?auto=format&fit=crop&w=900&q=80",
      alt: "Wedding rings",
      size: "tall",
    },
    {
      src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=80",
      alt: "Invitation details",
    },
    {
      src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80",
      alt: "Wedding flowers",
    },
    {
      src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
      alt: "Reception table",
      size: "wide",
    },
  ];

  return (
    <div className="page" ref={containerRef}>
      <div className="glow glow-one" aria-hidden="true"></div>
      <div className="glow glow-two" aria-hidden="true"></div>
      <div className="glow glow-three" aria-hidden="true"></div>

      <header className="hero">
        <nav className="nav">
          <div className="nav-inner">
            <div className="brand" aria-label="Amal and Jenny">
              <div className="brand-logo" aria-hidden="true">
                <img src={logo} alt="" />
              </div>
            </div>
            <div className="nav-links">
              {[
                { id: "countdown", label: "Countdown" },
                { id: "story", label: "Our story" },
                { id: "events", label: "Events" },
                { id: "invitation", label: "Invitation" },
                { id: "gallery", label: "Gallery" },
                { id: "rsvp", label: "RSVP" },
                { id: "addresses", label: "Addresses" },
              ].map((link) => (
                <a
                  key={link.id}
                  className={`nav-link${activeSection === link.id ? " active" : ""}`}
                  href={`#${link.id}`}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a className="nav-cta" href="#rsvp">
              RSVP
            </a>
          </div>
        </nav>

        <div className="hero-title" data-reveal>
          <p className="eyebrow">Together with our families</p>
          <h1>Amal & Jenny</h1>
          <p className="lead">
            Invite you to celebrate a day filled with love, faith, and everlasting
            promises.
          </p>
        </div>

        <div className="hero-grid">
          <div className="hero-copy" data-reveal>
            <div className="hero-image full-bleed" data-reveal>
              <img
                src={
                  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=80"
                }
                alt="Amal and Jenny"
              />
              <div className="hero-badge">13 • 04 • 2026</div>
            </div>

            <div className="hero-details">
              <div className="hero-detail-grid">
                <div className="detail-block">
                  <h3>Event Details</h3>
                  <div className="hero-meta">
                    <div className="meta-card">
                      <span>Date</span>
                      <strong>Monday, 13 April 2026</strong>
                    </div>
                    <div className="meta-card">
                      <span>Venue</span>
                      <strong>St Josephs Church, Seethamount</strong>
                    </div>
                  </div>
                </div>
                <div className="detail-block">
                  <h3>Highlights</h3>
                  <div className="hero-highlights">
                    {highlights.map((item) => (
                      <div className="highlight-card" key={item.title}>
                        <span>{item.title}</span>
                        <strong>{item.value}</strong>
                        <p>{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hero-actions">
                <button className="btn warm" onClick={addCalendarEvent}>
                  Add to Calendar
                </button>
                <a className="btn primary" href="#events">
                  View Schedule
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="countdown" className="section">
          <SectionTitle
            eyebrow="Countdown"
            title="The celebration begins soon"
            subtitle="Every moment brings us closer to the day we say forever."
          />
          <div className="countdown-tiles">
            <CountdownTile
              label="Engagement countdown"
              dateLabel="06 April 2026"
              countdown={engagementCountdown}
            />
            <CountdownTile
              label="Wedding countdown"
              dateLabel="13 April 2026"
              countdown={weddingCountdown}
            />
          </div>
        </section>

        <section id="story" className="section soft">
          <SectionTitle
            eyebrow="Our story"
            title="A journey of grace and promise"
            subtitle="Cherished milestones that brought us to this day."
          />
          <div className="timeline">
            {storySteps.map((step) => (
              <div className="timeline-card" data-reveal key={step.title}>
                <div className="timeline-year">{step.date}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="events" className="section">
          <SectionTitle
            eyebrow="Events"
            title="Celebrate with us"
            subtitle="Two sacred celebrations, one joyful journey."
          />
          <div className="event-grid">
            <EventCard
              title="Engagement Ceremony"
              date="Monday, 06 April 2026"
              time="05:00 PM"
              venue="St Marys Church, Edamon"
              note="We will celebrate our engagement with prayers and blessings."
              mapLink="https://maps.app.goo.gl/cD71kypzZEm5ygtw7?g_st=aw"
            />
            <EventCard
              title="Wedding Ceremony"
              date="Monday, 13 April 2026"
              time="10:30 AM"
              venue="St Josephs Church, Seethamount"
              note="Join us as we exchange vows in front of our loved ones."
              mapLink="https://maps.app.goo.gl/QU4bhcdVGSWmTktN8"
            />
          </div>

          <div className="schedule">
            {schedule.map((item) => (
              <div className="schedule-row" data-reveal key={item.title}>
                <span className="schedule-time">{item.time}</span>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.note}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="info-grid">
            {travelTips.map((tip) => (
              <div className="info-card" data-reveal key={tip.title}>
                <span>{tip.title}</span>
                <p>{tip.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="invitation" className="section soft">
          <SectionTitle
            eyebrow="Invitation"
            title="With love and blessings"
            subtitle="Your presence will mean the world to us."
          />
          <div className="invitation-grid">
            <div className="invite-card" data-reveal>
              <p>
                Cordially invite your esteemed presence along with your family for
                the wedding ceremony.
              </p>
              <p className="muted">
                Kindly grace the occasion with your presence and blessings.
              </p>
            </div>
            <div className="quote-grid">
              <div className="quote-card" data-reveal>
                <p>
                  "So they are no longer two, but one. Therefore what God has joined
                  together, let no one separate."
                </p>
                <span>Matthew 19:6</span>
              </div>
              <div className="quote-card" data-reveal>
                <p>
                  "Love bears all things, believes all things, hopes all things,
                  endures all things."
                </p>
                <span>1 Corinthians 13:7</span>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="section">
          <SectionTitle
            eyebrow="Moments"
            title="A glimpse of our joy"
            subtitle="Memories in the making, love in every frame."
          />
          <div className="gallery-grid">
            {galleryImages.map((image) => (
              <div
                className={`gallery-card image${image.size ? ` ${image.size}` : ""}`}
                data-reveal
                key={image.alt}
              >
                <img src={image.src} alt={image.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </section>

        <section id="rsvp" className="section">
          <SectionTitle
            eyebrow="RSVP"
            title="Let us know you're coming"
            subtitle="We would love to celebrate with you."
          />
          <div className="rsvp-grid">
            <form className="rsvp-card" onSubmit={(event) => event.preventDefault()}>
              <label>
                Full name
                <input type="text" name="name" placeholder="Your name" />
              </label>
              <label>
                Phone number
                <input type="tel" name="phone" placeholder="+91 98765 43210" />
              </label>
              <label>
                Guests attending
                <select name="guests">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4+</option>
                </select>
              </label>
              <label className="inline">
                <input type="checkbox" name="blessings" defaultChecked />
                Sending our blessings from afar
              </label>
              <button className="btn primary" type="submit">
                Confirm RSVP
              </button>
            </form>
            <div className="rsvp-card accent" data-reveal>
              <h3>Need help?</h3>
              <p>
                Reach us anytime for travel guidance, accommodation suggestions, or
                special requests.
              </p>
              <div className="contact">
                <div>
                  <span>Bride's family</span>
                  <strong>+91 9XX XX6 3XX</strong>
                </div>
                <div>
                  <span>Groom's family</span>
                  <strong>+91 9XX XX4 8XX</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="addresses" className="section soft">
          <SectionTitle
            eyebrow="Addresses"
            title="Bride & groom homes"
            subtitle="We welcome your blessings and visits."
          />
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
                  className="text-link"
                  href="https://maps.app.goo.gl/cD71kypzZEm5ygtw7?g_st=aw"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open map →
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
                  className="text-link"
                  href="https://maps.app.goo.gl/QU4bhcdVGSWmTktN8"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open map →
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>We cannot wait to celebrate with you.</p>
      </footer>
    </div>
  );
};

export default App;
