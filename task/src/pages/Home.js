import React from 'react';
import Navbar from '../component/Navbar';
import Banner from '../component/Banner'
import '../css/Home.css'
import MidPart from '../component/MidPart';
import Footer from '../component/Footer';
// import Footer from '../component/Footer';
const Home = () => {
    return <div>
        <div className="home">
            
            <div className="navbarathome">
                <Navbar/>
            </div>
            <div className="bannerathome">
                <Banner/>
            </div>

            <div className="midpartathome">
                <MidPart/>
            </div>
            <div className="footer">
                <Footer/>
            </div>
        
        </div>
        
    </div>;
}
export default Home;
