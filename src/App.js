
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  // BrowserRouter as Router,
  BrowserRouter,
  Route,
  Routes,
  // NavLink,
  // Link
} from "react-router-dom"

function App() {
  return (
    <>
   
    
    <BrowserRouter>
      <Navbar title='VENATOR'/>
      <Routes>
        <Route path='/about' element={<About />} />
      </Routes>
      <Routes>
        <Route path='/' element={<TextForm heading="Enter The Text To Analyse." />} />
      </Routes>
      <Routes>
        <Route path='/TextForm' element={<TextForm heading="Enter The Text To Analyse." />} />
      </Routes>
    </BrowserRouter>
    
    

        {/* <Routes> 
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/'>
          <TextForm heading="Enter The Text To Analyse." />
        </Route>
      </Routes> */}
      
    
    </>
  );
} 

export default App;
