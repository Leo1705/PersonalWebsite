import LandingPage from './components/Landing';
import AboutMe from './components/About';
import RecentProjects from './components/RecentProjects';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import Contact from './components/Contact';
import './style/App.css';

function App() {
  return (
    <div className="App">
          <ParallaxProvider>
        <LandingPage/>
      <AboutMe />
      <RecentProjects />
    <Contact />
    <Footer/>
      </ParallaxProvider>
    </div>
  );
}

export default App;
