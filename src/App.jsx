import Categories from './pages/Categories'
import Home from './pages/Home'
import {Routes, Route} from 'react-router-dom'
import Search from './pages/Search'
import Product from './pages/products/[id]'
import ProductCategory from './pages/products/[category]'
import Wishlist from './pages/wishlist'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/categories' element={<Categories/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/products/:id' element={<Product/>}/>
      <Route path='/products/:category' element={<ProductCategory/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
    </Routes>
  )
}

export default App
