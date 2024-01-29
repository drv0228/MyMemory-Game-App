import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

// import StartGamePage from "./pages/StartGamePage/StartGamePage";
// import SoloPage from "./pages/SoloPage/SoloPage";
import MultiplayerPage from "./pages/MultiplayerPage/MultiplayerPage";
// import ModalRNR from "./components/ModalRNR/ModalRNR";
// import SoloGameOver from "./components/SoloGameOver/SoloGameOver";
// import MultiplayerWinner from "./components/MultiplayerWinner/MultiplayerWinner";
import MultiplayerTie from "./components/MultiplayerTie/MultiplayerTie";

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
        {/* {isModalOpen && <ModalRNR />} */}
        {/* {isModalOpen && <SoloGameOver />} */}
        {/* {isModalOpen && <MultiplayerWinner />} */}
        {isModalOpen && <MultiplayerTie />}
      </BrowserRouter>
    </div>
  );
}

export default App;
