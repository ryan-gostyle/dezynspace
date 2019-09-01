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
function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }
  const { Option } = Select;
  const dateFormatList = ['MM/DD/YYYY', 'MM/DD/YY'];
export default class StepOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
          current: 0,
          selectedDay: undefined,
          isEmpty: true,
          isDisabled: false,
          value: 1,
          startDate: new Date(),
          endDate : new Date(),
          data: [],
          price: null,
        };
      }
        



      async componentDidMount() {
        var data = await Axios.get('http://ec2-18-222-135-215.us-east-2.compute.amazonaws.com/api/asia', 
        {
          headers: { Authorization: "Bearer " + cookie.load('token') }
        });
        
        this.setState({ data: data.data});
        this.props.form.validateFields();
    }
      
      handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll(async (err, values) => {
          if (!err) {

            // console.log(this.state.price);
            var submit = await Axios.post('http://ec2-18-222-135-215.us-east-2.compute.amazonaws.com/api/booking', {
              plan: values.spandate,
              start_date: moment(values.startdate, 'YYYY/MM/DD').format('YYYY/MM/DD'),
              end_date: moment(values.enddate, 'YYYY/MM/DD').format('YYYY/MM/DD'),
              report_time: values.reportingtime,
              timezone: values.timezone,
              zip_code: values.zipcode,
              price: this.state.price,
              ans1: values.name,
              ans2: values.email,
              ans3: values.output,
              ans4: values.collaboration,
              ans5: values.speed,
              ans6: values.design,
              ans7: values.deadline,
              ans8: values.interest,
              ans9: values.bestfit,
              ans10: values.invites,
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
            // console.log(submit)
              cookie.save('id', submit.data.message.id, {path: '/'});
              window.location.href = submit.data.message.paypal;
          }
          }
        });
      };


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

      onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
          value: e.target.value,
        });
      };
      
      priceChange = e => {
        ;
        if(e === "2"){
          this.setState({
            price: 196.80,
           
          });
          console.log(this.state.price);
        }
        else if(e === "5"){
          this.setState({
            price: 467.00,
          });
        
        }
        else if(e === "10"){
          this.setState({
            price: 885.00,
          });
         
        }
        else{
          this.setState({
            price: 1670.00,
          });
         
        }
      };
    render() {
        const { current } = this.state;
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
            {/* step 1 */}
            <h2 className="h2Form" style={{textAlign:'center'}}>Book you exlusive professional graphic designer</h2>
            <Col xs={24} sm={24} md={24} lg={24}>
              <Form.Item label="How Long">
              {getFieldDecorator('spandate', {
                  rules: [
                  { required: true}],
              })(<Select  onChange={this.priceChange} placeholder="select one" >
                <Option value="2">2 Days </Option>
                <Option value="5">5 Days </Option>
                <Option value="10">2 Weeks </Option>
                <Option value="20"> 1 Month </Option>
              </Select>)}
              </Form.Item>
                <a href="" style={{textDecoration:'underline'}}>Not sure how long you need a designer for? Click here</a>
            </Col>  
            <Col xs={24} sm={24} md={12} lg={12}>
              <Form.Item label="Start Date">
                {getFieldDecorator('startdate')(<DatePicker
                  selected={this.state.startDate}
                  onChange={this.handleChangeStartDate}
                  selectsStart
                  disabledKeyboardNavigation
                  filterDate={isWeekday}
                  minDate= {new Date()}
                  startDate={this.state.startDate}
                  endDate={this.state.endDate}
                />)}
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12}>
              <Form.Item label="End Date">
                {getFieldDecorator('enddate')
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
                        rules: [{}],
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
                {getFieldDecorator('timezone',{
                        rules: [{ required:true}],
                    })(<Select  placeholder="select timezone" >
                    {timezone}
                    </Select>
                  )}
                </Form.Item>
            </Col>
          </div>
        
        )
    }
}
