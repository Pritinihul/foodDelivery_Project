import React from 'react';
import { Link } from 'react-router-dom';




const Navbar = ({ totalItems }) => {
  

 {
  return (
    <section className="topBarSection">
      <div className="companyTitle">
        <Link to="/" className="link">
          <h2>QUICK</h2>
        </Link>
      </div>
      <div className="searchBar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="userAuth">
        <Link to="/login" className="link">Login / SignUp</Link>
        <Link to="/cart" className="link cartLink" style={{ marginLeft: "20px", position: "relative" }}>
  🛒
  <span style={{
    position: "absolute",
    top: "-8px",
    right: "-8px",
    background: "red",
    color: "white",
    borderRadius: "50%",
    padding: "2px 6px",
    fontSize: "12px"
  }}>
    {totalItems}
  </span>
</Link>


      </div>
    </section>
  );
};
}

export default Navbar;