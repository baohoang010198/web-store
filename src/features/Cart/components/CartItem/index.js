import PropTypes from 'prop-types'
import "./CartItem.css";
import { Button, message, Popconfirm, Tooltip } from 'antd';
import { CaretDownOutlined, CaretUpOutlined, DeleteFilled } from '@ant-design/icons';
function CartItem(props) {
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
            <tr>
                <td className="cart_product">
                    <a href="abc.com">
                        <img src={ item.image} alt="Product" />
                    </a>
                </td>
                <td className="cart_name">
                    <span>{ item.title }</span>
                </td>
                <td className="price">
                    <span>{ item.price.toLocaleString('usd', {style : 'currency', currency : 'USD'}) }</span>
                </td>
                <td className="qty">
                    <input className="form-control input-sm" type="text" value={item.quantity} disabled/>
                    <Button size="small" onClick={()=>onClickIncrease(item.id)}><CaretUpOutlined /></Button>
                    <Button size="small" onClick={()=>onClickDecrease(item.id)}><CaretDownOutlined /></Button>
                </td>
                <td className="price">
                    <span>{ item.subtotal.toLocaleString('usd', {style : 'currency', currency : 'USD'}) }</span>
                </td>
                <td className="action">
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
                </td>
            </tr>
        )
}

CartItem.propTypes = {
    item:PropTypes.object.isRequired
}
CartItem.defaultProps={
    item : null
}
export default CartItem

