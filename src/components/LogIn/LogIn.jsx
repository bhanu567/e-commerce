import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LogIn.css";
export const myKey = "";

const LogInPage = () => {
  const [token, setToken] = useState(null);
  const navigate = useNavigate();
  const eMailRef = useRef();
  const passwordRef = useRef();
  async function submitHandler(e) {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" +
          myKey,
        {
          method: "POST",
          body: JSON.stringify({
            email: eMailRef.current.value,
            password: passwordRef.current.value,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const responseData = await response.json();
      console.log(responseData);
      if (responseData.error) throw responseData.error;
      localStorage.setItem("token", responseData.idToken);
      setToken(responseData.idToken);
      alert(
        "You have Logged In Successfully with Email Id : " + responseData.email
      );
      navigate("/", { replace: true });
    } catch (error) {
      alert(error.message);
    }
  }
  return (
    <form
      onSubmit={submitHandler}
      style={{
        width: "25%",
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        marginTop: "5rem",
      }}
    >
      <label htmlFor="email">Email : </label>
      <input type="email" id="email" ref={eMailRef} />
      <label htmlFor="password">Password : </label>
      <input type="password" id="password" ref={passwordRef} />
      <button
        style={{
          padding: "0.5rem 2rem",
          cursor: "pointer",
          width: "10rem",
          margin: "1rem auto",
          marginBottom: "10rem",
        }}
      >
        LogIn
      </button>
    </form>
  );
};

export default LogInPage;
