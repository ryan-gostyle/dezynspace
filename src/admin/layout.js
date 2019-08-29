import React from 'react';
import 'antd/dist/antd.css';
import './Admin.css';
import { Layout, Menu, Icon, Switch } from 'antd';
import AddDesignerForm from './designer/AddDesigner'
import ViewDesigner from './designer/ViewDesigner'
import ViewBooking from './booking/ViewBooking'
import EditBookingForm from './booking/EditBooking'
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;


export default class AdminLayout extends React.Component {
  state = {
    collapsed: false,
    headerTitle: '',
    link: null,
    clicked: '',
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

 

  render() {
    return (
      <HashRouter>    
          <Layout style={{minHeight:"100vh",height:'100%'}}>
            <Sider className="admin"
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
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} className="admin-menu">
                <Menu.Item key="1">
                  <Icon type="user" />
                <span className="nav-text"> <NavLink to="/add-designer" >Add Designer</NavLink></span>
                </Menu.Item>
                <Menu.Item key="2">
                  <Icon type="video-camera" />
                  <span className="nav-text"><NavLink to="/designer" >View Designer</NavLink></span>
                </Menu.Item>
                <Menu.Item key="3">
                  <Icon type="upload" />
                  <span className="nav-text"><NavLink to="/edit-booking" >Edit Bookings</NavLink></span>
                </Menu.Item>
                <Menu.Item key="4">
                  <Icon type="user" />
                  <span className="nav-text"><NavLink to="/booking">Bookings</NavLink></span>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout>

              <Content style={{ margin: '24px 16px 0' }}>
                  <Route path="/designer" component={ViewDesigner}/>
                  <Route path="/add-designer" component={AddDesignerForm}/>
                  <Route path="/booking" component={ViewBooking}/>
                  <Route path="/edit-booking" component={EditBookingForm}/>
              </Content>
              <Footer style={{ textAlign: 'center' }}>Dezynspace ©2019 </Footer>
            </Layout>
          </Layout>
      </HashRouter>
    );
  }
}