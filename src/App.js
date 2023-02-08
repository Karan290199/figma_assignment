import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AddItem from "./Pages/AddItem";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path='/addItem' element = {<AddItem/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
