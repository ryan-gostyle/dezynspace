import React, { Component } from 'react'
import 'antd/dist/antd.css';
import {
  Form,
  Input,
  Select,
  Row,
  Col,
  Button,
  Radio,
  Steps,
  message
} from 'antd';
import DatePicker from "react-datepicker";
import cookie from 'react-cookies';
import Axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import withAuth from '../../middleware';
import moment from 'moment';

const { Step } = Steps;
const { Option } = Select;

class Step1 extends Component{
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      endDate: new Date(),
    };
  }
  handleChangeStartDate = (date) => {
    this.setState({
      startDate: date,

    });
  };

  handleChangeEndDate = (date) => {
    this.setState({
      endDate: date
    });
  };
  render(){
    const { getFieldDecorator } = this.props.form;
    const timezone = this.props.data.map((country) =>
      <Option value={country} key={country} >{country}</Option>
    );
    const isWeekday = date => {
      const day = date.getDay()
      return day !== 0 && day !== 6
    }
    return(
      <div>
          <h2 className="" style={{ textAlign: 'center', color: '#484848', margin: '5px 0', margin: '80px' }}>Book you exlusive professional graphic designer</h2>
            <hr style={{ width: '100%' }} />
            <Col xs={24} sm={24} md={24} lg={24}>
              <Form.Item label="How Long">
                {getFieldDecorator('spandate', {
                  rules: [{ required: true, message: 'Field is required' }],
                })(<Select onChange={this.priceChange} placeholder="select one" >
                  <Option value="2">2 Days </Option>
                  <Option value="5">5 Days </Option>
                  <Option value="10">2 Weeks </Option>
                  <Option value="20"> 1 Month </Option>
                </Select>)}
              </Form.Item>
              <a href="" style={{ textDecoration: 'underline' }}>Not sure how long you need a designer for? Click here</a>
            </Col>
             <Col xs={24} sm={24} md={12} lg={12}>
              <Form.Item label="Start Date">
                {getFieldDecorator('startdate', {
                  rules: [{ required: true, message: 'Field is required' }],
                })(<DatePicker
                  selected={this.state.startDate}
                  onChange={this.handleChangeStartDate}
                  selectsStart
                  disabledKeyboardNavigation
                  filterDate={isWeekday}
                  minDate={new Date()}
                  startDate={this.state.startDate}
                  endDate={this.state.endDate}
                />)}
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12}>
              <Form.Item label="End Date">
                {getFieldDecorator('enddate', {
                  rules: [{ required: true, message: 'Field is required' }],
                })
                  (<DatePicker
                    selected={this.state.endDate}
                    onChange={this.handleChangeEndDate}
                    selectsEnd
                    disabledKeyboardNavigation
                    filterDate={isWeekday}
                    endDate={this.state.endDate}
                    minDate={this.state.startDate}
                  />)}
              </Form.Item>
            </Col> 
            <Col xs={24} sm={24} md={12} lg={12}>
              <Form.Item label="Reporting Time">
                {getFieldDecorator('reportingtime', {
                  rules: [{ required: true, message: 'Field is required' }],
                })(<Select>
                  <Option value="09:00am-06:00pm">09:00am - 06:00pm</Option>
                  <Option value="09:00am-06:00pm">10:00am - 07:00pm</Option>
                  <Option value="09:00am-06:00pm">11:00am - 08:00pm</Option>
                  <Option value="09:00am-06:00pm">12:00am - 09:00pm</Option>
                  <Option value="09:00am-06:00pm">01:00pm - 10:00pm</Option>
                </Select>
                )}
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12}>
              <Form.Item label="Timezone(ASIA)">
                {getFieldDecorator('timezone', {
                  rules: [{ required: true, message: 'Field is required' }],
                })(<Select placeholder="select timezone" >
                  {timezone}
                </Select>
                )}
              </Form.Item>
            </Col>
      </div>
    )
  }
}
const FirstForm = Form.create({})(Step1);
export default FirstForm