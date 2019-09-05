import React, { Component } from 'react'
import { Table, Button, Layout, Tag } from 'antd';
import cookie from 'react-cookies';
import Axios from 'axios';
import { Link } from "react-router-dom";


const { Header } = Layout;

class History extends Component {
    state = {
        data: [],
        loading: true,
    };

    async componentDidMount() {
        var data = await Axios.get('http://ec2-18-222-135-215.us-east-2.compute.amazonaws.com/api/cbookings',
            {
                headers: { Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjRjNWQxZTAwNGUxZTJjN2IyYjc5ZDQ4ZDMyZDQ2MzcxY2Y1MmUxNDcyYTZkZTNlNWUzNzZmMjYzYzRmMGNmN2NlMTE5MmZkZGMyYTE4NzNmIn0.eyJhdWQiOiIzIiwianRpIjoiNGM1ZDFlMDA0ZTFlMmM3YjJiNzlkNDhkMzJkNDYzNzFjZjUyZTE0NzJhNmRlM2U1ZTM3NmYyNjNjNGYwY2Y3Y2UxMTkyZmRkYzJhMTg3M2YiLCJpYXQiOjE1Njc0OTg3MjcsIm5iZiI6MTU2NzQ5ODcyNywiZXhwIjoxNTk5MTIxMTI3LCJzdWIiOiI0Iiwic2NvcGVzIjpbIkNsaWVudHMiXX0.WddOHHJLHhLdB158piZZtBK4klKYXbleXuul7hKusk_2MeJUsAKFDfDUmJLzaSGobpO7RfE2PkBJIawr-3tF0bNaEeqq46PwO4-kamVyaVruHCc4sbJIbcRpJ9t5FUg9aTuspJOCK9-RWj8kXF1PQxU18iiVK_UHZEn62JRr8vNlTzLMHmZz6JeIZ-Je2vHdBKDyYYDeXSzgHEC39cvz0gfF6l4ZsDAqkN22SxwL-XnY40BJ9JZivsuVjKQlpMhlfwq_LwMD7Z5GNzzIN3gKGXCLxe-GGoamypSmCZa2sXKtgSWovsbaWGaBl7vHDrJBpRjDDZJEtCj04uBCBAGvoBM5i4yv3GzGWe8118a9SwhCam5T_MjXOoSfg0PscHqzC2B7yCv5_MUUXciLzHVrq_0Cr_9YZityscTFPQmOFitf-SMM2d_6pJQ06N9ZHbV2is12BdzB4595AAwvehwORtGKj5BbfCAGGV83CCSym1I_6T7MAGiVeSaF4j79mlRsrP_fDloBrPgcoAywNthq2JAFpeygNfq-CfRUErE2wEgsxYPTXxl5mnlyea713BD8ybIIbWh8eHgFatqEzMXtXHX1tuUyhTjVKCV9V-J5mvarkTVrQIRCpnSBL-rOo3GPog-_s-vgn9T6jPwNjorQJ5EzYO_oSAhHa43PNEKp_Hw" }
            });
        this.setState({ data: await data.data.message, loading: false });
    }

    handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        this.setState({
            filteredInfo: filters,
            sortedInfo: sorter,
        });
    };



    render() {
        const {data,loading} = this.state;
        const columns = [
            {
                title: 'ID',
                dataIndex: 'id',
                key: 'id',
            },
            {
                title: 'Designer Name',
                dataIndex: 'designer.user.first_name',
                key: 'name',
                render: (text, row) => `${row.designer !== null ? row.designer.user.last_name + ", " + row.designer.user.first_name : "Not yet assigned"}`
            },
            {
                title: 'Start Date',
                dataIndex: 'start_date',
                key: 'start_date',
            },
            {
                title: 'End Date',
                dataIndex: 'end_date',
                key: 'end_date',
            },
            {
                title: 'Status',
                dataIndex: 'status',
                key: 'status',
            },
            {
                title: 'Payment Status',
                dataIndex: 'payment_status',
                key: 'payment_status',
                render: (text, row) => (
                    <Tag
                        color={row.payment_status === "paid" ? "green" : "red"}
                        key="status"
                    >
                        {row.payment_status.toUpperCase()}
                    </Tag>
                ),
            },
        ];
        return (
            <div className="container">
                <Header style={{ background: '#fff', padding: 0 }} >
                    <h3 style={{
                        padding: '15px'
                    }}>Booking History</h3>
                </Header>
                <Table loading={loading} columns={columns} dataSource={data} onChange={this.handleChange} />
            </div>
        );
    }
}
export default History;