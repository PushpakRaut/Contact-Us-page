import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import ContactHeader from './components/ContactHeader/ContactHeader'
import ContactForm from './components/ContactForm/ContactForm'

function App() {
  const [count, setCount] = useState(0)

  return <div>
    <Navbar />
    <div className='main_container'>
      <ContactHeader />
      <ContactForm />
    </div>
  </div>
}

export default App
