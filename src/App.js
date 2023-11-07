import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authentication from "./page/authentication";
import Home from "./page/home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Authentication />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
