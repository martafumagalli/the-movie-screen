import React from 'react';
import {
  Collapse,
  Navbar as BootstrapNavbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen
    });
  }

  render() {
    const { isOpen } = this.state;
    return (
      <BootstrapNavbar className="navbarbg mt-3" expand="md">
        <Link className=" nav-pills homebutton pt-2 pl-3" to="/"><span className="white">MovieScreen</span></Link>
        <NavbarToggler className=" white" onClick={this.toggle} />
        <Collapse isOpen={isOpen} navbar className="white">
          <Nav className="navbar-expand-lg nav-pills white categroriesbutton pt-3" navbar>
            <UncontrolledDropdown nav className="categoriesbutton" inNavbar>
              <DropdownToggle className="white pt-0 pr-4" nav caret>
                <span className="white">Categories</span>
              </DropdownToggle>
              <DropdownMenu right>
                <Link className="droplink" to="/genre/28">
                  <DropdownItem>
                    Action
                  </DropdownItem>
                </Link>
                <Link className="droplink" to="/genre/35">
                  <DropdownItem>
                    Comedy
                  </DropdownItem>
                </Link>
                <Link className="droplink" to="/genre/878">
                  <DropdownItem>
                    Science fiction
                  </DropdownItem>
                </Link>
                <DropdownItem />
                <Link className="droplink" to="/genre/14">
                  <DropdownItem>
                    Fantasy
                  </DropdownItem>
                </Link>
                <Link className="droplink" to="/genre/53">
                  <DropdownItem>
                    Thriller
                  </DropdownItem>
                </Link>
                <Link className="droplink" to="/genre/27">
                  <DropdownItem>
                    Horror
                  </DropdownItem>
                </Link>
                <Link className="droplink" to="/genre/16">
                  <DropdownItem>
                    Animation
                  </DropdownItem>
                </Link>
                <Link className="droplink" to="/genre/99">
                  <DropdownItem>
                    Documentary
                  </DropdownItem>
                </Link>
                <Link className="droplink" to="/genre/10749">
                  <DropdownItem>
                    Romance
                  </DropdownItem>
                </Link>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <Link to="/favorites"><span className="white px-4">Favorites</span></Link>
            </NavItem>
            <NavItem>
              <Link to="/watch-later"><span className="white px-4">Watch Later</span></Link>
            </NavItem>
            <NavItem>
              <Link to="/search"><span className="white pl-4 pr-5">Finder</span></Link>
            </NavItem>
            <NavItem>
              <Link to="/i-feel-lucky"><span className="white btn btn-danger iFeelLucky">I feel lucky</span></Link>
            </NavItem>
          </Nav>
        </Collapse>
        <NavItem className="medialogo nav-pills justify-content-end">
          <NavLink href="">
            <i className="fab fa-facebook fa-1x white mr-3" />
            <i className="fab fa-instagram fa-1x white mr-3" />
            <i className="fab fa-twitter fa-1x white mr-3" />
          </NavLink>
        </NavItem>
      </BootstrapNavbar>

    );
  }
}
