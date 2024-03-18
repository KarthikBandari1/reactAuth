import "./App.css";
import SignIn from "./components/SignIn";
import Dashboard from "./components/Dashboard";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";

function App() {
  const [value, setValue] = useState("");
  const userLogged = (email) => {
    setValue(email);
    localStorage.setItem("email", email);
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  }, []);

  const logOut = () => {
    localStorage.removeItem("email");
    setValue("");
  };

  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          { headers: { Authorization: `Bearer ${response.access_token}` } }
        );
        userLogged(res.data.email);
      } catch (err) {
        console.log(err);
      }
    },
  });
  return (
    <>{value ? <Dashboard logOut={logOut} /> : <SignIn login={login} />}</>
  );
}

export default App;
