import './App.scss'
import './nullstyle.scss'
import { Route, Routes } from 'react-router-dom'
import Main from './Page/Main'
import CharacterSelection from './Page/characterSelection'
import ChoiceSection from './Page/choiceSection'
import ResultSection from './Page/resultSection'
import { useState } from 'react'
import Authors from './Page/Authors'


function App() {
  const [data, setData] = useState<any>([])
  const [end, setEnd] = useState<any>([])

  return (
    <div className="wrapper">
      <Routes>
          <Route path="/Man-in-an-era-of-upheaval" element={<Main />} />
          <Route path="/Man-in-an-era-of-upheaval/character-selection" element={<CharacterSelection setData={setData} setEnd={setEnd} />} />
          <Route path="/Man-in-an-era-of-upheaval/game" element={<ChoiceSection data={data}/>} />
          <Route path="/Man-in-an-era-of-upheaval/end" element={<ResultSection end={end}/>} />
          <Route path="/Man-in-an-era-of-upheaval/authors" element={<Authors />} />
      </Routes>
    </div>
  )
}

export default App
