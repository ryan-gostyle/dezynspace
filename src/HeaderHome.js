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
  DropdownItem
} from 'reactstrap'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import cookie from 'react-cookies';
class HeaderHome extends Component {
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

  handlelogout = e => {
    cookie.remove('token', { path: '/' })
    window.location.href = "/"
  }

  render() {

    return (
      <div>
        <Navbar color="#fff" style={{ background: 'white', zIndex: '999999', width: '100%' }} dark expand="md">
          <NavbarBrand href="/"><img src="https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Dezynspace/colored+logo.png" alt='' style={{ width: 'auto', height: '55px', left: '33px' }} /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink><AnchorLink href="#top">Home</AnchorLink></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Portfolio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink><AnchorLink href="#testimonials">Success Stories</AnchorLink></NavLink>
              </NavItem>
              <NavItem>
                <NavLink ><AnchorLink href="#pricing">Pricing</AnchorLink></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/booking">Book</NavLink>
              </NavItem>
              <NavItem className="login-navitem">
                {cookie.load('token') === undefined &&
                  <NavLink className="login" href="/login" >Login</NavLink>
                }
                {cookie.load('token') !== undefined  &&

                  <UncontrolledDropdown>
                    <DropdownToggle nav caret>
                     Account
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        <a href="/bookings">Bookings</a>
                      </DropdownItem>
                      <DropdownItem>
                        <a onClick={this.handlelogout}>Logout</a>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                }
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default HeaderHome