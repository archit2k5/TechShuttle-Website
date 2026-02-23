import data from "../../data/data2025.json";
import { useEffect, useRef } from "react";

export default function Team() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('.team-card');
    cards?.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.1}s`;
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const getRoleBadgeClass = (description) => {
    const role = description.toLowerCase();
    if (role.includes('faculty')) return 'badge-faculty';
    if (role.includes('president') && !role.includes('vice')) return 'badge-president';
    if (role.includes('vice')) return 'badge-vice';
    if (role.includes('secretary')) return 'badge-secretary';
    if (role.includes('treasurer')) return 'badge-treasurer';
    return 'badge-head';
  };

  const renderCards = (list, tier = '') =>
    list.map((item) => (
      <div key={item.id} className={`team-card ${tier}`}>
        <div className="team-card-glow"></div>
        <div className="team-card-inner">
          <div className="team-card-image-wrapper">
            <div className="team-card-image">
              <img src={item.src} alt={item.title} />
            </div>
            <div className="team-card-overlay">
              <div className="team-card-social">
                <a href="#" className="social-icon" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="team-card-content">
            <h3 className="team-card-name">{item.title}</h3>
            <span className={`team-card-role ${getRoleBadgeClass(item.description)}`}>
              {item.description}
            </span>
          </div>
        </div>
      </div>
    ));

  return (
    <section className="team-section-modern" id="Team" ref={sectionRef}>
      <div className="team-section-header">
        <span className="team-section-badge">Meet The Team</span>
        <h2 className="team-section-title">Our Leadership</h2>
        <p className="team-section-subtitle">
          The passionate individuals driving TechShuttle forward
        </p>
      </div>

      {/* Faculty Incharge */}
      <div className="team-tier leadership-tier">
        <h3 className="tier-title">Faculty Incharge</h3>
        <div className="team-grid team-grid-1">
          {renderCards(data.top, 'tier-leadership')}
        </div>
      </div>

      {/* Core Team Tier */}
      <div className="team-tier core-tier">
        <h3 className="tier-title">Core Team</h3>
        <div className="team-grid team-grid-4">
          {renderCards(data.core, 'tier-core')}
        </div>
      </div>

      {/* Department Heads */}
      <div className="team-tier heads-tier">
        <h3 className="tier-title">Department Heads</h3>
        <div className="team-grid team-grid-3">
          {renderCards(data.heads, 'tier-head')}
        </div>
      </div>
    </section>
  );
}
