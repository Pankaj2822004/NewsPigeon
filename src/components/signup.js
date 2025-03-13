import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Signup = (props) => {
  const [credentials, setcredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password , cpassword } = credentials;
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, password , cpassword }),
    });
    const json = await response.json();
   

    if(json.success){
      localStorage.setItem('token' , json.authtoken) ;
      props.setLoggedIn(true);
    
      navigate("/")
      props.showAlert("Account created Successfully" , "success  ")
    }
    else {
      if (json.error === "Email already exists") {
        props.showAlert("Email already exists", "danger");
      } else if (json.error === "Passwords do not match") {
        props.showAlert("Passwords do not match", "danger");
      } else {
        props.showAlert("Invalid Credentials", "danger");
      }
    }
  };
  
  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: "111px 219px" }}>
      <h2 className="my-3 textAlign: center"> Signup Page</h2>
      <div className="mb-3">
        <label htmlFor="exampleInputName" className="form-label">
          Name
        </label>
        <input
          type="name"
          className="form-control"
          name="name"
          onChange={onChange}
          id="name"
          minLength={5}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email{" "}
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          onChange={onChange}
          aria-describedby="emailHelp"
          minLength={5}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          name="password"
          onChange={onChange}
          id="password"
          minLength={5}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputcPassword1" className="form-label">
          {" "}
          Confirm Password
        </label>
        <input
          type="password"
          className="form-control"
          name="cpassword"
          onChange={onChange}
          id="cpassword"
          minLength={5}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary" >
        Submit
      </button>
    </form>
  );
};

export default Signup;