import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Education.css"
import MouseOutlinedIcon from '@mui/icons-material/MouseOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import HdrStrongOutlinedIcon from '@mui/icons-material/HdrStrongOutlined';
import Certificates from "./Certificates";
function Education() {
  return (
    <>
      <div className="container mb-5 mt-5">
      <div className=" d-flex justify-content-center">
              <div className="flex-column nav">
                    <MouseOutlinedIcon sx={{color:"#7000ff", fontSize:"40px"}}/>
                    <MoreVertOutlinedIcon sx={{fontSize:"40px" }}/>
                    <HdrStrongOutlinedIcon sx={{ transform: "rotate(90deg)",fontSize:"40px"}}/>
              </div>
             
            </div>
        <div className="mb-5">
           <h1 className="text-center " style={{background: "linear-gradient(90deg,#9f55ff,#7000ff)",backgroundClip:"text",
            WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent"}}>Education</h1>
           <div class="line-with-circles">
          <div class="circle"></div>
          <div class="line"></div>
          <div class="circle"></div>
        </div>
          </div>

        <div className="row mb-5">
        <div className="col-lg-6 d-flex justify-content-center align-items-center">
            <img src="https://www.valamis.com/wp-content/uploads/2022/09/continious-learning.png" width="600"
             height="500" className="img-fluid" />
          </div>
          <div className="col-lg-6 ">
            <div className="d-flex edudiv justify-content-start  ps-4 py-3" >
              <div className="me-4">
                <div>
                  <SchoolIcon sx={{backgroundColor:"white",borderRadius:"50%", padding:"10px",fontSize:"45px", opacity:1
                  ,color:"black"}}/>
                </div>
              </div>
              <div>
                <h5 style={{color:"white"}}>2021-present</h5>
                <h4>Bachelor in Computer Science </h4>
                <h5 style={{color:"rgba(234, 234, 234, 0.8)"}}>Sukkur IBA university</h5>
              </div>
            </div>
            <div className="d-flex justify-content-start ps-4 py-3 mt-3 edudiv " >
            <div className="me-4">
                <div>
                  <SchoolIcon sx={{backgroundColor:"white",borderRadius:"50%", padding:"10px",fontSize:"45px", opacity:1
                  ,color:"black"}}/>
                </div>
              </div>
              <div>
                <h5 style={{color:"white"}}>2018-2021</h5>
                <h4>Intermediate</h4>
                <h5 style={{color:"rgba(234, 234, 234, 0.8)"}}>Sindh Public Higher Secondary School</h5>
              </div>
            </div>
            <div className="d-flex justify-content-start  ps-4 py-3 mt-3 edudiv">
            <div className="me-4">
                <div>
                  <SchoolIcon sx={{backgroundColor:"white",borderRadius:"50%", padding:"10px",fontSize:"45px", opacity:1
                  ,color:"black"}}/>
                </div>
              </div>
              <div>
                <h5  style={{color:"white"}}>2009-2017</h5>
                <h4>Matriculation</h4>
                <h5 style={{color:"rgba(234, 234, 234, 0.8)"}}>Sindh Public Higher Secondary School</h5>
              </div>
            </div>
          </div>
         
        </div>
      </div>
      <Certificates/>
    </>
  );
}

export default Education;
