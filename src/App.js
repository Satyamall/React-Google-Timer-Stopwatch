
import './App.css';
import StopWatch from './Components/Stopwatch';
import Timer from './Components/Timer';

function App() {
  return (
    <div className="App">
      <div className="timer">
        <Timer/>
      </div>
      <div className="stopwatch">
        <StopWatch/>
      </div>
    </div>
  );
}

export default App;
