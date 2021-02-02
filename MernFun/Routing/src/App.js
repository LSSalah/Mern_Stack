import './App.css';
import { Router } from '@reach/router';
import HomeComponent from './components/HomeComponent';
import NumberComponent from './components/NumberComponent';
import HelloComponent from './components/HelloComponent';
function App() {
  return (
    <div className="App">
      <Router>
        <HomeComponent path="/home" />
        <NumberComponent path="/:id" />
        <HelloComponent path="/hello/:name" />
        <HelloComponent path="/hello/:name/:colorx/:colory" />
        <HelloComponent path="/hello/:name/:colorx" />
      </Router>
    </div>
  );
}

export default App;
