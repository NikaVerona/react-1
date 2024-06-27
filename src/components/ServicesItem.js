import React from 'react';

function ServiceItem({ service, special }) {
  return (
    <div className={`service-item ${special ? 'service-item-new' : ''}`}>
      {service}
      {special && <p className="service-item-special-text">( new! )</p>}
      {special && <span className="new-service-dot"></span>}
    </div>
  );
}

export default ServiceItem;
