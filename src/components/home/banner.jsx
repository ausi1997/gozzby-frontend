import React from 'react';

// importing the crousel package
import Carousel from 'react-material-ui-carousel';

// importing the data
import {crouselData} from '../../data';

import './home.css';

const Banner = ()=>{
    return(
        <div>
        <Carousel animation='slide' autoPlay={true}>
        {
            crouselData.map(item =>{
                return(
                    <img className='banner' src={item.url}></img>
                )
            } )
        }
    </Carousel>
        </div>
    )
}

export default Banner;