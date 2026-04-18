import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="footer-dark py-5">
      <div className="container">
        <div className="row gy-4">
          <div className="col-md-4" data-aos="fade-right">
            <h5>MK Fitness Gym</h5>
            <p className="small-text">
              Premium fitness destinations in Marunji and Punawale with high-performance
              training, community support, and measurable results.
            </p>
          </div>
          <div className="col-md-4" data-aos="fade-up">
            <h6>Branch Addresses</h6>
            <p className="small-text mb-2">Marunji Branch: Plot 12, Near Marunji Phata, Pune</p>
            <p className="small-text">Punawale Branch: Shop 6, Punawale Market, Pune</p>
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
          © 2026 MK Fitness Gym. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
