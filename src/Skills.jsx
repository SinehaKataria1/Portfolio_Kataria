import React ,{useState} from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import MouseOutlinedIcon from '@mui/icons-material/MouseOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import HdrStrongOutlinedIcon from '@mui/icons-material/HdrStrongOutlined';
import "./Skills.css"
function Skills() {
    const [isMarqueePaused, setIsMarqueePaused] = useState(false);

    const handleMarqueeHover = () => {
      setIsMarqueePaused(true);
    };
  
    const handleMarqueeLeave = () => {
      setIsMarqueePaused(false);
    };
  return (
    <>
    <div className="d-flex justify-content-center skills  ">
        <div className="text-center">
            <div className=" d-flex justify-content-center ">
              <div className="flex-column nav ">
                    <MouseOutlinedIcon className="mouse"  sx={{color:"#7000ff", fontSize:"40px"}}/>
                    <MoreVertOutlinedIcon sx={{fontSize:"40px" }}/>
                    <HdrStrongOutlinedIcon sx={{ transform: "rotate(90deg)",fontSize:"40px"}}/>
              </div>
             
            </div>
            <h1 style={{background: "linear-gradient(90deg,#9f55ff,#7000ff)",backgroundClip:"text",
            WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent"}}>MY Skills </h1>
            <div class="line-with-circles">
          <div class="circle"></div>
          <div class="line"></div>
          <div class="circle"></div>
        </div>
            <p>I like to take responsibility to craft aesthetic user experience using modern frontend architechure. </p>
        </div>
    </div>
      <div className="skillsContainer">
        <div className="skill--scroll"  onMouseEnter={handleMarqueeHover}
          onMouseLeave={handleMarqueeLeave}>
          <div
            className=" marquee-container" 
          
          >
            <div
              className={`marquee ${isMarqueePaused ? "paused" : ""}`}
              
            >
              <div
                className="skill--box"
                style={{backgroundColor: "rgb(33, 33, 33)", boxShadow: "rgba(255, 102, 0, 0.3) 0px 0px 30px"}}
              >
                <img src="https://dev-portfolio-template.netlify.app/static/media/html.6a342d61.svg" alt="HTML" />
                <h3 style={{color: "rgb(234, 234, 234)"}}>HTML</h3>
              </div>
          
              <div
                className="skill--box"
                style={{backgroundColor: "rgb(33, 33, 33)", boxShadow: "rgba(102, 0, 204, 0.12) 0px 0px 30px"}}
              >
                 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png" alt="Bootstrap" />
                <h3  style={{color: "rgb(234, 234, 234)"}}>Bootstrap</h3>
              </div>
              <div
                class="skill--box"
                style={{backgroundColor: "rgb(33, 33, 33)", boxShadow: "rgba(255, 69, 171, 0.12) 0px 0px 30px"}}
              >
                <img src="https://dev-portfolio-template.netlify.app/static/media/figma.1cd44608.svg" alt="Figma" />
                <h3  style={{color: "rgb(234, 234, 234)"}}>Figma</h3>
              </div>
              <div
                className="skill--box"
                style={{backgroundColor: "rgb(33, 33, 33)", boxShadow: "rgba(255, 255, 0, 0.12) 0px 0px 30px"}}
              >
                <img
                  src="https://dev-portfolio-template.netlify.app/static/media/javascript.e9360603.svg"
                  alt="Javascript"
                />
                <h3 style={{color: "rgb(234, 234, 234)"}}>Javascript</h3>
              </div>
              <div
                className="skill--box"
                style={{backgroundColor: "rgb(33, 33, 33)", boxShadow: "rgba(0, 0, 255, 0.3) 0px 0px 30px"}}
              >
                <img src="https://dev-portfolio-template.netlify.app/static/media/css.43b6f4bd.svg" alt="CSS" />
                <h3  style={{color: "rgb(234, 234, 234)"}}>CSS</h3>
              </div>
              <div
                className="skill--box"
                style={{backgroundColor: "rgb(33, 33, 33)", boxShadow: "rgba(51, 204, 255, 0.3) 0px 0px 30px"}}
              >
                <img src="https://dev-portfolio-template.netlify.app/static/media/react.2b6a0717.svg" alt="React" />
                <h3  style={{color: "rgb(234, 234, 234)"}}>React</h3>
              </div>
             
            </div>
            <div
              className={`marquee ${isMarqueePaused ? "paused" : ""}`}
              
            >
              <div
                className="skill--box"
                style={{backgroundColor: "rgb(33, 33, 33)", boxShadow: "rgba(255, 102, 0, 0.3) 0px 0px 30px"}}
              >
                <img src="https://dev-portfolio-template.netlify.app/static/media/html.6a342d61.svg" alt="HTML" />
                <h3  style={{color: "rgb(234, 234, 234)"}}>HTML</h3>
              </div>
             
            
              <div
                className="skill--box"
                style={{backgroundColor: "rgb(33, 33, 33)", boxShadow: "rgba(255, 69, 171, 0.3) 0px 0px 30px"}}
              >
                 <img src="https://dev-portfolio-template.netlify.app/static/media/figma.1cd44608.svg" alt="Figma" />
                <h3  style={{color: "rgb(234, 234, 234)"}}>Figma</h3>
              </div>
              <div
                className="skill--box"
                style={{backgroundColor: "rgb(33, 33, 33)", boxShadow: "rgba(102, 0, 204, 0.3) 0px 0px 30px"}}
              >
                 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png" alt="Bootstrap" />
                <h3  style={{color: "rgb(234, 234, 234)"}}>Bootstrap</h3>
              </div>
              <div
                className="skill--box"
                style={{backgroundColor: "rgb(33, 33, 33)", boxShadow: "rgba(255, 255, 0, 0.3) 0px 0px 30px"}}
              >
                <img
                  src="https://dev-portfolio-template.netlify.app/static/media/javascript.e9360603.svg"
                  alt="Javascript"
                />
                <h3  style={{color: "rgb(234, 234, 234)"}}>Javascript</h3>
              </div>
              <div
                className="skill--box"
                style={{backgroundColor: "rgb(33, 33, 33)", boxShadow: "rgba(0, 0, 255, 0.3) 0px 0px 30px"}}
              >
                <img src="https://dev-portfolio-template.netlify.app/static/media/css.43b6f4bd.svg" alt="CSS" />
                <h3  style={{color: "rgb(234, 234, 234)"}}>CSS</h3>
              </div>
              <div
                className="skill--box"
                style={{backgroundColor: "rgb(33, 33, 33)", boxShadow: "rgba(51, 204, 255, 0.3) 0px 0px 30px"}}
              >
                <img src="https://dev-portfolio-template.netlify.app/static/media/react.2b6a0717.svg" alt="React" />
                <h3  style={{color: "rgb(234, 234, 234)"}}>React</h3>
              </div>
           
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
