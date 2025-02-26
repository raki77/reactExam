import logo from './logo.svg';
import './App.css';

let name = "홍길동";
let age = 23;
let mystyle = {color:"blue", fontSize:"23pt"};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={mystyle}>Hello React</h1>
        <h1>이름 : {name}</h1>
        <h1>나이 : {age}</h1>
      </header>
    </div>
  );
}

export default App;
