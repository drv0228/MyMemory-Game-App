import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

// import StartGamePage from "./pages/StartGamePage/StartGamePage";
// import SoloPage from "./pages/SoloPage/SoloPage";
import MultiplayerPage from "./pages/MultiplayerPage/MultiplayerPage";
import ModalRNR from "./components/ModalRNR/ModalRNR";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<StartGamePage />} /> */}
          <Route path="/" element={<MultiplayerPage openModal={openModal} />} />
        </Routes>
        {isModalOpen && <ModalRNR />}
      </BrowserRouter>
    </div>
  );
}

export default App;
