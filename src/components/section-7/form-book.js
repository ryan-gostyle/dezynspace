import React from 'react';
import 'antd/dist/antd.css';
import {
  Form,
  Cascader,
  Select,
  Row,
  Col,
  Button,
  DatePicker,
  TimePicker
} from 'antd';
import moment from 'moment';

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}
const { Option } = Select;
const dateFormatList = ['MM/DD/YYYY', 'MM/DD/YY'];
function handleChange(value) {
  console.log(`selected ${value}`);
}
const datelist = [
  {
    value: '3',
    label: '3',
  },
  {
    value: '5',
    label: '5',
  },
  {
    value: '7',
    label: '7',
  },
];
const {RangePicker} = DatePicker;
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
   
    return (

      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Row>
          <h2 style={{textAlign:'left'}}>Book you exlusive professional graphic designer</h2>
          <Col xs={24} sm={24} md={24} lg={24}>
            <Form.Item label="How Long">
            {getFieldDecorator('spandate', {
                rules: [
                { type: 'array',required: true, message: 'Choose a plan' }],
            })(<Cascader options={datelist}  placeholder="select one" />)}
            </Form.Item>
              <a href="" style={{textDecoration:'underline'}}>Not sure how long you need a designer for? Click here</a>
          </Col>  
          <Col xs={24} sm={24} md={24} lg={24}>
            <Form.Item label="Start Date">
              {getFieldDecorator('startdate', {
                  rules: [{ required: true, message: 'When to start?'}],
              })(<RangePicker/>)}
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12}>
            <Form.Item label="Reporting Time">
            {getFieldDecorator('reportingtime', {
                      rules: [{ required: true, message: 'Reporting time'}],
                  })(<TimePicker defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
              )}
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12}>
            <Form.Item label="Timezone(ASIA)">
              {getFieldDecorator('timezone', {
                rules: [
                { type: 'array'}],
              })(<Cascader options={datelist}  placeholder="select timezone" />)}
              </Form.Item>
          </Col>
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
        </Row>
      </Form>
    );
  }
}

const BookForm = Form.create({ name: 'Book-Form' })(BookingForm);

          
export default BookForm;