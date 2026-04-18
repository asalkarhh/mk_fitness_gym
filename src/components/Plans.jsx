const plans = [
  {
    name: 'Basic',
    price: '₹1499',
    duration: 'per month',
    features: ['Gym access', 'Free orientation', 'Group classes', 'Fitness assessment'],
    highlight: false,
  },
  {
    name: 'Standard',
    price: '₹2499',
    duration: 'per month',
    features: ['All Basic features', 'Personal training', 'Nutrition guide', 'Progress tracking'],
    highlight: true,
  },
  {
    name: 'Premium',
    price: '₹3999',
    duration: 'per month',
    features: ['All Standard features', 'Unlimited classes', 'Recovery sessions', 'VIP support'],
    highlight: false,
  },
]

function Plans() {
  return (
    <section id="plans" className="container">
      <div className="text-center mb-5" data-aos="fade-up">
        <span className="section-heading">Membership Plans</span>
        <h2 className="section-title">Flexible Plans for Every Fitness Goal</h2>
        <p className="section-text mx-auto">
          Choose a membership that fits your schedule, budget, and training ambition.
        </p>
      </div>

      <div className="row gy-4">
        {plans.map((plan) => (
          <div className="col-md-6 col-lg-4" key={plan.name} data-aos="zoom-in">
            <article className={`plan-card card-glass h-100 p-4 ${plan.highlight ? 'popular' : ''}`}>
              <div className="plan-header">
                <div>
                  <span className="badge badge-soft mb-2">{plan.name}</span>
                  <h3 className="plan-price">{plan.price}</h3>
                </div>
                {plan.highlight && <span className="badge bg-success">Most Popular</span>}
              </div>
              <p className="plan-duration text-muted mb-4">{plan.duration}</p>
              <ul className="list-unstyled mb-4">
                {plan.features.map((item) => (
                  <li key={item} className="small-text mb-2">
                    ✓ {item}
                  </li>
                ))}
              </ul>
              <a className="btn btn-accent w-100" href="#contact">
                Choose Plan
              </a>
            </article>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Plans
