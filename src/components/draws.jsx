import React from 'react';
import result from './showAPIData.jsx'


function actualDraw(props){
  console.log(props)
    return(
        <p className="textStyle">Sorteo: {props.actualDraw}</p>
    );
}

function nextDraw(props){
    return(
        <p className="textStyle text-end">Proximo Sorteo: {props.nextDraw}</p>
    );
}

function previousDraws(props){
    return(
        <div className="dropdown">
            <a className="btn btn-secondary dropdown-toggle" href="/" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                Sorteos Anteriores
            </a>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li><a className="dropdown-item" href="/">{props.previousDraws}</a></li>
                <li><a className="dropdown-item" href="/">{props.previousDraws}</a></li>
                <li><a className="dropdown-item" href="/">{props.previousDraws}</a></li>
            </ul>
        </div>
    );
}

function DrawsList(){

    const hola = async () =>  {
      console.log('asdasd')
      const response = await result();
      console.log(response)
    }

    return(
        <div className="container-xl">
            <div className="row g-0">
                <div className="d-flex col-md-2 col-6">
                    <actualDraw data={response} />
                </div>
                <div className="d-flex col-md-5 col-6 justify-content-end">
                    <nextDraw/>
                </div>
                <div className="d-flex col-md-5 col-12 justify-content-end">
                    <previousDraws previousDraws="undefined"/>
                </div>
            </div>
        </div>
    );
}

export default DrawsList;