import { useEffect } from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'
import { FaArrowLeft, FaMapMarkerAlt, FaPhoneAlt, FaClock, FaUser, FaDumbbell, FaRulerCombined, FaCamera, FaWhatsapp, FaInstagram } from 'react-icons/fa'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import ContactForm from './ContactForm.jsx'

const branches = [
  {
    id: 'marunji',
    title: 'Marunji Branch',
    address: 'Front of motherson Sony Company, Hinjawadi - Kasarsai Rd, Marunji Village, Hinjawadi, Marunji, Pune, Maharashtra 411057',
    phone: '+91 96891 67644',
    instagram: 'https://www.instagram.com/mkfitness_marunji_official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    timings: 'Mon-Sat: 5 am - 11 pm, Sun: 5 pm - 9 pm',
    mapLink: 'https://www.google.com/maps/place/M+K+Fitness+Club/@18.6164811,73.7084411,2449m/data=!3m1!1e3!4m6!3m5!1s0x3bc2bbce5b367cdb:0xa70a1e8f6a8a9c00!8m2!3d18.6140779!4d73.7105712!16s%2Fg%2F11fqpwmwvz?entry=ttu&g_ep=EgoyMDI2MDQxNS4wIKXMDSoASAFQAw%3D%3D',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.891176195611!2d73.7080015752021!3d18.61408278252254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbce5b367cdb%3A0xa70a1e8f6a8a9c00!2sM%20K%20Fitness%20Club!5e0!3m2!1sen!2sin!4v1716981156681!5m2!1sen!2sin',
    manager: {
      name: 'Akshay',
      phone: '+91 96891 67644',
      email: 'marunji.mkfitnessclub@gmail.com'
    },
    specs: {
      area: '10000 sq ft',
      equipment: [
        'Olympic weight sets',
        'Advanced cardio machines',
        'Functional training area',
        'Squat racks & Smith machines'
      ],
      facilities: [
        'Premium locker rooms',
        'Showers & Steam bath',
        'Nutrition & Protein bar',
        'Dedicated posing area'
      ],
      capacity: '50 members per session'
    },
    plans: [
      { name: 'Monthly', price: '₹2499', features: ['Gym', 'Cardio Groups', 'Batches', 'BMI Workouts and Diet Plan', 'Floor Training Guidance', 'Locker and Steam'] },
      { name: 'Quarterly', price: '₹4999', features: ['Gym', 'Cardio Groups', 'Batches', 'BMI Workouts and Diet Plan', 'Floor Training Guidance', 'Locker and Steam'] },
      { name: 'Yearly', price: '₹9999', features: ['Gym', 'Cardio Groups', 'Batches', 'BMI Workouts and Diet Plan', 'Floor Training Guidance', 'Locker and Steam'] }
    ],
    images: [
      'https://images.unsplash.com/photo-1583416750470-965b2707b355?auto=format&fit=crop&w=900&q=80', // Steam Bath
      'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=900&q=80', // Gym Bag & Locker
      'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=900&q=80', // Changing Room
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80'  // Modern Fitness Kit
    ],
    trainers: [
      {
        name: 'Akshay sir',
        specialty: 'Weight Management & Weight Loss Expert With Special Case',
        experience: '10 years',
        // certifications: 'NASM-CPT, CrossFit L2',
        // image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80'
      },
      {
        name: 'Aniket Sir',
        specialty: 'Weight Loss & Weight Management ',
        experience: '10 years',
        // certifications: 'RYT-500, Pilates Certified',
        // image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=400&q=80'
      },
      {
        name: 'Abhi Sir',
        specialty: ' Weight Management & Body Building Prep Coach.',
        experience: '3 years',
        // certifications: 'Precision Nutrition, ISSA',
        // image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
      }
    ]
  },
  {
    id: 'punawale',
    title: 'Punawale Branch',
    address: 'Near Mumbai-pune Highway, Jambe Rd, near lotus business school, Kate Wasti, Punawale, Pune, Maharashtra 411033',
    phone: '+91 86989 67644',
    instagram: 'https://www.instagram.com/mkfitnessclub_punawale?igsh=dTljbzdzdzFpa2hn',
    timings: 'Mon-Sat: 5 am - 11 pm, Sun: 5 pm - 9 pm',
    mapLink: 'https://www.google.com/maps/place/M.K+fitness+club,+punawale/@18.6327957,73.7362654,728m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bc2bb4be5c319d3:0x1cedf9a8c851bdee!8m2!3d18.6327957!4d73.7388403!16s%2Fg%2F11rck3pkg5?entry=ttu&g_ep=EgoyMDI2MDQxNS4wIKXMDSoASAFQAw%3D%3D',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.1!2d73.7388403!3d18.6327957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bb4be5c319d3%3A0x1cedf9a8c851bdee!2sM.K%20fitness%20club%2C%20punawale!5e0!3m2!1sen!2sin!4v1716981156681!5m2!1sen!2sin',
    manager: {
      name: 'Shashank Singh',
      phone: '+91 86989 67644',
      email: 'punawalemkfitness@gmail.com'
    },
    specs: {
      area: '8000 sq ft',
      equipment: [
        'Free weights & Dumbbells',
        'Treadmills & Rowers',
        'Cross-trainers & Ellipticals',
        'Yoga & Stretching mats'
      ],
      facilities: [
        'Clean changing rooms',
        'Reserved parking area',
        'Healthy Cafe zone',
        'Recovery & Massage zone',
        'Gym',
        'Cardio',
        'Group Batches',
        'Steam'
      ],
      capacity: '60 members per session'
    },
    plans: [
      { name: 'Monthly', price: '₹2499', features: ['Gym', 'Cardio Groups', 'Batches', 'BMI Workouts and Diet Plan', 'Floor Training Guidance', 'Locker and Steam'] },
      { name: 'Quarterly', price: '₹4999', features: ['Gym', 'Cardio Groups', 'Batches', 'BMI Workouts and Diet Plan', 'Floor Training Guidance', 'Locker and Steam'] },
      { name: 'Half Yearly', price: '7999', features: ['Gym', 'Cardio Groups', 'Batches', 'BMI Workouts and Diet Plan', 'Floor Training Guidance', 'Locker and Steam'] },
      { name: 'Yearly', price: '₹9999', features: ['Gym', 'Cardio Groups', 'Batches', 'BMI Workouts and Diet Plan', 'Floor Training Guidance', 'Locker and Steam'] }
    ],
    images: [
      'https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=900&q=80', // Free Weights
      'https://images.unsplash.com/photo-1540496905036-5937c10647cc?auto=format&fit=crop&w=900&q=80', // Cardio & Treadmills
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80'
    ],
    trainers: [
      {
        name: 'Mayur Shivalkar',
        specialty: 'Strength Training/Yoga',
        experience: '7 years',
      }
    ]
  }
]

