import "./ModalRNR.scss";

function ModalRNR() {
    return (
      <>
      <div className="modal-overlay">
        <div className="modal">
        <button className="button_reset">Restart</button>
        <button className="button_new-res">New Game</button>
        <button className="button_new-res">Resume Game</button>
        </div>
        </div>
      </>
    );
}

    export default ModalRNR;