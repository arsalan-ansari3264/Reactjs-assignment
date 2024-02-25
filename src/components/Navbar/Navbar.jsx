import { CiSearch } from "react-icons/ci";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <section>
      <nav>
        <div className="search">
          <label htmlFor="search">
            <CiSearch />
          </label>
          <input type="text" name="search" />
        </div>

        <div className="navlinks">
          <p>Categories</p>
          <p>Website Builders</p>
          <p>Today's deals</p>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
