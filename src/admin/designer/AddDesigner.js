import React, { Component } from 'react'
import {
    Form,
    Input,
    Select,
    Row,
    Col,
    Button,
    AutoComplete,
    InputNumber,
    DatePicker,
    Layout 
  } from 'antd';
import cookie from 'react-cookies';
import Axios from 'axios'
  
const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;
const {RangePicker} = DatePicker;
const { Header } = Layout;

class AddDesigner extends Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
        data: [],
        city: [],
        date: []
      };

    async componentDidMount() {
        var data = await Axios.get('http://ec2-18-222-135-215.us-east-2.compute.amazonaws.com/api/countries', 
        {
          headers: { Authorization: "Bearer " + cookie.load('token') }
        });
        console.log(data.data);
        this.setState({ data: await data.data });
    }

      handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll(async (err, values) => {
          if (!err) {
            console.log(values.daterange)
            var submit = await Axios.post('http://ec2-18-222-135-215.us-east-2.compute.amazonaws.com/api/designer', {
              first_name: values.fname,
              last_name: values.lname,
              mobile_number: "09"+values.phone,
              street: values.street,
              country: values.country,
              city: values.city,
              zip_code: values.zipcode,
              company: values.company,
              email: values.email,
              type: values.type,
              start_date: this.state.date[0],
              end_date: this.state.date[1]

          }, { headers: { 'Content-Type': 'application/json', Authorization: "Bearer " + cookie.load('token') } }).catch(function (error) {
              if (error.response) {
                  console.log(error.response.data);
                  console.log(error.response.status);
                  console.log(error.response.headers);
              } else if (error.request) {

              } else {
              }
          });
          if (await submit) {
              window.location.href = "/admin/booking";
          }
          }
        });
      };

      handleChange = async e =>{
        var data = await Axios.post('http://ec2-18-222-135-215.us-east-2.compute.amazonaws.com/api/city',{
          city: e
        }, 
        {
          headers: { Authorization: "Bearer " + cookie.load('token') }
        });
        let Message = Object.keys(await data.data).map(function(key) {
          return data.data[key];
        });
        this.setState({ city: Message });
      };

      onChange = (value, dateString) => {
        this.setState({date: dateString})
       }
    
    render() {

      const country = this.state.data.map((country )=>
      <Option value={country} key={country} >{country}</Option>
      );
      
      const city = this.state.city.length !== 0 && this.state.city.map((country)=>
      <Option value={country} key={country} >{country}</Option>
      );

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
       const prefixSelector = getFieldDecorator('prefix', {
          initialValue: '09',
        })(
          <Select style={{ width: 70 }}>
            <Option value="09">09</Option>
          </Select>,
        );
    
        const websiteOptions = autoCompleteResult.map(website => (
          <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
        ));
        return (
            <div>
              <Header  style={{ background: '#fff', padding: 0 }} >
                <h3 style={{
                  padding: '15px'
                }}>Add Designer</h3>
              </Header>
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
                          { message: 'Please select your country!' },
                          ],
                      })(<Select onChange={this.handleChange}>{country}</Select>)}
                      </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12} lg={12}>
                      <Form.Item>
                      {getFieldDecorator('city', {
                          rules: [
                          {message: 'Please select your city!' },
                          ],
                      })(<Select>{city}</Select>)}
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
                        })(<RangePicker onChange={this.onChange}/>)}
                      </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={24} lg={24}>
                    <Form.Item>
                      <Button type="primary" htmlType="submit" size="large">
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