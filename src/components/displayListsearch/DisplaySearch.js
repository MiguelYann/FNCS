import React from 'react'
import './DisplaySearch.css'
import { DisplayStation } from '../DisplayStation/DisplayStation';


export default function DisplaySearch(props) {

    const stationFncs = props.datas.map(gare => <DisplayStation station={gare} />);

    return (
        <div className='search-list'>
            {stationFncs}
        </div>
    );
}

