"use client";
import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  
  useEffect(() => {
    emailjs.init("suLlcTtbiy6XbKwz7"); 
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    
    emailjs
      .send(
        "service_v4nzgms", 
        "template_tsktoz6", 
        form
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setForm({ name: "", email: "", message: "" });
          setLoading(false);
          toast.success("Message sent successfully!");
        },
        (error) => {
          console.error("FAILED...", error);
          setLoading(false);
          toast.error("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <React.Fragment>
      <Toaster />
      <form onSubmit={handleSubmit}>
        <div className="mx-10 md:mx-20">
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white mb-5">
            Send Me A Note
          </h1>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                className="p-3 border-2 border-slate-300 dark:bg-slate-700 dark:border-slate-600 dark:shadow-slate-500 rounded-md w-full focus:border-violet-700 text-slate-700 placeholder:text-red-400"
                required
                onChange={handleChange}
              />
            </div>
            <div className="w-full md:w-1/2 mt-5 md:mt-0">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                className="p-3 border-2 border-slate-300 dark:bg-slate-700 dark:border-slate-600 dark:shadow-slate-500 rounded-md w-full text-slate-700 placeholder:text-red-400"
                required
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <textarea
              name="message"
              rows="5"
              placeholder="Tell me more about your needs..."
              value={form.message}
              className="w-full mt-5 rounded-md border-2 border-slate-300 dark:bg-slate-700 dark:border-slate-600 dark:shadow-slate-500 placeholder:text-red-400 text-slate-700"
              required
              onChange={handleChange}
            />
          </div>
          <div className="text-center mt-3">
            <button
              type="submit"
              className={`rounded-3xl transition-all ease-out delay-100 ${
                loading ? "bg-violet-400" : "bg-red-400"
              } text-white px-4 py-3 shadow-md hover:bg-red-500`}
              disabled={loading}
            >
              {!loading ? "Message Me" : "Messaging..."}
            </button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default ContactForm;
