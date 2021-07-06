import React from'react';

// importing the components
import Navbar from './navbar';
import Banner from './banner';
import Slide from './slide';

const Home = ()=>{
    return(
        <div>
        <Navbar></Navbar>
        <Banner></Banner>
        <Slide></Slide>
        </div>
    )
}

export default Home;