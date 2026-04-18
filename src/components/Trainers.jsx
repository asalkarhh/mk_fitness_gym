import { FaStar } from 'react-icons/fa'

const trainers = [
  {
    name: 'Rohit Patil',
    specialty: 'Strength Coach',
    image: 'https://images.unsplash.com/photo-1544739313-6fca3a1d258c?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Sneha Kulkarni',
    specialty: 'Cardio Expert',
    image: 'https://images.unsplash.com/photo-1546484959-f4f151daa5fa?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Arjun More',
    specialty: 'Transformation Coach',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
  },
]

function Trainers() {
  return (
    <section id="trainers" className="container">
      <div className="text-center mb-5" data-aos="fade-up">
        <span className="section-heading">Our Trainers</span>
        <h2 className="section-title">Trainers Driving Your Success</h2>
        <p className="section-text mx-auto">
          Certified, experienced, and locally trusted coaches helping members from first workout to peak performance.
        </p>
      </div>

      <div className="row gy-4">
        {trainers.map((trainer, index) => (
          <div className="col-md-6 col-lg-4" key={trainer.name} data-aos="fade-up" data-aos-delay={index * 80}>
            <article className="trainer-card card-glass h-100">
              <img src={trainer.image} alt={trainer.name} />
              <div className="trainer-body">
                <h5>{trainer.name}</h5>
                <p className="small-text mb-3">{trainer.specialty}</p>
                <div className="star-rating">
                  <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                </div>
                <p className="small-text mb-0">Expert guidance, corrective coaching, and daily motivation.</p>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Trainers
