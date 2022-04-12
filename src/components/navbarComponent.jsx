import { Link } from 'react-scroll'

// BNechal jsem prvni kliknutelny odkaz v navbaru klasicky, aby šel vidět rozdíl po implementovani react-scroll ve smooth nastavení

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Smooth Scroll App
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link
                to="homeDummyDiv"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
                href="#"
                className="nav-link"
                aria-current="page"
              >
                Get to Top
              </Link>
              <Link
                to="prvniDummyDiv"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
                className="nav-link"
                href="#"
              >
                First
              </Link>
              <Link
                to="druhyDummyDiv"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
                className="nav-link"
                href="#"
              >
                Secound
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
