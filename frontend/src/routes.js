import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './index.css';

import HR from './pages/HR'
import Home from './pages/Home';
import NotFound from './pages/NotFound';

//switch renders one path
//route is system route and receives the path

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/hr" component={HR}/>
                <Route path="*" exact={true} component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )
}