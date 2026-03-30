
import './App.css'
import Banner from './components/Banner/Banner'
import StatsSection from './components/Banner/StatsSection'
import Navbar from './components/Navbar/Navbar'
import PremiumTools from './components/PremiumTools/PremiumTools'
import StepsSection from './components/StepsSection/StepsSection'
import TransparentPricing from './components/TransparentPricing/TransparentPricing'

function App() {

  return (
    <>
      <header>
      <Navbar></Navbar>
      </header>
      <main>
      <Banner></Banner>
      <StatsSection/>
      <PremiumTools/>
      <StepsSection/>
      <TransparentPricing/>
      </main>
    </>
  )
}

export default App
