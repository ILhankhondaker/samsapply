import React from "react";
import { Link } from "react-router-dom";
import './Footer.css'
import Logo from '../../Images/ukhe.png'


import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
  return (
    <div className="bg ">


      {/* top scrolling button  */}
      <ScrollToTop smooth top="20" color="white"
        style={{
          padding: '5px',
          backgroundColor: "#000000"
          // backgroundColor: "#262261"
        }} />


      <footer class="footer px-12 bg-base-200 text-base-content bg  py-5">
        <div className="fs-6">
          <img className="logo" src={Logo} alt="" srcset="" />
          <p>SAMS Apply is the trading name of SAMS Global Application</p>
          <p>Service. Affiliation with SAMS Apply will broaden the window</p>
          <p>of opportunity for small and medium agencies.</p>


        </div>
        <div className="fs-6">
          <span class="font-bold text-2xl tito">Company</span>
          <Link to="" class="link link-hover">
            About us
          </Link>
          <Link to="" class="link link-hover">
            Login
          </Link>
          <Link to="" class="link link-hover">
            Career
          </Link>
          <Link to="" class="link link-hover">
            Contact Us
          </Link>
        </div>
        <div>
          <span class="font-bold text-2xl tito ">SAMS Apply</span>

          <h1 className="fs-6">SAMS Global Solutions Ltd.</h1>
          <h1 className="fs-6">269, Glossop Road, Sheffield</h1>
          <h1 className="fs-6">S10 2HB</h1>
          <h1 className="fs-6">United Kingdom</h1>


        </div>
      </footer>

      <footer class="footer px-10 py-4  bg-base-200 text-base-content border-base-300 bg">
        <div class="items-center grid-flow-col">

          <p>© 2022 SAMS Apply develope by  <a className="font-bold" href="https://ilhan-khondaker.netlify.app/" target="_blank" rel="noopener noreferrer">Ilhan Khondaker</a> <br />
          </p>
        </div>


      </footer>

    </div>
  );
};

export default Footer;
