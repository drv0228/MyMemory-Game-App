import "./MultiplayerTie.scss";
import RestartButton from "../RestartButton/RestartButton";
import NewGameButton from "../NewGameButton/NewGameButton";

function MultiplayerTie() {
  return (
    <>
      <div className="multi-tie__overlay">
        <div className="multi-tie__container ">
          <p className="multi-tie__title">It's a tie!</p>
          <p className="multi-tie__label">Game Over! Here are the results...</p>
          <div className="multi-tie__details players-tie">
            <p className="multi-tie__labels players-tie">Player 3 (Winner!)</p>
            <p className="tie-details players-tie">6 Pairs</p>
          </div>
          <div className="multi-tie__details players-tie">
            <div><p className="multi-tie__labels players-tie">Player 1 (Winner!)</p></div>
            <div><p className="tie-details players-tie">6 Pairs</p></div>
          </div>
          <div className="multi-tie__details">
            <div><p className="multi-tie__labels">Player 2</p></div>
            <div><p className="tie-details">3 Pairs</p></div>
          </div>
          <div className="multi-tie__details">
            <div><p className="multi-tie__labels">Player 4</p></div>
            <div><p className="tie-details">1 Pairs</p></div>
          </div>
          <RestartButton />
          <NewGameButton />
        </div>
      </div>
    </>
  );
}

export default MultiplayerTie;