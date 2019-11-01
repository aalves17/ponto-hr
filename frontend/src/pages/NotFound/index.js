import React from 'react';

export default function NotFound({history}){

    return(
        <>
        <div id="notfound">
            <p align="center">404 - Page Not Found</p>
            <button type="button" onClick={() => {history.push(`/`)}}> GO BACK</button>
        </div>
        </>
    )
}