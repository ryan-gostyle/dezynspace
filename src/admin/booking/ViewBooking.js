import React, { Component } from 'react'
import { Table, Button, Layout } from 'antd';
import cookie from 'react-cookies';
import Axios from 'axios';
const { Header } = Layout;
class ViewBooking extends Component {
    state = {
        filteredInfo: null,
        sortedInfo: null,
        data: [],
      };

      async componentDidMount() {
        var data = await Axios.get('http://ec2-18-222-135-215.us-east-2.compute.amazonaws.com/api/bookings', 
        {
          headers: { Authorization: "Bearer " + cookie.load('token') }
        });
        console.log(await data.data.message)
        // let Message = Object.keys(data.data).map(function(key) {
        //   return data.data.message[key];
        // });
        this.setState({ data: await data.data.message });
    }
    
      handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        this.setState({
          filteredInfo: filters,
          sortedInfo: sorter,
        });
      };
    
      clearFilters = () => {
        this.setState({ filteredInfo: null });
      };
    
      clearAll = () => {
        this.setState({
          filteredInfo: null,
          sortedInfo: null,
        });
      };
    
      setEmploymentSort = () => {
        this.setState({
          sortedInfo: {
            order: 'descend',
            columnKey: 'age',
          },
        });
      };
    
    render() {
    let { sortedInfo, filteredInfo,data } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        filters: [{ text: '1', value: '1' }, { text: '2', value: '2' }],
        filteredValue: filteredInfo.id || null,
        onFilter: (value, record) => record.id.includes(value),
        sorter: (a, b) => a.id.length - b.id.length,
        sortOrder: sortedInfo.columnKey === 'id' && sortedInfo.order,
        },
      {
        title: 'Client Name',
        dataIndex: 'client.first_name',
        key: 'name',
        filters: [{ text: 'Joe', value: 'Joe' }, { text: 'Jim', value: 'Jim' }],
        filteredValue: filteredInfo.name || null,
        onFilter: (value, record) => record.name.includes(value),
        sorter: (a, b) => a.name.length - b.name.length,
        sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
      },
      {
        title: 'Start Date',
        dataIndex: 'start_date',
        key: 'start_date',
        filters: [{ text: '1', value: '1' }, { text: '2', value: '2' }],
        filteredValue: filteredInfo.id || null,
        onFilter: (value, record) => record.id.includes(value),
        sorter: (a, b) => a.id.length - b.id.length,
        sortOrder: sortedInfo.columnKey === 'id' && sortedInfo.order,
        },
      {
        title: 'End Date',
        dataIndex: 'end_date',
        key: 'end_date',
        filters: [{ text: '1', value: '1' }, { text: '2', value: '2' }],
        filteredValue: filteredInfo.id || null,
        onFilter: (value, record) => record.id.includes(value),
        sorter: (a, b) => a.id.length - b.id.length,
        sortOrder: sortedInfo.columnKey === 'id' && sortedInfo.order,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            filters: [{ text: '1', value: '1' }, { text: '2', value: '2' }],
            filteredValue: filteredInfo.id || null,
            onFilter: (value, record) => record.id.includes(value),
            sorter: (a, b) => a.id.length - b.id.length,
            sortOrder: sortedInfo.columnKey === 'id' && sortedInfo.order,
        },  
      {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',

      },
    ];
        return (
            <div>
              <Header  style={{ background: '#fff', padding: 0 }} >
                <h3 style={{
                  padding: '15px'
                }}>Booking List</h3>
              </Header>
              <div className="table-operations">
                <Button onClick={this.setEmploymentSort}>Sort Employment Type</Button>
                <Button onClick={this.clearFilters}>Clear filters</Button>
                <Button onClick={this.clearAll}>Clear filters and sorters</Button>
              </div>
              <Table columns={columns} dataSource={data} onChange={this.handleChange} />
            </div>
        );
    }
}
export default ViewBooking;