import React from 'react';
import { Link } from 'gatsby';
import logo from '../img/logo.svg';
import navbarIcon from '../img/icons/navbar-icon.svg';

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'show',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    const siteMetadata = this.props.siteMetadata;
    return (
      <React.Fragment>
        <div className="dnd-nav-background"></div>
        <nav className={`dnd-nav ${this.state.active ? 'dnd-nav-is-showing' : ''} dnd-branding navbar navbar-expand-lg navbar-dark fixed-top`}>
          <div className="container">
            <a className="navbar-brand" href="#intro">
            <img
              src={logo}
              alt={siteMetadata.title}
              className="d-inline-block align-top"
            />
            </a>
            <button 
              className={`navbar-toggler navbar-toggler-right ${this.state.active ? '' : 'collapsed'}`}
              type="button" 
              data-toggle="collapse" 
              data-target="#navbarResponsive" 
              aria-controls="navbarResponsive" 
              aria-expanded="false" 
              aria-label="Toggle navigation"
              onClick={() => this.toggleHamburger()}
            >
              <img 
                src={navbarIcon}
                alt=''
              />
            </button>
            <div className={`collapse navbar-collapse ${this.state.navBarActiveClass}`} id="navbarResponsive">
              <ul className="navbar-nav text-uppercase ml-auto">
              {siteMetadata.pages.map((page, index) => {      
                return (
                  <li key={index} className="nav-item">
                    <Link 
                      className="nav-link" 
                      to={`/#${page.toLowerCase()}`}
                      onClick={() => this.toggleHamburger()}
                    >
                      {page}
                    </Link>
                  </li>
                ) 
              })}
              </ul>
            </div>
          </div>
        </nav>
      </React.Fragment>
    )
  }
}

export default Navbar;