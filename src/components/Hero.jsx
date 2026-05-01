import { useEffect, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'

const phrases = ['STRONGER', 'DISCIPLINED', 'TRANSFORMED', 'UNSTOPPABLE']

function Hero() {
  const [heroText, setHeroText] = useState('')
  const [cursor, setCursor] = useState(true)

  useEffect(() => {
    let phraseIndex = 0
    let charIndex = 0
    let deleting = false
    let typingTimer

    const typeText = () => {
      const currentText = phrases[phraseIndex]
      const nextText = deleting
        ? currentText.slice(0, charIndex - 1)
        : currentText.slice(0, charIndex + 1)

      setHeroText(nextText)

      if (!deleting) {
        charIndex += 1
      } else {
        charIndex -= 1
      }

      if (!deleting && charIndex === currentText.length + 1) {
        deleting = true
        typingTimer = setTimeout(typeText, 1000)
        return
      }

      if (deleting && charIndex === 0) {
        deleting = false
        phraseIndex = (phraseIndex + 1) % phrases.length
      }

      typingTimer = setTimeout(typeText, deleting ? 80 : 140)
    }

    typingTimer = setTimeout(typeText, 600)
    const cursorTimer = setInterval(() => setCursor((state) => !state), 500)

    return () => {
      clearTimeout(typingTimer)
      clearInterval(cursorTimer)
    }
  }, [])

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-content" data-aos="fade-up">
        <span className="section-heading">Premium Fitness Brand</span>
        <h1 className="hero-title">
          TRANSFORM YOUR BODY AT <span className="hero-brand-red"><br></br>M.K. FITNESS CLUB</span>
        </h1>
        <p className="hero-copy">
          Marunji &amp; Punawale शाखा उपलब्ध - join a motivated community with
          expert coaching, state-of-the-art equipment, and tailored transformation
          plans.
        </p>

        <div className="d-flex flex-wrap align-items-center gap-3 hero-badges">
          <span className="badge badge-soft px-3 py-2">24/7 Gym Access</span>
          <span className="badge badge-soft px-3 py-2">Certified Trainers</span>
          <span className="badge badge-soft px-3 py-2">Beginner Friendly</span>
        </div>

        <div className="d-flex flex-wrap gap-3 mt-4">
          <a className="btn btn-accent" href="#contact">
            Get Started <FaArrowRight className="ms-2" />
          </a>
          <a className="btn btn-outline-accent" href="#plans">
            See Memberships
          </a>
        </div>

        <div className="mt-5 hero-panel p-4 card-glass" data-aos="fade-up" data-aos-delay="100">
          <div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-3">
            <div>
              <p className="text-uppercase small-text mb-2">Today’s Focus</p>
              <h3 className="mb-0">{heroText}<span className="typing-cursor">{cursor ? '|' : ' '}</span></h3>
            </div>
            <div className="d-flex gap-3 flex-wrap align-items-center">
              <div>
                <strong>40+</strong>
                <p className="small-text mb-0">Trainers</p>
              </div>
              <div>
                <strong>1200+</strong>
                <p className="small-text mb-0">Members</p>
              </div>
              <div>
                <strong>98%</strong>
                <p className="small-text mb-0">Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
