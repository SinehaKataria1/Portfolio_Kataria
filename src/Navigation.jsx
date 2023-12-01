import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FeedIcon from '@mui/icons-material/Feed';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import ChatIcon from '@mui/icons-material/Chat';
import CallIcon from '@mui/icons-material/Call';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import "./Navigation.css"
import { Link , Route , Switch , BrowserRouter} from 'react-router-dom';
import Routing from "./Routing.jsx";
function Navigation() {
   
  return (

    <>
      <nav className="navbar fixed-top z-2 ">
        <div className="container-fluid ">
          <a className="navbar-brand " href="#">
          {/* <h1 style={{color:"white"}}> </h1> */}
          </a>
          <button
            className="navbar-toggler  "
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
            style={{ float: "right",backgroundColor:"white " }} 
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-start " 
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title text-light" id="offcanvasNavbarLabel">
                DashBoard
              </h5>
              <button
                type="button"
                className="btn-close ms-auto me-1"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body mt-5">
              <ul className="navbar-nav justify-content-center align-items-center ">
                <li className="nav-item" >
                  <Link className="btn homebtn px-4 py-2 justify-content-around d-flex" to="/home">
                  <span className="ms-2"><HomeIcon sx={{ fontSize: 40 }}/></span> <span className="ms-2 me-3" 
                    style={{fontSize:"25px"}}>Home</span>
                  </Link>
                </li>
                <li className="nav-item" >
                <Link className="btn Aboutbtn  px-4 py-2 justify-content-around d-flex" to="/about">
                  <span className="ms-2"><AccountCircleIcon sx={{ fontSize: 40 }}/></span> <span className="ms-2 me-3" 
                    style={{fontSize:"25px"}}>About</span>
                  </Link>
                </li>
                <li className="nav-item" >
                <Link className="btn  resumebtn  px-4 py-2 justify-content-around d-flex" to="/skills" >
                  <span className="ms-2"><FeedIcon sx={{ fontSize: 40 }}/></span> <span className="ms-2 me-3" 
                    style={{fontSize:"25px"}}>Skills</span>
                   </Link>
                </li>
                <li className="nav-item" >
                <Link  className="btn servicebtn  px-4 py-2 justify-content-around d-flex" to="/education">
                <span className="ms-2"><AppRegistrationIcon sx={{ fontSize: 40 }}/></span>  <span className="ms-2 me-3" 
                    style={{fontSize:"25px"}}>Education</span>
                </Link>
                </li>
                <li className="nav-item" >
                <Link className="btn blogsbtn  px-4 py-2 justify-content-around d-flex" to="/projects">
                <span className="ms-2"><SettingsSuggestIcon sx={{ fontSize: 40 }}/></span> <span className="ms-2 me-3" 
                    style={{fontSize:"25px"}}>Projects</span>
                 </Link>
                </li>
                <li className="nav-item" >
                <Link className="btn blogsbtn  px-4 py-2 justify-content-around d-flex" to="/blogs">
                  <span className="ms-2"><ChatIcon sx={{ fontSize: 40 }}/></span> <span className="ms-2 me-3" 
                    style={{fontSize:"25px"}}>Blogs</span>
                  </Link>
                </li>
                <li className="nav-item" >
                  <Link className="btn contactbtn  px-4 py-2 justify-content-around d-flex" to="/contact" >
                  <span className="ms-2"><CallIcon sx={{ fontSize: 40 }}/></span> <span className="ms-2 me-3" 
                    style={{fontSize:"25px"}}>Contact</span>
                  </Link>
                </li>
                
               
              </ul>
              
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
 


export default Navigation;
