import "./App.css";

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Login from "./components/login";
import Signup from "./components/signup";
import Alert from "./components/Alert";
import LoadingBar from "react-top-loading-bar";
import UserLogo from './components/UserLogo';

// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [alert, setalert] = useState(null);
  const [userEmail, setUserEmail] = useState('');
  let pageSize = 15;
  let apikey = "0185e363bd704d06b4808fbf31d3b6b6";
  const [loggedIn, setLoggedIn] = useState(false);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
    
  };
  const [progress, setProgress] = useState(0);
  // Function to clear the alert
  const clearAlert = () => {
    setalert(null);
  };
 
  useEffect(() => {
    let alertInterval;

    if (!loggedIn) {
      alertInterval = setInterval(() => {
        showAlert("Please login to continue", "info");
      }, 4000);
    }

    return () => clearInterval(alertInterval);
  }, [loggedIn]); 
  const handleLogin = (email) => {
    setUserEmail(email);
    setLoggedIn(true);
  };
  return (
    <>
      <Router>
      
        <Navbar showAlert={showAlert} setLoggedIn={setLoggedIn} />

        <LoadingBar color="#f11946" progress={progress} showAlert={showAlert} />
        <Alert alert={alert} clearAlert={clearAlert} />
       
        <Routes>
        <Route
              exact
              path="/"
              element={
                <News
                 
                  setProgress={setProgress}
                apikey={apikey}
                key="Entertainment"
                pageSize={pageSize}
                country="in"
                category="Entertainment"
                />
              }
            />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="Entertainment"
                pageSize={pageSize}
                country="in"
                category="Entertainment"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="Business"
                pageSize={pageSize}
                country="in"
                category="business"
              />
            }
          />

          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="Health"
                pageSize={pageSize}
                country="in"
                category="health"
              />
            }
          />

          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="Science"
                pageSize={pageSize}
                country="in"
                category="science"
              />
            }
          />

          <Route
            exact
            path="/Sports"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="Sports"
                pageSize={pageSize}
                country="in"
                category="sports"
              />
            }
          />

          <Route
            exact
            path="/Technology"
            element={
              <News
                setProgress={setProgress}
                apikey={apikey}
                key="Technology"
                pageSize={pageSize}
                country="in"
                category="technology"
              />
            }
          />
          <Route
            exact
            path="/login"
            element={<Login showAlert={showAlert} onLogin={handleLogin} setLoggedIn={setLoggedIn} />}
          />
          <Route
            exact
            path="/signup"
            element={<Signup showAlert={showAlert} setLoggedIn={setLoggedIn}/>}
          />
          
        </Routes>
        {loggedIn && <UserLogo email={userEmail} />}
      </Router>
    </>
  );
}

export default App;
