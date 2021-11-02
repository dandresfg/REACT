import React from 'react';
import axios from 'axios';

const client = axios.create({
  baseURL: "http://34.227.3.72:4000/api/public/result_award/get_last_result?"
});

export default function ShowAPIData(){
  const [draw, setDraw] = React.useState(null);
  const [error, setError] = React.useState(null);
  
  React.useEffect(()=>{
    async function getDraws(){
      const response = await client.get("/1");
      setDraw(response.data);
    }
    getDraws();
  }, []);

  async function postDate() {
    await client.post("/1");
    alert("modificado")
    setDraw(null);
  }

  if(!draw) return "Error trying to get date"

  console.log(draw)
    return(
    <div>
      <h1>{draw.title}</h1>
      <p>{draw.body}</p>
      <button onClick={postDate}>Post</button>
    </div>
    ); 
}