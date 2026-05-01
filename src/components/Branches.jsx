import { Link } from 'react-router-dom'
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaMap, FaWhatsapp } from 'react-icons/fa'

const branches = [
  {
    id: 'marunji',
    title: 'Marunji Branch',
    address: 'Front of motherson Sony Company, Hinjawadi - Kasarsai Rd, Marunji Village, Hinjawadi, Marunji, Pune, Maharashtra 411057',
    phone: '+91 98765 43210',
    whatsapp: '919689167644',
    timings: 'Mon-Sat: 5 am - 11 pm, Sun: 5 pm - 9 pm',
    mapLink: 'https://www.google.com/maps/place/M+K+Fitness+Club/@18.6164811,73.7084411,2449m/data=!3m1!1e3!4m6!3m5!1s0x3bc2bbce5b367cdb:0xa70a1e8f6a8a9c00!8m2!3d18.6140779!4d73.7105712!16s%2Fg%2F11fqpwmwvz?entry=ttu&g_ep=EgoyMDI2MDQxNS4wIKXMDSoASAFQAw%3D%3D',
    highlight: true
  },
  {
    id: 'punawale',
    title: 'Punawale Branch',
    address: 'Near Mumbai-pune Highway, Jambe Rd, near lotus business school, Kate Wasti, Punawale, Pune, Maharashtra 411033',
    phone: '+91 91234 56789',
    whatsapp: '918698967644',
    timings: 'Mon-Sat: 5 am - 11 pm, Sun: 5 pm - 9 pm',
    mapLink: 'https://www.google.com/maps/place/M.K+fitness+club,+punawale/@18.6327957,73.7362654,728m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bc2bb4be5c319d3:0x1cedf9a8c851bdee!8m2!3d18.6327957!4d73.7388403!16s%2Fg%2F11rck3pkg5?entry=ttu&g_ep=EgoyMDI2MDQxNS4wIKXMDSoASAFQAw%3D%3D'
  }
]

function Branches() {
  return (
    <section id="branches" className="container">
      <div className="text-center mb-5" data-aos="fade-up">
        <span className="section-heading">Our Branches</span>
        <h2 className="section-title">Choose Your Nearest M.K. Fitness Club</h2>
        <p className="section-text mx-auto">
          Two premium locations in Pune, each equipped for modern strength training,
          cardio conditioning, and wellness support.
        </p>
      </div>

      <div className="row gy-4">
        {branches.map((branch) => (
          <div className="col-lg-6" key={branch.id}>
            <article className={`branch-card card-glass h-100 position-relative ${branch.highlight ? 'popular' : ''}`} data-aos="fade-up">
              <div className="branch-body">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div>
                    <h5 className="mb-1">{branch.title}</h5>
                    <span className="badge badge-soft">Open Now</span>
                  </div>
                  <span className="badge badge-soft">Mon - Sun</span>
                </div>

                <p className="small-text mb-3">
                  <FaMapMarkerAlt className="me-2" /> {branch.address}
                </p>
                <p className="small-text mb-3">
                  <FaPhoneAlt className="me-2" /> {branch.phone}
                </p>
                <p className="small-text mb-4">
                  <FaClock className="me-2" /> {branch.timings}
                </p>

                <div className="d-flex gap-2 flex-wrap">
                  <Link className="btn btn-accent btn-sm" to={`/branch/${branch.id}`}>
                    <FaMap className="me-2" /> View Details
                  </Link>
                  <a
                    className="btn btn-outline-accent btn-sm"
                    href={`https://wa.me/${branch.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Chat with ${branch.title} on WhatsApp`}
                  >
                    <FaWhatsapp className="me-2" /> WhatsApp
                  </a>
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Branches
