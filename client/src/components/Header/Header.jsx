import React, { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
// import { signout } from '../../actions/authActions';
import "./Header.css";
import "bootstrap/dist/css/bootstrap.css";
// import { Link } from "react-router-dom";
import logo from '../../images/logo.png'
import { FaBars } from 'react-icons/fa';
import { IoClose } from "react-icons/io5";
import { SidebarData } from './SidebarData';

const Header = (props) => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    //   const user = useSelector(state => state.user);
    //   const auth = useSelector(state => state.auth);
    //   const dispatch = useDispatch();

    //   const logout = () => {
    //       dispatch(signout());
    //   }

    //   const renderLoggedInLinks = () => {
    //       return (
    //           <Nav>
    //               <li className="nav-item">
    //                   <span className="navTitles" onClick={logout}>Sign-Out</span>
    //               </li>
    //           </Nav>
    //       );
    //   };

    //   const renderNonLoggedInLinks = () => {
    //       return (
    //           <Nav>
    //               <li className="nav-item">
    //                   <NavLink to="/signin" className="navTitles">Sign-in</NavLink>
    //               </li>
    //               <li className="nav-item">
    //                   <NavLink to="/signup" className="navTitles">Sign-up</NavLink>
    //               </li>
    //           </Nav>
    //       );
    //   };

    return (
        <Navbar fixed="top" className="navb" variant="dark">
            <Navbar.Brand href="#home">
                <img src={logo} alt="" height="30" />
            </Navbar.Brand>
            <Nav className="extraNav">
                <Nav href="#deets">
                    <Button variant="light">Login</Button>
                </Nav>
                <Nav>
                    <Link to="/">
                        <FaBars onClick={showSidebar} style={{ fontSize: "2rem", color: "white", marginLeft: "20px", marginTop: "5px" }} />
                    </Link>
                </Nav>
                <Nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <IoClose style={{ fontSize: "3rem", color: "black" }} />
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className="nav-text mb-sm-5">
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                    <div className="sideBod5 r">{item.body}</div>
                                </li>
                            );
                        })}
                    </ul>
                </Nav>
            </Nav>
        </Navbar>
    );
};

export default Header;
