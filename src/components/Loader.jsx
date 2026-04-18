function Loader() {
  return (
    <div className="loader-screen d-flex align-items-center justify-content-center">
      <div className="loader-ring">
        <div></div>
      </div>
      <div className="ms-3 text-white">
        <h4>MK Fitness Gym</h4>
        <p className="small-text mb-0">Preparing your high-energy gym experience...</p>
      </div>
    </div>
  )
}

export default Loader
