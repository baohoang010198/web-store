import { Button, Col, Divider, Input, Row ,Form, message} from 'antd'
import React from 'react'
import { useFirebaseApp } from 'reactfire';
import 'firebase/auth';
import "./SignUp.css";
import logo from "../../../assets/images/logo.png";
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

function SignUp(props) {

    const firebase = useFirebaseApp();
    let history = useHistory();
    
    const onFinish =async (values) => {
        await firebase.auth().createUserWithEmailAndPassword(values.email, values.password)
            .then(result => {
            // Update the username
                result.user.updateProfile({
                displayName: values.username,
            })
            message.success('Register Succes');
            history.push("/");
        }).catch(error => {
            // Update the error
            message.error(error.message);
        })
    };
    
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="bg-register">
            <Row className="register">
                <Col span={16} className="banner-register">
                    <div className="overlay-register">
                            
                    </div>
                </Col>
                <Col span={8} >
                    <div className="form-register">
                        <Divider><img src={logo} alt="not found opps..." className="logo-register"/></Divider>
                        <h1 className="title-register" >Register Now</h1>
                        <div className="form-register-contend">
                            <Form
                                name="basic"
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                            >
                                <Form.Item
                                    name="username"
                                    rules={[{ required: true, message: 'Please input your username!' }]}
                                >
                                    <Input placeholder="User Name" prefix={<UserOutlined />}/>
                                </Form.Item>

                                <Form.Item
                                    name="email"
                                    rules={[{ required: true, message: 'Please input your email!' }]}
                                >
                                    <Input placeholder="Email" prefix={<MailOutlined />} />
                                </Form.Item>

                                <Form.Item
                                    name="password"
                                    rules={[{ required: true, message: 'Please input your password!' }]}
                                >
                                    <Input.Password placeholder="Password" prefix={<LockOutlined />} />
                                </Form.Item>

                                <Form.Item >
                                    <Button type="primary" htmlType="submit" className="btn-register" >
                                        Submit
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

SignUp.propTypes = {

}

export default SignUp

