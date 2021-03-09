import React from 'react'
import PropTypes from 'prop-types'
import { Dropdown, Menu } from 'antd'
import LogOut from '../../features/Auth/LogOut'
import { LogoutOutlined, MoreOutlined, UserOutlined } from '@ant-design/icons';
import "./Usersetting.css"

function UserSettings(props) {
    const  { displayName }  = props;
    const menu =(
        <Menu style={{width:"200px"}}>
              <Menu.Item icon={<UserOutlined />}>
                <span>{displayName}</span>
            </Menu.Item>
            <Menu.Item icon={<LogoutOutlined />}>
                <LogOut/>
            </Menu.Item>
        </Menu>
    );

    return (
        <>
            <Dropdown.Button overlay={menu} placement="bottomCenter" icon={<MoreOutlined style={{fontSize:"20px",lineHeight:"40px"}} />} type="text">
                <h2 className="username">{displayName}</h2>
            </Dropdown.Button>
        </>
           
    )
}

UserSettings.propTypes = {
    displayName: PropTypes.string
}

UserSettings.defaultProps = {
    displayName: ""
}
export default UserSettings

