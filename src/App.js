import './App.css';
import { BackTop, Layout } from 'antd';
import "antd/dist/antd.css";
import Header from './components/Header';
import Footer from './components/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFoundPage from './components/NotFound';
import ScrollToTop from './components/ScrollToTop';
import SignIn from './features/Auth/SignIn';
import SignUp from './features/Auth/SignUp';
import { useUser } from 'reactfire';
import CartPage from './features/Cart/pages/Main';
import Loader from './components/Loader';
import Page403 from './components/403Page';
const { Content } = Layout;
const Product = React.lazy(() => import('./features/Products'));
const Contact = React.lazy(() => import('./features/Contact'));
const Home = React.lazy(() => import('./features/Home'));

function App() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  const  { data:user } = useUser();

  return (
        <Suspense fallback={<Loader/>}>
        <Router>
          <ScrollToTop />
          { user===null ? 
          <>
            <Switch>
                <Route   path="/login" component={SignIn}/>
                <Route   path="/register" component={SignUp}/>
                <Route component={Page403}/>
            </Switch>
            </>
            :
            <Layout>
              <BackTop />
              <Header/>
              <Content >
                <div className="site-layout-content">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route  path="/products" component={Product}/>
                    <Route  path="/contact" component={Contact}/>
                    <Route  path="/carts" component={CartPage}/>
                    <Route component={NotFoundPage}/>
                </Switch>
                </div>
              </Content>
              <Footer/>
          </Layout>
        }
        </Router>
      </Suspense>
  );
}

export default App;
