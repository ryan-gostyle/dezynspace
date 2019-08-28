import React, { Component } from 'react'
import {
    Form,
    Input,
    Tooltip,
    Icon,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
    InputNumber,
    DatePicker 
  } from 'antd';
  
  const { Option } = Select;
  const AutoCompleteOption = AutoComplete.Option;
  const {RangePicker} = DatePicker;


  const designers = [
    {
      value: 'John Doe',
      label: 'John Doe',
    },
    {
      value: 'John Doe',
      label: 'John Doe',
    },

    
  ];

class EditBooking extends Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
      };
    
      handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      };
    
      handleConfirmBlur = e => {
        const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
      };
       
      handleWebsiteChange = value => {
        let autoCompleteResult;
        if (!value) {
          autoCompleteResult = [];
        } else {
          autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
        }
        this.setState({ autoCompleteResult });
      };
    render() {

        const { getFieldDecorator } = this.props.form;
        const { autoCompleteResult } = this.state;
    
        const formItemLayout = {
          labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
          },
          wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
          },
        };
        const tailFormItemLayout = {
          wrapperCol: {
            xs: {
              span: 24,
              offset: 0,
            },
            sm: {
              span: 16,
              offset: 8,
            },
          },
        };
        const prefixSelector = getFieldDecorator('prefix', {
          initialValue: '63',
        })(
          <Select style={{ width: 70 }}>
            <Option value="63">+63</Option>
          </Select>,
        );
    
        const websiteOptions = autoCompleteResult.map(website => (
          <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
        ));
        return (
            <div>
              <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                <Row>
                  <Col xs={24} sm={24} md={24} lg={24}>
                    <Form.Item>
                        {getFieldDecorator('name', {
                            rules: [{ required: true, message: 'Please input your Name!', whitespace: true}],
                        })(<Input placeholder='Name'  />)}
                    </Form.Item >
                  </Col>
                  <Col xs={24} sm={24} md={24} lg={24}>
                    <Form.Item>
                        {getFieldDecorator('daterange', {
                            rules: [{ required: true}],
                        })(<RangePicker/>)}
                      </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={24} lg={24}>
                    <Form.Item>
                      {getFieldDecorator('email', {
                          rules: [
                          {
                              type: 'email',
                              message: 'The input is not valid E-mail!',
                          },
                          {
                              required: true,
                              message: 'Please input your E-mail!',
                          },
                          ],
                      })(<Input  placeholder='E-mail' />)}
                      </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={24} lg={24}>
                    <Form.Item>
                          {getFieldDecorator('company', {
                              rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                          })(<Input placeholder="Company" />)}
                      </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12} lg={12}>
                  <Form.Item>
                      {getFieldDecorator('desinger', {
                          rules: [
                          { type: 'array', required: true},
                          ],
                      })(<Cascader options={designers}  placeholder="Available Designers" />)}
                      </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12} lg={12}>
                    <Form.Item>
                      <Button type="primary" htmlType="submit">
                          Submit
                      </Button>
                    </Form.Item>
                  </Col>

                </Row>



                </Form>
            </div>
        )
    }
}
const EditBookingForm = Form.create({ name: 'EditBooking' })(EditBooking);
export default EditBookingForm;