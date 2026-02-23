import React from "react";

const partners = [
  { id: 1, name: "Google Developer Student Clubs", logo: "🔵" },
  { id: 2, name: "Microsoft Learn", logo: "🟦" },
  { id: 3, name: "GitHub Campus", logo: "⬛" },
  { id: 4, name: "AWS Educate", logo: "🟧" },
  { id: 5, name: "GeeksforGeeks", logo: "🟩" },
  { id: 6, name: "Coding Ninjas", logo: "🟨" },
];

const techStack = [
  "React", "Node.js", "Python", "Java", "C++", "TensorFlow",
  "MongoDB", "AWS", "Docker", "Kubernetes", "Flutter", "Firebase"
];

export default function Partners() {
  return (
    <section className="partners--section" id="Partners">
      <div className="partners--header">
        <span className="partners--badge">Our Ecosystem</span>
        <h2 className="partners--heading">Partners & Technologies</h2>
        <p className="partners--subheading">
          Collaborating with industry leaders to provide the best learning experience
        </p>
      </div>

      <div className="partners--grid">
        {partners.map((partner) => (
          <div key={partner.id} className="partner--card">
            <span className="partner--logo">{partner.logo}</span>
            <span className="partner--name">{partner.name}</span>
          </div>
        ))}
      </div>

      <div className="tech--marquee">
        <div className="tech--track">
          {[...techStack, ...techStack].map((tech, index) => (
            <span key={index} className="tech--item">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
