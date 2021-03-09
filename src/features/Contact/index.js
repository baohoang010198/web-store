import React from 'react'
// import PropTypes from 'prop-types'
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import MainPage from './pages/Main/index';
import NotFoundPage from '../../components/NotFound';

function Contact(props) {
    const match = useRouteMatch();
    console.log({match});
    return (
        <Switch>
        <Route exact path={match.url} component={MainPage}/>
        
        {/* <Route path={`${match.url}/add`} component={AddEditPage}/>
        <Route path={`${match.url}/:photoID`} component={AddEditPage}/> */}

        <Route component={NotFoundPage}/>
    </Switch>
    )
}

Contact.propTypes = {

}

export default Contact

