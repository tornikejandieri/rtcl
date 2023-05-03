import Header from './components/Header'
import Cart from './components/Cart'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Products from './components/Products'



const App = () => {

  return (
    <>
    <BrowserRouter>
     <Header />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
