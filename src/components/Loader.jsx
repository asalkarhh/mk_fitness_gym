import logo from '../assets/mkfitness.png'

function Loader() {
  return (
    <div className="loader-screen d-flex align-items-center justify-content-center">
      <div className="loader-mark">
        <div className="loader-spinner" role="status" aria-label="Loading"></div>
        <img src={logo} alt="M.K. Fitness Logo" />
      </div>
      <div className="loader-copy text-white">
        <h4 className="mb-2">M.K. Fitness Club</h4>
        <p className="small-text mb-0">Preparing your high-energy gym experience...</p>
      </div>
    </div>
  )
}

export default Loader
