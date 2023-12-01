import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import portfolio from "./portfolio.png";
import festival from "./festival.png";
import Ecommerence from "./Ecommerence.png";
import MouseOutlinedIcon from "@mui/icons-material/MouseOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import HdrStrongOutlinedIcon from "@mui/icons-material/HdrStrongOutlined";
import gb from "./gbcare.png";
import digital from "./digital.png";
import todo from "./todo.PNG";
import "./Projects.css";
function Projects() {
  return (
    <>
      <div className="container mb-5">
        <div className="mb-5">
          <div className=" d-flex justify-content-center">
            <div className="flex-column nav">
              <MouseOutlinedIcon sx={{ color: "#7000ff", fontSize: "40px" }} />
              <MoreVertOutlinedIcon sx={{ fontSize: "40px" }} />
              <HdrStrongOutlinedIcon
                sx={{ transform: "rotate(90deg)", fontSize: "40px" }}
              />
            </div>
          </div>
          <h1
            className="text-center  mt-2"
            style={{
              background: "linear-gradient(90deg,#9f55ff,#7000ff)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Projects
          </h1>
          <div class="line-with-circles">
            <div class="circle"></div>
            <div class="line"></div>
            <div class="circle"></div>
          </div>
        </div>
        <div className="d-lg-flex justify-content-lg-between mt-3">
        <div
          class="card  card1 c1 card-container1 me-lg-3 mx-auto mb-3"
          style={{ width: "60vh" }}
        >
          <div class="card-body">
            <img src={portfolio} alt="Card image cap" className="w-100 h-100" />
            <p className="h-100">
              <span>
                {" "}
                <span className="fs-2">Portfolio Website</span>
                <ul className="nav  flex-column mt-3">
                  <li className="nav-item">HTML</li>
                  <li className="nav-item">CSS</li>

                  <li className="nav-item">Javascript</li>
                </ul>{" "}
              </span>
            </p>
          </div>
          <div className="card-footer bg-black">
            <div>
              <ul className="nav  ul">
                <li className="nav-item">
                  {" "}
                  <a href="#">
                    <PlayCircleOutlineIcon
                      fontSize="large"
                      className="circle1"
                    />
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#">
                    <CodeOffIcon fontSize="large" className="service" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

          <div
            class="card  card2 c2 card-container2  me-lg-3 mx-auto mb-3"
            style={{ width: "60vh" }}
          >
            <div class="card-body">
              <img
                src={festival}
                alt="Card image cap"
                className="h-100 w-100"
              />
              <p className="h-100">
                <span>
                  {" "}
                  <span className="fs-2">Festival Website</span>
                  <ul className="nav  flex-column mt-3">
                    <li className="nav-item">HTML</li>
                    <li className="nav-item">CSS</li>

                    
                  </ul>{" "}
                </span>
              </p>
            </div>
            <div className="card-footer bg-black">
              <div>
                <ul className="nav  ul">
                  <li className="nav-item">
                    {" "}
                    <a href="#">
                      <PlayCircleOutlineIcon
                        fontSize="large"
                        className="circle1"
                      />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#">
                      <CodeOffIcon fontSize="large" className="service" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            class="card  card3 c3 card-container3 mx-auto mb-3"
            style={{ width: "60vh" }}
          >
            <div class="card-body">
              <img
                src={Ecommerence}
                alt="Card image cap"
                className="h-100 w-100"
              />
              <p className="h-100">
                <span>
                  {" "}
                  <span className="fs-2">Ecommerece Website</span>
                  <ul className="nav  flex-column mt-3">
                    <li className="nav-item">HTML</li>
                    <li className="nav-item">CSS</li>

                    <li className="nav-item">Javascript</li>
                  </ul>{" "}
                </span>
              </p>
            </div>

            <div className="card-footer bg-black">
              <div>
                <ul className="nav  ul">
                  <li className="nav-item">
                    {" "}
                    <a href="#">
                      <PlayCircleOutlineIcon
                        fontSize="large"
                        className="circle1"
                      />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#">
                      <CodeOffIcon fontSize="large" className="service" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
     
      <div className="d-lg-flex justify-content-lg-between mt-3">
      <div
            class="card  card4 c4 card-container4  me-lg-3 mx-auto mb-3"
            style={{ width: "60vh" }}
          >
            <div class="card-body bg-white">
              <img
                src={gb}
                alt="Card image cap"
                className="h-100" width="355px"
              />
              <p className="h-100">
                <span>
                  {" "}
                  <span className="fs-2">Gb Care Website</span>
                  <ul className="nav  flex-column mt-3">
                    <li className="nav-item">HTML</li>
                    <li className="nav-item">CSS</li>

                  </ul>{" "}
                </span>
              </p>
            </div>

            <div className="card-footer bg-black">
              <div>
                <ul className="nav  ul">
                  <li className="nav-item">
                    {" "}
                    <a href="#">
                      <PlayCircleOutlineIcon
                        fontSize="large"
                        className="circle1"
                      />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#">
                      <CodeOffIcon fontSize="large" className="service" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            class="card  card5 c5 card-container5 mx-auto  me-lg-3 mb-3"
            style={{ width: "60vh" }}
          >
            <div class="card-body">
              <img
                src={digital}
                alt="Card image cap"
                className="h-100 w-100"
              />
              <p className="h-100">
                <span>
                  {" "}
                  <span className="fs-2">Digital Clock</span>
                  <ul className="nav  flex-column mt-3">
                    <li className="nav-item">HTML</li>
                    <li className="nav-item">CSS</li>

                    <li className="nav-item">Javascript</li>
                  </ul>{" "}
                </span>
              </p>
            </div>

            <div className="card-footer bg-black">
              <div>
                <ul className="nav  ul">
                  <li className="nav-item">
                    {" "}
                    <a href="#">
                      <PlayCircleOutlineIcon
                        fontSize="large"
                        className="circle1"
                      />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#">
                      <CodeOffIcon fontSize="large" className="service" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            class="card  card6 c6 card-container6 mx-auto mb-3"
            style={{ width: "60vh" }}
          >
            <div class="card-body">
              <img
                src={todo}
                alt="Card image cap"
                className="h-100 w-100"
              />
              <p className="h-100">
                <span>
                  {" "}
                  <span className="fs-2">TodoList </span>
                  <ul className="nav  flex-column mt-3">
                    <li className="nav-item">HTML</li>
                    <li className="nav-item">CSS</li>

                    <li className="nav-item">Javascript</li>
                  </ul>{" "}
                </span>
              </p>
            </div>

            <div className="card-footer bg-black">
              <div>
                <ul className="nav  ul">
                  <li className="nav-item">
                    {" "}
                    <a href="#">
                      <PlayCircleOutlineIcon
                        fontSize="large"
                        className="circle1"
                      />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#">
                      <CodeOffIcon fontSize="large" className="service" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
      </div>
      </div>
    </>
  );
}

export default Projects;
