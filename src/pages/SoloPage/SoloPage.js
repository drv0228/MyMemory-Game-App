import "./SoloPage.scss";
import NavBar from "../../components/NavBar/NavBar";
import StartedGrid6x6 from "../../components/StartedGrid6x6/StartedGrid6x6";

function SoloPage() {
    return (
      <>
      <NavBar />
      <StartedGrid6x6 />
      <section className="solo-page__counter">
       <div className="counter-container">
        <p className="counter-labels">Time</p>
        <p className="solo-counter">1:53</p></div>
       <div className="counter-container">
       <p className="counter-labels">Moves</p>
        <p className="solo-counter">39</p></div>
      </section>
      </>
    );
}

    export default SoloPage;