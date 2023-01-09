import logo from './logo.svg';
import './App.css';
import { Navbar, Header, About, Contact1, Services, Why, Gallery, Contact2 } from './components'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Contact1 />
      <Services />
      <Why />
      <Gallery />
      <Contact2 />
    </div>
  );
}

export default App;
