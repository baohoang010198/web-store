import React from 'react'
import PropTypes from 'prop-types'
import { Button, message, Popconfirm, Tooltip } from 'antd';
import "./CartItemMobile.css"
import { DeleteFilled, MinusCircleFilled, PlusCircleFilled } from '@ant-design/icons';
function CartItemMobile(props) {
    const { item, handleIncrease, handleDecrease, handleDelete } = props;

    const handleDeleteCartItem= (id)=> {
        handleDelete(id);
        message.success('Successfully deleted from the bag');
    }
      
    const cancelDeleteCartItem= (e)=> {
        message.error('Unsuccessfully deleted from the bag');
    }
    const onClickIncrease = (id)=>{
            handleIncrease(id);
    }
    const onClickDecrease = (id)=>{
            handleDecrease(id);
    }
    return (
        <>  
            <div className="cartMobile-wrap">
                <img src={item.image} alt="oop"className="cartMobile-img"/>
                <div className="cartMobile-content">
                    <p className="cartMobile-title">{item.title} </p>
                    <div className="cartMobile-button">
                        <Button  
                            icon={<MinusCircleFilled />} 
                            shape="text" 
                            className="cartMobile-decrease"
                            onClick={()=>{onClickDecrease(item.id)}}
                        />
                        <p className="cartMobile-quantity" >
                            {item.quantity}
                        </p>
                        <Button  
                            icon={<PlusCircleFilled />} 
                            shape="text" 
                            className="cartMobile-increase" 
                            success
                            onClick={()=>{onClickIncrease(item.id)}}
                        
                        />
                         <Tooltip title="Delete">
                            <Popconfirm
                                title="Are you sure to delete this product ?"
                                onConfirm={(e)=> handleDeleteCartItem((item.id))}
                                onCancel={cancelDeleteCartItem}
                                okText="Yes"
                                cancelText="No"
                            >
                                <Button type="danger" icon={<DeleteFilled />}/>
                            </Popconfirm>
                        </Tooltip>
                    </div>
                </div>
                <p className="cartMobile-price">
                    { item.subtotal.toLocaleString('usd', {style : 'currency', currency : 'USD'}) }
                </p>


            </div>
        </>
    )
}

CartItemMobile.propTypes = {
    item:PropTypes.object.isRequired
}
CartItemMobile.defaultProps={
    item : null
}

export default CartItemMobile

