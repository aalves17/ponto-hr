import React, { useState } from 'react';
import getCurrentDate from '../../utils/currentdate';
import { usePosition } from 'use-position';
import '../../pages/Home/Home.css'

export default function Home(){
    const { latitude, longitude } = usePosition();
    const [employeeID, setEmployeeID] = useState('');
    let [datetime, setDatetime] = useState(getCurrentDate());

    setInterval(function(){
      setDatetime(getCurrentDate());
    },60000);

    function handleSubmit(){
        alert("id = " + {employeeID});
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