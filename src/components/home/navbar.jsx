import React from 'react';

import {Box, Typography} from '@material-ui/core';

// importing the data
import {navData} from '../../data';

// importing the style file
import './home.css';

const Navbar = ()=>{
    return(
        <div>
        <Box className='navcomp'>
        {
            navData.map(item=>{
                return(
                    <Box className='comp'>
                    <img className='img' src={item.url}></img>
                    <Typography className='text'>{item.text}</Typography>
                    </Box>
                    )
            })
        }
        </Box>
        </div>
    )
}

export default Navbar;