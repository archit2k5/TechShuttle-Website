import React, { useState, useEffect, useRef } from "react";
import eventsData from "../../data/eventsData.json";
import EventsPopup from "./components/EventsPopup";


export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [filter, setFilter] = useState("all");
  const sectionRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('.events-card');
    cards?.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.1}s`;
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, [filter]);

  const tags = ["all", ...new Set(eventsData.map(e => e.tag.toLowerCase()))];
  
  const filteredEvents = filter === "all" 
    ? eventsData 
    : eventsData.filter(e => e.tag.toLowerCase() === filter);

  return (
    <section className="events-section-modern" id="Events" ref={sectionRef}>
      {/* Background Effects */}
      <div className="events-bg-effects">
        <div className="events-gradient-orb events-orb-1"></div>
        <div className="events-gradient-orb events-orb-2"></div>
      </div>

      {/* Header */}
      <div className="events-header">
        <span className="events-badge">What's Happening</span>
        <h2 className="events-title">Recent Events</h2>
        <p className="events-subtitle">
          Explore our latest workshops, competitions, and tech gatherings
        </p>
        
        {/* Social Buttons */}
        <div className="events-social-btns">
          <button
            className="events-insta-btn"
            onClick={() =>
              window.open("https://www.instagram.com/techshuttlebvp/", "_blank")
            }
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Instagram
          </button>
          <button
            className="events-linkedin-btn"
            onClick={() =>
              window.open("https://www.linkedin.com/company/techshuttle-bvcoe/", "_blank")
            }
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="events-filters">
        {tags.map(tag => (
          <button
            key={tag}
            className={`events-filter-btn ${filter === tag ? 'active' : ''}`}
            onClick={() => setFilter(tag)}
          >
            {tag.charAt(0).toUpperCase() + tag.slice(1)}
          </button>
        ))}
      </div>

      {/* Events Grid */}
      <div className="events-grid">
        {filteredEvents.length === 0 ? (
          <p className="events-empty">No events found for this category.</p>
        ) : (
          filteredEvents.map((item, index) => (
            <div
              key={item.id}
              className="events-card"
              onClick={() => setSelectedEvent(item)}
            >
              <div className="events-card-image">
                <div className="events-card-tag">{item.tag}</div>
                <img src={item.images[0]} alt={item.title || "Event"} />
                <div className="events-card-overlay">
                  <span className="events-card-view">View Details</span>
                </div>
              </div>
              <div className="events-card-content">
                <div className="events-card-meta">
                  <span className="events-card-date">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    {item.date}
                  </span>
                </div>
                <h3 className="events-card-title">{item.title}</h3>
                <p className="events-card-desc">{item.description}</p>
                <div className="events-card-footer">
                  <div className="events-card-speakers">
                    {item.speakers?.slice(0, 3).map((speaker, i) => (
                      <div key={i} className="events-card-speaker-avatar" title={speaker}>
                        {speaker[0]}
                      </div>
                    ))}
                    {item.speakers?.length > 3 && (
                      <span className="events-card-more">+{item.speakers.length - 3}</span>
                    )}
                  </div>
                  <span className="events-card-arrow">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Popup */}
      {selectedEvent && (
        <EventsPopup
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </section>
  );
}
