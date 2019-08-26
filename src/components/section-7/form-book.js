import React from 'react';
import 'antd/dist/antd.css';
import { Form, Icon, Input, Button, Select, DatePicker, TimePicker } from 'antd';
import moment from 'moment';

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}
const { Option } = Select;
const dateFormatList = ['MM/DD/YYYY', 'MM/DD/YY'];
function handleChange(value) {
  console.log(`selected ${value}`);
}

class BookingForm extends React.Component {
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }
  

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Hello ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

   
    return (

      <Form layout="inline" onSubmit={this.handleSubmit}>
          <h2 style={{textAlign:'left'}}>Book you exlusive professional graphic designer</h2>
        <Form.Item label="How Long" labelAlign='left'>
        {getFieldDecorator('spandate')(
            <Select defaultValue="lucy" style={{ width: 420 }} onChange={handleChange}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled" disabled>
                Disabled
            </Option>
            <Option value="Yiminghe">yiminghe</Option>
        </Select>,
          )}
        <a href=""> Not sure how long you need a designer for? Click here</a>
        </Form.Item>
        <Form.Item label="Start Date" labelAlign='left'>
        {getFieldDecorator('startdate')(
        <DatePicker style={{ width: 420 }} defaultValue={moment('08/23/2019', dateFormatList[0])} format={dateFormatList} />
        ,
          )}
        </Form.Item>
        <Form.Item label="Reporting Time" labelAlign='left' style={{width:"44%",display:"inline-block"}}>
        {getFieldDecorator('reportingtime')(
         <TimePicker defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
        ,
          )}
        </Form.Item>
        <Form.Item label="Timezone(ASIA)" labelAlign='left' style={{width:"48%",display:"inline-block"}}>
        {getFieldDecorator('timezone')(
            <Select defaultValue="lucy" style={{ width: 213 }} onChange={handleChange}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled" disabled>
                Disabled
            </Option>
            <Option value="Yiminghe">yiminghe</Option>
        </Select>,
          )}
        </Form.Item>
        <Form.Item style={{margin:"30px 0 0 0"}} >
            <div style={{margin:'0 auto',textAlign:'center'}}>
                <Button  className="booking-button" size="large" block htmlType="submit" disabled={hasErrors(getFieldsError())}>
                    RENT
                </Button>
          </div>
        </Form.Item>
        <Form.Item style={{textAlign:'center',margin:'0 auto'}}>
        <a href="">Looking for long term graphic designer? Click here</a>
        </Form.Item>
      </Form>
    );
  }
}

const BookForm = Form.create({ name: 'Book-Form' })(BookingForm);

          
export default BookForm;