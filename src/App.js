// import logo from './logo.svg';
import './App.css';
import About from './component/About';
import Home from './component/Home';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with Ahsan
        </a>
      </header> */}
       <h2>Learn React with Ahsan</h2>
       <h3>What is is your name </h3>
       <Home/>
       <About/>
    </div>
  );
}  

export default App;
