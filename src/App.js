// import logo from './logo.svg';
import './App.css';
import About from './component/About';
import Home from './component/Home';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="App">
        <Navbar/>
       <h2>Learn React with Ahsan</h2>
       <h3>What is is your name </h3>
       <Home/>
       <About/>
     
    </div>
  );
}  

export default App;
