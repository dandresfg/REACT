import React from 'react';
import axios from 'axios';

const baseURL = "http://34.227.3.72:4000/api/public/result_award/get_last_result?date=2021-04-07";

export default function ShowAPIData(){
  const [draw, setDraw] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${baseURL}/asdf`).then((response) => {
      setDraw(response.data);
    }).catch(error=>{
      setError(error);
    });
  }, []);

  if (error) return `Error: ${error.message}`;
  if(!draw) return "Error trying to get date"

  console.log(draw)
    return(
      <h1>a</h1>
    ); 
}