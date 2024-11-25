import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Answer from "./pages/Answer";
import Buy from "./pages/Buy";
import Home from "./pages/Home";
import RoadMap from "./pages/RoadMap";
import Tokenomics from "./pages/Tokenomics";

function App() {
  return (
    <div className="bg-dark-purple">
    
      <div className="sticky top-0 z-50">
        <NavBar />
      </div>
      {/*sections for each pages*/}
      <section id='home'>
        <Home/>
      </section>
      
      <section id='tokenomics'>
        <Tokenomics/>
      </section>
      
      <section id='buy'>
        <Buy/>
      </section>
      
      <section id='roadmap'>
        <RoadMap/>
      </section>
      
      <section id='answer'>
        <Answer/>
      </section>
      
      <Footer/>

    </div>
  )
}

export default App
