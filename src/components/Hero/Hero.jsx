import { BiCheckCircle } from "react-icons/bi";
import {
  HiOutlineInformationCircle,
  HiOutlineChevronRight,
} from "react-icons/hi2";
import { IoChevronDownOutline } from "react-icons/io5";

import "./Hero.scss";

const Hero = () => {
  return (
    <div className="hero-section">
      <h1>Best Website builders in the US</h1>

      <div className="line"></div>

      <div className="dets">
        <div className="left">
          <div className="last-update">
            <div className="icon">
              <BiCheckCircle />
            </div>
            <span>Last Updated - February 22, 2020</span>
          </div>

          <div className="advertise">
            <div className="icon">
              <HiOutlineInformationCircle />
            </div>
            <span>Advertising Disclosure</span>
          </div>
        </div>

        <div className="right">
          <div className="relevant">
            <span>Top Relevant</span>
            <div className="icon">
              <IoChevronDownOutline />
            </div>
          </div>
        </div>
      </div>

      <div className="line"></div>

      <div className="details">
        <p>Tools</p>
        <p>AWS Builder</p>
        <p>Start Build</p>
        <p>Build Supplies</p>
        <p>Tooling</p>
        <p>BlueHosting</p>
      </div>

      <div className="navigation">
        <p>Home</p>
        <p>
          <HiOutlineChevronRight />
        </p>
        <p>Hosting for all</p>
        <p>
          <HiOutlineChevronRight />
        </p>
        <p>Hosting</p>
        <p>
          <HiOutlineChevronRight />
        </p>
        <p>Hosting6</p>
        <p>
          <HiOutlineChevronRight />
        </p>
        <p>Hosting5</p>
      </div>
    </div>
  );
};

export default Hero;
