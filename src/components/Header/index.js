import "antd/dist/antd.css";
import { Affix, Badge, Button, Col, Row } from 'antd';
import "./Header.css";
import { useUser } from 'reactfire';
import UserSettings from '../UserSetting';
import {  useSelector } from 'react-redux';
import { getQuantity } from '../../constants/getQuantity';
import CartDropDown from '../CartDropDown';
import {  getCartContents } from '../../constants/getCartContent';
import MenuNav from "../Menu";

const Header = props => {
    const Cart =  useSelector(getCartContents);
    const CartItemQuantity = useSelector(getQuantity);
    const { data:user } = useUser();
    const displayUser = user?
                            (
                                <UserSettings displayName={user.displayName}/>
                            )
                            : 
                            <Button>Sign In</Button>;
    return (
        <Affix offsetTop={0} >
            <Row className="header">
                <Col xs={24} sm={24} md={24} lg={6} xl={6} className="logo" >
                    <h1 style={{ textAlign: 'center' }}>Web Store</h1>
                </Col>
                {/* End Logo */}
                <MenuNav Cart={ Cart } CartItemQuantity={ CartItemQuantity } displayUser={ displayUser }/>
                <Col xs={0} sm={0} md={0} lg={6} xl={6} className="user-setting">
                    <Badge count={CartItemQuantity}>
                        <CartDropDown Cart={ Cart }/>
                    </Badge>
                    { displayUser }
                </Col>
            </Row>
        </Affix>
    )
}

Header.propTypes = {}

export default Header
