import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import Fade from 'react-reveal/Fade';
// import "./cursor.css"
// import Cursor from "./Apps";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Navigation from "./Navigation";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Certificates from "./Certificates";
import Projects from "./Projects";
import Routing from "./Routing";
import { Link , Route , Switch , BrowserRouter} from 'react-router-dom';
import Blogs from "./Blogs";
import Contact from "./Contact";


const Home = () => {
  return (
    <>
    
      
      <div className="container-fluid home">
    
        <div className="row d-lg-flex justify-content-lg-center align-items-lg-center">
          <div className="col-lg-6  col-md-6 col-sm-12 mt-5 ps-xl-5 ps-lg-4 ">
            <h5 className="leftheader ms-xl-4 mt-5">Hi, My Name is</h5>
            <h1>
              <span className="lefth1 ms-xl-4">Sineha</span> Kataria
            </h1>

            <div className="wrapper d-xl-flex justify-content-xl-center align-items-xl-center">
              <ul className="dynamic-txts mb-0 me-auto mt-3">
                <li>
                  <span>Web Developer</span>
                </li>
                <li>
                  <span>Web Designer</span>
                </li>
                <li>
                  <span>I create aesthetic and modern apps</span>
                </li>
              </ul>
            </div>
            <ul class="nav icons ms-2">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  <LinkedInIcon fontSize="large" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <GitHubIcon fontSize="large" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <TwitterIcon fontSize="large" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <InstagramIcon fontSize="large" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <MailOutlineIcon fontSize="large" />
                </a>
              </li>
            </ul>
            <div className=" pt-4 ms-4" style={{ opacity: "1" }}>
            
              <Link to="contact"
               
                className="
                talkbtn link  "
              >
                Let's Talk
              </Link>
            </div>
          </div>
          <div className="col-lg-6 mb-md-5 ">
            <img src="https://lktr.uz/images/illustrations/1.png" className="image1 img-fluid "/>
          
          </div>
        </div>
      </div>
      <About />
      <Skills/>
   
      <Education/>
      {/* <Certificates/> */}
      <Projects/>
      <Blogs/>
      <Contact/>
    </>
  );
};

export default Home;
