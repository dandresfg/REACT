import React from 'react';
import showAPIData from './showAPIData.jsx'


function actualDraw(props){
  console.log(props)
    return(
        <p className="textStyle">Sorteo: {props.actualDraw}</p>
    );
}

function nDraw(props){
    return(
        <p className="textStyle text-end">Proximo Sorteo: {props.nextDraw}</p>
    );
}

function prevDraws(props){
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
    return(
        <div className="container-xl">
            <div className="row g-0">
                <div className="d-flex col-md-2 col-6">
                    <showAPIData />
                </div>
                <div className="d-flex col-md-5 col-6 justify-content-end">
                    <nDraw/>
                </div>
                <div className="d-flex col-md-5 col-12 justify-content-end">
                    <prevDraws previousDraws="undefined"/>
                </div>
            </div>
        </div>
    );
};
export default DrawsList;