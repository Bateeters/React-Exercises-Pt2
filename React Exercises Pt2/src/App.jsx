import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'

function App() {

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
      </Routes>
    </main>
  )
}

export default App
