import React from 'react'
import './DisplaySearch.css'
import { DisplayStation } from '../DisplayStation/DisplayStation';


export default function DisplaySearch(props:any) {

    const stationFncs = props.datas.map((gare : any) => <DisplayStation station={gare} />);

    return (
        <div className='search-list'>
            {stationFncs}
        </div>
    );
}

