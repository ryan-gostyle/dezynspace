import React, { Component } from 'react'
import axios from 'axios'; 
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


  const cities = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
    },

    
  ];

class AddDesigner extends Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
        countries: [],
      };
      
      componentDidMount(){
        axios.get('http://ec2-18-222-135-215.us-east-2.compute.amazonaws.com/api/countries')
        .then(countries =>{
          console.log(countries);
          
        });
      }

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
                  <Col xs={24} sm={24} md={12} lg={12}>
                    <Form.Item>
                        {getFieldDecorator('fname', {
                            rules: [{ required: true, message: 'Please input your First Name!', whitespace: true}],
                        })(<Input placeholder='First Name'  />)}
                    </Form.Item >
                  </Col>
                  <Col xs={24} sm={24} md={12} lg={12}>
                    <Form.Item>
                        {getFieldDecorator('lname', {
                            rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                        })(<Input  placeholder='Last Name'   />)}
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
                  <Col xs={24} sm={24} md={12} lg={12}>
                    <Form.Item>
                    {getFieldDecorator('phone', {
                        rules: [{ required: true, message: 'Please input your phone number!' }],
                    })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} placeholder='Phone Number' />)}
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12} lg={12}>
                    <Form.Item>
                        {getFieldDecorator('street', {
                            rules: [{ required: true, message: 'Please input your street!', whitespace: true }],
                        })(<Input placeholder='Street'/>)}
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12} lg={12}>
                    <Form.Item>
                      {getFieldDecorator('country', {
                          rules: [
                          { type: 'array', required: true, message: 'Please select your country!' },
                          ],
                      })(<Cascader options={this.state.countries} placeholder="Country"/>)}
                      </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12} lg={12}>
                      <Form.Item>
                      {getFieldDecorator('city', {
                          rules: [
                          { type: 'array', required: true, message: 'Please select your city!' },
                          ],
                      })(<Cascader options={cities}  placeholder="City" />)}
                      </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12} lg={12}>
                    <Form.Item>
                          {getFieldDecorator('zipcode', {
                              rules: [{ required: true, message: 'Please input your zip code!' }],
                          })(<InputNumber placeholder="Zip Code" min={0} max={99999}  />)}
                      </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12} lg={12}>
                    <Form.Item>
                          {getFieldDecorator('company', {
                              rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                          })(<Input placeholder="Company" />)}
                      </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12} lg={12}>
                    <Form.Item
                          >
                          {getFieldDecorator('type', {
                              rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                          })(<Input placeholder="Type"/>)}
                      </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12} lg={12}>
                    <Form.Item>
                        {getFieldDecorator('daterange', {
                            rules: [{ required: true}],
                        })(<RangePicker/>)}
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
const AddDesignerForm = Form.create({ name: 'AddDesigner' })(AddDesigner);
export default AddDesignerForm;