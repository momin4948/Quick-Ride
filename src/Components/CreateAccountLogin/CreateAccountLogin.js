import React, { useState, useContext } from "react";
import { Form } from "react-bootstrap";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebaseConfig";
import { UserContext } from "../../App";
import { useHistory } from "react-router-dom";
import "./account.css";
import { BrowserRouter as Router, Switch, useLocation } from "react-router-dom";

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const CreateAccountLogin = () => {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/destination" } };

  var googleProvider = new firebase.auth.GoogleAuthProvider();
  var facebookProvider = new firebase.auth.FacebookAuthProvider();

  //handleSubmit
  const handleSubmit = (e) => {
    if (newUser && user.email && user.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newInfo = { ...user };
          newInfo.error = "";
          newInfo.success = true;
          setUser(newInfo);
          updateUserName(user.name);
          setLoggedInUser(newInfo);
          history.replace(from);
        })
        .catch((error) => {
          const newInfo = { ...user };
          newInfo.error = error.message;
          setUser(newInfo);
        });
    }
    if (!newUser && user.email && user.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newInfo = { ...user };
          newInfo.error = "";
          newInfo.success = true;
          setUser(newInfo);
          setLoggedInUser(newInfo);
          history.replace(from);
        })
        .catch((error) => {
          console.log(error.message);
          const newInfo = { ...user };
          newInfo.error = error.message;

          setUser(newInfo);
        });
    }
    e.preventDefault();
  };
  //handle Change
  const handleChange = (e) => {
    let isFormValid = true;
    if (e.target.name === "email") {
      isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === "password") {
      const isPasswordValid = e.target.value.length > 6;
      const passwordNumber = /\d{1}/.test(e.target.value);
      isFormValid = isPasswordValid && passwordNumber;
    }
    if (isFormValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  };
  //Google sign in method
  const handleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        const { displayName, email, password } = result.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
          password: password,
        };
        setUser(signedInUser);
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch((error) => {
        var errorMessage = error.message;
        var credential = error.credential;
      });
  };
  //facebook sign in method
  const handleFacebookSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(facebookProvider)
      .then((result) => {
        const { displayName, email, password } = result.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
          password: password,
        };
        setUser(signedInUser);
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch((error) => {
        var errorMessage = error.message;
      });
  };
  const updateUserName = (name) => {
    const user = firebase.auth().currentUser;
    user
      .updateProfile({
        displayName: name,
      })
      .then(function () {})
      .catch(function (error) {});
  };
  return (
    <div className="container">
      <div className="container d-flex justify-content-center mt-5">
        <div className="form-area">
          {newUser ? <h4>Create an account</h4> : <h4>Log in</h4>}
          <Form className="mt-4" onSubmit={handleSubmit}>
            {newUser && (
              <Form.Group controlId="formGroupName">
                <Form.Control
                  type="text"
                  placeholder="Name"
                  name="name"
                  onBlur={handleChange}
                  required
                />
              </Form.Group>
            )}
            <Form.Group controlId="formGroupEmail">
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                onBlur={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onBlur={handleChange}
                required
              />
            </Form.Group>
            {newUser && (
              <Form.Group controlId="formGroupPassword">
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  name="confirm-password"
                  onBlur={handleChange}
                  required
                />
              </Form.Group>
            )}
            <p style={{ color: "red" }}>{user.error}</p>

            <div className="d-flex justify-content-center">
              {newUser ? (
                <input
                  style={{ width: "300px", height: "auto" }}
                  className="btn btn-danger"
                  type="submit"
                  value="Create an account"
                />
              ) : (
                <input
                  style={{ width: "300px", height: "auto" }}
                  className="btn btn-danger"
                  type="submit"
                  value="Log in"
                />
              )}
            </div>
            {newUser ? (
              <p style={{ textAlign: "center", marginTop: "20px" }}>
                Already have an account ?
                <button
                  onClick={() => setNewUser(!newUser)}
                  style={{ border: "none", color: "Tomato" }}
                >
                  Log in
                </button>
              </p>
            ) : (
              <p style={{ textAlign: "center", marginTop: "20px" }}>
                Don't have an account ?
                <button
                  onClick={() => setNewUser(!newUser)}
                  style={{ border: "none", color: "tomato" }}
                >
                  Create account
                </button>
              </p>
            )}
          </Form>
        </div>
      </div>
      <h5 style={{ textAlign: "center", marginTop: "20px" }}>Or</h5>
      <div style={{ position: "relative" }}>
        <div
          className="mt-3"
          style={{
            position: "absolute",
            left: "50%",
            transform: "translate(-50%)",
          }}
        >
          <div className="d-flex social">
            <div style={{ color: "blue" }} onClick={handleFacebookSignIn}>
              {" "}
              <FaFacebook size={32} />
            </div>
            <h6 className="ml-4 mt-1">Continue with Facebook</h6>
          </div>
          <div className="d-flex social" onClick={handleGoogleSignIn}>
            <FaGoogle size={32} />
            <h6 className="ml-4 mt-1">Continue with Google</h6>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateAccountLogin;
