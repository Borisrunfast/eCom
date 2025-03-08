import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../styles/contact.css";

function Contact() {
  const [successMessage, setSuccessMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // On valid submission
  const onSubmit = (data) => {
    console.log("Contact Form Data:", data);
    reset();
    setSuccessMessage("Message sent successfully!");
  };

  return (
    <div className="contact-page">
      <h2>Contact Us</h2>

      {/* Success message (render only if not empty) */}
      {successMessage && <p className="success-message">{successMessage}</p>}

      <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
        
        <div className="form-group">
          <label htmlFor="fullName">Full Name *</label>
          <input
            id="fullName"
            type="text"
            {...register("fullName", {
              required: "Full name is required",
              minLength: {
                value: 3,
                message: "Full name must be at least 3 characters",
              },
            })}
            className={errors.fullName ? "input-error" : ""}
          />
          {errors.fullName && (
            <p className="error-message">{errors.fullName.message}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject *</label>
          <input
            id="subject"
            type="text"
            {...register("subject", {
              required: "Subject is required",
              minLength: {
                value: 3,
                message: "Subject must be at least 3 characters",
              },
            })}
            className={errors.subject ? "input-error" : ""}
          />
          {errors.subject && (
            <p className="error-message">{errors.subject.message}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address",
              },
            })}
            className={errors.email ? "input-error" : ""}
          />
          {errors.email && (
            <p className="error-message">{errors.email.message}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="body">Body *</label>
          <textarea
            id="body"
            rows="4"
            {...register("body", {
              required: "Body is required",
              minLength: {
                value: 3,
                message: "Body must be at least 3 characters",
              },
            })}
            className={errors.body ? "input-error" : ""}
          />
          {errors.body && (
            <p className="error-message">{errors.body.message}</p>
          )}
        </div>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
