import { useState } from 'react'

import logo from './logo.svg'
import './App.css'
import NameBadge from './components/NameBadge'

const NameBadge2 = () => <div>Hello, I too am Tony</div>

function App() {
  const [randomName, setRandomName] = useState("Unknown")
  const [randomNumber, setRandomNumber] = useState(0)
  
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
        <NameBadge firstName="Tony"/>
        <NameBadge2 />
        <p> Random name is { randomName }</p>
        <button onClick={ () => setRandomName('Dianne') }>Set randomName to Dianne</button>
        <button onClick={ () => setRandomName('Abdu') }>Set randomName to Abdu</button>
        <button onClick={ () => setRandomName('Al') }>Set randomName to Al</button>
        <p> Random number is { randomNumber }</p>
        <button onClick={ () => setRandomNumber(Math.random()*100) }>New random number</button>
      </header>
    </div>
  );
}

export default App;
