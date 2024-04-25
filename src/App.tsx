import './App.scss'
import './nullstyle.scss'
import Header from './Components/Header/Header'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
        <Route path="/Man-in-an-era-of-upheaval" element={<Header />} />
        <Route path="/Man-in-an-era-of-upheaval/test" element={<h1>Test</h1>} />
    </Routes>
  )
}

export default App
