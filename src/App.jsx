import { Suspense, } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import StatsSection from './components/Banner/StatsSection'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import PremiumTools from './components/PremiumTools/PremiumTools'
import StepsSection from './components/StepsSection/StepsSection'
import TransparentPricing from './components/TransparentPricing/TransparentPricing'
import Workflow from './components/Workflow/Workflow'

const fetchProducts = async() => {
  const res = await fetch('/data.json')
  return res.json();
}

function App() {
  const productsPromise = fetchProducts();
  // const [cart, setCart] = useState()
  return (
    <>
      <header>
      <Navbar />
      </header>
      <main>
      <Banner></Banner>
      <StatsSection/>
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <PremiumTools productsPromise={productsPromise}/>
      </Suspense>
      <StepsSection/>
      <TransparentPricing/>
      <Workflow/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default App
