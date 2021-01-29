import './App.css';
import FirstComponent from './components/FirstComponent';
import LightSwitch from './components/LightSwitch';
function App() {
  return (
    <div className="App">
      <FirstComponent firstName= {"Jane"} lastName={"Doe"} age= {45} color={"Black"}/>
      <FirstComponent firstName= {"John"} lastName={"Smith"} age= {88} color={"Brown"}  />
      <FirstComponent firstName= {"Millard"} lastName={"Fillmore"} age= {50} color={"Brown"}  />
      <FirstComponent firstName= {"Maria"} lastName={"Smith"} age= {62} color={"Brown"}  />
      <LightSwitch/>
    </div>
  );
}

export default App;
