

import { useState } from 'react'

import './App.css'
import Header from './Header'
import Footer from './Footer'
import HomePage from './Homepage'
import AboutPage from './Aboutpage'



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
