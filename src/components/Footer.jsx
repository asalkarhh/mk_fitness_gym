import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import logo from '../assets/mkfitness.png'

function Footer() {
  return (
    <footer className="footer-dark py-5">
      <div className="container">
        <div className="row gy-4">
          <div className="col-md-4" data-aos="fade-right">
            <div className="d-flex align-items-center mb-3">
              <img src={logo} alt="M.K. Fitness" height="40" className="me-2" />
              <h5 className="mb-0">M.K. Fitness Club</h5>
            </div>
            <p className="small-text">
              Premium fitness destinations in Marunji and Punawale with high-performance
              training, community support, and measurable results.
            </p>
          </div>
          <div className="col-md-4" data-aos="fade-up">
            <h6>Branch Addresses</h6>
            <p className="small-text mb-2">Marunji Branch: Front of motherson Sony Company, Marunji, Pune</p>
            <p className="small-text">Punawale Branch: Near lotus business school, Kate Wasti, Punawale, Pune</p>
          </div>
          <div className="col-md-4" data-aos="fade-left">
            <h6>Connect with Us</h6>
            <div className="d-flex gap-3 mt-3">
              <a className="social-link" href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a className="social-link" href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a className="social-link" href="#" aria-label="Whatsapp">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-5 small-text">
          © 2026 M.K. Fitness Club. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
