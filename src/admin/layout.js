import React from 'react';
import 'antd/dist/antd.css';
import './Admin.css';
import { Layout, Menu, Icon } from 'antd';
import AddDesignerForm from './designer/AddDesigner'
import ViewDesigner from './designer/ViewDesigner'
import ViewBooking from './booking/ViewBooking'
import EditBookingForm from './booking/EditBooking'
import EditDesignerForm from './designer/EditDesigner'
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import withAuth from '../middleware';
import cookie from 'react-cookies';
const { Content, Footer, Sider } = Layout;


class AdminLayout extends React.Component {
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

  handlelogout = e => {
    cookie.remove('token', { path: '/' })
    window.location.href = "/"
  }

 

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
                {/* <Menu.Item key="3">
                  <Icon type="upload" />
                  <span className="nav-text"><NavLink to="/edit-booking" >Edit Bookings</NavLink></span>
                </Menu.Item> */}
                <Menu.Item key="4">
                  <Icon type="user" />
                  <span className="nav-text"><NavLink to="/booking">Bookings</NavLink></span>
                </Menu.Item>
                <Menu.Item key="5">
                  <Icon type="user" />
                  <span className="nav-text"><NavLink to="/" onClick={this.handlelogout}>logout</NavLink></span>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout>

              <Content style={{ margin: '24px 16px 0' }}>
                  <Route path="/designer" component={ViewDesigner}/>
                  <Route path="/add-designer" component={AddDesignerForm}/>
                  <Route path="/booking" component={ViewBooking}/>
                  <Route path="/edit-booking/:id" component={EditBookingForm}/>
                  <Route path="/edit-designer/:id" component={EditDesignerForm}/>
              </Content>
              <Footer style={{ textAlign: 'center' }}>Dezynspace ©2019 </Footer>
            </Layout>
          </Layout>
      </HashRouter>
    );
  }
}

export default withAuth(AdminLayout, "admin")