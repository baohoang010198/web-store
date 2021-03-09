import React from 'react'
// import PropTypes from 'prop-types'
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import NotFoundPage from '../../components/NotFound';
import MainPage from './pages/Main';

function Home(props) {
    const match = useRouteMatch();
    return (
        <Switch>
            <Route exact path={match.url} component={MainPage}/>
            <Route component={NotFoundPage}/>
        </Switch>
    )
}

Home.propTypes = {

}

export default Home

