

import { useState } from 'react'

import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import HomePage from './Pages/Homepage'
import AboutPage from './Pages/Aboutpage'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Header />
      <HomePage />
      <AboutPage />
      <Footer />

    </>
  )
}

export default App
