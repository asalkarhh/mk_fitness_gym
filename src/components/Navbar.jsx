import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const isHomePage = location.pathname === '/'

  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom sticky-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          MK FITNESS
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto align-items-center">
            {isHomePage ? (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#branches">
                    Branches
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#services">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#trainers">
                    Trainers
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
            )}
            <li className="nav-item">
              <Link className="nav-link" to="/franchise">
                Franchise
              </Link>
            </li>
          </ul>

          <div className="d-flex gap-2 ms-lg-4 mt-3 mt-lg-0">
            {isHomePage ? (
              <>
                <a className="btn btn-accent" href="#contact">
                  Join Now
                </a>
                <a className="btn btn-outline-accent" href="#contact">
                  Book Free Trial
                </a>
              </>
            ) : (
              <>
                <Link className="btn btn-accent" to="/#contact">
                  Join Now
                </Link>
                <Link className="btn btn-outline-accent" to="/#contact">
                  Book Free Trial
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
