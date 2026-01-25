import { useRef } from "react";
import data from "../../data/index.json";

export default function OldTeamSlider() {
  const sliderRef = useRef(null);

  const allMembers = [
    ...data.core1,
    ...data.core2,
    ...data.core3
  ];

  const scroll = (direction) => {
    const amount = 350;
    sliderRef.current.scrollLeft +=
      direction === "left" ? -amount : amount;
  };

  return (
    <section className="team--section">
      <div className="team--container">
        <h2 className="team--section--heading">
          Previous Team Members
        </h2>
      </div>

      <div className="old-team-wrapper">
        <button className="slider-btn left" onClick={() => scroll("left")}>
          ❮
        </button>

        <div className="old-team-slider" ref={sliderRef}>
          {allMembers.map((item) => (
            <div key={item.id} className="team--section--card">
              <div className="team--section--img">
                <img
                  src={item.src}
                  alt={item.title}
                  height="220"
                  width="220"
                />
              </div>
              <div className="team--section--card--content">
                <h3 className="team--section--title">{item.title}</h3>
                <p className="team--section--description">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <button className="slider-btn right" onClick={() => scroll("right")}>
          ❯
        </button>
      </div>
    </section>
  );
}
