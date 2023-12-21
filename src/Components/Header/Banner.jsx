
import './Banner.css'; // Import your stylesheet

const Banner = () => {
  return (
    <div className="banner-container">
      <img
        className="banner-image"
        src="https://i.ibb.co/W2Kxg6M/office-02.jpg"
        alt="Banner Background"
      />
      <div className="banner-content">
        <h1>Effortless Task Management for Teams</h1>
        <p>Your solution to organized collaboration and productivity</p>
        <button className="explore-button">Let's Explore</button>
      </div>
    </div>
  );
};

export default Banner;
