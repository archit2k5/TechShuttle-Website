import React, { useState, useEffect } from "react";


const EventsPopup = ({ event, onClose }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!event) return null;

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % event.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? event.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="popup-overlay-modern" onClick={onClose}>
      <div className="popup-container" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close-btn" onClick={onClose} aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Left Panel - Gallery */}
        <div className="popup-gallery">
          <div className="popup-main-img">
            {event.images.length > 1 && (
              <button className="popup-nav prev" onClick={prevImage} aria-label="Previous">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
            )}
            <img
              src={event.images[currentImage]}
              alt={event.title}
            />
            {event.images.length > 1 && (
              <button className="popup-nav next" onClick={nextImage} aria-label="Next">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 6 15 12 9 18"></polyline>
                </svg>
              </button>
            )}
          </div>

          {event.images.length > 1 && (
            <div className="popup-thumbs">
              {event.images.map((img, i) => (
                <button
                  key={i}
                  className={`popup-thumb ${i === currentImage ? "active" : ""}`}
                  onClick={() => setCurrentImage(i)}
                >
                  <img src={img} alt={`${event.title} ${i + 1}`} />
                </button>
              ))}
            </div>
          )}

          <div className="popup-meta">
            <div className="popup-meta-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <span>{event.date}</span>
            </div>
            <div className="popup-meta-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>{event.venue}</span>
            </div>
          </div>

          {/* Highlights */}
          {event.highlights && event.highlights.length > 0 && (
            <div className="popup-highlights-grid">
              {event.highlights.map((highlight, i) => (
                <div key={i} className="popup-highlight-item">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Panel - Details */}
        <div className="popup-details">
          <div className="popup-tag-badge">{event.tag}</div>
          <h2 className="popup-title">{event.title}</h2>
          <p className="popup-desc">{event.description}</p>

          {/* Speakers */}
          {event.speakers && event.speakers.length > 0 && (
            <div className="popup-section">
              <h3 className="popup-section-heading">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                Speakers & Coordinators
              </h3>
              <div className="popup-speakers">
                {event.speakers.map((speaker, i) => (
                  <div key={i} className="popup-speaker-chip">
                    <div className="popup-speaker-avatar">{speaker[0]}</div>
                    <span>{speaker}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Agenda */}
          {event.agenda && event.agenda.length > 0 && (
            <div className="popup-section">
              <h3 className="popup-section-heading">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                  <line x1="8" y1="6" x2="21" y2="6"></line>
                  <line x1="8" y1="12" x2="21" y2="12"></line>
                  <line x1="8" y1="18" x2="21" y2="18"></line>
                  <line x1="3" y1="6" x2="3.01" y2="6"></line>
                  <line x1="3" y1="12" x2="3.01" y2="12"></line>
                  <line x1="3" y1="18" x2="3.01" y2="18"></line>
                </svg>
                Agenda
              </h3>
              <ul className="popup-agenda-list">
                {event.agenda.map((item, i) => (
                  <li key={i}>
                    <span className="popup-agenda-num">{String(i + 1).padStart(2, '0')}</span>
                    <span className="popup-agenda-text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventsPopup;