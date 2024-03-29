import React from 'react';
import logo from '../images/logo.svg';
import navbarOpenIcon from '../images/icons/navbar-icon.svg';
import navbarCloseIcon from '../images/icons/plus-icon.svg';
import { Link } from 'react-scroll';
import PropTypes from 'prop-types';

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
      navBarBackgroundClass: '',
    }
  }

  componentDidMount = () => {
    document.addEventListener('touchmove', this.handleScroll);
    document.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount = () => {
    document.removeEventListener('touchmove', this.handleScroll);
    document.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll = (event) => {
    let scrollTop = event.srcElement.documentElement.scrollTop;
    let breakpoint = window.innerWidth >= 768 ? 190 : 150;
    this.setState({
      navBarBackgroundClass: scrollTop >= parseInt(breakpoint) ? 'dnd-nav-has-background' : '',
    });

  }

  handleNav = () => {
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
    const { title, pages } = this.props;
    const scrollDuration = 350;
    return (
      <React.Fragment>
        <nav className={`dnd-nav ${this.state.active ? 'dnd-nav-is-showing ' : ''}dnd-branding navbar navbar-expand-lg navbar-dark fixed-top ${this.state.navBarBackgroundClass}`}>
          <div className="container">
            <Link 
              className="navbar-brand"
              duration={scrollDuration}
              smooth={true}
              spy={true}
              to="intro"
            >
              <img
                src={logo}
                alt={title}
                className="d-inline-block align-top"
              />
            </Link>
            <button 
              className={`navbar-toggler navbar-toggler-right ${this.state.active ? '' : 'collapsed'}`}
              type="button" 
              data-toggle="collapse" 
              data-target="#navbarResponsive" 
              aria-controls="navbarResponsive" 
              aria-expanded="false" 
              aria-label="Toggle navigation"
              onClick={() => this.handleNav()}
            >
              <img 
                src={this.state.active ? navbarCloseIcon : navbarOpenIcon}
                alt=''
              />
            </button>
            <div className={`collapse navbar-collapse ${this.state.navBarActiveClass}`} id="navbarResponsive">
              <div className="navbar-nav text-uppercase ml-auto">
                {pages.map((page, index) => {      
                  return (
                    <li key={index} className="nav-item">
                      <Link 
                        activeClass="dnd-nav-link-is-active"
                        className="nav-link"
                        duration={scrollDuration}
                        onClick={() => this.handleNav()}
                        spy={true}
                        smooth={true}
                        to={page.toLowerCase()}
                      >
                        {page}
                      </Link>
                    </li>
                  ) 
                })}
              </div>
            </div>
          </div>
        </nav>
      </React.Fragment>
    )
  }
}

export default Navbar;

Navbar.propTypes = {
  title: PropTypes.string,
  pages: PropTypes.array,
};