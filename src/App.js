import logo from './logo.svg';
import './App.css';
import Button from './components/Button';

function App() {
  const user = {
    name: 'notrodi',
    age: 24
  };

  const header2 = <h2>HEADER NUMBER TWO</h2>;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {header2}
        <p>
          {user.name} ({user.age}), edit <code>src/App.js</code> and save to reload.
        </p>

        <Button />

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
