import { Link } from 'react-router-dom'
import { FaArrowLeft, FaHandshake, FaMapMarkerAlt, FaUsers, FaChartLine, FaShieldAlt, FaStar, FaCheckCircle } from 'react-icons/fa'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import FloatingActions from './FloatingActions.jsx'

function FranchisePage() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would implement the actual form submission logic
    alert('Franchise inquiry submitted! We will contact you soon.')
  }

  const benefits = [
    {
      icon: <FaHandshake />,
      title: 'Proven Business Model',
      description: 'Established systems and processes that guarantee success'
    },
    {
      icon: <FaUsers />,
      title: 'Complete Training',
      description: 'Comprehensive training for you and your staff'
    },
    {
      icon: <FaChartLine />,
      title: 'Marketing Support',
      description: 'National marketing campaigns and local support'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Brand Protection',
      description: 'Protected territory and brand guidelines'
    }
  ]

  const requirements = [
    'Minimum investment starting from ₹50 Lakhs',
    'Suitable commercial space (2000+ sq ft)',
    'Passion for fitness and entrepreneurship',
    'Basic business management experience preferred',
    'Commitment to MK Fitness standards and values'
  ]

  const process = [
    {
      step: '01',
      title: 'Initial Discussion',
      description: 'Share your interest and background with our franchise team'
    },
    {
      step: '02',
      title: 'Location Evaluation',
      description: 'We help you find and evaluate potential locations'
    },
    {
      step: '03',
      title: 'Agreement & Setup',
      description: 'Sign franchise agreement and begin setup process'
    },
    {
      step: '04',
      title: 'Training & Launch',
      description: 'Complete training program and grand opening'
    }
  ]

  return (
    <div className="app-shell">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="hero-section" style={{
          minHeight: '70vh',
          backgroundImage: `linear-gradient(135deg, rgba(6, 7, 8, 0.9), rgba(6, 7, 8, 0.85)), url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80')`
        }}>
          <div className="container hero-content">
            <Link to="/" className="btn btn-outline-accent mb-4">
              <FaArrowLeft className="me-2" /> Back to Home
            </Link>
            <span className="section-heading">Franchise Opportunity</span>
            <h1 className="hero-title">Join MK Fitness Family</h1>
            <p className="hero-copy">
              Be part of India's growing fitness revolution. Own a premium gym brand
              with proven success, comprehensive support, and unlimited growth potential.
            </p>
            <div className="d-flex gap-3 flex-wrap mt-4">
              <div className="badge badge-soft">₹50L+ Investment</div>
              <div className="badge badge-soft">Proven ROI</div>
              <div className="badge badge-soft">Complete Support</div>
              <div className="badge badge-soft">Brand Recognition</div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="container py-5">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="section-title">Why Choose MK Fitness Franchise?</h2>
            <p className="section-text">
              Join a winning team with comprehensive support, proven systems, and unlimited potential
            </p>
          </div>

          <div className="row gy-4">
            {benefits.map((benefit, index) => (
              <div className="col-lg-3 col-md-6" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="card-glass h-100 p-4 text-center">
                  <div className="benefit-icon mb-3">
                    {benefit.icon}
                  </div>
                  <h5 className="mb-3">{benefit.title}</h5>
                  <p className="small-text">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="container py-5">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="section-title">Franchise Process</h2>
            <p className="section-text">
              Simple 4-step process to become a MK Fitness franchise owner
            </p>
          </div>

          <div className="row gy-4">
            {process.map((step, index) => (
              <div className="col-lg-3 col-md-6" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="card-glass h-100 p-4 text-center">
                  <div className="step-number mb-3">{step.step}</div>
                  <h5 className="mb-3">{step.title}</h5>
                  <p className="small-text">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Requirements Section */}
        <section className="container py-5">
          <div className="row align-items-center gy-5">
            <div className="col-lg-6" data-aos="fade-right">
              <h2 className="section-title">Franchise Requirements</h2>
              <p className="section-text mb-4">
                We're looking for passionate entrepreneurs who share our vision
                of making fitness accessible to everyone.
              </p>

              <div className="card-glass p-4">
                <h5 className="mb-3">What We Look For:</h5>
                <ul className="list-unstyled">
                  {requirements.map((req, index) => (
                    <li key={index} className="d-flex align-items-start mb-2">
                      <FaCheckCircle className="text-accent me-3 mt-1" />
                      <span className="small-text">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left">
              <div className="card-glass p-4">
                <h5 className="mb-3">Investment Breakdown</h5>
                <div className="investment-breakdown">
                  <div className="d-flex justify-content-between mb-2">
                    <span>Franchise Fee</span>
                    <span>₹15 Lakhs</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Equipment & Setup</span>
                    <span>₹25 Lakhs</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Interior & Branding</span>
                    <span>₹8 Lakhs</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Working Capital</span>
                    <span>₹7 Lakhs</span>
                  </div>
                  <hr className="my-3" />
                  <div className="d-flex justify-content-between fw-bold">
                    <span>Total Investment</span>
                    <span>₹55 Lakhs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="container py-5">
          <div className="row align-items-center gy-5">
            <div className="col-lg-6" data-aos="fade-right">
              <h2 className="section-title">Start Your Journey</h2>
              <p className="section-text mb-4">
                Ready to become a MK Fitness franchise owner? Fill out the form below
                and our franchise team will contact you within 24 hours.
              </p>

              <div className="row g-3 mb-4">
                <div className="col-6">
                  <div className="stat-card card-glass p-3 text-center">
                    <div className="stat-number">50+</div>
                    <div className="stat-label">Franchises</div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="stat-card card-glass p-3 text-center">
                    <div className="stat-number">5 Years</div>
                    <div className="stat-label">Experience</div>
                  </div>
                </div>
              </div>

              <div className="card-glass p-4">
                <h5 className="mb-3">Support You Get:</h5>
                <div className="d-flex gap-3 flex-wrap">
                  <div className="badge badge-soft">Site Selection</div>
                  <div className="badge badge-soft">Interior Design</div>
                  <div className="badge badge-soft">Staff Training</div>
                  <div className="badge badge-soft">Marketing</div>
                  <div className="badge badge-soft">Operations</div>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left">
              <form className="card-glass p-4 p-md-5" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="form-label" htmlFor="franchise-name">
                    Full Name *
                  </label>
                  <input className="form-control" id="franchise-name" type="text" placeholder="Enter your full name" required />
                </div>
                <div className="mb-4">
                  <label className="form-label" htmlFor="franchise-email">
                    Email *
                  </label>
                  <input className="form-control" id="franchise-email" type="email" placeholder="Enter your email" required />
                </div>
                <div className="mb-4">
                  <label className="form-label" htmlFor="franchise-phone">
                    Phone *
                  </label>
                  <input className="form-control" id="franchise-phone" type="tel" placeholder="Enter your phone number" required />
                </div>
                <div className="mb-4">
                  <label className="form-label" htmlFor="franchise-city">
                    Preferred City *
                  </label>
                  <input className="form-control" id="franchise-city" type="text" placeholder="City where you want to open" required />
                </div>
                <div className="mb-4">
                  <label className="form-label" htmlFor="franchise-experience">
                    Business Experience
                  </label>
                  <select className="form-select" id="franchise-experience">
                    <option value="">Select your experience level</option>
                    <option>First-time entrepreneur</option>
                    <option>1-3 years experience</option>
                    <option>3-5 years experience</option>
                    <option>5+ years experience</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="form-label" htmlFor="franchise-investment">
                    Investment Budget *
                  </label>
                  <select className="form-select" id="franchise-investment" required>
                    <option value="">Select your budget range</option>
                    <option>₹50-100 Lakhs</option>
                    <option>₹100-150 Lakhs</option>
                    <option>₹150-200 Lakhs</option>
                    <option>Above ₹200 Lakhs</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="form-label" htmlFor="franchise-message">
                    Tell us about yourself
                  </label>
                  <textarea
                    className="form-control"
                    id="franchise-message"
                    rows="3"
                    placeholder="Why do you want to own a MK Fitness franchise? Any relevant experience?"
                  ></textarea>
                </div>
                <button className="btn btn-accent w-100" type="submit">
                  Apply for Franchise
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="container py-5">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="section-title">Our Success Story</h2>
            <p className="section-text">
              Visit our flagship branches to see the MK Fitness experience firsthand
            </p>
          </div>

          <div className="row gy-4">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="card-glass p-4">
                <h5 className="mb-3">
                  <FaMapMarkerAlt className="me-2 text-accent" />
                  Marunji Flagship Branch
                </h5>
                <p className="small-text mb-3">Plot 12, Near Marunji Phata, Pune, Maharashtra</p>
                <div style={{ height: '250px', borderRadius: '12px', overflow: 'hidden' }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.123456789012!2d73.789012!3d18.567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1234567890%3A0x123456789abcdef!2sMarunji%20Phata!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Marunji Branch Map"
                  ></iframe>
                </div>
                <a className="btn btn-accent mt-3 w-100" href="https://goo.gl/maps/8G9z7vakzvH2" target="_blank" rel="noreferrer">
                  Get Directions
                </a>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left">
              <div className="card-glass p-4">
                <h5 className="mb-3">
                  <FaMapMarkerAlt className="me-2 text-accent" />
                  Punawale Branch
                </h5>
                <p className="small-text mb-3">Shop 6, Punawale Market, Pune, Maharashtra</p>
                <div style={{ height: '250px', borderRadius: '12px', overflow: 'hidden' }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.987654321098!2d73.876543!3d18.654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c9876543210%3A0xfedcba987654321!2sPunawale%20Market!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Punawale Branch Map"
                  ></iframe>
                </div>
                <a className="btn btn-accent mt-3 w-100" href="https://goo.gl/maps/7uyK3J4vcY32" target="_blank" rel="noreferrer">
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </div>
  )
}

export default FranchisePage