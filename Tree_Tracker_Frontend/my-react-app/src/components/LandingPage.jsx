import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/customStyles.css'; 

function LandingPage() {
  const [activeFeature, setActiveFeature] = useState(null);

  const features = [
    { title: 'Virtual Tree Planting', description: 'Participate in virtual tree planting events and contribute to reforestation efforts from anywhere.' },
    { title: 'Geotagging Trees', description: 'Use your smartphone to geotag the location of your trees and track their growth over time.' },
    { title: 'Impact Dashboard', description: 'Monitor the impact of your planting activities, including carbon sequestration and tree health.' }
  ];

  return (
    <div className="landing-page-container"> {/* Added a wrapper div */}
      <div className="landing-page">
        <header>
          <h1>Tree Planting and Reforestation Tracker</h1>
          <p>Join us in combating deforestation. Plant a tree, geotag it, and track its growth!</p>
        </header>

        <section className="features-section">
          <h2>Our Features</h2>
          <div className="features-list">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`feature-item ${activeFeature === index ? 'active' : ''}`}
                onClick={() => setActiveFeature(index)}
              >
                <h3>{feature.title}</h3>
                {activeFeature === index && <p>{feature.description}</p>}
              </div>
            ))}
          </div>
        </section>

        <section className="impact-section">
          <h2>Impact</h2>
          <div className="impact-stats">
            <div className="stat-item">
              <h3>1,000+</h3>
              <p>Trees Planted</p>
            </div>
            <div className="stat-item">
              <h3>500+</h3>
              <p>Users Engaged</p>
            </div>
            <div className="stat-item">
              <h3>10,000+</h3>
              <p>Acres of Forest Restored</p>
            </div>
          </div>
        </section>

        <section className="testimonials-section">
          <h2>What Our Users Say</h2>
          <div className="testimonials-list">
            <div className="testimonial-item">
              <p>"This platform made it so easy to contribute to reforestation efforts. I love seeing the impact of my actions!"</p>
              <cite>- Jane Doe</cite>
            </div>
            <div className="testimonial-item">
              <p>"A fantastic initiative! The geotagging feature is amazing for tracking tree growth."</p>
              <cite>- John Smith</cite>
            </div>
          </div>
        </section>

        <section className="community-section">
          <h2>Join Our Community</h2>
          <p>Stay updated with our latest news and initiatives. Sign up for our newsletter!</p>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default LandingPage;
