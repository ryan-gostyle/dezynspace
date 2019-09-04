import React, { Component } from 'react'
import { Table, Button, Layout,Tag } from 'antd';
import cookie from 'react-cookies';
import Axios from 'axios';
import { Link } from "react-router-dom";


const { Header } = Layout;

class ViewBooking extends Component {
  state = {
    filteredInfo: null,
    sortedInfo: null,
    data: [],
    loading: true,
  };

  async componentDidMount() {
    var data = await Axios.get('http://ec2-18-222-135-215.us-east-2.compute.amazonaws.com/api/bookings',
      {
        headers: { Authorization: "Bearer " + cookie.load('token') }
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
    let { sortedInfo, filteredInfo, data } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: 'Client Name',
        dataIndex: 'client.first_name',
        key: 'name',
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
        title: 'Status',
        dataIndex: 'payment_status',
        key: 'payment_status',
        sorter: (a, b) => a.payment_status.length - b.payment_status.length,
        sortOrder: sortedInfo.columnKey === 'payment_status' && sortedInfo.order,
        render: (text, record) => (
          <span>
            {text === "paid" ? <Tag color="green">PAID</Tag> : <Tag color="red">UNPAID</Tag>}
          </span>
        )
      },
      {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
        render: (text, record) => (
          <span>
            {text !== "No Product data found" && (
              <span>
                <Link to={`/edit-booking/${record.id}`}>Edit Booking</Link>
                <br />
              </span>
            )}
          </span>
        )
      },
    ];
    return (
      <div>
        <Header style={{ background: '#fff', padding: 0 }} >
          <h3 style={{
            padding: '15px'
          }}>Booking List</h3>
        </Header>
        <Table loading={this.state.loading} columns={columns} dataSource={data} onChange={this.handleChange} />
      </div>
    );
  }
}
export default ViewBooking;