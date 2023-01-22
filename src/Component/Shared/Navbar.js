import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../Images/ukhe.png'
import "./Navbar.css"
import { ImFacebook2 } from 'react-icons/im';

import { FaWhatsappSquare } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div class="navbar mrg  bg-white  px-12 nav  sticky top-0">
      <div class="navbar-start ">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-50 rounded-box w-52 navText font-bold"
          >
            <li>
              <Link className="texthover" to="/">HOME</Link>
            </li>
            <li>
              <Link className="texthover" to="aboutus">ABOUT US </Link>
            </li>
            <li>
              <Link className="texthover" to="partners-institutes">PARTNERS INSTITUTES</Link>
            </li>
          </ul>
        </div>

        <Link to="/" class="btn btn-ghost normal-case text-xl text-white font-bold ">
          {/* ===========menu logo ======= */}
          <img className="logo" src={Logo} alt="" srcset="" />
        </Link>

      </div>


      {/* For large  screen  */}
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0 navText font-bold">
          <li>
            <Link className="texthover" to="/">HOME</Link>
          </li>
          <li>
            <Link className="texthover" to="aboutus">ABOUT US</Link>
          </li>

          <li>
            <Link className="texthover" to="partners-institutes">PARTNERS INSTITUTES</Link>
          </li>

        </ul>

      </div>


      {/* =========add social media ===== */}

      <div>
        <a href="https://www.facebook.com/ukhighereducation.probono" target="_blank" rel="noopener noreferrer" className="text-3xl mx-2"> <ImFacebook2></ImFacebook2></a>

        <a href="http://wa.me/+447375500046" target="_blank" rel="noopener noreferrer" className="text-4xl m-0"><FaWhatsappSquare /></a>
      </div>


    </div>
  );
};

export default Navbar;
