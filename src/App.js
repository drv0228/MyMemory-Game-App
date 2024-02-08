import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

// import StartGamePage from "./pages/StartGamePage/StartGamePage";
import SoloPage from "./pages/SoloPage/SoloPage";
// import MultiplayerPage from "./pages/MultiplayerPage/MultiplayerPage";
// import ModalRNR from "./components/ModalRNR/ModalRNR";
// import SoloGameOver from "./components/SoloGameOver/SoloGameOver";
// import MultiplayerWinner from "./components/MultiplayerWinner/MultiplayerWinner";
// import MultiplayerTie from "./components/MultiplayerTie/MultiplayerTie";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  function generateRandomMatrix(dimension) {
    //Create an array of unique random numbers
    const totalNumbers = dimension * dimension;
    const uniqueNumbers = Array.from({ length: totalNumbers / 2 }, (_, index) => index + 1);
  
    // Duplicate the array to make each number appear twice
    const allNumbers = [...uniqueNumbers, ...uniqueNumbers];
  
    //Shuffle the array
    for (let i = allNumbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allNumbers[i], allNumbers[j]] = [allNumbers[j], allNumbers[i]];
    }
  
    //Create the matrix
    const matrix = [];
    for (let i = 0; i < dimension; i++) {
      matrix.push(allNumbers.slice(i * dimension, (i + 1) * dimension));
    }
  
    return matrix;
  }
  
  // 4x4 matrix
  const matrixOf4 = generateRandomMatrix(4);
  const matrix = generateRandomMatrix(6);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<StartGamePage />} /> */}
          {/* <Route path="/" element={<MultiplayerPage openModal={openModal} matrix={matrix} matrixOF4={matrixOf4}/>} /> */}
           <Route path="/" element={<SoloPage openModal={openModal} matrix={matrix} matrixOf4={matrixOf4}/>} />
        </Routes>
        {/* {isModalOpen && <ModalRNR />} */}
        {/* {isModalOpen && <SoloGameOver />} */}
        {/* {isModalOpen && <MultiplayerWinner />} */}
        {/* {isModalOpen && <MultiplayerTie />} */}
      </BrowserRouter>
    </div>
  );
}

export default App;
