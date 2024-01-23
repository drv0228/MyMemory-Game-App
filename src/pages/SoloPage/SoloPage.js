import "./SoloPage.scss";
import NavBar from "../../components/NavBar/NavBar";
import StartedGrid4x4 from "../../components/StartedGrid4x4/StartedGrid4x4";

function SoloPage() {
    return (
      <>
      <NavBar />
      <StartedGrid4x4 />
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