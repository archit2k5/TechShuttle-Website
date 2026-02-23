import { useRef, useState, useEffect } from "react";
import data from "../../data/index.json";

export default function OldTeamSlider() {
  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const allMembers = [
    ...data.core1,
    ...data.core2,
    ...data.core3
  ];

  const checkScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', checkScroll);
      checkScroll();
    }
    return () => slider?.removeEventListener('scroll', checkScroll);
  }, []);

  const scroll = (direction) => {
    const amount = 400;
    sliderRef.current.scrollLeft +=
      direction === "left" ? -amount : amount;
  };

  return (
    <section className="old-team-section">
      <div className="team-section-header">
        <span className="team-section-badge">Our Legacy</span>
        <h2 className="team-section-title">Previous Team Members</h2>
        <p className="team-section-subtitle">
          The alumni who laid the foundation for TechShuttle's success
        </p>
      </div>

      <div className="old-team-container">
        <button 
          className={`old-team-nav-btn prev ${!canScrollLeft ? 'disabled' : ''}`} 
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          aria-label="Previous"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15,18 9,12 15,6"></polyline>
          </svg>
        </button>

        <div className="old-team-slider-wrapper">
          <div className="old-team-slider-track" ref={sliderRef}>
            {allMembers.map((item, index) => (
              <div key={item.id} className="old-team-card" style={{ animationDelay: `${index * 0.05}s` }}>
                <div className="old-team-card-inner">
                  <div className="old-team-card-image">
                    <img src={item.src} alt={item.title} />
                    <div className="old-team-card-gradient"></div>
                  </div>
                  <div className="old-team-card-info">
                    <h4 className="old-team-card-name">{item.title}</h4>
                    <span className="old-team-card-role">{item.description}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button 
          className={`old-team-nav-btn next ${!canScrollRight ? 'disabled' : ''}`}
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          aria-label="Next"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9,6 15,12 9,18"></polyline>
          </svg>
        </button>
      </div>

      <div className="old-team-scroll-hint">
        <span>Scroll to explore</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="9,6 15,12 9,18"></polyline>
        </svg>
      </div>
    </section>
  );
}
