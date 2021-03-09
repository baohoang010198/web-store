import { Empty } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { useUser } from 'reactfire';
import { getCartContents } from '../../../../constants/getCartContent';
import { decrease, increase, deleteItem, checkout } from '../../cartSlice';
import CartList from '../../components/CartList';
import "./Cart.css";

function CartPage(props) {
    const { data:user } = useUser();
    const dispatch = useDispatch();
    const history = useHistory();
    const Cart = useSelector(getCartContents);

    const onClickIncreaseButton = (id)=>{
        const productIncrease = {
            uid:user.uid,
            idProduct:id
        }
        const action = increase(productIncrease);
        dispatch(action);
    }
    const onClickDecreaseButton = (id)=>{
        const productDecrease = {
            uid:user.uid,
            idProduct:id
        }
        const action = decrease(productDecrease);
        dispatch(action);
    }
    const onClickDeleteButton = (id)=>{
        const productDelete = {
            uid:user.uid,
            idProduct:id
        }
        const action =deleteItem(productDelete);
        dispatch(action);
    }
    const onClickCheckOutButton = ()=>{
        const CheckOutCart = {
            uid:user.uid,
        }
        const action =checkout(CheckOutCart);
        dispatch(action);
        history.push("/");
    }
    const CartListContent = Cart===0||Cart.itemInCart.length===0?
    (
        <Empty
            image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
            imageStyle={{
            height: "30vh",
            width:"30vw",
            margin:"auto"
            }}
            description={
            <span>
                Your Bag Is Empty!!!
            </span>
            }
        />
    ):(<CartList 
            Cart={Cart}
            onClickIncreaseButton={onClickIncreaseButton}
            onClickDecreaseButton={onClickDecreaseButton}
            onClickDeleteButton={onClickDeleteButton}
            onClickCheckOutButton={ onClickCheckOutButton }
    />);

    return (
        <>
        { CartListContent }
        </>
    )
}


export default CartPage

