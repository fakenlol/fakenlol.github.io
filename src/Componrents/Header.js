import '../Styles/Header.css'

function Header(props) {
    return(
<nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid d-flex flex-row justify-content-between">
    <div>
        <a className="navbar-brand text-light" href="#">Facundo Ferrari</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
    </div>
    <div id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link text-light active" aria-current="page" href="#">Home</a>
        <a className="nav-link text-light" href="#">Projects</a>
        <a className="nav-link text-light" href="#">My Art</a>
        <a className="nav-link text-light" href='#'>Contact</a>
      </div>
    </div>
  </div>
</nav>
    );
}

export default Header;