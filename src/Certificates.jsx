import React from "react";
import "./Certificate.css";
import MouseOutlinedIcon from "@mui/icons-material/MouseOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import HdrStrongOutlinedIcon from "@mui/icons-material/HdrStrongOutlined";
import LinearScaleSharpIcon from "@mui/icons-material/LinearScaleSharp";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function Certificates() {
  return (
    <>
      <div className="container mt-5 p-5">
        <div className=" d-flex justify-content-center mt-5">
          <div className="flex-column nav">
            <MouseOutlinedIcon sx={{ color: "#7000ff", fontSize: "40px" }} />
            <MoreVertOutlinedIcon sx={{ fontSize: "40px" }} />
            <HdrStrongOutlinedIcon
              sx={{ transform: "rotate(90deg)", fontSize: "40px" }}
            />
          </div>
        </div>
        <div className="d-flex flex-column mb-5 p-0 align-items-center">
        <h1 className="text-center  mt-5 " style={{background: "linear-gradient(90deg,#9f55ff,#7000ff)",backgroundClip:"text",
            WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent"}}>Certifications</h1>
        <div class="line-with-circles">
          <div class="circle"></div>
          <div class="line"></div>
          <div class="circle"></div>
        </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
            <div className="card html">
              <div className="card-header">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                  alt="HTML"
                />
              </div>
              <div className="card-body text-center">
                <h2 className="text-white">HTML</h2>
                <h5 className="text-secondary">Meta</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
            <div className="card css">
              <div className="card-header">
                <img src="https://play-lh.googleusercontent.com/ajbmMCoaThQcD4_z-1-6H79M0ItJ1Vz2jW_5yRB_eb1d_Fdzmdci0SPHFfujQj23n-Q" />
              </div>
              <div className="card-body text-center">
                <h2 className="text-white">CSS</h2>
                <h5 className="text-secondary">Meta</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center mx-md-auto">
            <div className="card   js">
              <div className="card-header">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
                  alt="JAVASCRIPT"
                />
              </div>
              <div className="card-body text-center">
                <h2 className="text-white">Javascript</h2>
                <h5 className="text-secondary">Meta</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
            <div className="card react">
              <div className="card-header">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png"
                  alt="React js"
                />
              </div>
              <div className="card-body text-center">
                <h2 className="text-white">React js</h2>
                <h5 className="text-secondary">Meta</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center  mx-md-auto">
            <div className="card node">
              <div className="card-header">
                <img
                  src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png"
                  alt="Node js"
                />
              </div>
              <div className="card-body text-center">
                <h2 className="text-white">Nodejs</h2>
                <h5 className="text-secondary">Meta</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center  mx-md-auto">
            <div className="card front-end">
              <div className="card-header">
                <img
                  src="https://www.pngfind.com/pngs/m/683-6834215_html-css-js-icon-hd-png-download.png"
                  alt="Front-end development"
                />
              </div>
              <div className="card-body text-center">
                <h3 className="text-white">Front-End Development</h3>
                <h5 className="text-secondary">Meta</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
            <div className="card sql">
              <div className="card-header">
                <img
                  src="https://www.freeiconspng.com/thumbs/sql-server-icon-png/sql-server-icon-png-29.png"
                  alt="sql"
                />
              </div>
              <div className="card-body text-center">
                <h2 className="text-white">SQL</h2>
                <h5 className="text-secondary">Meta</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
            <div className="card cplus">
              <div className="card-header">
                <img
                  src="https://e7.pngegg.com/pngimages/46/626/png-clipart-c-logo-the-c-programming-language-computer-icons-computer-programming-source-code-programming-miscellaneous-template.png"
                  alt=""
                />
              </div>
              <div className="card-body text-center">
                <h2 className="text-white">C++</h2>
                <h5 className="text-secondary">DataCamp</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center  mx-md-auto">
            <div className="card java">
              <div className="card-header">
                <img
                  src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/181_Java-512.png"
                  alt="java"
                />
              </div>

              <div className="card-body text-center">
                <h2 className="text-white">JAVA</h2>
                <h5 className="text-secondary">Meta</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Certificates;
