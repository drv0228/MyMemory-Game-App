import "./SoloPage.scss";
import NavBar from "../../components/NavBar/NavBar";
// import StartedGrid6x6 from "../../components/StartedGrid6x6/StartedGrid6x6";
import StartedGrid4x4 from "../../components/StartedGrid4x4/StartedGrid4x4";

function SoloPage({matrixOf4}) {
    return (
      <>
      <NavBar matrixOf4={matrixOf4} />
      <StartedGrid4x4 matrixOf4={matrixOf4}/>
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