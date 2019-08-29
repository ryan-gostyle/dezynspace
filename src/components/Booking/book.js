import React, { Component } from 'react'
import { Steps, Button, message,Row,Col } from 'antd';
import BookForm from '../section-7/form-book';
const { Step } = Steps;

const steps = [
  {
    title: 'Book Informations',
    content: <BookForm/>,
  },
  {
    title: 'Book Questions',
    content: 'Second-content',
  },
  {
    title: 'Payment',
    content: 'Thank you! See you soon!',
  },
];
export default class CustomerBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
          current: 0,
        };
      }
    
      next() {
        const current = this.state.current + 1;
        this.setState({ current });
      }
    
      prev() {
        const current = this.state.current - 1;
        this.setState({ current });
      }
    render() {
        const { current } = this.state;
        return (
      <div className="container">
        <Row>
          <Col xs={24} sm={24} md={24} lg={24}>
          <Steps current={current}>
          {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="steps-content">{steps[current].content}</div>
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => this.next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" onClick={() => message.success('Processing complete!')}>
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              Previous
            </Button>
          )}
        </div>
          </Col>
        </Row>
        
      </div>
        );
    }
}
