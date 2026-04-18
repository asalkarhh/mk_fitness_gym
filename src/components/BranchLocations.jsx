import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa'

const branches = [
  {
    id: 'marunji',
    title: 'Marunji Branch',
    address: 'Plot 12, Near Marunji Phata, Pune, Maharashtra',
    phone: '+91 98765 43210',
    timings: '5AM - 11PM',
    mapLink: 'https://goo.gl/maps/8G9z7vakzvH2',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.123456789012!2d73.789012!3d18.567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1234567890%3A0x123456789abcdef!2sMarunji%20Phata!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin',
    highlight: true
  },
  {
    id: 'punawale',
    title: 'Punawale Branch',
    address: 'Shop 6, Punawale Market, Pune, Maharashtra',
    phone: '+91 91234 56789',
    timings: '5AM - 11PM',
    mapLink: 'https://goo.gl/maps/7uyK3J4vcY32',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.987654321098!2d73.876543!3d18.654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c9876543210%3A0xfedcba987654321!2sPunawale%20Market!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin'
  }
]

function BranchLocations() {
  return (
    <section className="container py-5">
      <div className="text-center mb-5" data-aos="fade-up">
        <span className="section-heading">Find Us</span>
        <h2 className="section-title">Our Branch Locations</h2>
        <p className="section-text">
          Visit our premium fitness centers located across Pune
        </p>
      </div>

      <div className="row gy-4">
        {branches.map((branch, index) => (
          <div className="col-lg-6" key={branch.id} data-aos="fade-up" data-aos-delay={index * 200}>
            <div className={`card-glass h-100 p-4 ${branch.highlight ? 'border-accent' : ''}`}>
              <div className="d-flex align-items-center mb-3">
                <FaMapMarkerAlt className="text-accent me-3 fs-4" />
                <div>
                  <h5 className="mb-1">{branch.title}</h5>
                  {branch.highlight && <span className="badge badge-accent">Flagship</span>}
                </div>
              </div>

              <div className="mb-3">
                <p className="small-text mb-2">
                  <FaMapMarkerAlt className="me-2" />
                  {branch.address}
                </p>
                <p className="small-text mb-2">
                  <FaPhoneAlt className="me-2" />
                  {branch.phone}
                </p>
                <p className="small-text mb-2">
                  <FaClock className="me-2" />
                  {branch.timings}
                </p>
              </div>

              <div style={{ height: '250px', borderRadius: '12px', overflow: 'hidden', marginBottom: '1rem' }}>
                <iframe
                  src={branch.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${branch.title} Map`}
                ></iframe>
              </div>

              <a className="btn btn-accent w-100" href={branch.mapLink} target="_blank" rel="noreferrer">
                Get Directions
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default BranchLocations