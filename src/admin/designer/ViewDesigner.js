import React, { Component } from 'react'
import { Table, Button } from 'antd';

const data = [
  {
    key: '1',
    id: '1',
    name: 'John Brown',
    email: 32,
    type: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    id: '2',
    name: 'Jim Green',
    email: 42,
    type: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    id: '3',
    name: 'Joe Black',
    email: 32,
    type: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    id: '4',
    name: 'Jim Red',
    email: 32,
    type: 'London No. 2 Lake Park',
  },
];

class ViewDesigner extends Component {
    state = {
        filteredInfo: null,
        sortedInfo: null,
      };
    
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
    let { sortedInfo, filteredInfo } = this.state;
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
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        filters: [{ text: 'Joe', value: 'Joe' }, { text: 'Jim', value: 'Jim' }],
        filteredValue: filteredInfo.name || null,
        onFilter: (value, record) => record.name.includes(value),
        sorter: (a, b) => a.name.length - b.name.length,
        sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        sorter: (a, b) => a.age - b.age,
        sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
      },
      {
        title: 'Employment Type',
        dataIndex: 'type',
        key: 'type',
        filters: [{ text: 'London', value: 'London' }, { text: 'New York', value: 'New York' }],
        filteredValue: filteredInfo.type || null,
        onFilter: (value, record) => record.type.includes(value),
        sorter: (a, b) => a.type.length - b.type.length,
        sortOrder: sortedInfo.columnKey === 'type' && sortedInfo.order,
      },
      {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',

      },
    ];
        return (
            <div>
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