
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function App() {
  return (
    <>
    <Navbar title='VENATOR'/>
    <div className="container">
      <TextForm heading="Enter The Text To Analyse." />
    </div> 
    {/* <div className="container my-3">
      <About />
    </div> */}
    </>
  );
} 

export default App;
