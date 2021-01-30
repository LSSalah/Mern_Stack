import './App.css';
import FirstComponent from './components/FirstComponent';
function App() {
  return (
    <div className="App">
      <FirstComponent firstName= {"Jane"} lastName={"Doe"} age= {45} color={"Black"}/>
      <FirstComponent firstName= {"John"} lastName={"Smith"} age= {88} color={"Brown"}  />
      <FirstComponent firstName= {"Millard"} lastName={"Fillmore"} age= {50} color={"Brown"}  />
      <FirstComponent firstName= {"Maria"} lastName={"Smith"} age= {62} color={"Brown"}  />
    </div>
  );
}

export default App;
