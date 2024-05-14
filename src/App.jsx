import './App.css'
import Footer from './components/Footer/Footer'
import Discord from './components/Discord/Discord'
import Schedule from './components/Schedule/Schedule'
import TimerSection from './pages/TimerSection'
import Navbar from './components/Navbar'
import Sponsors from './components/Sponsors/Sponsors'

import LandingPage from './pages/LandingPage'

function App() {

  return (
    <>
      <Navbar />
      <LandingPage/>
      <Sponsors />
      <Discord />
      <Footer />
    </>
  )
}

export default App
