import "./StartedGrid4x4.scss";

function StartedGrid4x4({matrixOf4}) {
    return (
      <>
        <div className="container">
          <div className="box">{matrixOf4[0][0]}</div>
          <div className="box">{matrixOf4[0][1]}</div>
          <div className="box">{matrixOf4[0][2]}</div>
          <div className="box">{matrixOf4[0][3]}</div>
          <div className="box">{matrixOf4[1][0]}</div>
          <div className="box">{matrixOf4[1][1]}</div>
          <div className="box">{matrixOf4[1][2]}</div>
          <div className="box">{matrixOf4[1][3]}</div>
          <div className="box">{matrixOf4[2][0]}</div>
          <div className="box">{matrixOf4[2][1]}</div>
          <div className="box">{matrixOf4[2][2]}</div>
          <div className="box">{matrixOf4[2][3]}</div>
          <div className="box">{matrixOf4[3][0]}</div>
          <div className="box">{matrixOf4[3][1]}</div>
          <div className="box">{matrixOf4[3][2]}</div>
          <div className="box">{matrixOf4[3][3]}</div>
        </div>
      </>
    );
}

    export default StartedGrid4x4;