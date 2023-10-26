import emailjs from "@emailjs/browser";
import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";

export function Contact() {
  const [messageSent, setMessageSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    formState: { errors },
    clearErrors,
  } = useForm();

  const form = useRef();

  const handleSubmitChange = () => {
    sendEmail();
    if (sendEmail) {
      setMessageSent(true);
      setTimeout(() => setMessageSent(false), 3000);
    } else {
      setMessageSent(false);
    }
  };

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_67eqn8l",
        "template_3gr7qxc",
        form.current,
        "2NAEdoX30r9aJV9LE"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    reset();
  };

  useEffect(() => {
    clearErrors();
    setMessageSent(false);
  }, []);

  return (
    <div className="contact" id="contact">
      <div className="contact-top-wrapper">
        <h3 className="contact-title">Contact</h3>
        <p className="contact-descriptions">
          I would love to hear about your project and how I could help. Please
          fill in the form, and I’ll get back to you as soon as possible.
        </p>
      </div>
      <div className="contact-form-wrapper">
        <form
          ref={form}
          className="contact-form"
          onSubmit={handleSubmit(handleSubmitChange)}
        >
          <input
            type="text"
            name="user_name"
            id="name"
            placeholder="name"
            onChange={() => setValue("name")}
            {...register("name", {
              required: true,
            })}
            style={{
              borderBottom: errors?.name
                ? "1px solid #ff6f5b"
                : !errors?.name && getValues("name")
                ? "1px solid #4EE1A0"
                : "1px solid white",
            }}
          />

          {errors?.name && errors?.name.type === "required" && (
            <div className="error-message">Please fill out this field</div>
          )}
          <input
            type="email novalidate"
            name="user_email"
            id="email"
            placeholder="email"
            onChange={() => setValue("email")}
            {...register("email", {
              required: true,

              pattern:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
            style={{
              borderBottom: errors?.email
                ? "1px solid #ff6f5b"
                : !errors?.email && getValues("email")
                ? "1px solid #4EE1A0"
                : "1px solid white",
            }}
          />
          {errors?.email && errors?.email.type === "required" ? (
            <div className="error-message">Please fill out this field</div>
          ) : errors?.email && errors?.email.type === "pattern" ? (
            <div className="error-message">Sorry, invalid format here</div>
          ) : (
            ""
          )}
          <textarea
            name="message"
            id="message"
            cols="25"
            rows="4"
            onChange={() => setValue("message")}
            {...register("message", {
              required: true,
            })}
            placeholder="message"
            style={{
              borderBottom: errors?.message
                ? "1px solid #ff6f5b"
                : !errors.message && getValues("message")
                ? "1px solid #4EE1A0"
                : "1px solid white",
            }}
          ></textarea>
          {errors?.message && (
            <div className="error-message">Please fill out this field</div>
          )}
          <div className="submit-button-wrapper">
            <input
              className="submit-button"
              type="submit"
              value={messageSent ? "Message Sent!" : "send message"}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
