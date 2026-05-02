import logo from '../assets/mkfitness.png'

function Footer() {
  return (
    <footer className="footer-dark py-5">
      <div className="container">
        <div className="row gy-4 justify-content-between">
          <div className="col-md-5" data-aos="fade-right">
            <div className="d-flex align-items-center mb-3">
              <img src={logo} alt="M.K. Fitness" height="40" className="me-2" />
              <h5 className="mb-0"><span className="navbar-brand-red">M.K. FITNESS CLUB</span></h5>
            </div>
            <p className="small-text">
              Premium fitness destinations in Marunji and Punawale with high-performance
              training, community support, and measurable results.
            </p>
          </div>
          <div className="col-md-5" data-aos="fade-up">
            <div className="footer-addresses ms-md-auto">
              <h6>Branch Addresses</h6>
              <div className="footer-address-row">
                <span>Marunji Branch</span>
                <p>Front of motherson Sony Company, Marunji, Pune</p>
              </div>
              <div className="footer-address-row">
                <span>Punawale Branch</span>
                <p>Near lotus business school, Kate Wasti, Punawale, Pune</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-4 pt-4 border-top border-secondary">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center w-100">
            <p className="mb-0 text-start">
              &copy; {new Date().getFullYear()} M.K. Fitness Club. All rights reserved.
            </p>
            <p className="mb-0 mt-2 mt-md-0 text-center text-md-end">
              Developed by{' '}
              <a
                href="https://asalkar.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent fw-bold developer-link"
              >
                Asalkar Techworks
              </a>
            </p>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
