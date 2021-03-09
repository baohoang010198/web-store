import React from 'react'
import "./CartItemDropDown.css";
import { Col, Row } from 'antd';
function CartItemDropDown(props) {
    const { item } = props;
    return (
        <Row className="cartItemDropDown-wrap">
            <Col span={8}>
                <div className="img-item">
                    <img  alt="not found" src={ item.image } />
                </div>    
            </Col>
            <Col span={16}>
                <h3>{ item.title }</h3>
                <Row>
                    <Col span={12}>
                        <label>Qty:</label>
                        <span>{ item.quantity }</span>
                    </Col>
                    <Col span={12}>
                        <label>Price:</label>
                        <span>{ item.price }$</span>
                    </Col>
                </Row>
            </Col>
        </Row>
        
    )
}


export default CartItemDropDown;

