
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import StartGamePage from "./pages/StartGamePage/StartGamePage";
import SoloPage from "./pages/SoloPage/SoloPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<StartGamePage />} /> */}
          <Route path="/" element={<SoloPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
