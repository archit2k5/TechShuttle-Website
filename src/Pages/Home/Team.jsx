import data from "../../data/data2025.json";

export default function Team() {
  const renderCards = (list) =>
    list.map((item) => (
      <div key={item.id} className="team--section--card">
        <div className="team--section--img">
          <img src={item.src} alt={item.title} />
        </div>

        <div className="team--section--card--content">
          <h3 className="team--section--title">{item.title}</h3>
          <p className="team--section--description">
            {item.description}
          </p>
        </div>
      </div>
    ));

  return (
    <section className="team--section" id="Team">
      <div className="team--container">
        <h2 className="team--section--heading">Our Team</h2>
      </div>

      {/* Faculty + President */}
      <div className="team--section--container">
        {renderCards(data.top)}
      </div>

      {/* Core Members */}
      <div className="team--section--container">
        {renderCards(data.core)}
      </div>

      {/* Heads (auto wraps to 3 + 3) */}
      <div className="team--section--container heads">
        {renderCards(data.heads)}
      </div>
    </section>
  );
}
