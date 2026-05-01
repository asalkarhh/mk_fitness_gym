import {
  FaAppleAlt,
  FaDumbbell,
  FaFireAlt,
  FaHeartbeat,
  FaHotTub,
  FaLock,
  FaMusic,
  FaRunning,
  FaShower,
  FaUser,
} from 'react-icons/fa'

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
  {
    title: 'Steam Bath',
    description: 'Relax, recover, and refresh after intense workouts with dedicated steam bath access.',
    icon: FaHotTub,
  },
  {
    title: 'Locker Facilities',
    description: 'Secure locker access so you can train comfortably without worrying about your belongings.',
    icon: FaLock,
  },
  {
    title: 'Shower Facility',
    description: 'Clean shower access for a fresh post-workout routine before heading back to your day.',
    icon: FaShower,
  },
  {
    title: 'CrossFit',
    description: 'Functional strength and conditioning workouts built around power, stamina, and mobility.',
    icon: FaDumbbell,
  },
  {
    title: 'Diet Plan Guidance',
    description: 'Goal-focused nutrition guidance to support fat loss, muscle gain, and daily performance.',
    icon: FaAppleAlt,
  },
  {
    title: 'Zumba',
    description: 'Fun dance-fitness sessions that combine cardio, rhythm, and full-body movement.',
    icon: FaMusic,
  },
  {
    title: 'Group Classes',
    description: 'Motivating group workout sessions for strength, stamina, flexibility, and consistency.',
    icon: FaUser,
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
