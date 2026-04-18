import { useParams, Link } from 'react-router-dom'
import { FaArrowLeft, FaMapMarkerAlt, FaPhoneAlt, FaClock, FaUser, FaDumbbell, FaRulerCombined, FaCamera } from 'react-icons/fa'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import FloatingActions from './FloatingActions.jsx'
import ContactForm from './ContactForm.jsx'

const branches = [
  {
    id: 'marunji',
    title: 'Marunji Branch',
    address: 'Plot 12, Near Marunji Phata, Pune, Maharashtra',
    phone: '+91 98765 43210',
    timings: '5AM - 11PM',
    mapLink: 'https://goo.gl/maps/8G9z7vakzvH2',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.123456789012!2d73.789012!3d18.567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1234567890%3A0x123456789abcdef!2sMarunji%20Phata!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin',
    manager: {
      name: 'Rajesh Kumar',
      phone: '+91 98765 43211',
      email: 'rajesh@mkfitness.com'
    },
    specs: {
      area: '2500 sq ft',
      equipment: 'Olympic weight sets, cardio machines, functional training area',
      facilities: 'Locker rooms, showers, sauna, nutrition bar',
      capacity: '50 members per session'
    },
    plans: [
      { name: 'Basic', price: '₹1499/mo', features: ['Gym access', 'Free orientation', 'Group classes'] },
      { name: 'Standard', price: '₹2499/mo', features: ['All Basic', 'Personal training', 'Nutrition guide'] },
      { name: 'Premium', price: '₹3999/mo', features: ['All Standard', 'Unlimited classes', 'VIP support'] }
    ],
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1583454110551-21f0e0b968cf?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1594737625785-40e59764b6ee?auto=format&fit=crop&w=900&q=80'
    ],
    trainers: [
      {
        name: 'Amit Singh',
        specialty: 'Strength & Conditioning',
        experience: '8 years',
        certifications: 'NASM-CPT, CrossFit L2',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80'
      },
      {
        name: 'Kavita Patel',
        specialty: 'Yoga & Flexibility',
        experience: '6 years',
        certifications: 'RYT-500, Pilates Certified',
        image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=400&q=80'
      },
      {
        name: 'Rahul Mehta',
        specialty: 'Weight Loss & Nutrition',
        experience: '5 years',
        certifications: 'Precision Nutrition, ISSA',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
      }
    ]
  },
  {
    id: 'punawale',
    title: 'Punawale Branch',
    address: 'Shop 6, Punawale Market, Pune, Maharashtra',
    phone: '+91 91234 56789',
    timings: '5AM - 11PM',
    mapLink: 'https://goo.gl/maps/7uyK3J4vcY32',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.987654321098!2d73.876543!3d18.654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c9876543210%3A0xfedcba987654321!2sPunawale%20Market!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin',
    manager: {
      name: 'Priya Sharma',
      phone: '+91 91234 56790',
      email: 'priya@mkfitness.com'
    },
    specs: {
      area: '2200 sq ft',
      equipment: 'Free weights, treadmills, cross-trainers, yoga mats',
      facilities: 'Changing rooms, parking, cafe, recovery zone',
      capacity: '45 members per session'
    },
    plans: [
      { name: 'Basic', price: '₹1499/mo', features: ['Gym access', 'Free orientation', 'Group classes'] },
      { name: 'Standard', price: '₹2499/mo', features: ['All Basic', 'Personal training', 'Nutrition guide'] },
      { name: 'Premium', price: '₹3999/mo', features: ['All Standard', 'Unlimited classes', 'VIP support'] }
    ],
    images: [
      'https://images.unsplash.com/photo-1508873699372-7ae51b0b7b2a?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1546484959-f4f151daa5fa?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80'
    ],
    trainers: [
      {
        name: 'Vikram Joshi',
        specialty: 'Bodybuilding & Powerlifting',
        experience: '10 years',
        certifications: 'IFBB Pro, USAPL',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80'
      },
      {
        name: 'Sneha Gupta',
        specialty: 'HIIT & Cardio',
        experience: '7 years',
        certifications: 'ACSM, HIIT Specialist',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80'
      },
      {
        name: 'Arjun Reddy',
        specialty: 'Sports Performance',
        experience: '9 years',
        certifications: 'CSCS, FMS',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'
      }
    ]
  }
]

