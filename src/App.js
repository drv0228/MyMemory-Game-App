
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartGamePage from "./pages/StartGamePage/StartGamePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartGamePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
