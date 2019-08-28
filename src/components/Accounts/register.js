import React from 'react';
import { Row, Col, Card, Form, Icon, Input, Button, Select } from 'antd'
import '../../admin/Admin.css';
import Axios from 'axios';
const { Option } = Select;

class Register extends React.Component {

    state = {
        countries: []
    }

    async componentDidMount() {
        var data = await Axios.get('http://ec2-18-222-135-215.us-east-2.compute.amazonaws.com/api/countries')
        this.setState({ countries: data.data });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                var submit = await Axios.post('http://ec2-18-222-135-215.us-east-2.compute.amazonaws.com/api/register', {
                    first_name: values.first_name,
                    last_name: values.last_name,
                    country: values.country,
                    company: values.company,
                    industry: values.industry,
                    email: values.email,
                    password: values.password,
                    password_confirmation: values.password_confirmation

                }, {headers: { 'Content-Type': 'application/json'}}).catch(function (error) {
                    if (error.response) {
                        // The request was made and the server responded with a status code
                        // that falls out of the range of 2xx
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                    } else if (error.request) {

                    } else {
                        // Something happened in setting up the request that triggered an Error
                    }
                });
                if (await submit) {
                    console.log(await submit)
                }
            }
        });
    };

    compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    };

    validateToNextPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    };


    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <div>
                <Row type="flex" justify="center" align="middle">
                    <Col lg={9}>
                        <h1 >Sign Up</h1>
                        <br />
                        <Card className="login-card">
                            <Form onSubmit={this.handleSubmit} className="login-form" style={{ textAlign: "left" }}>
                                <Row>
                                    <Col lg={12}>
                                        <Form.Item label="First Name" style={{ marginTop: "0%" }}>
                                            {getFieldDecorator('first_name', {
                                                rules: [{ required: true, message: 'Please input your first name!' }],
                                            })(
                                                <Input
                                                    size="large"
                                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                                    placeholder="First Name"
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Last Name">
                                            {getFieldDecorator('last_name', {
                                                rules: [{ required: true, message: 'Please input your last name!' }],
                                            })(
                                                <Input
                                                    size="large"
                                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                                    placeholder="Last Name"
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Email">
                                            {getFieldDecorator('email', {
                                                rules: [{ required: true, message: 'Please input your email!' }],
                                            })(
                                                <Input
                                                    size="large"
                                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                                    placeholder="Email"
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Create Password">
                                            {getFieldDecorator('password', {
                                                rules: [{ required: true, message: 'Please input your password!' }, {
                                                    validator: this.validateToNextPassword,
                                                }],
                                            })(
                                                <Input
                                                    size="large"
                                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                                    type="password"
                                                    placeholder="Password"
                                                />,
                                            )}
                                        </Form.Item>
                                    </Col>
                                    <Col lg={12}>
                                        <Form.Item label="Confirm Password" style={{ marginTop: "0%" }}>
                                            {getFieldDecorator('password_confirmation', {
                                                rules: [{ required: true, message: 'Please input your password!' },
                                                {
                                                    validator: this.compareToFirstPassword,
                                                }],
                                            })(
                                                <Input
                                                    size="large"
                                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                                    type="password"
                                                    placeholder="Password"
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Country">
                                            {getFieldDecorator('country', {
                                                rules: [{ required: true, message: 'Please select a country' }],
                                            })(
                                                <Select size="large">
                                                    {this.state.countries.map((value, key) => {
                                                        return (
                                                            <Option value={value}>{value}</Option>
                                                        )
                                                    })}
                                                </Select>,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Company">
                                            {getFieldDecorator('company', {
                                                rules: [{ required: true, message: 'Please input your company' }],
                                            })(
                                                <Input
                                                    size="large"
                                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                                    placeholder="Company"
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item label="Industry">
                                            {getFieldDecorator('industry', {
                                                rules: [{ required: true, message: 'Please input your company' }],
                                            })(
                                                <Input
                                                    size="large"
                                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                                    placeholder="Industry"
                                                />,
                                            )}
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Form.Item>
                                    <Button htmlType="submit"
                                        size="large"
                                        className="login-form-button" block>
                                        Sign Up
                                            </Button>
                                </Form.Item>
                            </Form>
                        </Card>
                        <br />
                    </Col>
                </Row>
            </div>
        )
    }
}
const register = Form.create({ name: 'register' })(Register);
export default register;