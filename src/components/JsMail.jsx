import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const JsMail = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_a51atbf", "template_9e35k24", form.current, {
        publicKey: "MiSFlftZGUDkStVZM",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="my-5 py-5">
      <h1>Email-js</h1>
      <div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="d-flex align-items-center justify-content-center gap-3 mb-2">
            <label>Name :</label>
            <input type="text" name="to_name" />
          </div>
          <div className="d-flex align-items-center justify-content-center gap-3 mb-2">
            <label>Email :</label>
            <input type="email" name="from_name" />
          </div>
          <div className="d-flex align-items-center justify-content-center gap-3 mb-3">
            <label>Message :</label>
            <textarea name="message"className="resizer_none" />
          </div>
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};
export default JsMail;
