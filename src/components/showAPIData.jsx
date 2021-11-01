import React from 'react';
import axios from 'axios';

const baseURL = "http://34.227.3.72:4000/api/public/result_award/get_last_result";

export default function showAPIData(){
  const [draw, setDraw] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setDraw(response.data);
    });
  }, []);

  if (!draw) return null;

    return(
      <div>
        <h1>{draw.draws.id}</h1>
        <p>{draw.prev_draws[0]}</p>
      </div>
    ); 
}