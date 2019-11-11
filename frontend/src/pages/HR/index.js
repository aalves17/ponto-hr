import React from 'react';
import { NavLink, Route, HashRouter } from 'react-router-dom';
import '../HR/HR.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserClock, faUser, faList, faDatabase, faCheck} from '@fortawesome/free-solid-svg-icons';

import NewEmp from "./NewEmp";
import NewMark from "./NewMark";

class HR extends React.Component{
    render(){
        return (
            <>
            <HashRouter>
                <div className="sidebar">
                    <div className="logo">
                        <h1 align="center">img</h1>
                    </div>
                    <ul>
                        <li><NavLink  to="/NewMark"><FontAwesomeIcon icon={faUserClock}/> Register Ponto</NavLink ></li>
                        <li><NavLink  to="/NewEmp"><FontAwesomeIcon icon={faUser}/> Register New Employee</NavLink ></li>
                        <li><a href="/0"><FontAwesomeIcon icon={faDatabase}/> Change Employee Data</a></li>
                        <li><a href="/hr"><FontAwesomeIcon icon={faList}/> Espelho</a></li>
                        <li><a href="/hr"><FontAwesomeIcon icon={faCheck}/> Check Marcações</a></li>
                    </ul>
                </div>

                <div className="notification-bar">

                </div>

                <div className="rotas">
                    <Route exact path="/NewEmp" component={NewEmp}/>
                    <Route exact path="/NewMark" component={NewMark}/>
                </div>
            </HashRouter>
            </>
        )
    }
}

export default HR