import React from 'react';
import '../HR/HR.css';

class HR extends React.Component{
    render(){
        return (
            <>
                <div className="sidebar">
                    <div className="logo">
                        <h1 align="center">img</h1>
                    </div>
                    <ul>
                        <li><a href="#">Register Ponto</a></li>
                        <li><a href="#">Register New Employee</a></li>
                        <li><a href="#">Change Employee Data</a></li>
                        <li><a href="#">Espelho</a></li>
                        <li><a href="#">Check Marcações</a></li>
                    </ul>
                </div>

                <div className="notification-bar">

                </div>

                <div className="app-main-container">
                    <p>app-main-container</p>
                </div>
            </>
        )
    }
}

export default HR