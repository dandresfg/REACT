import React from 'react';
import TuQuintico from '../resources/head/Group-1.png';

function NavLinks(props){
    return(
        <li className="nav-item">
            <a className="nav-link text-white" aria-current="page" href={props.href}>{props.text}</a>
        </li>
    );
}

function Navigation(){
    return(
        <nav className="navbar navbar-expand-md navbar-light sticky-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src={TuQuintico} alt="TuQuintico"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" arial-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="navbar-nav">
                        <NavLinks href="/" text="Inicio"/>
                        <NavLinks href="/" text="Ticket Personalizado"/>
                        <NavLinks href="/" text="Formas de pago"/>
                        <NavLinks href="/" text="Contáctanos"/>
                        <NavLinks href="/" text="Consulta de ticket"/>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;