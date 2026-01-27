import React, { useState } from "react";


const EventsPopup = ({ event, onClose }) => {
  const [currentImage, setCurrentImage] = useState(0);

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
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-box" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" onClick={onClose}>✕</button>

        {/* Lottie Animation */}
        {/* <div className="popup-bg-animation">
          <Lottie animationData={popupAnimation} loop={false} />
        </div> */}

        {/* Left Section (Images) */}
        <div className="popup-left">
          <div className="popup-main-image">
            <button className="nav-btn left" onClick={prevImage}>‹</button>
            <img
              src={event.images[currentImage]}
              alt={event.title}
              className="main-image"
            />
            <button className="nav-btn right" onClick={nextImage}>›</button>
          </div>

          <div className="popup-thumbnails">
            {event.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Thumbnail ${i}`}
                className={`thumbnail ${i === currentImage ? "active" : ""}`}
                onClick={() => setCurrentImage(i)}
              />
            ))}
          </div>

          <div className="popup-info">
            <p>📅 {event.date}</p>
            <p>📍 {event.venue}</p>
          </div>
        </div>

        {/* Right Section (Details) */}
        <div className="popup-right">
          <div className="popup-tag">{event.tag}</div>
          <h2>{event.title}</h2>
          <p className="popup-description">{event.description}</p>

        {/*  <h3>Speakers</h3>
          {event.speakers.map((speaker, i) => (
            <div key={i} className="popup-speaker">
              <div className="speaker-avatar">{speaker[0]}</div>
              <div>
                <h4>{speaker}</h4>
                <p>Organizers</p>
              </div>
            </div>
          ))}
        */}
        {/*If you want to add agenda, use the below code snippet*/}

        {/*  <h3>Agenda</h3>
          <ul className="popup-agenda">
            {event.agenda.map((item, i) => (
              <li key={i}>✔ {item}</li>
            ))}
          </ul>
        */}
        </div>
      </div>
    </div>
  );
};

export default EventsPopup;