import { useState, useEffect } from "react";
import Notification from "../ui/notification";
import classes from "./contact-form.module.css";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [requestStatus, setRequestStatus] = useState();

  useEffect(() => {
    if (requestStatus === "error" || requestStatus === "success") {
      const interval = setTimeout(() => {
        setRequestStatus(null);
      }, 3000);

      return () => clearTimeout(interval);
    }
  }, [requestStatus]);

  function sendMessageHandler(event) {
    event.preventDefault();

    setRequestStatus("pending");

    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
      }),
    })
      .then(async (res) => {
        if (res.ok) {
          return res.json();
        }

        const err = await res.json().then((data) => data);

        throw new Error(err.error || "Something Happened");
      })
      .then((data) => {
        setName("");
        setEmail("");
        setMessage("");
        setRequestStatus("success");
      })
      .catch((err) => setRequestStatus("error"));
  }

  let notification;

  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending Message...",
      message: "Your message is on its way!",
    };
  }

  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Success!",
      message: "Message sent successfully!",
    };
  }

  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "Error!",
      message: "Failed to sent the message. Try agian later!",
    };
  }

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            rows={"5"}
            required
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {requestStatus && <Notification {...notification} />}
    </section>
  );
}

export default ContactForm;
