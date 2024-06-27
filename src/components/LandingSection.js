import React from 'react';
function LandingSection() {
    return (
        <section className="landing-section">
            <div className="landing-content">
                <div className="container landing-flex-container">
                    <section id="home">
                        <h2 className="landing-heading">
                            Our company produces highest quality coffee
                        </h2>
                    </section>
                    <p className="landing-description">
                        Don't take our word for it - check it out
                    </p>
                    <a href="#offer" className="button">Our offer</a>
                </div>
            </div>
        </section>
    );
}

export default LandingSection;