function BranchPage() {
  const { branchId } = useParams()
  const branch = branches.find(b => b.id === branchId)

  if (!branch) {
    return (
      <div className="app-shell">
        <Navbar />
        <main className="container text-center py-5">
          <h2>Branch not found</h2>
          <Link to="/" className="btn btn-accent">Go Home</Link>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="app-shell">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="hero-section" style={{ minHeight: '60vh', backgroundImage: `linear-gradient(180deg, rgba(6, 7, 8, 0.85), rgba(6, 7, 8, 0.88)), url(${branch.images[0]})` }}>
          <div className="container hero-content">
            <Link to="/" className="btn btn-outline-accent mb-3">
              <FaArrowLeft className="me-2" /> Back to Home
            </Link>
            <h1 className="hero-title">{branch.title}</h1>
            <p className="hero-copy">
              Experience premium fitness at our {branch.title.toLowerCase()}.
              State-of-the-art equipment, expert trainers, and personalized programs.
            </p>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="container py-5">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="section-heading">Gallery</span>
            <h2 className="section-title">Explore Our Facility</h2>
          </div>
          <div className="row g-4">
            {branch.images.map((image, index) => (
              <div className="col-md-6 col-lg-3" key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
                <div className="gallery-card card-glass overflow-hidden">
                  <img src={image} alt={`${branch.title} facility ${index + 1}`} />
                  <div className="gallery-caption">
                    <FaCamera className="me-2" />
                    <span>Facility View</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Details Section */}
        <section className="container">
          <div className="row gy-5">
            <div className="col-lg-6" data-aos="fade-right">
              <h2 className="section-title mb-4">Branch Details</h2>
              <div className="card-glass p-4 mb-4">
                <h5 className="mb-3">Manager Details</h5>
                <p className="small-text mb-2"><FaUser className="me-2" /> {branch.manager.name}</p>
                <p className="small-text mb-2"><FaPhoneAlt className="me-2" /> {branch.manager.phone}</p>
                <p className="small-text mb-0">Email: {branch.manager.email}</p>
              </div>

              <div className="card-glass p-4 mb-4">
                <h5 className="mb-3">Gym Specifications</h5>
                <p className="small-text mb-2"><FaRulerCombined className="me-2" /> Area: {branch.specs.area}</p>
                <p className="small-text mb-2"><FaDumbbell className="me-2" /> Equipment: {branch.specs.equipment}</p>
                <p className="small-text mb-2">Facilities: {branch.specs.facilities}</p>
                <p className="small-text mb-0">Capacity: {branch.specs.capacity}</p>
              </div>

              <div className="card-glass p-4">
                <h5 className="mb-3">Contact & Timings</h5>
                <p className="small-text mb-2"><FaMapMarkerAlt className="me-2" /> {branch.address}</p>
                <p className="small-text mb-2"><FaPhoneAlt className="me-2" /> {branch.phone}</p>
                <p className="small-text mb-0"><FaClock className="me-2" /> {branch.timings}</p>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left">
              <div className="card-glass p-4 mb-4">
                <h5 className="mb-3">Location Map</h5>
                <div style={{ height: '300px', borderRadius: '12px', overflow: 'hidden' }}>
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
                <a className="btn btn-accent mt-3" href={branch.mapLink} target="_blank" rel="noreferrer">
                  Open in Google Maps
                </a>
              </div>

              <div className="card-glass p-4">
                <h5 className="mb-3">Membership Plans</h5>
                <div className="row gy-3">
                  {branch.plans.map((plan) => (
                    <div className="col-md-4" key={plan.name}>
                      <div className="plan-card card-glass h-100 p-3">
                        <h6>{plan.name}</h6>
                        <p className="plan-price mb-2">{plan.price}</p>
                        <ul className="list-unstyled small-text">
                          {plan.features.map((feature, idx) => (
                            <li key={idx}>• {feature}</li>
                          ))}
                        </ul>
                        <button className="btn btn-accent btn-sm w-100 mt-2" onClick={() => document.getElementById('contact').scrollIntoView()}>
                          Join Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trainers Section */}
        <section className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="section-heading">Expert Trainers</span>
            <h2 className="section-title">Meet Our {branch.title} Team</h2>
            <p className="section-text">
              Our certified trainers are dedicated to helping you achieve your fitness goals
              with personalized training programs and expert guidance.
            </p>
          </div>

          <div className="row gy-4">
            {branch.trainers.map((trainer, index) => (
              <div className="col-lg-4 col-md-6" key={trainer.name} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="card-glass h-100 p-4 text-center">
                  <div className="trainer-image mb-3">
                    <img
                      src={trainer.image}
                      alt={trainer.name}
                      className="rounded-circle"
                      style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                    />
                  </div>
                  <h5 className="mb-2">{trainer.name}</h5>
                  <p className="text-accent mb-2">{trainer.specialty}</p>
                  <div className="small-text mb-3">
                    <p><strong>Experience:</strong> {trainer.experience}</p>
                    <p><strong>Certifications:</strong> {trainer.certifications}</p>
                  </div>
                  <button className="btn btn-accent btn-sm" onClick={() => document.getElementById('contact').scrollIntoView()}>
                    Book Session
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="section-heading">Get in Touch</span>
            <h2 className="section-title">Contact {branch.title}</h2>
            <p className="section-text mx-auto">
              Ready to start your fitness journey? Get in touch with our {branch.title.toLowerCase()} team.
            </p>
          </div>
          <ContactForm branch={branch} />
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </div>
  )
}

export default BranchPage