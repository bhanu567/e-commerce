import React, { useRef } from "react";
import "./ContactPage.css";

const ContactPage = () => {
  const nameRef = useRef();
  const eMailRef = useRef();
  const phoneRef = useRef();
  async function submitHandler(e) {
    e.preventDefault();
    const newUser = {
      name: nameRef.current.value,
      eMail: eMailRef.current.value,
      phone: phoneRef.current.value,
    };
    const response = await fetch(
      "https://react-http-8fc7a-default-rtdb.firebaseio.com/ecommerceUserData.json",
      {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if(response.ok)prompt('Data Added Successfully');
    nameRef.current.value = "";
    eMailRef.current.value = "";
    phoneRef.current.value = "";
  }
  return (
    <form
      onSubmit={submitHandler}
      style={{
        width: "40%",
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        marginTop: "5rem",
      }}
    >
      <label htmlFor="name">Enter Your Name : </label>
      <input type="text" id="name" ref={nameRef}></input>
      <label htmlFor="email">Enter Your Email : </label>
      <input type="email" id="email" ref={eMailRef} />
      <label htmlFor="phone">Enter Your Phone Number : </label>
      <input
        type="tel"
        id="phone"
        pattern="[0-9]{5}-[0-9]{5}"
        ref={phoneRef}
      ></input>
      <button
        style={{
          padding: "0.5rem 2rem",
          cursor: "pointer",
          width: "10rem",
          margin: "1rem auto",
          marginBottom: "5rem",
        }}
      >
        Contact Us
      </button>
    </form>
  );
};

export default ContactPage;
