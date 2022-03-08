import React, { useState, useEffect } from 'react';
import Whirligig from 'react-whirligig';
import TestimonialCard from './testimonialCard';

import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";

import photo from "../../utils/person18.jpg";
import photo2 from "../../utils/person19.jpg";
import photo3 from "../../utils/person1.jpg";
import photo4 from "../../utils/person4.jpg";

const person = [
    {
        "image": photo,
        "name": "tahlani sa'sad",
        quote: "i've completely switched my entire portfolio to cloudinvest, after spending days researching and testing it, also invested in it, and i will say it's worth the investment"
    },
    {
        "image": photo2,
        "name": "lin wang",
        quote: "The rebranding has really helped our business. Definitely worth the investment."
    },
    {
        "image": photo3,
        "name": "ted fritz",
        "quote": "The service was excellent. Absolutely wonderful! A complete redesign did it for us."
    },
    {
        "image": photo4,
        "name": "Ben Hadley",
        quote: "i've completely switched my entire portfolio to cloudinvest, after spending days researching and testing it, also invested in it, and i will say it's worth the investment"
    },
]
const Testimonial = () => {
    const [width, setWidth] = useState(2);
    const [slide, setSlide] = useState(2);

    let whirligig;
    const next = () => whirligig.next();
    const prev = () => whirligig.prev();

    useEffect(() => {
        //phone size
        if (document.body.clientWidth < 575) {
            setWidth(1);
            setSlide(2);
        }
    })
    return (
        <section className="testimonial" id="testimonial">
            <div className="about-hd">
                <h4 className="about-hd-h4">
                    testimonials
                </h4>
                <h2 className="about-hd-h2">over 9,000 happy customers</h2>
                <p className="about-hd-p">
                    we have many happy investors invest with us. some impression from our customers
                    <span>
                        please read some of the lovely things our customer said about us!
                    </span>
                </p>
            </div>

            <div className="testimonial-cards">
                <button className="expert-btn" onClick={next}>
                    <BsFillArrowLeftCircleFill className="expert-icon" />
                </button>
                <Whirligig infinite={true}
                    preventScroll={true}
                    slideTo={slide}
                    slideBy={1}
                    visibleSlides={width} gutter={"3em"}
                    animationDuration={5500}
                    ref={(_whirligigInstance) => { whirligig = _whirligigInstance }}
                    style={{ width: "80%", margin: "0 auto", padding: "1rem 0" }}>

                    <TestimonialCard photo={person[0].image} name={person[0].name} quote={person[0].quote} />
                    <TestimonialCard photo={person[1].image} name={person[1].name} quote={person[1].quote} />
                    <TestimonialCard photo={person[2].image} name={person[2].name} quote={person[2].quote} />
                    <TestimonialCard photo={person[3].image} name={person[3].name} quote={person[3].quote} />
                </Whirligig>
                <button className="expert-btn" onClick={prev}>
                    <BsFillArrowRightCircleFill className="expert-icon" />
                </button>
            </div>
        </section>
    );
}

export default Testimonial;
