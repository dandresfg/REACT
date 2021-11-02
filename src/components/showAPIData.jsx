import React from 'react';
import axios from 'axios';

const baseURL = "http://34.227.3.72:4000/api/public/result_award/get_last_result";

export default function ShowAPIData(){
  const [draw, setDraw] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setDraw(response.data);
    });
  }, []);
    
    return(
      <div>
        <h1>{draw.draws.id}</h1>
        <p>{draw.prev_draws[0]}</p>
      </div>
    ); 
}