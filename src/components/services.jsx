import axios from 'axios';
import React from 'react';

const baseURL = "http://34.227.3.72:4000/api/public";

function Services(){
    const [draws, setDraws] = React.useState(null);

    React.useEffect(()=>{
        const getDraws = async() => {
            const {date: draws} = await fetchGetDraws();
            setGetDraws(date.type);
        };
    },[])
}

export default Services;