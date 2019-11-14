import React, { useState } from 'react';
import getCurrentDate from '../../utils/currentdate';
import { usePosition } from 'use-position';
import '../../pages/Home/Home.css';
import api from '../../services/api';

export default function Home(){
    const { latitude, longitude } = usePosition();
    const [employeeID, setEmployeeID] = useState('');
    let [datetime, setDatetime] = useState(getCurrentDate());

    setInterval(function(){
      setDatetime(getCurrentDate());
    },60000);

    async function handleSubmit(event){
        event.preventDefault();

        var marking = {
            chapa: employeeID,
            lat: latitude,
            long: longitude,
            currentDateTime: getCurrentDate()
        }

        console.dir("before API");

        const response = await api.post('/marking', marking);

        console.dir("after API");

        if(response.status.equals(200)){
            alert("saved");
        }else{
            alert("error");
        }
    }

    return (
        <>
            <div className="container">
            <div className="content">
                <form onSubmit={handleSubmit}>
                    <label>ID</label>
                    <input
                        id="id"
                        type="text"
                        placeholder="Your employee ID"
                        value={employeeID}
                        onChange={event => setEmployeeID(event.target.value)}
                    />
                    <label>CURRENT DATETIME</label>
                    <span>{datetime}</span>

                    <button type="submit">REGISTER</button>
                </form>
            </div>
            </div>
        </>
    );
}