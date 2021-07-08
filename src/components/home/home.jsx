import React from'react';

// importing the components
import Navbar from './navbar';
import Banner from './banner';
import Slide from './slide';
import MidBanner from './midBanner';

import './home.css';

const addUrl = 'https://images.freekaamaal.com/featured_images/165009_RoomHeaterBuyingGuide(17).png';

const Home = ()=>{
    return(
        <div>
        <Navbar></Navbar>
        <Banner></Banner>
        <div style={{display:'flex'}}>
        <div style={{width:'80%'}}>
        <Slide timerData={true} title='Deal of the day'></Slide>
        </div>
        <div className='add'>
        <img style={{width:'230px', height:'330px'}} src={addUrl} alt='loading...'></img>
        </div>
        </div>
        <MidBanner></MidBanner>
        <Slide timerData={false} title='Discounts for you'></Slide>
        <Slide timerData={false} title='Recommended Items'></Slide>
        <Slide timerData={false} title='Top Seller'></Slide>      
        </div>
    )
}

export default Home;