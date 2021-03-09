import {  DollarOutlined, LeftOutlined, RightOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import {   Affix, Button, Col, Divider, Row } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {  useHistory, useParams } from 'react-router-dom';
import Slider from "react-slick";
import { useUser } from 'reactfire';
import { addCart } from '../../../Cart/cartSlice';
import ProductCard from '../../components/ProductCard';
import "./Details.css";
import Flip  from 'react-reveal/Fade';

// import PropTypes from 'prop-types'
//Re-selector
  export const SampleNextArrow = (props)=> {
    const { onClick } = props;
    return (
      <h1  onClick={onClick} style={{position:"absolute" ,top:"50%",right:"0" ,fontSize:"40px"}}><RightOutlined /></h1>
    );
  }
  
  export const SamplePrevArrow = (props) =>{
    const { onClick } = props;
    return (
      <h1  onClick={onClick} style={{position:"absolute" ,top:"50%",left:"0",zIndex:"1",fontSize:"40px"}}><LeftOutlined /></h1>
    );
  }

function DetailPage(props) {
    const dispatch = useDispatch();
    const {data:user}=useUser();
    const productList = useSelector(state => state.products);
    const history= useHistory();
    const {productId} = useParams();
    const productDetail = useSelector(state => state.products.find( x => x.id === +productId));
    const settingsProductList = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        initialSlide: 0,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 740,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
          ]
      };
    const handleAddToCartClick = () =>{
        const cart = {
          uid:user.uid,
          cartItem:{
            ...productDetail,
            quantity:1,
          }
        }
        const action = addCart(cart);
        dispatch(action);
        const newUrl = '/products';
        history.push(newUrl);
    }
    const handleCheckOut= () =>{
      const cart = {
        uid:user.uid,
        cartItem:{
          ...productDetail,
          quantity:1,
        }
      }
      const action = addCart(cart);
      dispatch(action);
      const newUrl = '/carts';
      history.push(newUrl);
  }
  console.log(productDetail);
    return (
        <>
          <Flip >
            <div className="product-show">
              <Row >
                  <Col xs={24} sm={24} md={24} lg={18} xl={18} >
                      <div >
                          <Divider plain><h1>YOUR PRODUCT</h1></Divider>
                          <img src={productDetail.image} alt="not found oppss...." className="product-image"/>
                      </div>
                  </Col>
                  <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                      <div  className="product-detail">
                        <div className ="product-payment">
                          <Divider plain><h1>PAYMENT</h1></Divider>
                          <h1>{productDetail.title}</h1>
                          <h1>{productDetail.price.toLocaleString('it-IT', {style : 'currency', currency : 'USA'})}</h1>
                          <div className="btn-cart-pc">
                            <Button 
                                type="primary" 
                                shape="round" 
                                icon={<ShoppingCartOutlined />} 
                                size="large" 
                                style={{width:"100%"}} 
                                onClick = {()=>{handleAddToCartClick()}}
                            > 
                                Add To Bag
                            </Button>
                            <Button 
                                    type="default" 
                                    shape="round" 
                                    icon={<DollarOutlined />} 
                                    size="large" 
                                    style={{width:"100%"}}
                                    onClick={()=>{handleCheckOut()}}
                            > 
                              Check Out
                            </Button>
                          </div>
                        </div>
                          <Divider plain><h1> DESCRIPTION</h1></Divider>
                          <p>{productDetail.description}</p>
                      </div>
                  </Col>
              </Row>
            </div>
            <div >
              <Divider plain><h1>YOU MIGHT ALSO LIKE</h1></Divider>
              <Slider {...settingsProductList}>
                  {productList.map(product => (
                      <div key={product.id} className="product-related">
                          <ProductCard product={product}/>
                      </div>
                      ))}
              </Slider> 
            </div> 
            <div className="btn-cart-mobile">
              <Affix offsetBottom={0}>
                <Button 
                    type="primary" 
                    icon={<ShoppingCartOutlined />} 
                    size="large" 
                    inline
                    style={{width:"50%"}} 
                    onClick = {()=>{handleAddToCartClick()}}
                > 
                    Add To Bag
                </Button>
                <Button 
                        type="default" 
                        icon={<DollarOutlined />} 
                        size="large" 
                        style={{width:"50%"}} 
                        inline
                        onClick={()=>{handleCheckOut()}}
                > 
                    Check Out
                </Button>
              </Affix>
            </div>
          </Flip>
        </>
    )
}
DetailPage.propTypes = {

}

export default DetailPage

