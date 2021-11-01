import * as React from 'react';
import Ligadito from '../resources/4-100.png'; 
import Box from '@mui/material/Box';

function LigaditoBanner(){
    return(
        <div className="container-xl">
        <Box style={{ width: '100%'}}
            component="img"
                sx={{
                    userSelect:'none',
                }}
            alt="Ligadito AD Banner"
            src={Ligadito}
        />
        </div>
    );
}

export default LigaditoBanner;