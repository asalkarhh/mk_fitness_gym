import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaMap } from 'react-icons/fa'

function BranchCard({ title, address, phone, timings, mapLink, highlight }) {
  return (
    <article className={`branch-card card-glass h-100 position-relative ${highlight ? 'popular' : ''}`} data-aos="fade-up">
      <div className="branch-body">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            <h5 className="mb-1">{title}</h5>
            <span className="badge badge-soft">Open Now</span>
          </div>
          <span className="text-muted small-text">Mon - Sun</span>
        </div>

        <p className="small-text mb-3">
          <FaMapMarkerAlt className="me-2" /> {address}
        </p>
        <p className="small-text mb-3">
          <FaPhoneAlt className="me-2" /> {phone}
        </p>
        <p className="small-text mb-4">
          <FaClock className="me-2" /> {timings}
        </p>

        <div className="d-flex gap-2 flex-wrap">
          <a className="btn btn-accent btn-sm" href={mapLink} target="_blank" rel="noreferrer">
            <FaMap className="me-2" /> View on Map
          </a>
          <a className="btn btn-outline-accent btn-sm" href="#contact">
            Visit Now
          </a>
        </div>
      </div>
    </article>
  )
}

export default BranchCard
