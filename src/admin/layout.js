import React from 'react';
import 'antd/dist/antd.css';
import './Admin.css';
import { Layout, Menu, Icon, Switch } from 'antd';
import AddDesignerForm from './designer/AddDesigner'
import ViewDesigner from './designer/ViewDesigner'
import ViewBooking from './booking/ViewBooking'
import EditBookingForm from './booking/EditBooking'
const { Header, Content, Footer, Sider } = Layout;

export default class AdminLayout extends React.Component {
  state = {
    collapsed: false,
    headerTitle: '',
    link: null,
  };

  componentDidMount() {
    this.setState({ link: this.props.match.params.link });
    console.log(this.props.match.params.link);
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

 

  render() {
    const { link } = this.state;
    const  pages = () => {
      switch (this.state.link) {
        case 'booking':
          return <ViewBooking/>;
        case 'designer': 
        return <ViewDesigner/>;
      }
    }
    return (
      <Layout style={{height:"100vh"}}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo">
            <img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Dezynspace/DEZYNSPACE+FULL+COLOR+LOGO_Horizontal_FC+(2).png" alt="logo" style={{ width: '100%' }} />
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span className="nav-text">Add Designer</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span className="nav-text">View Designer</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span className="nav-text">View Bookings</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="user" />
              <span className="nav-text">Bookings</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} >
            <h3 style={{
              padding: '15px'
            }}>{this.state.link}</h3>
          </Header>
          <Content style={{ margin: '24px 16px 0' }}>
              {pages()}
          </Content>
          <Footer style={{ textAlign: 'center' }}>Dezynspace ©2019 </Footer>
        </Layout>
      </Layout>
    );
  }
}