import React from "react";

const timelineEvents = [
  {
    id: 1,
    year: "2024",
    title: "The Beginning",
    description:
      "TechShuttle was established at BVCOE with a vision to create a dynamic tech community that bridges the gap between academics and industry.",
    icon: "🚀",
  },
  {
    id: 2,
    year: "Apr 2024",
    title: "First Events",
    description:
      "Launched our initial events including Quantitative Aptitude sessions and Game of Code competitions, setting the foundation for future activities.",
    icon: "🎯",
  },
  {
    id: 3,
    year: "2024-25",
    title: "Growing Community",
    description:
      "Expanded our reach with events like Break The Password and coding challenges, attracting more students to the tech community.",
    icon: "📈",
  },
  {
    id: 4,
    year: "Oct 2025",
    title: "Tech Baliye",
    description:
      "Organized our flagship techno-cultural event in collaboration with BVPCSI & Aura, blending technology with dance and creativity.",
    icon: "🎭",
  },
  {
    id: 5,
    year: "Nov 2025",
    title: "CodeSpirit: PyLaunch",
    description:
      "Launched hands-on data science workshops to equip students with industry-relevant Python and analytics skills.",
    icon: "🐍",
  },
  {
    id: 6,
    year: "2026",
    title: "The Future",
    description:
      "Continuing to grow with more workshops, coding competitions, and collaborative events to shape tomorrow's tech leaders.",
    icon: "✨",
  },
];

export default function Timeline() {
  return (
    <section className="timeline--section" id="Journey">
      <div className="timeline--header">
        <span className="timeline--badge">Our Journey</span>
        <h2 className="timeline--heading">The TechShuttle Story</h2>
        <p className="timeline--subheading">
          Building a vibrant tech community at BVCOE, one event at a time
        </p>
      </div>

      <div className="timeline--container">
        <div className="timeline--line"></div>
        {timelineEvents.map((event, index) => (
          <div
            key={event.id}
            className={`timeline--item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="timeline--content">
              <div className="timeline--icon">{event.icon}</div>
              <div className="timeline--year">{event.year}</div>
              <h3 className="timeline--title">{event.title}</h3>
              <p className="timeline--description">{event.description}</p>
            </div>
            <div className="timeline--dot"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
