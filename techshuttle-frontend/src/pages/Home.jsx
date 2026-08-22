import React from 'react'
import "./Home.css";

const Home = () => {
    return (
        <main className="home">

            <section className="hero">

                <div className="hero-content">
                    <p className="hero-tag">WELCOME TO</p>

                    <h1>
                        TECHSHUTTLE
                    </h1>

                    <p className="hero-description">
                        Tech Society of BVCOE
                    </p>

                    <div className="hero-buttons">
                        <button className="btn-primary">
                            Explore
                        </button>

                        <button className="btn-secondary">
                            Learn More
                        </button>
                    </div>
                </div>


                <div className="hero-shuttle">
                    {/* Add shuttle */}
                    <div className="shuttle-placeholder">
                        SHUTTLE
                    </div>
                </div>

            </section>

        </main>
    );
}

export default Home;