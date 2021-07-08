import React  from 'react';

import {banner} from '../../data';

import './home.css';

const coronaBanner = 'https://www.tdiindia.com/blog/wp-content/uploads/2020/04/WhatsApp-Image-2020-04-28-at-5.28.39-PM.jpeg';

const MidBanner =()=>{
    return(
        <div>
        <div className='midbanner'>
        {
            banner.map((bannerData)=>{
                   return(
                       <div className='bannercontainer'>
                       <img style={{width:'410px', height:'280px'}} src={bannerData.url} alt='loading...'></img>
                       </div>
                   )
            })
        }
        </div>
        <div className='coronaBanner'>
        <img style={{width:'100%', height:'430px'}} src={coronaBanner} alt='loading...'></img>
        </div>
        </div>
        )
}

export default MidBanner;