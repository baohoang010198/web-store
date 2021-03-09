import React from 'react'
// import PropTypes from 'prop-types'
import { Affix } from 'antd'
import "./Footer.css";
import { Link } from "react-router-dom";
import { EnvironmentOutlined, FacebookFilled, InstagramFilled, MailFilled, PhoneFilled, SendOutlined, YoutubeFilled } from '@ant-design/icons'

function Footer(props) {
    return (
        <Affix offsetTop={0}>
            <div className="footer">
                <div className="overlay">
                    <div>
                        <h1>CONTACT INFORMATION</h1>
                        <p><EnvironmentOutlined /> 124/28 Le Thi Bach Cat st District 11</p>
                        <p><PhoneFilled /> 0765138476</p>
                        <p><MailFilled /> baohoang010198@gmail.com</p>
                    </div>
                    <div>
                        <h1>WEB STORE</h1>
                        <Link to="/"> <p><SendOutlined /> Home Page</p></Link>
                        <Link to="/products"> <p><SendOutlined /> My Products</p></Link>
                    </div>
                    <div>
                        <h1>FOLLOW US</h1>
                        <p><FacebookFilled /> Facebook</p>
                        <p><YoutubeFilled /> Youtube</p>
                        <p><InstagramFilled /> Instagram</p>
                    </div>
                </div>
            </div>
            <div className="footer-mobile">
                <h1>Web Store</h1>
                <h1>124/28 Le Thi Bach Cat st District 11 HoChiMinh City</h1>
                <h1>0765138476</h1>
            </div>
        </Affix>
    )
}

Footer.propTypes = {}


export default Footer

