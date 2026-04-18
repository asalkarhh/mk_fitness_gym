const gallery = [
  {
    title: 'Full Body Strength',
    image: 'https://images.unsplash.com/photo-1583454110551-21f0e0b968cf?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Lean Cardio',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Athlete Training',
    image: 'https://images.unsplash.com/photo-1594737625785-40e59764b6ee?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Functional Fitness',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Strength Transformation',
    image: 'https://images.unsplash.com/photo-1508873699372-7ae51b0b7b2a?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Power Sessions',
    image: 'https://images.unsplash.com/photo-1546484959-f4f151daa5fa?auto=format&fit=crop&w=900&q=80',
  },
]

function Transformations() {
  return (
    <section id="transformations" className="container">
      <div className="text-center mb-5" data-aos="fade-up">
        <span className="section-heading">Transformations</span>
        <h2 className="section-title">Real Client Progress &amp; Gym Energy</h2>
        <p className="section-text mx-auto">
          Explore our gallery of before/after results and training moments that prove the MK Fitness difference.
        </p>
      </div>

      <div className="row g-4">
        {gallery.map((item, index) => (
          <div className="col-sm-6 col-lg-4" key={item.title} data-aos="zoom-in" data-aos-delay={index * 80}>
            <article className="gallery-card card-glass overflow-hidden">
              <img src={item.image} alt={item.title} />
              <div className="gallery-caption">
                <h5 className="mb-1">{item.title}</h5>
                <p className="small-text">Before / after inspiration</p>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Transformations
