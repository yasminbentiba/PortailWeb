import React from "react";
import emailjs from "emailjs-com";
import "./contact.scss";

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_qvqa5mf",
        e.target,
        "user_NRsHLaDm8N5r8me3cgb25"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div>
      <div className="drop">
        <div className="container" style={{display:'contents' }}>
          <h2 className="drop-title">
            <span> Contact </span>
          </h2>
          <form className="contactform" onSubmit={sendEmail}>
            <div className="form-input">
              <input id="name"type="text" placeholder="Écrire votre nom" name="name" required/>
              <input id="email"autoComplete="email" type="email" placeholder="Écrire votre email" name="email" required />
            </div>
            <input id="hidden" type="hidden" name="contact_number" />
            <input
            id="subject"
            autoComplete="Subject"
            className="sub"
              type="text"
              placeholder="Écrire votre sujet"
              name="subject"
              required
            />
            <textarea id="message" cols="30" rows="10" name="message" placeholder="Comment nous pouvons vous aider !" required/>
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>

    </div>
  );
}
