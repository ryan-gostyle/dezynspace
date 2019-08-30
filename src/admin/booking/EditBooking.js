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
    DatePicker,
    Layout 
  } from 'antd';
import Axios from 'axios';
import cookie from 'react-cookies';
import moment from 'moment';


  const { Header } = Layout;
  const { Option } = Select;
  const AutoCompleteOption = AutoComplete.Option;
  const {RangePicker} = DatePicker;


  

class EditBooking extends Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
        details: [],
        designers: [],
        client: [],
        address: [],
      };

      async componentDidMount()
      {
        var data = await Axios.get(`http://ec2-18-222-135-215.us-east-2.compute.amazonaws.com/api/booking/${this.props.match.params.id}`, 
        {
          headers: { Authorization: "Bearer " + cookie.load('token') }
        });
        console.log(await data.data.message)
        this.setState({ 
          details: await data.data.message.details,
          client: await data.data.message.details.client, 
          address: await data.data.message.details.client.address,           
          designers: await data.data.message.designers });
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
        const { autoCompleteResult,details,designers,client,address } = this.state;
  
        const designerss = designers.length !== 0 && designers.map((designer)=>
        <Option value={designer} key={designer} >{designer}</Option>
        );
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
              <Header  style={{ background: '#fff', padding: 0 }} >
                <h3 style={{
                  padding: '15px'
                }}>Edit Booking</h3>
              </Header>
              <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                <Row>
                  <Col xs={24} sm={24} md={24} lg={24}>
                    <Form.Item>
                        {getFieldDecorator('name', {
                            initialValue: client.last_name + ", " + client.first_name,
                            rules: [{ required: true, message: 'Please input your Name!', whitespace: true}],
                        })(<Input placeholder='Name' disabled={true}  />)}
                    </Form.Item >
                  </Col>
                  <Col xs={24} sm={24} md={24} lg={24}>
                    <Form.Item>
                        {getFieldDecorator('daterange', {
                            initialValue: [moment(details.start_date, 'YYYY/MM/DD'), moment(details.end_date, 'YYYY/MM/DD')],
                            rules: [{ required: true}],
                        })(<RangePicker/>)}
                      </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={24} lg={24}>
                    <Form.Item>
                      {getFieldDecorator('email', {
                            initialValue: client.email,
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
                      })(<Input  placeholder='E-mail' disabled={true} />)}
                      </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={24} lg={12}>
                    <Form.Item>
                          {getFieldDecorator('company', {
                              initialValue: address.company,
                              rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                          })(<Input placeholder="Company" disabled={true} />)}
                      </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12} lg={12}>
                  <Form.Item>
                      {getFieldDecorator('desinger', {
                          rules: [
                          { type: 'array', required: true},
                          ],
                      })(<Select options={designerss}  placeholder="Available Designers" />)}
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
const EditBookingForm = Form.create({ name: 'EditBooking' })(EditBooking);
export default EditBookingForm;