import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Companies from "./components/Companies/Companies.jsx"
import Residencies from "./components/Residencies/Residencies.jsx";

import './App.css'
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Header />
        <Hero />
      </div>
      <Companies/>
      <Residencies/>
    </div>
  );
}

export default App;
