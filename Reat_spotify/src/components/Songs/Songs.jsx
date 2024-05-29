import React from 'react'
import './Songs.css'
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { GoBell } from "react-icons/go";
import img11 from '../../assets/images/ryan_gosling.jpeg'




const Songs = () => {
  return (
    <>
      <div className="container">
        <div className="upper2">
          <div className="header">
            <div className="arr">
              <FaChevronLeft className="left-right" />{" "}
              <FaChevronRight className="left-right" />
            </div>
            <div className="explore-content">
              <div className="explore">Explore Premium</div>
              <div className="install">Install App</div>
              <div className="bell">
                <GoBell />
              </div>
              <div className="profile">
                <img src={img11} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="lower2"></div>
      </div>
    </>
  );
}

export default Songs