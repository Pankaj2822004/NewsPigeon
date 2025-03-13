import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import kkl from "./pig.jpg";

import "./nav.css";
const Navbar = (props) => {
  const [activeLink, setActiveLink] = useState(null);
  // const [activelink2, setactivelink2] = useState(null);
  const [activeButton, setActiveButton] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  let navigate = useNavigate();
  const location = useLocation();
  const handleLogout = () => {
    localStorage.removeItem("token");

    navigate("/");
    props.showAlert("Logout Successfully", "success");
    props.setLoggedIn(false);
  };

  const handleCategorySelect = (e) => {
    const selectedValue = e.target.value;
    setSelectedCategory(selectedValue);

    navigate(`/${selectedValue}`);
  };
  useEffect(() => {
    // Update active link and button based on current location
    setActiveLink(location.pathname);
    if (location.pathname === "/login") {
      setActiveButton("login");
    } else if (location.pathname === "/signup") {
      setActiveButton("signup");
    } else {
      setActiveLink(null);
      setActiveButton(null);
    }
  }, [location]);

  return (
    <div>
      <nav
        className="navbar fixed-top navbar-expand-lg bg-body-tertiory"
        style={{
          backgroundColor: "grey",
          height: "55px",
        }}
      >
        {alert && (
          <div className={`alert alert-${alert.type}`} role="alert">
            {alert.msg}
          </div>
        )}
        <div className="container-fluid">
          <img
            className="mx-2 "
            style={{
              height: 40,
              width: 40,
              position: "absolute",
              top: "9px",
              left: 0,
              borderRadius: "15px",
              border: "2px solid black",
            }}
            src={kkl}
            alt=""
          />

          <a
            className="navbar-brand"
            href="/"
            style={{
              color: "#fbff0a",
              fontSize: "1.9rem",
              margin: "-2px 23px  1px",
            }}
          >
            News<span style={{backgroundColor: "#8d2929"}}></span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul>
              <li className="nav-item">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={handleCategorySelect} // Ensure onChange is bound correctly
                  value={selectedCategory}
                  style={{
                    margin: "32px 2px 16px",
                    backgroundColor: "greenyellow",
                    borderRadius: "10px",
                  }}
                >
                  {/* <option selected>Select Category</option> */}
                  <option value="">General</option>

                  <option value="business">Business</option>
                  <option value="entertainment">Entertainment</option>

                  <option value="Health">Health</option>
                  <option value="science">science</option>
                  <option value="sports">sports</option>
                  <option value="Technology">Technology</option>
                </select>
              </li>
            </ul>
          </div>
        </div>

        {!localStorage.getItem("token") ? (
           <form className="d-flex">
           <Link
            className={`btn btn-outline-success mx-1 ${
              activeButton === "login" ? "active" : ""
            }`}
            style={{
              backgroundColor: activeButton === "login" ? "rgb(121, 224, 156)" : "rgb(204, 150, 183)",
              border: `2px solid ${activeButton === "login" ? "blue" : "white"}` ,
              width: "82px",
              height: "39px" ,
              color: "black"
            }}
            to="/login"
            role="button"
           
          >
            Login
            </Link>
            <Link
            className={`btn btn-outline-success ${
              activeButton === "signup" ? "active" : ""
            }`}
            style={{
              backgroundColor: activeButton === "signup" ? "rgb(121, 224, 156)" : "rgb(204, 150, 183)",
              width: "81px",
              height: "38px",
              border: `2px solid ${activeButton === "signup" ? "blue" : "white"}` 
              ,  fontSize: "17px",
              color: "black" ,
              margin: "1px 6px",
              padding: "3px 3px"
            }}
            to="/signup"
            role="button"
        
          >
              signup
            </Link> 
         </form>
      
        ) : (
          <button
            onClick={handleLogout}
            className="btn btn-outline-success"
            style={{
              backgroundColor: "rgb(204, 150, 183)",
              width: "85px",
              height: "42px",
              border: "3px solid black",
              fontSize: "17px",
              color: "black",
              margin: "1px 6px",
              borderRadius: "10px",
            }}
          >
            Logout{" "}
          </button>
        )}
      </nav>
    </div>
  );
};

export default Navbar;