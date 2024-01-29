import "./MultiplayerWinner.scss";
import RestartButton from "../RestartButton/RestartButton";
import NewGameButton from "../NewGameButton/NewGameButton";

function MultiplayerWinner() {
  return (
    <>
      <div className="multi-winner__overlay">
        <div className="multi-winner__container ">
          <p className="multi-winner__title">Player 3 Wins!</p>
          <p className="multi-winner__label">Game Over! Here are the results...</p>
          <div className="multi-winner__details player-winner">
            <p className="winner-labels player-winner">Player 3 (Winner!)</p>
            <p className="winner-details player-winner">8 Pairs</p>
          </div>
          <div className="multi-winner__details">
            <div><p className="winner-labels">Player 1</p></div>
            <div><p className="winner-details">4 Pairs</p></div>
          </div>
          <div className="multi-winner__details">
            <div><p className="winner-labels">Player 2</p></div>
            <div><p className="winner-details">3 Pairs</p></div>
          </div>
          <div className="multi-winner__details">
            <div><p className="winner-labels">Player 4</p></div>
            <div><p className="winner-details">1 Pairs</p></div>
          </div>
          <RestartButton />
          <NewGameButton />
        </div>
      </div>
    </>
  );
}

export default MultiplayerWinner;