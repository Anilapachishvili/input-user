import React from "react";
import "./Inputs.css";
import { useState } from "react";

function Inputs() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSumbit = () => {
    if(email.trim().length === 0 || password.trim().length === 0)
    return alert('შეავსე ყველა ველი');
    if (email.length < 8 || password.length < 8) {
        return alert('მინიმუმ 8 სიმბოლო')
      }
    console.log({
        email,
        password
    })
  }
  return (
    <div className="items">
      <input
        className="first"
        type="email"
        name="Email Address"
        placeholder="Email Address"
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        className="second"
        type="password"
        name="password"
        placeholder="Password"
        onChange={(event) => setPassword(event.target.value)}
      />
      <div>
        <button onClick={handleSumbit}>Create Account</button>
      </div>
    </div>
  );
}

export default Inputs;
