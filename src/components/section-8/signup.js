import React, { Component } from 'react'
import { Row, Col } from 'antd'
class SignUp extends Component {
    render() {
        const inline = {height:'100%',padding:8,margin: '10px 15px', border: '3px solid #4f3949',position:'relative'}
        return (
            <div className="col-24 sections section-5">
                <Row className="rowWidth">
                    <Col>
                        <div style={inline}>
                            <h1 className='title'>READY TO STYLED TODAY?</h1>
                            <button className="signupButton"> SIGN UP NOW </button>
                            <h4 className='signupAlready'>Already have an account?</h4>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default SignUp