
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter,
  Route,
  Routes,

} from "react-router-dom"

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar title='VENATOR'/>
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/TextForm' element={<TextForm heading="Enter The Text To Analyse." />} />
        <Route path='/' element={<TextForm heading="Enter The Text To Analyse." />} />
      </Routes>
    </BrowserRouter>
    </>
  );
} 

export default App;
