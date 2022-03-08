import React from 'react';


const InvestorCard = ({photo, name, amount}) => {
    return (
        <div className="investor-card">
            <figure className="investor-card-figure">
                <img className="investor-card-img" src={photo} alt="expert_image" loading="lazy" />
                <figcaption className="investor-card-figcap">
                    <h3>{name}</h3>
                    <h4>{amount}</h4>
                </figcaption>
            </figure>
        </div>
    );
}

export default InvestorCard;
