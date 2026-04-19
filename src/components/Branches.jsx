import { Link } from 'react-router-dom'
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaMap } from 'react-icons/fa'

const branches = [
  {
    id: 'marunji',
    title: 'Marunji Branch',
    address: 'Plot 12, Near Marunji Phata, Pune, Maharashtra',
    phone: '+91 98765 43210',
    timings: '5AM - 11PM',
    mapLink: 'https://goo.gl/maps/8G9z7vakzvH2',
    highlight: true
  },
  {
    id: 'punawale',
    title: 'Punawale Branch',
    address: 'Shop 6, Punawale Market, Pune, Maharashtra',
    phone: '+91 91234 56789',
    timings: '5AM - 11PM',
    mapLink: 'https://goo.gl/maps/7uyK3J4vcY32'
  }
]

function Branches() {
  return (
    <section id="branches" className="container">
      <div className="text-center mb-5" data-aos="fade-up">
        <span className="section-heading">Our Branches</span>
        <h2 className="section-title">Choose Your Nearest MK Fitness Gym</h2>
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
                  <span className="text-muted small-text">Mon - Sun</span>
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
                  <Link className="btn btn-outline-accent btn-sm" to={`/branch/${branch.id}#contact`}>
                    Visit Now
                  </Link>
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