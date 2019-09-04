import React, { Component } from 'react'
import {
  Form,
  Input,
  Select,
  Row,
  Col,
  Button,
  DatePicker,
  Layout
} from 'antd';
import Axios from 'axios';
import cookie from 'react-cookies';
import moment from 'moment';


const { Header } = Layout;
const { Option } = Select;
const { RangePicker } = DatePicker;




class EditBooking extends Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
    details: [],
    designers: [],
    client: [],
    address: [],
    date: []
  };

  async componentDidMount() {
    var data = await Axios.get(`http://ec2-18-222-135-215.us-east-2.compute.amazonaws.com/api/booking/${this.props.match.params.id}`,
      {
        headers: { Authorization: "Bearer " + cookie.load('token') }
      });
    console.log(await data.data.message)
    this.setState({
      details: await data.data.message.details,
      client: await data.data.message.details.client,
      address: await data.data.message.details.client.address,
      designers: await data.data.message.designers,
      date : [await data.data.message.details.start_date, await data.data.message.details.end_date]});
  }

  onChange = (value, dateString) => {
    this.setState({date: dateString})
   }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll(async (err, values) => {
      if (!err) {
        var submit = await Axios.post(`http://ec2-18-222-135-215.us-east-2.compute.amazonaws.com/api/booking/${this.props.match.params.id}`, {
          _method: "PUT",
          start_date: this.state.date[0],
          end_date: this.state.date[1],
          designerId: values.desinger,
          status: values.status,

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

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  render() {

    const { getFieldDecorator } = this.props.form;
    const { details, designers, client, address } = this.state;
    const designerss = designers.length !== 0 && designers.map((designer) =>
      <Option value={designer.designer.id} key={designer.designer.id} >{designer.designer.user.last_name + ', ' + designer.designer.user.first_name}</Option>
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
    return (
      <div>
        <Header style={{ background: '#fff', padding: 0 }} >
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
                  rules: [{ required: true, message: 'Please input your Name!', whitespace: true }],
                })(<Input placeholder='Name' disabled={true} />)}
              </Form.Item >
            </Col>
            <Col xs={24} sm={24} md={24} lg={24}>
              <Form.Item>
                {getFieldDecorator('daterange', {
                  initialValue: [moment(details.start_date, 'YYYY/MM/DD'), moment(details.end_date, 'YYYY/MM/DD')],
                  rules: [{ required: true }],
                })(<RangePicker onChange={this.onChange} />)}
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={24} lg={12}>
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
                })(<Input placeholder='E-mail' disabled={true} />)}
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
                {getFieldDecorator('status', {
                  initialValue: details.status,
                  rules: [
                    
                    { required: true },
                  ],
                })(<Select placeholder="Status" >
                  <Option value="For Assignment">For Assignment</Option>
                  <Option value="assigned">Assigned</Option>
                  <Option value="extending">Extending</Option>
                  <Option value="reassign">reassign</Option>
                  <Option value="cancelled">Cancelled</Option>

                </Select>)}
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12}>
              <Form.Item>
                {getFieldDecorator('desinger', {
                  rules: [
                    { required: true },
                  ],
                })(<Select placeholder="Available Designers" >{designerss}</Select>)}
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