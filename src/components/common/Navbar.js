// import React from "react";
// import "./Navbar.css";
// import logo from "../../assets/logo.jpg"; 
// import { Link } from "react-router-dom";

// <Route path="/" element={<Home />} />
// <Route path="/products" element={<ProductsPage />} />
// <Route path="/about" element={<AboutPage />} />
// <Route path="/news" element={<NewsPage />} />
// <Route path="/recipes" element={<Recipes />} />
// <Route path="/contact" element={<ContactPage />} />
// <Route path="/visit" element={<VisitPage />} />
// <Route path="/where" element={<WhereToBuy />} />

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <img src={logo} alt="Blue Bell Creameries" className="logo" />
//       <ul className="nav-links">
//           <li className="dropdown">
//             Products
//             <ul className="dropdown-menu">
//             <div className="dropdown-arrow"></div>
//               <li>Year Round</li>
//               <li>Rotational</li>
//               <li>No Sugar Added</li>
//               <li>Sherbet</li>
//               <li>Take Home Snacks</li>
//               <li>Single-Serve Snacks</li>
//             </ul>
//           </li>
//         <li>About Us</li>
//         <li>
//           Get The Scoop
//         <ul className="dropdown-menu">
//             <div className="dropdown-arrow"></div>
//               <li>News & Press Releases</li>
//               <li>Recipes</li>
//               <li>Contact Us</li>
//             </ul>
//         </li>
//         <li>Visit Blue Bell</li>
//         <li>Merch</li>
//         <li>Where to Buy</li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.jpg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Blue Bell Creameries" className="logo" />
      <ul className="nav-links">
        <li className="dropdown">
          Products
          <ul className="dropdown-menu">
            <div className="dropdown-arrow"></div>
            <li><Link to="/products#year-round">Year Round</Link></li>
            <li><Link to="/products#rotational">Rotational</Link></li>
            <li><Link to="/products#no-sugar-added">No Sugar Added</Link></li>
            <li><Link to="/products#sherbet">Sherbet</Link></li>
            <li><Link to="/products#take-home-snacks">Take Home Snacks</Link></li>
            <li><Link to="/products#single-serve-snacks">Single-Serve Snacks</Link></li>
          </ul>
        </li>
        <li><Link to="/about">About Us</Link></li>
        <li className="dropdown">
          Get The Scoop
          <ul className="dropdown-menu">
            <div className="dropdown-arrow"></div>
            <li><Link to="/news">News & Press Releases</Link></li>
            <li><Link to="/recipes">Recipes</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </li>
        <li><Link to="/visit">Visit Blue Bell</Link></li>
        <li><Link to="/merch">Merch</Link></li>
        <li><Link to="/where">Where to Buy</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
