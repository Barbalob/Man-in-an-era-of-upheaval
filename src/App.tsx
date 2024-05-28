import './App.scss'
import './nullstyle.scss'
import { Route, Routes } from 'react-router-dom'
import Main from './Page/Main'
import CharacterSelection from './Page/characterSelection'
import ChoiceSection from './Page/choiceSection'
import { useState } from 'react'


function App() {
  const [data, setData] = useState()

  return (
    <div className="wrapper">
      <Routes>
          <Route path="/Man-in-an-era-of-upheaval" element={<Main />} />
          <Route path="/Man-in-an-era-of-upheaval/character-selection" element={<CharacterSelection setData={setData} />} />
          <Route path="/Man-in-an-era-of-upheaval/game" element={<ChoiceSection data={data}/>} />
      </Routes>
    </div>
  )
}

export default App
