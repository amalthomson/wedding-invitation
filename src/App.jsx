import Hero from "./components/Hero"
import Story from "./components/Story"
import Gallery from "./components/Gallery"
import EventDetails from "./components/EventDetails"
import Countdown from "./components/Countdown"
import Footer from "./components/Footer"

function App() {
  return (
    <main className="w-full min-h-screen font-sans text-romantic-800 selection:bg-gold-light/40 selection:text-romantic-900">
      <Hero />
      <Story />
      <Gallery />
      <EventDetails />
      <Countdown />
      <Footer />
    </main>
  )
}

export default App
