/*
 * @Author: chaochao
 * @Date: 2021-03-25 22:01:31
 * @LastEditTime: 2021-04-23 20:46:45
 */
import logo from './logo.svg';
import Main from './components/App';
import './App.css';

function App() {
  return (
    <div className="App">
      <p>
        1
        <span>span</span>
        2
      </p>
      <Main />
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
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
