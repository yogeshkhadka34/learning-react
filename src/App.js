import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello'

function App() {
  return (
    <div className="App">
      {/* <Greet ></Greet>
      <Welcome name="Usha" caste="Upreti"></Welcome>
      <Hello name="Usha" caste="Upreti">
        <button>Action</button>
      </Hello>
      <Hello name="Upesh" caste="Upreti">
        <p>Haha hi!</p>
      </Hello> */}

      <Welcome></Welcome>
    </div>
  );
}

export default App;
