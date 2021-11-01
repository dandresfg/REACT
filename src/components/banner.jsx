import * as React from 'react';
import sortBanner from '../resources/tq-banner-1-100.png'; 
import BorderBanner from '../resources/banner/border-bot.png'; 
import Box from '@mui/material/Box';

function Banner(){
    return(
        <div className="container-xl">
        <Box style={{ width: '100%'}}
            component="img"
                sx={{
                    userSelect:'none',
                }}
            alt="TuQuintico || Sorteo todos los sabados"
            src={sortBanner}
        />
        
        <Box style={{ width: '100%'}}
            component="img"
                sx={{
                    userSelect:'none',
                }}
            alt="TuQuintico || Sorteo todos los sabados"
            src={BorderBanner}
        />
        </div>
    );
}
export default Banner;
