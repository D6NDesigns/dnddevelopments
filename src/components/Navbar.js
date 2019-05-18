import React from 'react';
import { Link } from 'gatsby';
import logo from '../img/logo.svg';

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
              navBarActiveClass: 'is-active',
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
      <nav className="dnd-nav navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">
          <img
            src={logo}
            alt={siteMetadata.title}
            className="d-inline-block align-top"
          />
          </a>
          <button 
            className="navbar-toggler navbar-toggler-right" 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarResponsive" 
            aria-controls="navbarResponsive" 
            aria-expanded="false" 
            aria-label="Toggle navigation">
            Menu
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ml-auto">
            {siteMetadata.pages.map((page, index) => {      
              return (
                <li key={index} className="nav-item">
                  <Link className="navbar-link" to={`/#${page.toLowerCase()}`}>
                    {page}
                  </Link>
                </li>
              ) 
            })}
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar;