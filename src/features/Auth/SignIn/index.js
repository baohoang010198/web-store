import React from 'react'
import "./SignIn.css";
import { Form, Input, Button, Checkbox, Divider, message } from 'antd';
import logo from '../../../assets/images/logo.png' // relative path to image 
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { useFirebaseApp } from 'reactfire';
import 'firebase/auth';

function SignIn(props) {
    let history = useHistory();
    const firebase = useFirebaseApp();
    const onFinish = values => {

        firebase.auth().signInWithEmailAndPassword(values.email, values.password)
        .then(result => {
            message.success("Login Success");
            history.push("/");
        })
        .catch(error => {
          // Update the error
          message.error(error.message);
        })
      };
    
      const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };
      
    return (
        <div className="bg-login">
            <Form
                className="login-form"
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                >
                    <Divider><img src={ logo } alt="not found oopsss...." className="logo-login"/></Divider>
                    <h1 className="title-login">Login Form</h1>
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                        hasFeedback
                    >
                        <Input placeholder="Email" prefix={<MailOutlined />} />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                        hasFeedback
                    >
                        <Input.Password placeholder="Password" prefix={<LockOutlined />}/>
                        
                    </Form.Item>

                    <Form.Item  name="remember" valuePropName="checked">
                        <Checkbox >Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item >
                        <Button  htmlType="submit" className="btn-login">
                        Login
                        </Button>
                    </Form.Item>
                    {/* <Divider>or</Divider>
                    <Form.Item className="btn-login-with">
                        <Button  type="text" className="btn btn-login-google"  >
                            <GoogleOutlined className="icon-btn-login"/>
                        </Button>
                        <Button  type="text" className="btn btn-login-facebook">
                            <FacebookOutlined className="icon-btn-login"/>
                        </Button>
                        <Button  type="text" className="btn btn-login-twitter">
                            <TwitterOutlined className="icon-btn-login"/>
                        </Button>
                    </Form.Item> */}
                    <Form.Item>
                        <p>Not a Member? <a href='/register'>Join Us</a>.</p>
                    </Form.Item>
                </Form>
        </div>
    )
}

SignIn.propTypes = {

}

export default SignIn

