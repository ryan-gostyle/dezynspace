import React from 'react';
import 'antd/dist/antd.css';
import '../../App.css';
import { Layout, Menu, Icon} from 'antd';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Infographic from './infographic';
import Brochures from './Brochures';
import BusinessCard from './BusinessCard';
import DesignAppMockUp from './DesignAppMockUp';
import Flyers from './Flyers';
import Icons from './Icons';
import Illustration from './Illustration';
import Letterhead from './Letterhead';
import Newsletter from './Newsletter';
import Packaging from './Packaging';
import Posters from './Posters';
import PPTDesign from './PPTDesign';
import SocialMediaPost from './SocialMediaPost';
import ThreeD from './ThreeD';
import WebBanners from './WebBanners';
import WebsiteUI from './WebsiteUI';

const { Header, Content, Footer, Sider } = Layout;



export default class CaseStudies extends React.Component {
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
          <Layout className="case-categories" style={{minHeight:"100vh",height:'100%'}}>
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
              <Menu theme="light" mode="inline" defaultSelectedKeys={['16']} className="case-categories">
                <h4>Categories</h4>
                
                <Menu.Item key="1">
                <span className="nav-text"> <NavLink to="/Infographic" >Infographic</NavLink></span>
                </Menu.Item>
                <Menu.Item key="2">
                  <span className="nav-text"><NavLink to="/Posters" >Posters</NavLink></span>
                </Menu.Item>
                <Menu.Item key="3">
                  <span className="nav-text"><NavLink to="/WebBanners" >Web Banners</NavLink></span>
                </Menu.Item>
                <Menu.Item key="4">
                  <span className="nav-text"><NavLink to="/PPTDesign">PPT Design</NavLink></span>
                </Menu.Item>
                <Menu.Item key="5">
                <span className="nav-text"> <NavLink to="/Flyers" >Flyers</NavLink></span>
                </Menu.Item>
                <Menu.Item key="6">
                  <span className="nav-text"><NavLink to="/Brochures" >Brochures</NavLink></span>
                </Menu.Item>
                <Menu.Item key="7">
                  <span className="nav-text"><NavLink to="/SocialMediaPosts" >Social Media Posts</NavLink></span>
                </Menu.Item>
                <Menu.Item key="8">
                  <span className="nav-text"><NavLink to="/BusinessCard">Business Card</NavLink></span>
                </Menu.Item>
                <Menu.Item key="9">
                <span className="nav-text"> <NavLink to="/Website(UI)" >Website (UI)</NavLink></span>
                </Menu.Item>
                <Menu.Item key="10">
                  <span className="nav-text"><NavLink to="/3D" >3D</NavLink></span>
                </Menu.Item>
                <Menu.Item key="11">
                  <span className="nav-text"><NavLink to="/Packaging" >Packaging</NavLink></span>
                </Menu.Item>
                <Menu.Item key="12">
                  <span className="nav-text"><NavLink to="/Icon">Icon</NavLink></span>
                </Menu.Item>
                <Menu.Item key="13">
                <span className="nav-text"> <NavLink to="/Newsletter" >Newsletter</NavLink></span>
                </Menu.Item>
                <Menu.Item key="14">
                  <span className="nav-text"><NavLink to="/Letterhead" >Letterhead</NavLink></span>
                </Menu.Item>
                <Menu.Item key="15">
                  <span className="nav-text"><NavLink to="/Illustration" >Illustration</NavLink></span>
                </Menu.Item>
                <Menu.Item key="16">
                  <span className="nav-text"><NavLink to="/DesignAppMock-up">Design App Mock-up</NavLink></span>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout>
              <Header style={{ background: '#fff', padding: 0 }} >
                <h3 style={{
                  padding: '15px'
                }}>Companies Love Us</h3>
              </Header>
              <Content style={{ margin: '24px 16px 0' }}>
          
                  <Route path="/Infographic" component={Infographic}/>
                  <Route path="/Posters" component={Posters}/>
                  <Route path="/WebBanners" component={WebBanners}/>
                  <Route path="/PPTDesign" component={PPTDesign}/>
                  <Route path="/Flyers" component={Flyers}/>
                  <Route path="/Brochures" component={Brochures}/>
                  <Route path="/SocialMediaPosts" component={SocialMediaPost}/>
                  <Route path="/BusinessCard" component={BusinessCard}/>
                  <Route path="/Website(UI)" component={WebsiteUI}/>
                  <Route path="/3D" component={ThreeD}/>
                  <Route path="/Packaging" component={Packaging}/>
                  <Route path="/Icon" component={Icons}/>
                  <Route path="/Newsletter" component={Newsletter}/>
                  <Route path="/Letterhead" component={Letterhead}/>
                  <Route path="/Illustration" component={Illustration}/>
                  <Route path="/DesignAppMock-up" component={DesignAppMockUp}/>
              </Content>
            </Layout>
          </Layout>
      </HashRouter>
    );
  }
}