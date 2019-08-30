import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import cookie from 'react-cookies';
import Axios from 'axios';

export default function withAuth(ComponentToProtect, props) {
    return class extends Component {
        constructor() {
            super();
            this.state = {
                loading: true,
                redirect: false,
            }
        };
        async componentDidMount() {
            var scope = props === "admin" ? "atoken" : "ctoken";
            var checked = await Axios.get(`http://ec2-18-222-135-215.us-east-2.compute.amazonaws.com/api/${scope}`,
                {
                    headers: { Authorization: "Bearer " + cookie.load('token') }
                }).catch(err => {
                    this.setState({ loading: false, redirect: true });
                });;
            if (await checked) {
                    this.setState({ loading: false });
            }
            else
                this.setState({ loading: false, redirect: true });

        }
        render() {
            const { loading, redirect } = this.state;
            if (loading) {
                return null;
            }
            if (redirect) {
                return <Redirect to="/login" apiLink={this.state.apiLink} isLoggedIn={false} {...this.props} />;
            }
            return (
                <React.Fragment>
                    <ComponentToProtect apiLink={this.state.apiLink} {...this.props} />
                </React.Fragment>
            );
        }
    }
}