import React, { useState } from "react";

function Validation() {
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [mail, setmail] = useState("");
  const [userError, setUerError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [mailError, setMailError] = useState("");

  const Formsubmit = (e) => {
    e.preventDefault();
    console.log(name, mail, password);
    setname("");
    setpassword("");
    setmail("");
    validatePassword();
    validateEmail();
    vaildUsername();
  };

  const validatePassword = () => {
    const passwordregex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordregex.test(password)) {
      setPasswordError(
        " Minimum eight characters, at least one letter and one number:"
      );
    } else {
      setPasswordError("okay");
    }
  };
  const validateEmail = () => {
    const Mailregx = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
    if (!Mailregx.test(mail)) {
      setMailError("put valid mail address");
    } else {
      setMailError("okay");
    }
  };
  const vaildUsername = () => {
    const UserNameRegex = /^[0-9A-Za-z]{6,16}$/;
    if (!UserNameRegex.test(name)) {
      setUerError("min-6 and max16 letters");
    } else {
      setUerError("okay");
    }
  };
  return (
    <div>
      <h1>form-validation</h1>
      <form onSubmit={Formsubmit}>
        <label htmlFor="name">userName: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        {userError && <span>{userError}</span>}
        <br />
        <label htmlFor="Email">E-mail</label>
        <input
          type="mail"
          value={mail}
          onChange={(e) => setmail(e.target.value)}
          onBlur={validateEmail}
        />
        {mailError && <span>{mailError}</span>}
        <br />
        <label htmlFor="password">password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          onBlur={validatePassword}
        />
        {passwordError && <span>{passwordError}</span>}
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Validation;

// //value= input field always displays the current value of the name state.
// // onChange = is an event handler that triggers whenever the input value changes.In this case, it triggers whenever the user types something in the input field.
// // (e) => setName(e.target.value): This arrow function receives the event object(e) as an argument.Inside the function:
// // setname= This function updates the name state with the new value entered by the user.
// // e.target.value= retrieves the current value of the input field at the time the event is triggered.
// passwordError is not an empty string (""). If it's not empty, it renders a <span> displaying the error message. If passwordError is empty (""), nothing is rendered.
