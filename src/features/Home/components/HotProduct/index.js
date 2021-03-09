import React from 'react'
import PropTypes from 'prop-types'
import "./hotProduct.css";
import { Col, Row } from 'antd';
import { useHistory } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Slide  from 'react-reveal/Slide';
function HotProduct(props) {
    const { Divider ,product } = props;
    const history= useHistory();
    const hadleOnClickHotProduct = ()=>{
        history.push("/products");
    }


    return (
        <div className="hotProduct-banner-wrap">
            <Slide left >
                <h1 className="Divider">{ Divider }</h1>
            </Slide >
            <Row>
                {
                    product.map((item,index)=>{
                        if(index/2===0){
                            return(
                                <Col xs={24} sm={24} md={24} lg={12} xl={12} className="hotProduct-img-wrap" key={ index } onClick={ hadleOnClickHotProduct }> 
                                    <Fade left>
                                        <img src={ item.image } alt="oppps" className="hotProduct-img"/>
                                        <div className="hotProduct-img-overlay">
                                        </div>
                                    </Fade>
                                </Col>
                            )
                        }
                        else return(
                            <Col xs={24} sm={24} md={24} lg={12} xl={12} className="hotProduct-img-wrap" key={ index } onClick={ hadleOnClickHotProduct }> 
                                <Fade right>
                                    <img src={ item.image } alt="oppps" className="hotProduct-img"/>
                                    <div className="hotProduct-img-overlay">
                                    </div>
                                </Fade>
                            </Col>
                        )
                    })
                }
            </Row>
        </div>
    )
}

HotProduct.propTypes = {
    Divider:PropTypes.string,
}
HotProduct.defaultProps = {
    Divider:"",
}

export default HotProduct;

