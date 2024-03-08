import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './Layout'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import  {RouterProvider, Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Gallery from './Components/Gallery'



const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='gallery' element={<Gallery />} />
      <Route path='contact' element={<Contact />} />
    </Route>
  ])
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
