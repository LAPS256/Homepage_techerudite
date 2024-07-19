import {Blogs} from './components'
import { Routes,Route } from 'react-router-dom'
import HomePage from './pages/Homepage'
function App() {
  return (
    <>
  <Routes>
  <Route path="/" element={<HomePage/>}/>
     <Route path="/blogs" element={<Blogs/>}/>
  </Routes>
    </>
  )
}

export default App
