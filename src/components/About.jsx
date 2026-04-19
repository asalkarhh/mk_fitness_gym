function About() {
  return (
    <section id="about" className="container">
      <div className="row align-items-center gy-5">
        <div className="col-lg-6" data-aos="fade-right">
          <div className="section-heading">About MK Fitness</div>
          <h2 className="section-title">Fuel Your Fitness Journey with Discipline &amp; Energy</h2>
          <p className="section-text">
            MK Fitness Gym is a premium gym experience built for hustlers from Marunji
            and Punawale. आम्ही तुमची ट्रान्सफॉर्मेशन मिशनमध्ये सोबत आहोत.
            Our trainers combine science-backed workouts, personalized nutrition
            guidance, and local trust to help you achieve fast, healthy results.
          </p>

          <div className="row gy-3 mt-4">
            <div className="col-sm-6">
              <div className="info-card card-glass p-4 h-100">
                <strong>Mission</strong>
                <p className="small-text mb-0">Empower every member with strength, focus and sustained transformation.</p>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="info-card card-glass p-4 h-100">
                <strong>Vision</strong>
                <p className="small-text mb-0">A community where fitness is rooted in discipline and real measurable progress.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6" data-aos="fade-left">
          <div className="card-glass overflow-hidden" style={{ borderRadius: '32px' }}>
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80"
              alt="Gym workout"
              className="img-fluid w-100"
              style={{ objectFit: 'cover', height: '100%', minHeight: '400px' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
