import { FaDumbbell, FaRunning, FaUser, FaFireAlt, FaHeartbeat } from 'react-icons/fa'

const services = [
  {
    title: 'Weight Training',
    description: 'Build lean muscle with custom strength programs and progressive lifting routines.',
    icon: FaDumbbell,
  },
  {
    title: 'Cardio Training',
    description: 'High-energy sessions designed for endurance, agility, and metabolism-boosting fat burn.',
    icon: FaRunning,
  },
  {
    title: 'Personal Training',
    description: 'One-on-one coaching for form, mindset, and a performance-driven workout plan.',
    icon: FaUser,
  },
  {
    title: 'Fat Loss Programs',
    description: 'Strategic conditioning and nutrition guidance to help you shed body fat efficiently.',
    icon: FaFireAlt,
  },
  {
    title: 'Muscle Gain Plans',
    description: 'Specialized hypertrophy cycles for strength gains and powerful aesthetics.',
    icon: FaHeartbeat,
  },
]

function Services() {
  return (
    <section id="services" className="container">
      <div className="text-center mb-5" data-aos="fade-up">
        <span className="section-heading">Services</span>
        <h2 className="section-title">Gym Programs Crafted for Real Results</h2>
        <p className="section-text mx-auto">
          Every plan is designed to fit your goals, from fat loss to raw strength and athlete-level conditioning.
        </p>
      </div>

      <div className="row gy-4">
        {services.map((service) => {
          const Icon = service.icon
          return (
            <div className="col-md-6 col-lg-4" key={service.title} data-aos="fade-up">
              <article className="service-card card-glass h-100 p-4">
                <div className="d-flex align-items-center justify-content-center mb-4 icon-wrapper rounded-circle" style={{ width: 60, height: 60, background: 'rgba(114,255,61,0.14)', color: '#72ff3d' }}>
                  <Icon size={22} />
                </div>
                <h5>{service.title}</h5>
                <p className="small-text mt-3">{service.description}</p>
              </article>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Services
