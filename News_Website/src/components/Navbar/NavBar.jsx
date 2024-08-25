import React from 'react'
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { LuBell } from "react-icons/lu";
import './NavBar.css'
import profile from "../../assets/image/moana.jpg";


const NavBar = () => {
  return (
    <>
      <div className="container">
        <h1 className="buletin">Buletin</h1>
        <h2 style={{ fontWeight: "500" }}>|</h2>
        <nav>
          <ul>
            <li>
              <a href="#">Stories</a>
            </li>
            <li>
              <a href="#">Creator</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
            <li>
              <a href="3">Subscribe</a>
            </li>
          </ul>
          <ul className="right-header">
            <li className="write">
              <HiOutlinePencilSquare style={{ fontSize: "20px" }} /> Write
            </li>
            <li style={{lineHeight:"8px"}}>
              <LuBell style={{ fontSize: "20px" }} />
            </li>
            <li>
              <img
                width={"40px"}
                height={"35px"}
                style={{ borderRadius: "50px" }}
                src={profile}
                alt=""
              />
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default NavBar