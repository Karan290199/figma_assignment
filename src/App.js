import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AddItem from "./Pages/AddItem";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route exact path='/addItem' element = {<AddItem/>}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
