import "./StartGamePage.scss";

function StartGamePage() {
    return (
      <main className="start-game">
        <section className="start-game__page">
        <h1 className="page-title">memory</h1>
        <div className="page-content">
            <p className="page-labels">Select Theme</p>
            <div>
                <button className="selected">Numbers</button>
                <button className="">Icons</button>
            </div>
            <p className="page-labels">Numbers of Players</p>
            <div>
                <button className="button-players selected">1</button>
                <button className="button-players">2</button>
                <button className="button-players">3</button>
                <button className="button-players">4</button>
            </div>
            <p className="page-labels">Grid Size</p>
            <div>
                <button className="button-grids selected">4x4</button>
                <button className="button-grids">6x6</button>
            </div>
            <button className="button-yellow">Start Game</button>
            </div>
        </section>
        </main>
    );
  }
  
  export default StartGamePage;