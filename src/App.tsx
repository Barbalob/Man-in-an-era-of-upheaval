import './App.scss'
import './nullstyle.scss'
import { Route, Routes } from 'react-router-dom'
import Main from './Page/Main'
import CharacterSelection from './Page/characterSelection'


function App() {
  return (
    <div className="wrapper">
      <Routes>
          <Route path="/Man-in-an-era-of-upheaval" element={<Main />} />
          <Route path="/Man-in-an-era-of-upheaval/character-selection" element={<CharacterSelection />} />
      </Routes>
    </div>
  )
}

export default App
