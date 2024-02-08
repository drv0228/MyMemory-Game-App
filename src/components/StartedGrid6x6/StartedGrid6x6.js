import "./StartedGrid6x6.scss";

function StartedGrid6x6({matrix}) {
    return (
      <>
        <div className="container">
          <div className="box">{matrix[0][0]}</div>
          <div className="box">{matrix[0][1]}</div>
          <div className="box">{matrix[0][2]}</div>
          <div className="box">{matrix[0][3]}</div>
          <div className="box">{matrix[0][4]}</div>
          <div className="box">{matrix[0][5]}</div>
          <div className="box">{matrix[1][0]}</div>
          <div className="box">{matrix[1][1]}</div>
          <div className="box">{matrix[1][2]}</div>
          <div className="box">{matrix[1][3]}</div>
          <div className="box">{matrix[1][4]}</div>
          <div className="box">{matrix[1][5]}</div>
          <div className="box">{matrix[2][0]}</div>
          <div className="box">{matrix[2][1]}</div>
          <div className="box">{matrix[2][2]}</div>
          <div className="box">{matrix[2][3]}</div>
          <div className="box">{matrix[2][4]}</div>
          <div className="box">{matrix[2][5]}</div>
          <div className="box">{matrix[3][0]}</div>
          <div className="box">{matrix[3][1]}</div>
          <div className="box">{matrix[3][2]}</div>
          <div className="box">{matrix[3][3]}</div>
          <div className="box">{matrix[3][4]}</div>
          <div className="box">{matrix[3][5]}</div>
          <div className="box">{matrix[4][0]}</div>
          <div className="box">{matrix[4][1]}</div>
          <div className="box">{matrix[4][2]}</div>
          <div className="box">{matrix[4][3]}</div>
          <div className="box">{matrix[4][4]}</div>
          <div className="box">{matrix[4][5]}</div>
          <div className="box">{matrix[5][0]}</div>
          <div className="box">{matrix[5][1]}</div>
          <div className="box">{matrix[5][2]}</div>
          <div className="box">{matrix[5][3]}</div>
          <div className="box">{matrix[5][4]}</div>
          <div className="box">{matrix[5][5]}</div>
        </div>
      </>
    );
}

    export default StartedGrid6x6;