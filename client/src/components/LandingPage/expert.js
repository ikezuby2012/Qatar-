import React, { useEffect, useState } from 'react';
import Whirligig from 'react-whirligig';

import ExpertCard from './expert-card';

//icons 
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
//photos
import photo1 from "../../utils/person5.jpg";
import photo2 from "../../utils/person10.jpg"
import photo3 from "../../utils/person8.jpg";
import photo4 from "../../utils/person12.jpg";
import photo5 from "../../utils/person3.jpg";
import photo6 from "../..//utils/person2.jpg";

const person = [
    {
        "image": photo1,
        "name": "bin fahed",
        "job": "CEO"
    },
    {
        "image": photo2,
        "name": "ahmed sah'd",
        "job": "CTO"
    },
    {
        "image": photo3,
        "name": "fred regha",
        "job": "marketing head"
    },
    {
        "image": photo4,
        "name": "lewis son",
        "job": "consultant"
    },
    {
        "image": photo5,
        "name": "adam f. harrison",
        "job": "technical consultant"
    },
    {
        "image": photo6,
        "name": "ned A. felix",
        "job": "trader"
    }
]

const Expert = () => {
    const [width, setWidth] = useState(3);
    const [slide, setSlide] = useState(5)

    let whirligig;
    const next = () => whirligig.next();
    const prev = () => whirligig.prev();

    // console.log(document.body.clientWidth);
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
        <section className="expert">
            <div className="about-hd ">
                <h4 className="about-hd-h4 expert-hd-h4">
                    our awesome team
                </h4>
                <h2 className="about-hd-h2 expert-hd-h2">meet our experts!</h2>
            </div>
            <div className="expert-cards">
                <Whirligig infinite={true}
                    preventScroll={true} slideBy={2}

                    slideTo={slide}
                    visibleSlides={width} gutter={"3em"} animationDuration={5500}
                    ref={(_whirligigInstance) => { whirligig = _whirligigInstance }} style={{ width: "90%", margin: "0 auto", padding: "1rem 0" }}>
                    <ExpertCard photo={person[0].image} name={person[0].name} job={person[0].job} />
                    <ExpertCard photo={person[1].image} name={person[1].name} job={person[1].job} />
                    <ExpertCard photo={person[2].image} name={person[2].name} job={person[2].job} />
                    <ExpertCard photo={person[3].image} name={person[3].name} job={person[3].job} />
                    <ExpertCard photo={person[4].image} name={person[4].name} job={person[4].job} />
                    <ExpertCard photo={person[5].image} name={person[5].name} job={person[5].job} />
                    {/* <ExpertCard /> */}
                </Whirligig>
                <div className="expert-buttons">
                    <button className="expert-btn" onClick={next}>
                        <BsFillArrowLeftCircleFill className="expert-icon" />
                    </button>
                    <button className="expert-btn" onClick={prev}>
                        <BsFillArrowRightCircleFill className="expert-icon" />
                    </button>
                </div>

            </div>
        </section>
    );
}

export default Expert;
