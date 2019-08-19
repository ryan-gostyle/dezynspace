import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap'
class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
      <Navbar color="#fff" style={{background:'rgba(0,0,0,0)',position:'fixed',zIndex:'999999',width:'100%'}} dark expand="md">
          <NavbarBrand href="/"><img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Dezynspace/DEZYNSPACE+FULL+COLOR+LOGO_Horizontal_FC+(2).png" alt=''  style={{width: 'auto',height: '75px',left: '33px'}} /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/process">Process</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/portfolio">Portfolio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="pricing">Pricing</NavLink>
              </NavItem>
              <NavItem style={{textAlign:"center",background:"red",padding:"0px 30px",borderRadius:"25px"}}>
                <NavLink href="/login" >Login</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Header