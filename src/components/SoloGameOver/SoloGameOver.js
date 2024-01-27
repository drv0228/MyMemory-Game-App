import "./SoloGameOver.scss";
import RestartButton from "../RestartButton/RestartButton";
import NewGameButton from "../NewGameButton/NewGameButton";

function SoloGameOver() {
  return (
    <>
      <div className="game-over__overlay">
        <div className="game-over__details">
          <p className="game-over__title">You did it!</p>
          <p className="page-label">Game Over! Here's how you got on...</p>
          <div className="game-details__container">
            <p className="page-labels">Time Elapsed</p>
            <p className="game-details">1:53</p>
          </div>
          <div className="game-details__container">
            <div><p className="page-labels">Moves Taken</p></div>
            <div><p className="game-details">39 Moves</p></div>
          </div>
          <RestartButton />
          <NewGameButton />
        </div>
      </div>
    </>
  );
}

export default SoloGameOver;
