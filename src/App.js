import './App.css';
import Home from './component/Home';
import About from './component/About'
import Skills from './component/Skills';
import Navbar from './component/Navbar';
import Contact from './component/Contact';
import Project from './component/Project'

function App() {


  return (
    <div>
        <Navbar/>
        <Home/>
        <About/> 
        <Skills/> 
        <Project/>
        <Contact/>
       
      </div>


  
      
      
    
  );
}

export default App;
