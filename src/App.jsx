import './App.css'
import Footer from './components/Footer/Footer'
import Discord from './components/Discord/Discord'
import Schedule from './components/Schedule/Schedule'
import TimerSection from './pages/TimerSection'

function App() {

  return (
    <>
      <TimerSection/>
      <Schedule/>
      <Discord/>
      <Footer/>
    </>
  )
}

export default App
