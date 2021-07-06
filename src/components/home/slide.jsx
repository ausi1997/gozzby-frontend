import React from 'react';

import {products} from '../../assets//logo/productData';

import {timer} from '../../data';

// importing the style file
import './home.css';

// importing the multi crousel package
import Crousel from 'react-multi-carousel';

// importing the react countdown package
import Countdown from 'react-countdown';

import "react-multi-carousel/lib/styles.css";
import { Typography } from '@material-ui/core';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const renderer = ({hours,minutes,seconds})=>{
    return <span>{hours}:{minutes}:{seconds} left</span>
}
const Slide = ()=>{
    return(
        <div className='slide'>
        <div className='container'>
        <Typography className='deal'>Deal of the day</Typography>
        <Countdown className='counter' date={Date.now() + 5.04e+7} renderer={renderer}></Countdown>
        </div>
        <Typography>
        <img className='timer' src={timer.url} alt='loading...'></img>
        </Typography>
        <Crousel responsive={responsive} infinite={true} draggable={false} centerMode={true}
          autoPlay={true}
            autoPlaySpeed={2000}
              keyBoardControl={true}
              showDots={false}
              removeArrowOnDeviceType={'tablet' , 'mobile'}>
        {
            products.map((product)=>{
                return(
                    <img className='product' src={product.url}></img>
                )
            })
        }
        </Crousel>
        </div>
    )
}

export default Slide;