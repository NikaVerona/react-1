import React from 'react';
import ServiceItem from './ServicesItem';

function Services() {
  const services = [
    { service: 'Service 1', special: true },
    { service: 'Service 2', special: false },
    { service: 'Service 3', special: false },
    { service: 'Service 4', special: false },
    { service: 'Service 5', special: false },
    { service: 'Service 6', special: false },
  ];

  return (
    <section className="section brown-section">
      <div className="container">
        <section id="offer">
          <h2 className="section-heading white-heading">What our company does?</h2>
        </section>
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              service={service.service}
              special={service.special}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
