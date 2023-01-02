import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello'
import Counter from './components/Counter'
import Events from './components/Events'
import Parent from './components/Parent'
import UserGreeting from './components/UserGreeting'
import NamedList from './components/NamedList'

function App() {
  return (
    <div className="App">
      <NamedList></NamedList>
      {/* <UserGreeting></UserGreeting> */}
      {/* <Parent></Parent> */}
      {/* <Events></Events> */}
      {/* <Counter></Counter> */}
      {/* <Greet ></Greet> */}
      {/* <Welcome name="Usha" caste="Upreti"></Welcome> */}
      {/* <Hello name="Usha" caste="Upreti">
        <button>Action</button>
      </Hello>
      <Hello name="Upesh" caste="Upreti">
        <p>Haha hi!</p>
      </Hello> */}

      {/* <Welcome></Welcome> */}
    </div>
  );
}

export default App;
