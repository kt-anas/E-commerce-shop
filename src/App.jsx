 
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Cart from './pages/Cart'
import Shop from './pages/Shop'

function App() {
  

  return (
    <>


      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
