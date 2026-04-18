function FranchiseContact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would implement the actual form submission logic
    alert('Franchise inquiry submitted! We will contact you soon.')
  }

  return (
    <section id="franchise" className="container">
      <div className="row align-items-center gy-5">
        <div className="col-lg-6" data-aos="fade-right">
          <span className="section-heading">Franchise Opportunity</span>
          <h2 className="section-title">Join MK Fitness Family</h2>
          <p className="section-text">
            Interested in opening your own MK Fitness Gym? We offer comprehensive
            franchise support including location selection, equipment setup,
            marketing assistance, and ongoing operational guidance.
          </p>

          <div className="card-glass p-4 mt-4">
            <div className="d-flex gap-3 flex-wrap">
              <div className="badge badge-soft">Proven Business Model</div>
              <div className="badge badge-soft">Complete Training</div>
              <div className="badge badge-soft">Marketing Support</div>
              <div className="badge badge-soft">Equipment Setup</div>
            </div>
          </div>

          <div className="mt-4">
            <h5>Franchise Benefits:</h5>
            <ul className="small-text">
              <li>• Established brand recognition</li>
              <li>• Complete operational manual</li>
              <li>• Staff training programs</li>
              <li>• Ongoing support and guidance</li>
              <li>• Marketing and promotional materials</li>
            </ul>
          </div>
        </div>

        <div className="col-lg-6" data-aos="fade-left">
          <form className="card-glass p-4 p-md-5" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="form-label" htmlFor="franchise-name">
                Full Name
              </label>
              <input className="form-control" id="franchise-name" type="text" placeholder="Enter your full name" required />
            </div>
            <div className="mb-4">
              <label className="form-label" htmlFor="franchise-email">
                Email
              </label>
              <input className="form-control" id="franchise-email" type="email" placeholder="Enter your email" required />
            </div>
            <div className="mb-4">
              <label className="form-label" htmlFor="franchise-phone">
                Phone
              </label>
              <input className="form-control" id="franchise-phone" type="tel" placeholder="Enter your phone number" required />
            </div>
            <div className="mb-4">
              <label className="form-label" htmlFor="franchise-city">
                Preferred City
              </label>
              <input className="form-control" id="franchise-city" type="text" placeholder="City where you want to open" required />
            </div>
            <div className="mb-4">
              <label className="form-label" htmlFor="franchise-investment">
                Investment Budget
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
                Additional Information
              </label>
              <textarea
                className="form-control"
                id="franchise-message"
                rows="3"
                placeholder="Tell us about your background and why you're interested in MK Fitness franchise"
              ></textarea>
            </div>
            <button className="btn btn-accent w-100" type="submit">
              Apply for Franchise
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default FranchiseContact