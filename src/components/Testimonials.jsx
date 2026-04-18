import { useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa'

const testimonials = [
  {
    name: 'Aditi Sharma',
    message: 'MK Fitness changed my routine. The trainers push me in the right way and the results are real.',
    rating: 5,
  },
  {
    name: 'Vikram Deshpande',
    message: 'Great ambience, excellent equipment, and classes that keep me motivated every day.',
    rating: 5,
  },
  {
    name: 'Neha Kulkarni',
    message: 'I lost 8kg while gaining muscle. The coaches made sure I stayed consistent and confident.',
    rating: 5,
  },
]

function Testimonials() {
  const [current, setCurrent] = useState(0)

  const handlePrev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  const handleNext = () => setCurrent((prev) => (prev + 1) % testimonials.length)

  return (
    <section id="testimonials" className="container">
      <div className="text-center mb-5" data-aos="fade-up">
        <span className="section-heading">Testimonials</span>
        <h2 className="section-title">What Our Members Say</h2>
        <p className="section-text mx-auto">
          Hear from members who achieved strength, confidence, and an energised lifestyle.
        </p>
      </div>

      <div className="position-relative" data-aos="fade-up" data-aos-delay="100">
        <article className="testimonial-card card-glass mx-auto p-5" style={{ maxWidth: 760 }}>
          <div className="star-rating mb-3">
            {Array.from({ length: testimonials[current].rating }).map((_, idx) => (
              <FaStar key={idx} />
            ))}
          </div>
          <p className="section-text mb-4">“{testimonials[current].message}”</p>
          <strong>{testimonials[current].name}</strong>
        </article>

        <div className="d-flex justify-content-center gap-3 mt-4">
          <button className="btn btn-outline-accent" onClick={handlePrev}>
            <FaChevronLeft />
          </button>
          <button className="btn btn-accent" onClick={handleNext}>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
