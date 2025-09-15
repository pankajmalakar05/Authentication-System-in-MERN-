import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Blog from './Components/Blog'
import Cart from './Components/Cart'
import Contact from './Components/Contact'
import About from './Components/about'
import Shop from './Components/shop'
import Login from './Components/login'
import Sproduct from './Components/Sproduct'
import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<Login />} />

        <Route path="/product/:id" element={<Sproduct />} /> {/* Example for single product */}
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
