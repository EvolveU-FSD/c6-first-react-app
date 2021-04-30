import logo from './logo.svg';
import './App.css';

function NameBadge() {
  return <div>Hello, my name is Tony</div>
}

const NameBadge2 = () => <div>Hello, I too am Tony</div>

function App() {
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
        <NameBadge />
        <NameBadge2 />
      </header>
    </div>
  );
}

export default App;
