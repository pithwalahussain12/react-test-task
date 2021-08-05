import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Container, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Header = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <div className="topbar">
        <div className="container">
        <ul className="">
          <li>
            <div className="d-flex">
              <img src="/images/1.png" />
              <p>Internation Patients</p>
            </div>

          </li>
          <li>
            <div className="d-flex">
              <img src="/images/2.png" />
              <p>Book a Video Consultation</p>
            </div>


          </li>
          <li>
            <button className="btn_appointment">
              <a>
                Request An Appointment
              </a>
            </button>
          </li>
        </ul>
        </div>
       
      </div>
      <Navbar expand="md" color="light" light>
        <Container>
          <NavbarBrand href="/" className="mr-auto">Logo</NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar className="m-auto w-100 navbar_header">
              <NavItem>
                <NavLink className="link_header text-center" href="/">About Prostate<br /> Cancer</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="link_header text-center" href="/">Treatment Process<br /> Process</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="link_header text-center" href="/">About <br /> Dr. Tewari </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="link_header text-center" href="/">Research</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="link_header text-center" href="/">Winning over<br /> Prostate Cancer</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="link_header text-center" href="/">Patient<br /> Stories</NavLink>
              </NavItem>

            </Nav>
          </Collapse>
        </Container>

      </Navbar>
    </div>
  );
}

export default Header;
