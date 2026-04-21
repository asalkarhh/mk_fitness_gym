import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa'

const branches = [
  {
    id: 'marunji',
    title: 'Marunji Branch',
    address: 'Front of motherson Sony Company, Hinjawadi - Kasarsai Rd, Marunji Village, Hinjawadi, Marunji, Pune, Maharashtra 411057',
    phone: '+91 98765 43210',
    timings: 'Mon-Sat: 5 am - 11 pm, Sun: 5 pm - 9 pm',
    mapLink: 'https://www.google.com/maps/place/M+K+Fitness+Club/@18.6164811,73.7084411,2449m/data=!3m1!1e3!4m6!3m5!1s0x3bc2bbce5b367cdb:0xa70a1e8f6a8a9c00!8m2!3d18.6140779!4d73.7105712!16s%2Fg%2F11fqpwmwvz?entry=ttu&g_ep=EgoyMDI2MDQxNS4wIKXMDSoASAFQAw%3D%3D',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.891176195611!2d73.7080015752021!3d18.61408278252254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbce5b367cdb%3A0xa70a1e8f6a8a9c00!2sM%20K%20Fitness%20Club!5e0!3m2!1sen!2sin!4v1716981156681!5m2!1sen!2sin',
    highlight: true
  },
  {
    id: 'punawale',
    title: 'Punawale Branch',
    address: 'Near Mumbai-pune Highway, Jambe Rd, near lotus business school, Kate Wasti, Punawale, Pune, Maharashtra 411033',
    phone: '+91 91234 56789',
    timings: 'Mon-Sat: 5 am - 11 pm, Sun: 5 pm - 9 pm',
    mapLink: 'https://www.google.com/maps/place/M.K+fitness+club,+punawale/@18.6327957,73.7362654,728m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bc2bb4be5c319d3:0x1cedf9a8c851bdee!8m2!3d18.6327957!4d73.7388403!16s%2Fg%2F11rck3pkg5?entry=ttu&g_ep=EgoyMDI2MDQxNS4wIKXMDSoASAFQAw%3D%3D',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.1!2d73.7388403!3d18.6327957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bb4be5c319d3%3A0x1cedf9a8c851bdee!2sM.K%20fitness%20club%2C%20punawale!5e0!3m2!1sen!2sin!4v1716981156681!5m2!1sen!2sin'
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