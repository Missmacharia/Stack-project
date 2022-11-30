import "./App.css";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Service from "./Routes/Service";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Service />
    </div>
  );
}

export default App;
