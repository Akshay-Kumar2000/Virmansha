import Marquee from "./Components/TopLine";
import Navbar from "./Components/Nav"
// import CollapsibleExample from "./Components/Navbar"
import { ControlledCarousel } from "./Components/Corousel";
import './App.css';

function App() {
  return (
    <div className="App">
      <Marquee />
      <hr />
      <Navbar />
      {/* <CollapsibleExample /> */}
      <hr />
      <ControlledCarousel />
    </div>
  );
}

export default App;
