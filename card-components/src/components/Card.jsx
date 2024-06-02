import profilepic from "../assets/profile.jpeg"

const Card = () => {
  return (
    <div className="card">
        <img className="card-image" src={profilepic} alt="Profile picture" />
        <h2 className="card-title">Bhuvan</h2>
        <p className="card-text">Front End Developer</p>
    </div>
  )
}

export default Card