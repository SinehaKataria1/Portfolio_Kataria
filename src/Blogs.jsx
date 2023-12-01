import React from "react";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import "./Blogs.css";
import MouseOutlinedIcon from "@mui/icons-material/MouseOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import HdrStrongOutlinedIcon from "@mui/icons-material/HdrStrongOutlined";
function Blogs() {
  return (
    <>
      <div className="containar-fluid blog">
        <div className=" d-flex justify-content-center">
          <div className="flex-column nav">
            <MouseOutlinedIcon sx={{ color: "#7000ff", fontSize: "40px" }} />
            <MoreVertOutlinedIcon sx={{ fontSize: "40px" }} />
            <HdrStrongOutlinedIcon
              sx={{ transform: "rotate(90deg)", fontSize: "40px" }}
            />
          </div>
        </div>
        <h2
          className="text-center  mt-4"
          style={{
            background: "linear-gradient(90deg,#9f55ff,#7000ff)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Our Blog
        </h2>
        <div class="line-with-circles">
          <div class="circle"></div>
          <div class="line"></div>
          <div class="circle"></div>
        </div>
        <h1 className="text-center ">News And Updates</h1>

        <div className="container mt-5">
          <div className="row  ">
            <div className="col-lg-6 col-sm-12 col-md-12 ">
              <div className="card-containermern mx-auto ">
                <div className="card-1">
                  <div className="quote-marks">
                    <span className="top">“</span>
                    <span className="bottom">”</span>
                  </div>
                </div>
                <div className="card-2">
                  <h1>ANOTHER QUOTE</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <button class="btn ">
                    <a
                      href="https://dev.to/sinehakataria/become-a-mern-stack-developer-5gem"
                      class="text-decoration-none 
                                d-flex justify-content-center align-items-stretch
                                font-weight-bold text-white"
                      target="_blank"
                    >
                      Read more{" "}
                      <ArrowCircleRightIcon sx={{ marginLeft: "20px" }} />
                    </a>
                  </button>
                  <div className="quote-marks">
                    <span className="top">“</span>
                    <span className="bottom">”</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12 ">
              <div className="card-containerdev mx-auto">
                <div className="card-3">
                  <div className="quote-marks">
                    <span className="top">“</span>
                    <span className="bottom">”</span>
                  </div>
                </div>
                <div className="card-4">
                  <h5>
                    The DevOps Evolution: Transforming Culture and Technology
                  </h5>
                  <p>
                    In the fast-paced landscape of software development, the
                    evolution of DevOps has emerged as a pivotal force,
                    reshaping both organizational culture and technological
                    practices.
                  </p>
                  <button class="btn">
                    <a
                      href="https://dev.to/sinehakataria/become-a-mern-stack-developer-5gem"
                      class="text-decoration-none 
                                d-flex justify-content-center align-items-stretch
                                font-weight-bold text-black"
                      target="_blank"
                    >
                      Read more{" "}
                      <ArrowCircleRightIcon sx={{ marginLeft: "20px" }} />
                    </a>
                  </button>
                  <div className="quote-marks">
                    <span className="top text-secondary">“</span>
                    <span className="bottom text-secondary">”</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blogs;
