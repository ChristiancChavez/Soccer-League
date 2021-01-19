import React from 'react';
//Components
import Teams from './../Teams/Teams';
//Dependencies
import { Switch, Route } from "react-router-dom";


const Main = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/teams" component={Teams} />
            </Switch>
        </div>
    );
};

export default Main;