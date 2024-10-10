"use client";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    return (
      <div className="relative">
        <Navbar />

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/background.jpg')" }}
        ></div>

        <main className="relative p-4 sm:p-8 min-h-screen flex items-center justify-center bg-opacity-60 bg-white">
          <div className="bg-white bg-opacity-90 p-6 sm:p-8 shadow-lg rounded-lg w-full max-w-md">
            <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-green-800">
              Contact Us
            </h1>

            {isSubmitted && (
              <div className="mb-4 p-4 bg-green-100 text-green-800 rounded-md">
                Your message has been successfully sent. Please wait for our
                response.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  rows="4"
                  placeholder="Write your message"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 px-4 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </main>
        <Footer />
      </div>
    );
  };
}
