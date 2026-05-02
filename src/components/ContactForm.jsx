function ContactForm({ branch }) {
  const branchEmails = {
    Marunji: 'marunji.mkfitnessclub@gmail.com',
    Punawale: 'punawalemkfitness@gmail.com',
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const name = document.getElementById('name').value
    const phone = document.getElementById('phone').value
    const selectedBranch = branch ? branch.title : document.getElementById('branch').value
    const extraInfo = branch ? `Plan: ${document.getElementById('plan').value}` : `Query: ${document.getElementById('query').value}`
    const branchKey = branch ? branch.title.replace(' Branch', '') : selectedBranch

    const recipient = branch ? branch.manager.email : branchEmails[branchKey]
    const subject = `Free Consultation Request - ${selectedBranch}`
    const body = [
      'Free Consultation Request',
      '',
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Branch: ${selectedBranch}`,
      extraInfo,
    ].join('\n')

    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="contact" className="container">
      <div className="row align-items-center gy-5">
        <div className="col-lg-6" data-aos="fade-right">
          <span className="section-heading">Free Consultation</span>
          <h2 className="section-title">
            {branch ? `Contact ${branch.title}` : 'Ready to Start Your Fitness Journey?'}
          </h2>
          <p className="section-text">
            {branch
              ? `Fill in your details and our ${branch.title.toLowerCase()} team will reach out to help you choose the best program.`
              : 'Fill in your details and our team will reach out to help you choose the best program for the Marunji or Punawale branch.'
            }
          </p>

          <div className="card-glass p-4 mt-4">
            <div className="d-flex gap-3 flex-wrap">
              <div className="badge badge-soft">Expert Consultation</div>
              <div className="badge badge-soft">No Commitment</div>
              <div className="badge badge-soft">Rapid Response</div>
            </div>
          </div>
        </div>

        <div className="col-lg-6" data-aos="fade-left">
          <form className="card-glass p-4 p-md-5" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="form-label" htmlFor="name">
                Name
              </label>
              <input className="form-control" id="name" type="text" placeholder="Enter your name" required />
            </div>
            <div className="mb-4">
              <label className="form-label" htmlFor="phone">
                Phone
              </label>
              <input className="form-control" id="phone" type="tel" placeholder="Enter your phone number" required />
            </div>
            {!branch && (
              <div className="mb-4">
                <label className="form-label" htmlFor="branch">
                  Preferred Branch
                </label>
                <select className="form-select" id="branch" required>
                  <option value="">Select a branch</option>
                  <option>Marunji</option>
                  <option>Punawale</option>
                </select>
              </div>
            )}
          {branch ? (
            <div className="mb-4">
              <label className="form-label" htmlFor="plan">
                Interested Plan
              </label>
              <select className="form-select" id="plan" required>
                <option value="">Select a plan</option>
                {branch.plans.map(p => (
                  <option key={p.name} value={p.name}>{p.name} - {p.price}</option>
                ))}
              </select>
            </div>
          ) : (
            <div className="mb-4">
              <label className="form-label" htmlFor="query">
                Any Query
              </label>
              <textarea className="form-control" id="query" rows="3" placeholder="Tell us how we can help you" required></textarea>
            </div>
          )}
            <button className="btn btn-accent w-100" type="submit">
              Get Free Consultation
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
