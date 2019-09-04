import React, { Component } from 'react'
import cookie from 'react-cookies';
import Axios from 'axios';
export default class Confirm extends Component {
    state = {
        data: [],
      };
      
      async componentDidMount() {
        const query = this.props.location.search;
        var data = await Axios.get(`http://ec2-18-222-135-215.us-east-2.compute.amazonaws.com/api/confirm/${cookie.load('id')}${query}`, 
        {
          headers: { Authorization: "Bearer " + cookie.load('token') }
        });
        console.log(await data.data.message);
        this.setState({ data: await data.data.designer });
        window.location.href = "/";
        window.alert('Payment Success!');
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
