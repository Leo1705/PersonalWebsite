import LandingPage from './components/Landing';
import AboutMe from './components/About';
import 'bootstrap/dist/css/bootstrap.css';
import './style/App.css';

function App() {
  return (
    <div className="App">
        <LandingPage/>
      <AboutMe />
    </div>
  );
}

export default App;
