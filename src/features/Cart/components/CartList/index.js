import React from 'react'
import PropTypes from 'prop-types'
import "./CartlList.css";
import CartItem from '../CartItem';
import { Affix, Button, Divider, Empty, message } from 'antd';
import { ArrowLeftOutlined, CheckOutlined, DollarCircleOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import CartItemMobile from '../CartItemMobile';
function CartList(props) {
    const history = useHistory();
    const { Cart, onClickIncreaseButton, onClickDecreaseButton, onClickDeleteButton, onClickCheckOutButton }= props;
    const handlePrevButton = ()=>{
        history.push('/products');
    }

    const handleIncrease = (id)=>{
        onClickIncreaseButton(id);
    }
    const handleDecrease = (id)=>{
        onClickDecreaseButton(id);
    }
    const handleDelete = (id)=>{
        onClickDeleteButton(id);
    }
    const handleCheckOut = ()=>{
        onClickCheckOutButton();
        message.success('Payment success');
    }
    const cartItem = Cart.itemInCart.findIndex(item => item.quantity>0)===-1?
    (
        <tr>
            <td colSpan={7}>
                <Empty
                    image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                    imageStyle={{
                    height: "100%",
                    }}
                    description={
                        <span>
                            Your Bag Is Empty!!!
                        </span>
                    }
                />
            </td>
        </tr>
     
    ):
    (
        Cart.itemInCart.map((item,index)=>{
            if(item.subtotal>0){
                return (
                    <CartItem 
                        key={index}
                        item={item}
                        handleIncrease={handleIncrease}
                        handleDecrease={handleDecrease}
                        handleDelete={handleDelete}
                    />
                );
            }else return null;
        })
    );
    const cartItemMobile = Cart.itemInCart.findIndex(item => item.quantity>0)===-1?
    (
        <Empty
            description={
                <span>
                    Your Bag Is Empty!!!
                </span>
            }
        />
    ):
    (
        Cart.itemInCart.map((item,index)=>{
            if(item.subtotal>0){
                return (
                    <CartItemMobile 
                        key={index}
                        item={item}
                        handleIncrease={handleIncrease}
                        handleDecrease={handleDecrease}
                        handleDelete={handleDelete}
                    />
                );
            }else return null;
        })
    );
    return (
        <>
            <div className="cart-pc">
                <table className="table table-bordered cart_summary">
                    <thead>
                    <tr>
                        <th className="cart_product">Product</th>
                        <th>Product name</th>
                        <th>Unit price</th>
                        <th>Qty</th>
                        <th>Total</th>
                        <th className="action"><i className="fa fa-trash-o" />
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                        { cartItem }
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={2} rowSpan={2} />
                            <td colSpan={3}>Total products </td>
                            <td colSpan={2}>{ Cart.total.toLocaleString('usd', {style : 'currency', currency : 'USD'}) }</td>
                        </tr>
                        <tr>
                            <td colSpan={3}>
                                <strong>Total</strong>
                            </td>
                            <td colSpan={2}>
                                <strong>{ Cart.total.toLocaleString('usd', {style : 'currency', currency : 'USD'}) }</strong>
                            </td>
                        </tr>
                    </tfoot>
                </table>	
                <div className="cart_navigation ">
                    <Button className="prev-btn" icon={<ArrowLeftOutlined />} onClick={handlePrevButton}>Continue shopping</Button>
                    <Button className="next-btn" icon={<CheckOutlined />} onClick={ handleCheckOut }>Proceed to checkout</Button>
                </div>
            </div>
            <div className="cart-mobile">
                {cartItemMobile}
                <Divider >
                    <h3>
                        Total : { Cart.total.toLocaleString('usd', {style : 'currency', currency : 'USD'}) }
                    </h3>
                </Divider>
                <Affix offsetBottom={0}>
                <div className="cartMobile_navigation">
                    <Button className="prev-btn" icon={<ArrowLeftOutlined />} onClick={handlePrevButton}></Button>
                    <Button className="next-btn" icon={<DollarCircleOutlined />} onClick={ handleCheckOut }></Button>
                </div>
                </Affix>
            </div>
        </>
           
    )
}

CartList.propTypes = {
    Cart: PropTypes.object.isRequired
}
CartList.defaultProps={
    Cart:null
}
export default CartList

