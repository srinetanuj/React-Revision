
import './App.css';
import Counter from './Components/Counter';
import Timer from './Components/Timer';
import {useState} from "react";

function App() {

  const [showTime, setShowTimer] = useState(true);
  return (
    <div className="App">
      <header className="App-header">
       {/* <Counter/> */}
       {showTime && < Timer/>}
       <button onClick={()=>setShowTimer(!showTime)}>{showTime ? "HIDE COUNTER" : "SHOW COUNTER"}</button>
      </header>
    </div>
  );
}

export default App;
