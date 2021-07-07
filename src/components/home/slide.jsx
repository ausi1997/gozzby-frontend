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
import { Box, Button, Typography } from '@material-ui/core';

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
        <Box className='slide'>
        <div className='container'>
        <Typography className='deal'>Deal of the day</Typography>
        <Typography className='counter'>
        <Countdown  date={Date.now() + 5.04e+7} renderer={renderer}></Countdown>
        </Typography>
        <Typography>
        <img className='timer' src={timer.url} alt='loading...'></img>
        </Typography>
        <div className='btn'>
        <Button variant='contained' color='primary'>View All</Button>
        </div>
        </div>   
        <hr style={{width:'96%'}}></hr>
        <Crousel responsive={responsive} infinite={true} draggable={false} centerMode={true}
          autoPlay={true}
            autoPlaySpeed={2000}
              keyBoardControl={true}
              showDots={false}
              removeArrowOnDeviceType={'tablet , mobile'}>
        {
            products.map((product)=>{
                return(
                    <div className='contain' style={{textAlign:'center'}}>
                    <img className='product' src={product.url} alt='loading...'></img>
                    <p className='text' style={{fontWeight:'bolder'}}>{product.title.shortTitle}</p>
                    <p className='text' style={{color:'green'}}>{product.discount}</p>
                    <p className='text'style={{opacity:'.6'}}>{product.tagline}</p>
                    </div>
                )
            })
        }
        </Crousel>
        </Box>
    )
}

export default Slide;