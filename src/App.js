import logo from './logo.svg';
import './App.css';
import {internalIpV6, internalIpV4} from 'internal-ip';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    console.log("started app");
    console.log(internalIpV4().then((res) => {
      console.log(res);
    }));
  })
  return (
    <div className="App">
      <header className="App-header">
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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
