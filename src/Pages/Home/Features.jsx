import React from "react";

const features = [
  {
    id: 1,
    icon: "🚀",
    title: "Tech Competitions",
    description:
      "Participate in exciting coding competitions where you can solve challenging problems, collaborate with peers, and win amazing prizes.",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  {
    id: 2,
    icon: "📚",
    title: "Technical Workshops",
    description:
      "Learn cutting-edge technologies through hands-on workshops conducted by industry experts and senior members.",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  },
  {
    id: 3,
    icon: "💡",
    title: "Coding Competitions",
    description:
      "Sharpen your problem-solving skills through regular coding contests, DSA challenges, and competitive programming sessions.",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  },
  {
    id: 4,
    icon: "🎤",
    title: "Tech Talks",
    description:
      "Get inspired by industry leaders, successful alumni, and tech enthusiasts sharing their experiences and knowledge.",
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
  },
  {
    id: 5,
    icon: "🤝",
    title: "Networking",
    description:
      "Connect with like-minded tech enthusiasts, build lasting relationships, and expand your professional network.",
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
  },
  {
    id: 6,
    icon: "🏢",
    title: "Industry Connect",
    description:
      "Bridge the gap between academia and industry through internship opportunities, mentorship programs, and campus placements.",
    gradient: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
  },
];

export default function Features() {
  return (
    <section className="features--section" id="Features">
      <div className="features--header">
        <span className="features--badge">What We Offer</span>
        <h2 className="features--heading">Empowering Tech Excellence</h2>
        <p className="features--subheading">
          From coding competitions to workshops, we provide diverse opportunities for 
          students to learn, grow, and excel in the world of technology.
        </p>
      </div>
      
      <div className="features--grid">
        {features.map((feature, index) => (
          <div 
            key={feature.id} 
            className="feature--card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div 
              className="feature--icon-wrapper"
              style={{ background: feature.gradient }}
            >
              <span className="feature--icon">{feature.icon}</span>
            </div>
            <h3 className="feature--title">{feature.title}</h3>
            <p className="feature--description">{feature.description}</p>
            <div className="feature--glow" style={{ background: feature.gradient }}></div>
          </div>
        ))}
      </div>
    </section>
  );
}
