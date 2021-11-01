import React from 'react';
import APIdata from './api.jsx'

function ShowAPI() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    APIdata().then(res => {
      setData(res.data);
    });
  }, []);

  return (
    <a>{JSON.stringify(data.draw.fecha_juega, null, 2)}</a>
  );
}

export default ShowAPI;