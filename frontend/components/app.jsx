import React from "react";

import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import SignupFormContainer from './session/signup_form_container';

import LoginFormContainer from './session/login_form_container';

import LogoutFormContainer from './session/logout_form_container';

import AccountFormsContainer from './session/account_forms_container';

import NavBarContainer from './navbar/navbar_container';

import Main from './main/main';

import AboutMain from './main/about_main';

import MaterialsMain from './main/materials_main';

import AccessoriesMain from './main/accessories_main';

import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
    <div>
        <Route path="/" component={NavBarContainer}/> 
        <Switch>
            <Route exact path="/" component={Main}/> 
            <Route exact path="/account" component={AccountFormsContainer}/> 
            {/* <Route exact path="/materials" component={Materials} /> */}

        </Switch>
        <Route exact path="/" component={AboutMain} /> 
        <Route exact path="/" component={MaterialsMain} />
        <Route exact path="/" component={AccessoriesMain} />
    </div>

);

export default App;