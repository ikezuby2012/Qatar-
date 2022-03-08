import React from 'react';

//componenets
import Header from "../components/LandingPage/header";
import Subscribers from '../components/LandingPage/subscribers';
import About from "../components/LandingPage/about";
import Info from "../components/LandingPage/info";
import Features from "../components/LandingPage/features";
import Expert from '../components/LandingPage/expert';
import Investors from '../components/LandingPage/investors';
import CryptoPrice from '../components/LandingPage/cryptoPrice';
import Plans from '../components/LandingPage/plans';
import Testimonial from '../components/LandingPage/testimonal';
import Faq from '../components/LandingPage/faq';
import Newsletter from '../components/LandingPage/Newsletter';
import Payment from '../components/LandingPage/payment';
import Footer from '../components/LandingPage/footer';

const LandingPage = () => {
    return (
        <div class="container">
            <Header />
            <Subscribers />
            <About />
            <Info />
            <Features />
            {/* expert */}
            <Expert />
            {/* investors */}
            <Investors />
            {/* crypto-price */}
            <CryptoPrice />
            {/* plans */}
            <Plans />
            {/* testimonials */}
            <Testimonial />
            {/* newsletter */}
            <Faq />
            <Newsletter />
            <Payment />
            {/* footer */}
            <Footer />
        </div>
    );
}

export default LandingPage;
