import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/mkfitness.png'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  const isHomePage = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav 
      className={`navbar navbar-expand-lg navbar-dark navbar-custom fixed-top ${isScrolled ? 'scrolled' : ''}`}
      style={{
        transition: 'all 0.3s ease-in-out',
        backgroundColor: isScrolled || menuOpen ? 'rgba(6, 7, 8, 0.95)' : 'transparent',
        backdropFilter: isScrolled || menuOpen ? 'blur(10px)' : 'none',
        boxShadow: isScrolled ? '0 4px 30px rgba(0, 0, 0, 0.5)' : 'none',
        padding: isScrolled ? '12px 0' : '22px 0'
      }}
    >
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/" onClick={() => window.scrollTo(0, 0)}>
          <img src={logo} alt="M.K.Fitness" height="40" className="me-2" />
          <span className="navbar-brand-red">M.K.FITNESS</span>
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
