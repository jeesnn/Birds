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

import Materials from './materials/materials';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

import AboutMaterials from "./materials/about_materials";

import AboutMaterialsSub from './materials/about_materials_sub';

import MoreMaterialsMain from './materials/more_materials_main';

import Tree from './materials/tree/tree';

import AboutTreeMaterial from './materials/tree/about_tree_material';

import AboutTreeSub from './materials/tree/about_tree_sub';

import MoreTreeMain from './materials/tree/more_tree_main';

import ShoeIndexContainer from './shoes/shoe_index_container';

const App = () => (
    <div>
        <Route path="/" component={NavBarContainer}/> 
        <Switch>
            <Route exact path="/" component={Main}/> 
            <Route exact path="/account" component={AccountFormsContainer}/> 
            <Route exact path="/materials" component={Materials} />
            <Route exact path="/materials/tree" component={Tree} /> 
            <Route exact path="/shoes/:gender" component={ShoeIndexContainer} />
           

        </Switch>
        <Route exact path="/" component={AboutMain} /> 
        <Route exact path="/" component={MaterialsMain} />
        <Route exact path="/" component={AccessoriesMain} />

        <Route exact path="/materials" component={AboutMaterials} />
        <Route exact path="/materials" component={AboutMaterialsSub} />
        <Route exact path="/materials" component={MoreMaterialsMain} />

        <Route exact path="/materials/tree" component={AboutTreeMaterial} />
        <Route exact path="/materials/tree" component={AboutTreeSub} />
        <Route exact path="/materials/tree" component={MoreTreeMain} />   
    </div>

);

export default App;