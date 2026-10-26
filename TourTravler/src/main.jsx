import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import{BrowserRouter,Routes,Route} from 'react-router-dom'

import './index.css'
import App from './App.jsx'

import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Contect from './Pages/Contect.jsx'
import Pakages from './Pages/Pakages.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App/>
    <Routes>
      <Route path='/home' element = {<Home/>}/>
      <Route path='/about' element = {<About/>}/>
      <Route path='/contect' element = {<Contect/>}/>
      <Route path='/pakges' element = {<Pakages/>}/>

    </Routes> 
    </BrowserRouter>
  </StrictMode>,
)
