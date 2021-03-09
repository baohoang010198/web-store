import React from 'react'
import { Button, Divider, Dropdown } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import "./CartDropDown.css";
import CartItemDropDown from '../CartItemDropDown';
import { useHistory } from 'react-router-dom';

function CartDropDown(props) {
    const { Cart } = props;
    const history = useHistory();
    const handleOnclickCheckOut = ()=>{
        history.push("/carts");
    }
    const cartDropDowwn = (Cart && Cart.itemInCart.length>0)?
    (
        <div className="cartDropdown-wrap">
            {
                Cart.itemInCart.map((item,index)=>{
                    if(item.quantity>0)
                    {
                        return <CartItemDropDown key={ index } item={ item }/>
                    }
                    return null;
                })
            }
            <Divider/>
            <div className="total-price">
                <label>Total Price:</label>
                <span>{Cart.total.toLocaleString('usd', {style : 'currency', currency : 'USD'})}</span>
            </div>
            <Button onClick={handleOnclickCheckOut} size="large" style={{display:"block",width:"100%"}} className="btnDropDown-checkout">CheckOut</Button>
        </div>
    )
    :
    (
        <div className="cartDropdown-wrap">
        <h3>Don't have anything in cart</h3>
        <Divider/>
        <div className="total-price">
            <label>Total Price:</label>
            <span>0$</span>
        </div>
    </div>
    )
    const cart = ( cartDropDowwn );
    (
        <div className="cartDropdown-wrap">
            <CartItemDropDown/>
            <Divider/>
            <div className="total-price">
                <label>Total Price:</label>
                <span>{Cart.total}$</span>
            </div>
          <Button style={{display:"block",width:"100%"}} className="btnDropDown-checkout">CheckOut</Button>
        </div>
    );
    return (
        <Dropdown overlay={cart} trigger={['click']}>
        <p className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            <ShoppingCartOutlined style={{ fontSize:"24px"}} className="cartDropdown-icon"/>
        </p>
      </Dropdown>
    )
}


export default CartDropDown

