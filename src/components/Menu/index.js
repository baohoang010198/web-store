import React, { useCallback, useEffect, useState } from 'react';
import "./Menu.css";
import { Badge, Col, Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import { GiftOutlined, HomeOutlined } from '@ant-design/icons';
import CartDropDown from '../CartDropDown';
import productApi from '../../api/productApi';
const { SubMenu } = Menu;
function MenuNav(props) {
    const { CartItemQuantity, Cart ,displayUser} = props;
    const [Categories, setCategories] = useState([])
    const fetchCategory = useCallback(
        async () => {
          try {
              const categories = await productApi.getAllCategory();
              setCategories(categories);
            } catch (error) {
              console.log(error);
            }
        },
        [],
      );
    useEffect(() => {
        fetchCategory()
    }, [fetchCategory]);
    return (
        <>
            <Col xs={23} sm={23} md={23} lg={12} xl={12} className="menu">
                <Menu theme="ligth"  mode="horizontal" 
                    defaultSelectedKeys={['1']} 
                    style={{textAlign:"right"}}
                    size="large"
                >
                    <Menu.Item key="home" icon={<HomeOutlined />}>                             
                        <NavLink exact to="/"> Home</NavLink>
                    </Menu.Item>
                    <SubMenu key="product" icon={<GiftOutlined />} title="Products">
                            <Menu.Item key="allproduct">
                                <NavLink exact to="/products"> All Products</NavLink>
                            </Menu.Item>
                        <Menu.ItemGroup key="category" title="Category">
                            {
                                Categories.map((category,index)=>(
                                    <Menu.Item key={ index }>
                                        <NavLink exact to={`/products/category/${category}`}>{ category }</NavLink>
                                    </Menu.Item>
                                ))
                            }
                        </Menu.ItemGroup>
                    </SubMenu>
                </Menu>
                {/* End Menu */}
                </Col>
                <Col xs={23} sm={23} md={23} lg={12} xl={12} className="menuMobile">
                <Menu theme="ligth"  mode="horizontal" 
                    defaultSelectedKeys={['1']} 
                    style={{textAlign:"right"}}
                    size="large"
                >
                    <Menu.Item key="home" icon={<HomeOutlined style={{fontSize:"24px"}} />}>                             
                        <NavLink exact to="/"> </NavLink>
                    </Menu.Item>
                    <SubMenu key="product" icon={<GiftOutlined style={{fontSize:"24px"}}/>}>
                            <Menu.Item key="product">
                                <NavLink exact to="/products"> All Products</NavLink>
                            </Menu.Item>
                        <Menu.ItemGroup key="category" title="Category">
                        {
                            Categories.map((category,index)=>(
                                <Menu.Item key={ index }>
                                    <NavLink exact to={`/products/category/${category}`}>{ category }</NavLink>
                                </Menu.Item>
                            ))
                        }
                        </Menu.ItemGroup>
                    </SubMenu>
                    <Menu.Item key="cart">                             
                        <Badge count={CartItemQuantity}>
                            <CartDropDown Cart={ Cart }/>
                        </Badge>
                    </Menu.Item>
                    { displayUser }
                </Menu>
            </Col>
        </>
    )
}


export default MenuNav

