import './App.css'

import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';
import Languages from './components/langs/Languages';
import Contact from "./components/contact/Contact";


function App() {

  return (
    <div>
      <Sidebar/>
      <Home/>
      <About/>
      <Resume/>
      <Portfolio/>
      <Languages/>
      <Contact/>
    </div>
  )
}

export default App
