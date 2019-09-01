import React, { Component } from 'react'
import 'antd/dist/antd.css';
import {
  Form,
  Input,
  Select,
  Row,
  Col,
  Radio,
  Steps, 
  Button, 
  message
} from 'antd';
import DatePicker from "react-datepicker";
import cookie from 'react-cookies';
import Axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import withAuth from '../../middleware';
import moment from 'moment';
export default class StepThree extends Component {
    
    render() {
        const timezone = this.state.data.map((country )=>
        <Option value={country} key={country} >{country}</Option>
      );
      const { selectedDay, isDisabled, isEmpty } = this.state;
      const radioStyle = {
          display: 'block',
          height: '30px',
          lineHeight: '30px',
        };
      const { getFieldDecorator } = this.props.form;
      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 24 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 24 },
        },
      };


       const isWeekday = date => {
        const day = date.getDay()
        return day !== 0 && day !== 6
      }
  
        return (
            <div>
            {/* step 3 */}  
                <Col xs={24} sm={24} md={24} lg={24} >
                  <Form.Item className="btn-pos">
                      <Button htmlType="submit">
                          Submit
                      </Button>
                  </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={24} lg={24}>
                <Form.Item style={{textAlign:'center',margin:'0 auto'}}>
                <a href="">Looking for long term graphic designer? Click here</a>
                </Form.Item>
              </Col>
            </div>          
        )
    }
}
