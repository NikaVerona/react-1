import React from 'react';
import ServicesItem from './ServicesItem';

const servicesData = [
  // Aquí va tu array de servicios
];

function ServicesList() {
  return (
    <div>
      {servicesData.map(service => (
        <ServicesItem key={service.id} service={service} />
      ))}
    </div>
  );
}

export default ServicesList;