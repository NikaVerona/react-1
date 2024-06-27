import React from 'react';

function EmployeeItem({ imgSrc, name, description }) {
    return (
        <li className="specialist-list-item">
            <img className="specialist-image" src={imgSrc} alt={name} />
            <div className="specialist-details">
                <h3 className="specialist-name">{name}</h3>
                <p className="specialist-description">{description}</p>
            </div>
        </li>
    );
}

export default EmployeeItem;
