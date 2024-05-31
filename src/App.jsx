import './App.css'
import Footer from './components/Footer/Footer'
import Discord from './components/Discord/Discord'
import Schedule from './components/Schedule/Schedule'
import TimerSection from './pages/TimerSection'
import Navbar from './components/Navbar'
import Sponsors from './components/Sponsors/Sponsors'
import Faq from './components/Faq/Faq'

import LandingPage from './pages/LandingPage'

function App() {

  return (
    <>
      <Navbar />
      <LandingPage/>
      <Sponsors />
      {/* <Faq/> */}
      <Discord />
      <Footer />
    </>
  )
}

export default App
