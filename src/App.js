import './App.css';
import Home from './component/Home';
import About from './component/About'
import Skills from './component/Skills';
import Navbar from './component/Navbar';

function App() {


  return (
    <main className='text-gray-400 bg-gray-900 body-front'>
        <Navbar/>
        <Home/>
        <About/> 
        <Skills/>
       


    </main>
      
      
    
  );
}

export default App;
