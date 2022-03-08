import React, { useEffect, useState } from 'react';
import Whirligig from 'react-whirligig';

import InvestorCard from './investor-card';

//icons 
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";

import photo from "../../utils/person20.jpg";
import photo2 from "../../utils/person11.jpg";
import photo3 from "../../utils/person9.jpg";
import photo4 from "../../utils/person14.jpg";


const person = [
    {
        "image": photo,
        "name": "hassan husseni",
        "amount": "$28,700.455"
    },
    {
        "image": photo2,
        "name": "lin wang",
        "amount": "$25,500.500"
    },
    {
        "image": photo3,
        "name": "ted fritz",
        "amount": "$24,890.300"
    },
    {
        "image": photo4,
        "name": "Ben Hadley",
        "amount": "$24,500.300"
    },
]

const Investors = () => {
    const [width, setWidth] = useState(3);
    const [slide, setSlide] = useState(5)

    let whirligig;
    const next = () => whirligig.next();
    const prev = () => whirligig.prev();
    useEffect(() => {
        //phone size
        if (document.body.clientWidth < 575) {
            setWidth(1);
            setSlide(2);
        }
        //tab size
        if (document.body.clientWidth > 576 && document.body.clientWidth < 768) {
            setWidth(2);
            setSlide(4);
        }
    })
    return (
        <section className="investor">
            <div className="about-hd">
                <h4 className="about-hd-h4 investor-hd-h4">
                    our top investors
                </h4>
                <h2 className="about-hd-h2">top 4 investors</h2>
            </div>
            <Whirligig infinite={true}
                preventScroll={true} slideBy={2}

                slideTo={slide}
                visibleSlides={width} gutter={"3em"}
                animationDuration={5500}
                ref={(_whirligigInstance) => { whirligig = _whirligigInstance }}
                style={{ width: "90%", margin: "0 auto", padding: "1rem 0" }}>
                <InvestorCard photo={person[0].image} name={person[0].name} amount={person[0].amount} />
                <InvestorCard photo={person[1].image} name={person[1].name} amount={person[1].amount} />
                <InvestorCard photo={person[2].image} name={person[2].name} amount={person[2].amount} />
                <InvestorCard photo={person[3].image} name={person[3].name} amount={person[3].amount} />
            </Whirligig>
            <div className="expert-buttons">
                <button className="expert-btn" onClick={next}>
                    <BsFillArrowLeftCircleFill className="expert-icon" />
                </button>
                <button className="expert-btn" onClick={prev}>
                    <BsFillArrowRightCircleFill className="expert-icon" />
                </button>
            </div>
            {/* <div className="investor-cards">

            </div> */}

        </section>
    );
}

export default Investors;
