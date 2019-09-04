import React from 'react';
import { Row, Col, Card, Form, Icon, Input, Button, Checkbox,Alert } from 'antd'
import '../../admin/Admin.css';
import Axios from 'axios';
import cookie from 'react-cookies';


class CLogin extends React.Component {
 state = {
        error: null
    }

    handleSubmit = e => {
        e.preventDefault();
        const currenthis = this;
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                var submit = await Axios.post('http://ec2-18-222-135-215.us-east-2.compute.amazonaws.com/api/login', {
                    email: values.email,
                    password: values.password,
                    accesstoken: "dezynspace"
                }, { headers: { 'Content-Type': 'application/json' } }).catch(function (error) {
                    if (error.response) {
                        currenthis.setState({error: error.response.data.error})
                    } else if (error.request) {

                    } else {
                    }
                });
                if (await submit) {
                    if (await submit.status === 200) {
                        cookie.save('token', await submit.data.message, { path: '/' });
                        window.location.href = "/booking"
                    }
                }
            }
        });
    };

    onClose = e =>{
        this.setState({error: null});
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <div>
                <Row type="flex" justify="center" align="middle" style={{ height: "80vh" }}>
                    <Col lg={9}>
                        <h1 >Login</h1>
                         {this.state.error !== null &&
                         <Alert message={this.state.error} type="error" onClose={this.onClose} closable />}
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
                            <span>Don't have an account?</span><a href="/signup">Sign up!</a>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}
const Clogin = Form.create({ name: 'login' })(CLogin);
export default Clogin;