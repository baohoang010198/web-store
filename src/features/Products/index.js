import React, { useCallback, useEffect, useState } from 'react'
// import PropTypes from 'prop-types'
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import MainPage from '../Products/pages/Main/index';
import NotFoundPage from '../../components/NotFound';
import DetailPage from './pages/Details';
import { useDispatch } from 'react-redux';
import { getApiProduct } from './productSlice';
import productApi from '../../api/productApi';
import Loader from '../../components/Loader';

function Product(props) {
    const match = useRouteMatch();
    const [isloadding,setIsloadding] = useState(false);
    const dispatch = useDispatch();
    const fetchProductList = useCallback(
      async () => {
        try {
            const reponse = await productApi.getAll();
            const action = getApiProduct(reponse);
            dispatch(action);
            setIsloadding(true);
          } catch (error) {
            console.log(error);
          }
      },
      [dispatch],
    );
    useEffect(() => {
      fetchProductList();
    }, 
    [fetchProductList]
    );
      if(!isloadding){
        return <Loader/>
      }
      return (
            <Switch>
              <Route exact path={match.url} component={MainPage}/>
              <Route exact path={`${match.url}/:productId`} component={DetailPage}/>
              <Route exact path={`${match.url}/category/:category`} component={MainPage}/>
              <Route component={NotFoundPage}/>
            </Switch>
      )
}

Product.propTypes = {

}

export default Product

