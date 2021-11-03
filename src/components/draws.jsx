import React, { useEffect, useState } from 'react';
import api from './api.jsx';


// Always Uppercase
const ActualDraw = ({ data }) => (<p className="textStyle">Sorteo: {data.nombre}</p>)
const NextDraw = ({ data }) => (<p className="textStyle text-end">Proximo Sorteo: {data.nombre}</p>)

function PrevDraw({ data }){
    return(
        <div className="dropdown">
            <a className="btn btn-secondary dropdown-toggle" href="/" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                Sorteos Anteriores
            </a>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            {
                data.map(item =>
                    <li key={item}>
                        <a className="dropdown-item" href="/">{item}</a>
                    </li>
                )
            }
            </ul>
        </div>
    );
}

function DrawsList(){
    const [data, setData] = useState(null);
    const [date, setDate] = useState('2021-10-24');

    useEffect(function(){
        getResults(date);
    }, [ date ])

    const getResults = (date) => {
        api.get(`/public/result_award/get_last_result?date=${date}`)
        .then(res => res.data)
        .then(res => setData(res)) // Results
        .catch(e => console.log(e)) // Error
    }

    const onChangeDate = (date) => setDate(date) // To change the date

    return(
        <div className="container-xl">
        {
            !data ? 'Cargando...'
            :
                (
                <div className="row g-0">
                    <div className="d-flex col-md-2 col-6">
                        <ActualDraw data={data.draw} />
                    </div>
                    <div className="d-flex col-md-5 col-6 justify-content-end">
                        <NextDraw data={data.next} />
                    </div>
                    <div className="d-flex col-md-5 col-12 justify-content-end">
                        <PrevDraw data={data.prev_draws} />
                    </div>
                </div>
            )
        }
        </div>
    );
}

export default DrawsList;