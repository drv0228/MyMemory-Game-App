import "./NavBar.scss";

function NavBar({openModal}) {
    return (
      <>
        <div className="nav-bar">
        <p className="app-title">memory</p>
        <button onClick={openModal} className="app-menu">Menu</button>
        </div>
      </>
    );
}

    export default NavBar;