function BranchPage() {
  const { branchId } = useParams()
  const location = useLocation()
  const branch = branches.find(b => b.id === branchId)

  useEffect(() => {
    if (location.hash === '#contact') {
      const el = document.getElementById('contact')
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100)
      }
    } else {
      window.scrollTo(0, 0)
    }
  }, [location])

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
        <section className="hero-section" style={{ minHeight: '100vh', backgroundImage: `linear-gradient(180deg, rgba(6, 7, 8, 0.85), rgba(6, 7, 8, 0.88)), url(${branch.images[0]})` }}>
          <div className="container hero-content">
            <div className="mb-5">
              <Link to="/" className="btn btn-outline-accent">
                <FaArrowLeft className="me-2" /> Back to Home
              </Link>
            </div>
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
            <div className="col-lg-6 d-flex flex-column" data-aos="fade-right">
              <h2 className="section-title mb-4">Branch Details</h2>
              <div className="card-glass p-4 mb-4">
                <h5 className="mb-3">Manager Details</h5>
                <p className="small-text mb-2"><FaUser className="me-2" /> {branch.manager.name}</p>
                <p className="small-text mb-2"><FaPhoneAlt className="me-2" /> {branch.manager.phone}</p>
                <p className="small-text mb-3">Email: {branch.manager.email}</p>
                <a
                  href={`https://wa.me/${branch.manager.phone.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-sm w-100 mb-2 text-white rounded-pill"
                  style={{ backgroundColor: '#25D366', border: 'none', fontWeight: '600' }}
                >
                  <FaWhatsapp className="me-2 fs-5" style={{ marginBottom: '2px' }} /> Chat on WhatsApp
                </a>
                <a
                  href={`tel:${branch.manager.phone.replace(/\D/g, '')}`}
                  className="btn btn-sm w-100 mb-2 text-white rounded-pill"
                  style={{ backgroundColor: '#ff4d4d', border: 'none', fontWeight: '600' }}
                >
                  <FaPhoneAlt className="me-2" /> Call Manager
                </a>
                <a
                  href={branch.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-sm w-100 text-white rounded-pill"
                  style={{ backgroundColor: '#E4405F', border: 'none', fontWeight: '600' }}
                >
                  <FaInstagram className="me-2" /> Instagram
                </a>
              </div>

              <div className="card-glass p-4 mb-4 flex-grow-1">
                <h5 className="mb-3">Gym Specifications</h5>
                <p className="small-text mb-2"><FaRulerCombined className="me-2" /> <strong>Area:</strong> {branch.specs.area}</p>
                <p className="small-text mb-3"><strong>Capacity:</strong> {branch.specs.capacity}</p>
                
                <p className="small-text mb-2"><FaDumbbell className="me-2" /> <strong>Equipment:</strong></p>
                <ul className="list-unstyled small-text mb-3 ms-4">
                  {branch.specs.equipment.map((item, idx) => (
                    <li key={idx} className="mb-1">• {item}</li>
                  ))}
                </ul>

                <p className="small-text mb-2"><strong>Facilities:</strong></p>
                <ul className="list-unstyled small-text mb-0 ms-4">
                  {branch.specs.facilities.map((item, idx) => (
                    <li key={idx} className="mb-1">• {item}</li>
                  ))}
                </ul>
              </div>

              <div className="card-glass p-4">
                <h5 className="mb-3">Contact & Timings</h5>
                <p className="small-text mb-2"><FaMapMarkerAlt className="me-2" /> {branch.address}</p>
                <p className="small-text mb-2"><FaPhoneAlt className="me-2" /> {branch.phone}</p>
                <p className="small-text mb-0"><FaClock className="me-2" /> {branch.timings}</p>
              </div>
            </div>

            <div className="col-lg-6 d-flex flex-column" data-aos="fade-left">
              <h2 className="section-title mb-4 d-none d-lg-block" style={{ visibility: 'hidden' }}>Plans</h2>
              <div className="card-glass p-4 flex-grow-1 d-flex flex-column">
                <h5 className="mb-4">Membership Plans</h5>
                <div className="d-flex flex-column gap-3 flex-grow-1">
                  {branch.plans.map((plan) => (
                    <div className="plan-card card-glass p-3 flex-grow-1 d-flex flex-column" key={plan.name}>
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <h6 className="mb-0">{plan.name}</h6>
                        <p className="mb-0 text-white fs-4" style={{ fontFamily: 'var(--font-heading)' }}>{plan.price}</p>
                      </div>
                      <ul className="list-unstyled small-text mb-3 flex-grow-1">
                        {plan.features.map((feature, idx) => (
                          <li key={idx}>• {feature}</li>
                        ))}
                      </ul>
                      <button className="btn btn-accent btn-sm w-100 mt-auto" onClick={() => document.getElementById('contact').scrollIntoView()}>
                        Join Now
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

      <div className="row mt-5" data-aos="fade-up">
        <div className="col-12">
          <div className="card-glass p-4">
            <h5 className="mb-3">Location Map</h5>
            <div style={{ height: '400px', borderRadius: '12px', overflow: 'hidden' }}>
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
            <div className="text-center mt-4">
              <a className="btn btn-accent px-5" href={branch.mapLink} target="_blank" rel="noreferrer">
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
        </section>

        {/* Trainers Section */}
        <section 
          style={{
            backgroundImage: `linear-gradient(rgba(6, 7, 8, 0.85), rgba(6, 7, 8, 0.95)), url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1920&q=80')`,
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            padding: '100px 0'
          }}
        >
          <div className="container">
            <div className="text-center mb-5" data-aos="fade-up">
              <span className="section-heading">Expert Trainers</span>
              <h2 className="section-title">Meet Our {branch.title} Team</h2>
              <p className="section-text mx-auto text-center">
                Our certified trainers are dedicated to helping you achieve your fitness goals
                with personalized training programs and expert guidance.
              </p>
            </div>

            <div className="row gy-4 justify-content-center">
              {branch.trainers.map((trainer, index) => (
                <div className="col-lg-4 col-md-6" key={trainer.name} data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="card-glass h-100 p-4 text-center">
                    <h5 className="mb-2">{trainer.name}</h5>
                    <p className="text-white mb-2">{trainer.specialty}</p>
                    <div className="small-text mb-3">
                      <p><strong>Experience:</strong> {trainer.experience}</p>
                    </div>
                    <button className="btn btn-accent btn-sm" onClick={() => document.getElementById('contact').scrollIntoView()}>
                      Book Session
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="container">
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
    </div>
  )
}

export default BranchPage
