import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ThemePage from './pages/ThemePage'
import ThemeProvider from './context/ThemeContext'

function App() {

  return (
    <main>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/themePage' element={<ThemePage/>}/>
        </Routes>
      </ThemeProvider>
    </main>
  )
}

export default App
