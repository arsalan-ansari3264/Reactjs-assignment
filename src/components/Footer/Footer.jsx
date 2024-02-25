import "./Footer.scss";
import { IoChevronDownOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer>
      <div className="content">

        <p className="categories">
          <div className="cat">Categories</div>
          <p>Web Builder</p>
          <p>Hosting</p>
          <p>Data Center</p>
          <p>Robotic-Automation</p>
        </p>

        <div className="contact">
          <p className="cat">contact</p>
          <p>Contact</p>
          <p>Privacy Policy</p>
          <p>Terms Of Service</p>
          <p>Categories</p>
          <p>About</p>
        </div>

        <div className="state">
          <p>United State</p>
          <span>
            <IoChevronDownOutline size="1.3rem" />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
