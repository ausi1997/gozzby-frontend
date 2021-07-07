import React from'react';

// importing the components
import Navbar from './navbar';
import Banner from './banner';
import Slide from './slide';

import './home.css';

const addUrl = 'https://images.freekaamaal.com/featured_images/165009_RoomHeaterBuyingGuide(17).png';

const Home = ()=>{
    return(
        <div>
        <Navbar></Navbar>
        <Banner></Banner>
        <div style={{display:'flex'}}>
        <div style={{width:'80%'}}>
        <Slide></Slide>
        </div>
        <div className='add'>
        <img style={{width:'230px', height:'300px'}} src={addUrl} alt='loading...'></img>
        </div>
        </div>
       
        </div>
    )
}

export default Home;