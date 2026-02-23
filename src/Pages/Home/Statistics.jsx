import React, { useEffect, useState, useRef } from "react";

const stats = [
  { id: 1, value: 50, suffix: "+", label: "Registered Members", icon: "👥" },
  { id: 2, value: 7, suffix: "+", label: "Events Organized", icon: "🎯" },
  { id: 3, value: 350, suffix: "+", label: "Students Reached", icon: "🚀" },
  { id: 4, value: 3, suffix: "+", label: "Partner Societies", icon: "🤝" },
];

function Counter({ target, suffix, inView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, inView]);

  return (
    <span className="stat-value">
      {count}
      {suffix}
    </span>
  );
}

export default function Statistics() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="statistics--section" id="Statistics">
      <div className="statistics--overlay"></div>
      <div className="statistics--content">
        <h2 className="statistics--heading">Our Impact at BVCOE</h2>
        <p className="statistics--subheading">
          Driving innovation and technical excellence since our inception
        </p>
        <div className="statistics--grid">
          {stats.map((stat) => (
            <div key={stat.id} className="stat--card">
              <div className="stat--icon">{stat.icon}</div>
              <Counter target={stat.value} suffix={stat.suffix} inView={inView} />
              <span className="stat--label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
