import logo from '../assets/mkfitness.png'

function Loader() {
  return (
    <div className="loader-screen d-flex align-items-center justify-content-center">
      <div className="position-relative d-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px' }}>
        <div className="spinner-border text-accent position-absolute w-100 h-100" style={{ borderWidth: '3px' }} role="status"></div>
        <img src={logo} alt="M.K. Fitness Logo" height="45" style={{ zIndex: 1, objectFit: 'contain' }} />
      </div>
      <div className="ms-4 text-white">
        <h4 className="mb-2">M.K. Fitness Club</h4>
        <p className="small-text mb-0">Preparing your high-energy gym experience...</p>
      </div>
    </div>
  )
}

export default Loader
