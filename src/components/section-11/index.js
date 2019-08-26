import { Collapse, Icon,Row, Col  } from 'antd';
import React, { Component } from 'react'
const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const customPanelStyle = {
  borderRadius: 4,
  marginBottom: 24,
  border: 0,
  overflow: 'hidden',
};
export default class SectionEleven extends Component {
    render() {
      return (
        <div className="col-24 section-eleven"> 
            <h4 >Frequently Asked Questions</h4>
            <Row className="container" >
                <Col xs={24} sm={24} md={12} lg={12} >
                    <Collapse
                    bordered={false}
                    expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />} expandIconPosition={"right"}
                    >
                    <Panel header="This is panel header 1" key="1" style={customPanelStyle}>
                    <p>{text}</p>
                    </Panel>
                    <Panel header="This is panel header 2" key="2" style={customPanelStyle}>
                    <p>{text}</p>
                    </Panel>
                    <Panel header="This is panel header 3" key="3" style={customPanelStyle}>
                    <p>{text}</p>
                    </Panel>
                    <Panel header="This is panel header 3" key="4" style={customPanelStyle}>
                    <p>{text}</p>
                    </Panel>
                    </Collapse>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} >
                    <Collapse
                    bordered={false}
                    expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />} expandIconPosition={"right"}
                    >
                    <Panel header="This is panel header 1" key="1" style={customPanelStyle}>
                    <p>{text}</p>
                    </Panel>
                    <Panel header="This is panel header 2" key="2" style={customPanelStyle}>
                    <p>{text}</p>
                    </Panel>
                    <Panel header="This is panel header 3" key="3" style={customPanelStyle}>
                    <p>{text}</p>
                    </Panel>
                    </Collapse>
                </Col>
            </Row>
        </div>
      );
    }
  }
