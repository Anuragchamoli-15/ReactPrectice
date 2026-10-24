import './App.css'
import { Link } from "react-router-dom";

// import Home from './Components/Home'
// import Contect from './Components/Contect'
// import About from './Components/About'

function App() {

  return (
    <>
    <Link to="/home">home</Link>
    <Link to="/about">about</Link>
    <Link to="/contect">contect</Link>



      {/* <Home></Home>
      <Contect></Contect>
      <About></About> */}
    </>
  )
}

export default App
