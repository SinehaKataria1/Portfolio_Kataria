import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./About.css";
import pic from "./aboutpic.PNG"
import DownloadForOfflineSharpIcon from '@mui/icons-material/DownloadForOfflineSharp';
function About() {
  return (
    <>
      <div className="container-fluid w-100 h-100 p-2 m-0 p-0 about ">
        <div className="container  About h-100 w-100 d-flex justify-content-start p-2">
          <div className="circle1 p-2  mt-0"></div>
          <div className="circle2 p-2 mt-0 ms-1"></div>
          <div className="line1 bg-body-secondary ms-2 w-100 mt-1"></div>
          <div className="circle1 p-2  mt-0 ms-1"></div>
          <div className="circle2 p-2  mt-0 ms-1"></div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-6 mt-5">
              <h1
                style={{
                  background: "linear-gradient(90deg,#9f55ff,#7000ff)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Who I am
              </h1>
              <div class="line-with-circles1">
                <div class="circle"></div>
                <div class="line"></div>
                <div class="circle"></div>
              </div>
              <p className="mt-5 w-75">
                     Hello! My name is Sineha Kataria and I'm a web developer.
              </p>
              <p>
              Currently, I'm pursuing my degree in computer science in sukkur IBA university. As a web developer, 
              I'm passionate about creating innovative and user-friendly websites that provide a seamless user experience. 
              I possess expertise in various programming languages and frameworks, 
              including HTML, CSS, JavaScript, React, and Node.js.
              </p>
              <button className="btn cv mt-5 px-4 py-2">Download CV<DownloadForOfflineSharpIcon className="down"/></button>
            </div>
            <div className="col-lg-6 d-lg-flex justify-content-lg-center ">
              <div className="imgrelative">
                <div className="imgabsolute">
                <img
                  
                  src="https://i.pinimg.com/originals/5e/c0/76/5ec076ba64c5a1017b5b35dbc8d35b4b.gif"
                  width="400"
                  height="400"
                  alt=""
                 
                />
                </div>
               
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
