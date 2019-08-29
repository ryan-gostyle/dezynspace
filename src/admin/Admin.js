import React, { Component } from 'react'
import AdminLayout from './layout'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
export default class Admin extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path="/admin/:link" component={AdminLayout} exact />
                    </Switch>
                </Router>
            </div>
        )
    }
}
