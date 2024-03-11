import React from "react";
import { useState } from "react";
const REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const REACT_APP_BACKEND_PORT = process.env.REACT_APP_BACKEND_PORT;

function RegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  // function to handle when a user submits the registration form
  // this function should send a POST request to the backend which should then in turn add the user to the DB
  const handleRegistration = async (e) => {
    e.preventDefault(); // prevents the page from reloading, which is the default behavior of submitting a form
    const userData = { name, email };

    // send POST request to backend with user data
    const response = await fetch(REACT_APP_BACKEND_URL + ":" + REACT_APP_BACKEND_PORT + "/register/", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
      mode: 'cors'
    });
    const responseJson = await response.json();

    if (!response.ok) {
      setError(responseJson.error); // make sure to add error property on responseJson
    }
    if (response.ok) {
      setError(null);
      console.log('user registered!', responseJson);
    }
  };

  return (
        <div className="RegistrationForm">
          <form className="register" onSubmit={handleRegistration}>
            <label>Name:</label>
            <br></br>
            <input
              type="text"
              placeholder="Bucky Badger"
              onChange={(e) => setName(e.target.value)}
              value={name}
            ></input>
            <br></br>

            <label>Wisc Email:</label>
            <br></br>
            <input
              type="text"
              placeholder="badger@wisc.edu"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            ></input>
            <br></br>
            <br></br>

            <button>Register</button>
          </form>
        </div>
  );
}

export default RegistrationForm;
