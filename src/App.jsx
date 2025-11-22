import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import Gallery from './pages/Gallery'
import Carrer from './pages/Carrer'
// import Blog from './pages/Blog'
import Luxe from './pages/Service/Luxe'
import Standard from './pages/Service/Standard'
import Prime from './pages/Service/Prime'
import ContactUs from './pages/ContactUs'
import Blog from './pages/Blog'
import BlogDetail from './components/Sections/BlogPage/blogDetail'

const App = () => {
  return (
    <div>

<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
{/* <Route path='/our-services' element={<Services/>}/> */}

<Route path='/services/tmt-Standard' element={<Standard/>}/>
<Route path='/services/tmt-Prime' element={<Prime/>}/>
<Route path='/services/tmt-Luxe' element={<Luxe/>}/>
<Route path='/our-work' element={<Work/>}/>
<Route path='/our-gallery' element={<Gallery/>}/>
<Route path='/careers' element={<Carrer/>}/>
<Route path='/blogs' element={<Blog/>}/>
<Route path='/blog-details' element={<BlogDetail/>}/>
<Route path='/Contact-us' element={<ContactUs/>}/>
</Routes>

    </div>
  )
}

export default App

