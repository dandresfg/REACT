import axios from 'axios';
import React from 'react';

export const fetchGetDraws = async(param)=>{
    const res = await
    axios.get(`/public/result_award/get_last_result$(date)`)

    if(res.status !== 200) return[];

    return res.data;
}

