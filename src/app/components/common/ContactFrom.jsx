"use client";
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import img2 from "../../assets/images/contactus.jpg";
import Image from "next/image";
import GradientButton from "./GradientButton";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    if (e.target.id === "email") setEmailError("");
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    if (!captchaToken) {
      alert("Please check the reCAPTCHA box.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact-submission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, token: captchaToken }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Submission failed");
      }

      setSubmitted(true);
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
      setCaptchaToken(null);
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(error.message || "An error occurred while submitting the form");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative">
      {submitted && (
        <div className="absolute top-72 left-1/2 -translate-x-1/2 z-50 bg-gray-200 px-6 py-3 rounded shadow-lg transition-opacity duration-500">
          Thanks for getting in touch! One of our team members will reach out to you shortly to assist with your inquiry.
        </div>
      )}

      <div className="flex md:flex-row flex-col pt-3 bg-gray-50">
        <div className="md:w-1/2 md:p-16 p-5 flex flex-col pt-5">
          <div className="space-y-6">
            <div className="flex md:flex-col flex-col-reverse gap-8">
              <div className="bg-black flex md:justify-start justify-center mx-auto md:mx-0 text-white px-4 py-2 rounded-full text-xl self-start">
                Let's talk!
              </div>
              <h2 className="md:text-3xl flex mx-auto md:mx-0 text-2xl text-gray-800">
                Contact us to unlock your business full potential with our
                cutting-edge tech solutions.
              </h2>
            </div>
            <div className="relative w-44 h-44 md:top-28 flex mx-auto md:mx-0">
              <div className="absolute -bottom-4 -right-4 w-44 h-44 bg-[#CEA645] rounded-full"></div>
              <div className="absolute top-0 left-0 w-44 h-44 bg-gray-200 rounded-full overflow-hidden">
                <Image
                  src={img2}
                  alt="Contact"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 md:p-16 p-5 flex items-center">
          <form onSubmit={handleSubmit} className="w-full space-y-6">
            <div className="flex gap-5">
              <div className="w-1/2">
                <label
                  htmlFor="firstName"
                  className="block text-gray-500 font-medium mb-1"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-[10px] bg-gray-100 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#CEA645]"
                  required
                />
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="lastName"
                  className="block text-gray-500 font-medium mb-1"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-[10px] bg-gray-100 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#CEA645]"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-500 font-medium mb-1"
              >
                Company Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Company email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-[10px] bg-gray-100 rounded-md border ${
                  emailError ? "border-red-500" : "border-gray-200"
                } focus:outline-none focus:ring-2 focus:ring-[#CEA645]`}
                required
              />
              {emailError && (
                <p className="text-red-500 text-sm mt-1">{emailError}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-gray-500 font-medium mb-1"
              >
                How can we help?
              </label>
              <textarea
                id="message"
                placeholder="Message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-[10px] bg-gray-100 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#CEA645]"
                required
              />
            </div>

            <div className="text-xs text-gray-500">
              By submitting this form, you consent to the processing of your
              data based on our legitimate interest in addressing your
              inquiries. You have the right to object, access, rectify, erase,
              or restrict data processing as outlined in our website.
            </div>

            <div className="flex flex-col md:flex-row md:justify-end justify-center items-center gap-4 mt-6">
              {/* reCAPTCHA v2 Checkbox */}
              <div>
                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                  onChange={(t) => setCaptchaToken(t)}
                  onExpired={() => setCaptchaToken(null)}
                  onError={() => setCaptchaToken(null)}
                  theme="light"
                />
              </div>

              {/* Show button only when captcha is solved */}
              {captchaToken ? (
                <button type="submit">
                  <GradientButton
                    text={isSubmitting ? "SENDING..." : "SEND"}
                    bgColor="#CEA645"
                    textColor="#171717"
                    fontSize="18px"
                    fontWeight="600"
                    padding="12px 22px"
                    disabled={isSubmitting}
                  />
                </button>
              ) : (
                <div className="h-[50px] flex items-center px-6 rounded-md bg-gray-200 text-gray-500 text-sm select-none">
                  Complete reCAPTCHA to continue
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
