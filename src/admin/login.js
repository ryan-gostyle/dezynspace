import React from 'react';
import { Row, Col, Card, Form, Icon, Input, Button, Checkbox } from 'antd'
import './Admin.css';
import Axios from 'axios';
import {Redirect} from 'react-router-dom';
import cookie from 'react-cookies'

class Login extends React.Component {

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                var submit = await Axios.post('http://ec2-18-222-135-215.us-east-2.compute.amazonaws.com/api/admin/login', {
                    email: values.email,
                    password: values.password,
                    accesstoken: "dezynspace"

                }, { headers: { 'Content-Type': 'application/json' } }).catch(function (error) {
                    if (error.response) {
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                    } else if (error.request) {

                    } else {
                    }
                });
                if (await submit) {
                    cookie.save('token', await submit.data.message, { path: '/' });
                    window.location.href = "/admin/booking";
                }
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <div>
                <Row type="flex" justify="center" align="middle" style={{ height: "80vh" }}>
                    <Col lg={9}>
                        <h1 >Admin</h1>
                        <br />
                        <Card className="login-card">
                            <Form onSubmit={this.handleSubmit} className="login-form" style={{ textAlign: "left" }}>
                                <Form.Item label="Email" style={{ marginTop: "0%" }}>
                                    {getFieldDecorator('email', {
                                        rules: [{ required: true, message: 'Please input your username!' }],
                                    })(
                                        <Input
                                            size="large"
                                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                            placeholder="Email"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item label="Password">
                                    {getFieldDecorator('password', {
                                        rules: [{ required: true, message: 'Please input your Password!' }],
                                    })(
                                        <Input
                                            size="large"
                                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                            type="password"
                                            placeholder="Password"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    <Button htmlType="submit"
                                        size="large"
                                        className="login-form-button" block>
                                        Log in
                                  </Button>
                                </Form.Item>

                            </Form>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}
const AdminLogin = Form.create({ name: 'login' })(Login);
export default AdminLogin;