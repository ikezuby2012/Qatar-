import React from 'react';


const TestimonialCard = ({ photo, name, job, quote }) => {
    return (
        <div className="testimonial-card">
            <figure className="testimonial-card-figure">
                <img className="testimonial-card-img" src={photo} alt="testimonial_image" loading="lazy" />
                <figcaption className="testimonial-card-figcap">
                    <h3>{name}</h3>
                    <h4>{job}</h4>
                    <p>{quote}</p>
                </figcaption>
            </figure>
        </div>
    );
}

export default TestimonialCard;
