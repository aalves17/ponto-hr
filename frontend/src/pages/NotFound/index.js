import React from 'react';
import '../../pages/NotFound/Notfound.css'

export default function NotFound({history}){

    return(
        <>
            <div className="container">
                <div className="content">
                    <div id="notfound">
                        <p align="center">404 - Page Not Found</p>
                        <button type="button" onClick={() => {history.push(`/`)}}> GO BACK</button>
                    </div>
                </div>
            </div>
        </>
    )
}