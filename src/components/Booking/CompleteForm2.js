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
  Tabs,
  Icon
} from 'antd';
import DatePicker from "react-datepicker";
import cookie from 'react-cookies';
import Axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import withAuth from '../../middleware';
import moment from 'moment';

// function hasErrors(fieldsError) {
//   return Object.keys(fieldsError).some(field => fieldsError[field]);
// }
const { Option } = Select;
const { TabPane } = Tabs;
// const dateFormatList = ['MM/DD/YYYY', 'MM/DD/YY'];



class CompleteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedDay: undefined,
          isEmpty: true,
          isDisabled: false,
          value: 1,
          startDate: new Date(),
          endDate : new Date(),
          data: [],
          price: null,
          activeTab: "1",
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
            price: 196.00,
           
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
      nextTab = () =>{
       
        if(this.state.activeTab === "1"){
            this.setState({
                activeTab: "2",
            });
            
        }
        else if (this.state.activeTab === "2"){
            this.setState({
                activeTab: "3",
            });
        }
      };
      prevTab = () =>{
       
        if(this.state.activeTab === "3"){
            this.setState({
                activeTab: "2",
            });
            
        }
        else if (this.state.activeTab === "2"){
            this.setState({
                activeTab: "1",
            });
        }
      };
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

        /* disable weekends */
         const isWeekday = date => {
          const day = date.getDay()
          return day !== 0 && day !== 6
        }
        /* counting days without weekend on datepicker */
        var msDiff = this.state.endDate.getTime() - this.state.startDate.getTime();
        var daysdiff = Math.floor(msDiff / (1000 * 60 * 60 * 24));
        console.log("day diff is:" + daysdiff);
        if(daysdiff == "5"){
          console.log("Got it!")
        }
        else{
          console.log("no no no!")
        }
        const getYear = new Date().getFullYear();
        console.log(getYear);
        return (
        <div className="container">
            <Form {...formItemLayout} onSubmit={this.handleSubmit} className="completeform">
            <Row>
            <Tabs type="card" tabBarGutter="80px" activeKey={this.state.activeTab}>
                <TabPane tab={<span><Icon type="apple" />Tab 1</span>} key="1">
                    <h4 className="" style={{textAlign:'center',color:'#484848',margin:'5px 0'}}>Book you exlusive professional graphic designer</h4>
                    <hr style={{width:'100%'}}/>
                    <Col xs={24} sm={24} md={10} lg={10} >
                        <Form.Item label="Your Name">
                            {getFieldDecorator('name',{
                                rules: [{ required:true,message: 'Field is required'}],
                            })(<Input/>)}
                        </Form.Item >
                    </Col>
                    <Col xs={24} sm={24} md={14} lg={14} >
                        <Form.Item label="Email address of main contact person/the person that the designer will directly report to">
                            {getFieldDecorator('email',{
                                rules: [{ required:true,message: 'Field is required'}],
                            })(<Input/>)}
                        </Form.Item >
                    </Col>
                    <Col xs={24} sm={24} md={5} lg={5}>
                        <Form.Item label="How Long">
                        {getFieldDecorator('spandate',{
                            rules: [{ required:true,message: 'Field is required'}],
                    })(<Select  onChange={this.priceChange} placeholder="select one" >
                        <Option value="2">2 Days </Option>
                        <Option value="5">5 Days </Option>
                        <Option value="10">2 Weeks </Option>
                        <Option value="20"> 1 Month </Option>
                        </Select>)}
                        </Form.Item>
                        <a href="" style={{textDecoration:'underline'}}>Not sure how long you need a designer for? Click here</a>
                    </Col>  
                    <Col xs={24} sm={24} md={5} lg={5}>
                    <Form.Item label="Start Date">
                        {getFieldDecorator('startdate',{
                                rules: [{ required:true,message: 'Field is required'}],
                    })(<DatePicker
                        selected={this.state.startDate}
                        onChange={this.handleChangeStartDate}
                        selectsStart
                        disabledKeyboardNavigation
                        filterDate={isWeekday}
                        excludeDates={[
                        new Date(`${getYear}/01/01`),
                        new Date(`${getYear}/02/05`),
                        new Date(`${getYear}/02/25`),
                        new Date(`${getYear}/03/21`),
                        new Date(`${getYear}/04/03`),
                        new Date(`${getYear}/04/09`),
                        new Date(`${getYear}/04/18`),
                        new Date(`${getYear}/04/19`),
                        new Date(`${getYear}/04/20`),
                        new Date(`${getYear}/04/21`),
                        new Date(`${getYear}/05/01`),
                        new Date(`${getYear}/05/13`),
                        new Date(`${getYear}/06/05`),
                        new Date(`${getYear}/06/12`),
                        new Date(`${getYear}/06/21`),
                        new Date(`${getYear}/08/12`),
                        new Date(`${getYear}/08/13`),
                        new Date(`${getYear}/08/21`),
                        new Date(`${getYear}/08/26`),
                        new Date(`${getYear}/08/31`),
                        new Date(`${getYear}/09/03`),
                        new Date(`${getYear}/09/23`),
                        new Date(`${getYear}/11/01`),
                        new Date(`${getYear}/11/02`),
                        new Date(`${getYear}/11/10`),
                        new Date(`${getYear}/11/30`),
                        new Date(`${getYear}/12/08`),
                        new Date(`${getYear}/12/22`),
                        new Date(`${getYear}/12/24`),
                        new Date(`${getYear}/12/25`),
                        new Date(`${getYear}/12/30`),
                        new Date(`${getYear}/12/31`),
                        ]}
                        minDate= {new Date()}
                        startDate={this.state.startDate}
                        endDate={this.state.endDate}
                        />)}
                    </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={5} lg={5}>
                    <Form.Item label="End Date">
                        {getFieldDecorator('enddate',{
                                rules: [{ }],
                        })
                        (<DatePicker
                        selected={this.state.endDate}
                        onChange={this.handleChangeEndDate}
                        selectsEnd
                        disabled
                        disabledKeyboardNavigation
                        filterDate={isWeekday}
                        endDate={this.state.endDate}
                        minDate={this.state.startDate}
                        />)}
                    </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={5} lg={5}>
                    <Form.Item label="Reporting Time">
                    {getFieldDecorator('reportingtime',{
                                rules: [{ required:true,message: 'Field is required'}],
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
                    <Col xs={24} sm={24} md={4} lg={4}>
                <Form.Item label="Timezone(ASIA)">
                  {getFieldDecorator('timezone',{
                          rules: [{ required:true,message: 'Field is required'}],
                      })(<Select  placeholder="select timezone" >
                      {timezone}
                      </Select>
                    )}
                  </Form.Item>
              </Col>
                    <Col xs={24} sm={24} md={24} lg={24} >
                        <Form.Item style={{textAlign:'center'}}> 
                            <Button className="next-prev" onClick={this.nextTab} size="large" >
                                Next
                            </Button>
                        </Form.Item>
                    </Col>
                </TabPane>
                <TabPane tab="Step 2" key="2">
                    <Col xs={24} sm={24} md={24} lg={24} >
                        <Form.Item label="What creative output will you mostly request from your graphic designer during your rented time? (i.e. annual report, social media post, web design, etc.) ">
                            {getFieldDecorator('output',{
                                rules: [{ required:true,message: 'Field is required'}],
                            })(<Input/>)}
                        </Form.Item >
                        </Col>
                    <Col xs={24} sm={24} md={24} lg={24} >
                        <Form.Item label="Describe a best-fit graphic designer for you/your company">
                            {getFieldDecorator('bestfit',{
                                rules: [{ required:true,message: 'Field is required'}],
                            })(<Input/>)}
                        </Form.Item >
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} >
                        <Form.Item label="Please write down the email address/es of those that needs to be invited in the workspace with your designer" >
                            {getFieldDecorator('invites',{
                                rules: [{ required:true,message: 'Field is required'}],
                            })(<Input/>)}
                        </Form.Item >
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} >
                        <Form.Item style={{textAlign:'center'}}> 
                            <Button className="next-prev" onClick={this.prevTab} size="large" >
                                Previous
                            </Button>
                            <Button className="next-prev" onClick={this.nextTab} size="large" >
                                Next
                            </Button>
                        </Form.Item>
                    </Col>
                </TabPane>
                <TabPane tab="Step 3 " key="3">
                    <Col xs={24} sm={24} md={24} lg={24} style={{margin:'0 auto'}}>
                    <h6 className="" style={{color:'#484848',margin:'5px 0'}}>Please rate the importance of the following (5 being the highest)</h6>
                    <hr style={{width:'100%'}}/>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8} >
                        <Form.Item label="Collaboration (Ability of designer to create and build ideas with you)">
                            {getFieldDecorator('collaboration',{
                                rules: [{ required:true,message: 'Field is required'}],
                            })(<Radio.Group onChange={this.onChange} >
                                <Radio id="collab1" value="1">1</Radio>
                                <Radio id="collab2" value="2">2</Radio>
                                <Radio id="collab3" value="3">3</Radio>
                                <Radio id="collab4" value="4">4</Radio>
                                <Radio id="collab5 "value="5">5</Radio>
                                </Radio.Group>)}
                        </Form.Item >
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8} >
                        <Form.Item label="Speed (Ability of designer to submit designs earlier than promised)">
                            {getFieldDecorator('speed',{
                                rules: [{ required:true,message: 'Field is required'}],
                            })(<Radio.Group onChange={this.onChange} >
                                <Radio id="speed1" value="1">1</Radio>
                                <Radio id="speed2" value="2">2</Radio>
                                <Radio id="speed3" value="3">3</Radio>
                                <Radio id="speed4" value="4">4</Radio>
                                <Radio id="speed5 "value="5">5</Radio>
                                </Radio.Group>)}
                        </Form.Item >
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8} >
                        <Form.Item label="Design Options (Ability of designer to present multiple-options for a design requirement)">
                            {getFieldDecorator('design',{
                                rules: [{ required:true,message: 'Field is required'}],
                            })(<Radio.Group onChange={this.onChange} >
                                <Radio id="design1" value="1">1</Radio>
                                <Radio id="design2" value="2">2</Radio>
                                <Radio id="design3" value="3">3</Radio>
                                <Radio id="design4" value="4">4</Radio>
                                <Radio id="design5 "value="5">5</Radio>
                            </Radio.Group>)}
                        </Form.Item >
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} >
                        <Form.Item label="What interested you to rent a graphic designer from us?">
                            {getFieldDecorator('interest',{
                                rules: [{ required:true,message: 'Field is required'}],
                            })(<Radio.Group onChange={this.onChange} >
                                <Radio style={radioStyle} id="interest1" value={"I have no existing design team"}>
                                I have no existing design team
                                </Radio>
                                <Radio style={radioStyle} id="interest2" value={"I’m not happy with my current contractual graphic designer/s"}>
                                I’m not happy with my current contractual graphic designer/s
                                </Radio>
                                <Radio style={radioStyle} id="interest3" value={"I have a design team, but I need extra graphic designer/s for a certain duration only"}>
                                I have a design team, but I need extra graphic designer/s for a certain duration only
                                </Radio>
                                <Radio style={radioStyle} id="interest4" value={"I just want to try your service"}>
                                I just want to try your service
                                </Radio>
                                <Radio style={radioStyle} id="interest5" value={"I need to grow my design team full-time"}>
                                I need to grow my design team full-time
                                </Radio>
                                <Radio style={radioStyle} id="interest6" value={"other"}>
                                Other...
                                {this.state.value === "other" ? <Input style={{ width: 200, marginLeft: 10 }} /> : null}
                                </Radio>
                            </Radio.Group>)}
                        </Form.Item >
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} >
                        <Form.Item label="Which of the below statement would best describe your approach to deadline?">
                            {getFieldDecorator('deadline',{
                                rules: [{ required:true,message: 'Field is required'}],
                            })(<Radio.Group onChange={this.onChange} >
                                <Radio style={radioStyle} id="deadline1" value={"I'm strict on deadlines"}>
                                    I'm strict on deadlines
                                </Radio>
                                <Radio style={radioStyle} id="deadline2" value={"I'm open to designer recommendation when it comes to delivery time"}>
                                    I'm open to designer recommendation when it comes to delivery time
                                </Radio>
                                <Radio style={radioStyle} id="deadline3" value={"other"}>
                                    Other...
                                    {this.state.value === "other" ? <Input style={{ width: 200, marginLeft: 10 }} /> : null}
                                </Radio>
                                </Radio.Group>)}
                        </Form.Item >
                    <Col xs={24} sm={24} md={24} lg={24} >
                        <Form.Item style={{textAlign:'center'}}> 
                            <Button className="primary paynow-button"  size="large" htmlType="submit">
                                Pay Now
                            </Button>
                        </Form.Item>
                    </Col>
                    
                        <Col xs={24} sm={24} md={24} lg={24}>
                            <Form.Item style={{textAlign:'center',margin:'0 auto'}}>
                            <a href="">Looking for long term graphic designer? Click here</a>
                        </Form.Item>
                    </Col>
                </Col>
                    <Col xs={24} sm={24} md={24} lg={24} >
                        <Form.Item style={{textAlign:'center'}}> 
                            <Button className="next-prev" onClick={this.prevTab} size="large" >
                                Previous
                            </Button>
                        </Form.Item>
                    </Col>
                </TabPane>
            </Tabs> 
{/* step 1 */}
{/* step 2 */}
{/* step 3 */}  
              <hr style={{width:'100%'}}/>               
            </Row>
          </Form>
        </div>
        );
    }
}


const CompleteFormBook = Form.create({ name: 'Book-CompleteForm' })(CompleteForm);

          
export default withAuth(CompleteFormBook, "client");