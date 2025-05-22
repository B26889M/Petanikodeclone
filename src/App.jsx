import { useState } from 'react'
import Homepage from './pages/Homepage'
// import Review from './pages/Review'
import Navbar from './components/Navbar'
import Api from './components/Api'
import Footer from './components/Footer'
import Footer1 from './components/footer1'

function App() {
  const [count, setCount] = useState(0)

  return <div className='bg-slate-900'>
    <Navbar />
    <Homepage />
    <Api />
    {/* <Review /> */}
    <Footer />
    <Footer1 />
  </div>
}

export default App
