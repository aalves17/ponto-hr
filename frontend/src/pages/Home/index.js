import React, { useState } from 'react';
import getCurrentDate from '../../utils/currentdate';
import { usePosition } from 'use-position';

export default function Home(){
    const { latitude, longitude } = usePosition();
    const [id, setId] = useState();
    let [datetime, setDatetime] = useState(getCurrentDate());

    setInterval(function(){
      setDatetime(getCurrentDate());
    },60000);

    function handleSubmit(){
        alert("enviado");
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <code>
                    latitude: {latitude}<br/>
                    longitude: {longitude}<br/>
                </code>
                <label>ID</label>
                <input type="text" name="id" value={id} placeholder="Your company ID" onChange={event => setId(event.target.value)}/>

                <label>CURRENT DATETIME</label>
                <span align="center">{datetime}</span>

                <button type="submit">REGISTER</button>
            </form>
        </>
    );
}