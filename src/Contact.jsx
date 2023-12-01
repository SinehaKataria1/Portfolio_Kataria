import React from 'react'
import MouseOutlinedIcon from "@mui/icons-material/MouseOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import HdrStrongOutlinedIcon from "@mui/icons-material/HdrStrongOutlined";
// import { makeStyles } from '@material-ui/core/styles';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Box from '@mui/material/Box';
import "./Contact.css"
import TextField from '@mui/material/TextField';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
function Contact() {

  return (
   <>
     <div className="container-fluid contact">
     <div className=" d-flex justify-content-center">
          <div className="flex-column nav">
            <MouseOutlinedIcon  className ="top1"sx={{ color: "#7000ff", fontSize: "40px" }} />
            <MoreVertOutlinedIcon sx={{ fontSize: "40px" }} />
            <HdrStrongOutlinedIcon
              sx={{ transform: "rotate(90deg)", fontSize: "40px" }}
            />
          </div>
        </div>
        <h1 className='text-center' style={{background: "linear-gradient(90deg,#9f55ff,#7000ff)",backgroundClip:"text",
            WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent"}}>Contact</h1>
            <div class="line-with-circles">
              <div class="circle"></div>
              <div class="line"></div>
              <div class="circle"></div>
            </div>
            <p className='text-center'>I'm currently available for freelance work.</p>
            <div className='d-flex justify-content-center my-5'>
              <div className='message'>Send Me A Message</div>
            </div>
            <div className='row'>
        <div className='col-md-6 mx-auto'>
          <form action="" className=''>
            <TextField
              id="standard-basic"
              label="Name"
              variant="standard"
              className='mb-4 me-2 custom-input w-100'
              inputProps={{ style: { color: 'white' } }}
              InputLabelProps={{ style: { color: 'white' } }}
            />
            <br />
            <TextField
              id="standard-basic"
              label="Email"
              variant="standard"
              className='mb-4 me-2 custom-input w-100'
              inputProps={{ style: { color: 'white' } }}
              InputLabelProps={{ style: { color: 'white' } }}
            />
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { mb: 4, width: '100%',border:"1px solid #700fff" ,color:"white" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="filled-multiline-static"
                label="Message"
                multiline
                rows={4}
                defaultValue=""
                variant="filled"
                inputProps={{ style: { color: 'white' } }}
                InputLabelProps={{ style: { color: 'white' } }}
              />
            </Box>

            <div className='mb-3 d-flex justify-content-center'>
              <button className='btn submit'>Submit <ArrowCircleRightIcon/></button>
            </div>
          </form>
        </div>
      </div>
           
     </div>
     <div className="row m-0">
  <div className='col-sm-12 mx-sm-auto m-0 p-0' style={{backgroundColor:"#700fff"}}>
    <div className="FooterBg_top__2T9_L">
      <div className="FooterBg_background__3ENoK">
        <div className="FooterBg_background__one__2xvFH"></div>
        <div className="FooterBg_background__two__1aOsU"></div>
      </div>
    </div>
    <div className='mt-4'>
      <h2 className='text-center feel'>Feel Free to connect on social media</h2>
      <ul className='nav  footernav d-flex justify-content-center mt-5'>
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
      <div className='d-flex justify-content-center mt-5'>
        <a href="#contact" className="btn connect"> Let's Connect</a>
      </div>
      <p className=' text-dark text-center mt-5 love'>
        Made By ❤️ with Sineha Kataria
      </p>
    </div>
    <img src="https://www.shubhporwal.me/footer-curve.svg" alt="" loading="eager" height="180" className="img-fluid rotate-180"/>
  </div>
</div>
   </>
  )
}

export default Contact