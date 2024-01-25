import "./MultiplayerPage.scss";
import NavBar from "../../components/NavBar/NavBar";
import StartedGrid6x6 from "../../components/StartedGrid6x6/StartedGrid6x6";

function MultiplayerPage({openModal}) {
  return (
    <>
      <NavBar openModal={openModal} />
      <StartedGrid6x6 />
      <section className="page__counter">
        <div className="counter-container">
          <p className="counter-labels">P1</p>
          <p className="counter">4</p>
        </div>
        <div className="counter-container">
          <p className="counter-labels">P2</p>
          <p className="solo-counter">4</p>
        </div>
        <div className="counter-container">
          <p className="counter-labels">P3</p>
          <p className="counter">2</p>
        </div>
        <div className="counter-container">
          <p className="counter-labels">P4</p>
          <p className="solo-counter">0</p>
        </div>
      </section>
    </>
  );
}

export default MultiplayerPage;
