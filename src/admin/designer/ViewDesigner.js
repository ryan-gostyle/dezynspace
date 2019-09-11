import React, { Component } from 'react'
import { Table, Button, Layout,Tag } from 'antd';
import cookie from 'react-cookies';
import Axios from 'axios';
const { Header } = Layout;


class ViewDesigner extends Component {
    state = {
        filteredInfo: null,
        sortedInfo: null,
        data: [],
      };
    
      async componentDidMount() {
        var data = await Axios.get('http://ec2-18-222-135-215.us-east-2.compute.amazonaws.com/api/designers', 
        {
          headers: { Authorization: "Bearer " + cookie.load('token') }
        });
        console.log(await data.data.message.designer);
        this.setState({ data: await data.data.message.designer });
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
      },
      {
        title: 'Name',
        dataIndex: 'user',
        key: 'name',
        render: user => `${user.last_name} ${user.first_name}`,
      },
      {
        title: 'Email',
        dataIndex: 'user.email',
        key: 'email',
      },
      {
        title: 'Employment Type',
        dataIndex: 'type',
        key: 'type',
        render: (text, record) => (
          <span>
            {text === 1 ? <Tag color="green">Full Time</Tag> : <Tag color="blue">Project Based</Tag>}
          </span>
        )
      },
      {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
        render: (text, record) => (
          <span>
            {text !== "No designer found" && (
              <span>
                <a href={`/admin/dashboard#/edit-designer/${record.id}`}>Details</a>
                <br />
              </span>
            )}
          </span>
        )
      }
    ];
        return (
            <div>
              <Header  style={{ background: '#fff', padding: 0 }} >
                <h3 style={{
                  padding: '15px'
                }}>Designer List</h3>
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
export default ViewDesigner;