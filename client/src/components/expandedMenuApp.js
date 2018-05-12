import React from 'react';
import {Route} from 'react-router-dom';
import ExpandedMenuWelcome from './expandedMenuWelcome';
import MyAccountPage from './myAccount';

function expandedMenuRoute(){
    return( 
        <section>           
            <Route exact path="/" component={ExpandedMenuWelcome} />
            <Route  path="/myAccount" component={MyAccountPage} />
        </section>
    )
}
export default expandedMenuRoute;
