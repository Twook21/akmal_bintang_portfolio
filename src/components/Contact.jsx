import React, { useState, useRef } from "react";
import { FaInstagram, FaLinkedin, FaCheckCircle } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const ThankYouModal = ({ isOpen, onClose, darkMode }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      aria-modal="true"
      role="dialog"
      aria-labelledby="thank-you-title"
    >
      <div
        className={`max-w-md w-full p-8 rounded-lg shadow-xl ${
          darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
        }`}
      >
        <div className="flex flex-col items-center space-y-6">
          <FaCheckCircle
            className={`text-6xl ${
              darkMode ? "text-green-400" : "text-green-600"
            }`}
            aria-hidden="true"
          />
          <h2 id="thank-you-title" className="text-2xl font-bold text-center">
            Terima Kasih Telah Menghubungi
          </h2>
          <p
            className={`text-center ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Terima kasih sudah meluangkan waktu untuk menghubungi saya. Saya
            akan segera memeriksa pesan Anda dan memberikan balasan secepat
            mungkin.
          </p>
          <div className="flex items-center space-x-4">
            <p
              className={`font-semibold ${
                darkMode ? "text-yellow-400" : "text-primary"
              }`}
            >
              Salam hangat,
            </p>
            <span className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              Akmal Bintang
            </span>
          </div>
          <button
            onClick={onClose}
            className={`mt-4 px-6 py-2 rounded-md transition-colors ${
              darkMode
                ? "bg-yellow-500 hover:bg-yellow-600 text-gray-900"
                : "bg-primary hover:bg-blue-700 text-white"
            }`}
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};

const Contact = ({ darkMode = false }) => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({
    message: "",
    type: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isThankYouModalOpen, setIsThankYouModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ message: "", type: "" });

    try {
      // Gunakan variabel environment Vite dengan awalan VITE_
      const response = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // Reset form dan tampilkan modal terima kasih
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setIsThankYouModalOpen(true);
    } catch (error) {
      setStatus({
        message: "Gagal mengirim pesan. Silakan coba lagi.",
        type: "error",
      });
      console.error("Email send error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* ThankYou Modal */}
      <ThankYouModal
        isOpen={isThankYouModalOpen}
        onClose={() => setIsThankYouModalOpen(false)}
        darkMode={darkMode}
      />

      <section
        id="contact"
        aria-label="Contact Form"
        className={`py-16 md:py-24 ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}
      >
        <div className="container-custom">
          <div
            className={`${
              darkMode ? "bg-gray-900 shadow-dark" : "bg-white shadow-lg"
            } rounded-2xl overflow-hidden max-w-5xl mx-auto`}
          >
            <div className="flex flex-col md:flex-row">
              {/* Contact Form */}
              <div className="w-full md:w-1/2 p-6 md:p-8">
                <h2
                  className={`text-3xl font-bold mb-6 ${
                    darkMode ? "text-yellow-400" : "text-primary"
                  }`}
                >
                  Contact me
                </h2>

                {/* Status Message */}
                {status.message && (
                  <div
                    className={`mb-4 p-3 rounded ${
                      status.type === "error"
                        ? "bg-red-100 text-red-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                <form
                  ref={form}
                  onSubmit={handleSubmit}
                  aria-label="Contact Form"
                >
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className={`block font-medium mb-2 ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      placeholder="Enter your full name"
                      aria-required="true"
                      className={`w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 ${
                        darkMode
                          ? "bg-gray-800 border border-gray-700 text-white focus:ring-yellow-500 focus:border-transparent"
                          : "border border-gray-300 focus:ring-primary focus:border-transparent"
                      } ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className={`block font-medium mb-2 ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      placeholder="Enter your email address"
                      aria-required="true"
                      className={`w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 ${
                        darkMode
                          ? "bg-gray-800 border border-gray-700 text-white focus:ring-yellow-500 focus:border-transparent"
                          : "border border-gray-300 focus:ring-primary focus:border-transparent"
                      } ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className={`block font-medium mb-2 ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      disabled={isSubmitting}
                      placeholder="Write your message here"
                      aria-required="true"
                      className={`w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 resize-none ${
                        darkMode
                          ? "bg-gray-800 border border-gray-700 text-white focus:ring-yellow-500 focus:border-transparent"
                          : "border border-gray-300 focus:ring-primary focus:border-transparent"
                      } ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`primary-btn ${
                      darkMode ? "bg-yellow-500 hover:bg-yellow-400" : ""
                    } ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                  >
                    {isSubmitting ? "Sending..." : "Send message"}
                  </button>
                </form>

                {/* Contact Info */}
                <div className="mt-8 space-y-4">
                  <div>
                    <h4
                      className={`font-semibold ${
                        darkMode ? "text-gray-200" : "text-gray-800"
                      }`}
                    >
                      Email
                    </h4>
                    <a
                      href="mailto:akmalbintang33@gmail.com"
                      aria-label="Email Akmal Bintang"
                      className={`${
                        darkMode
                          ? "text-yellow-400 hover:text-yellow-300"
                          : "text-primary hover:underline"
                      }`}
                    >
                      akmalbintang33@gmail.com
                    </a>
                  </div>

                  <div>
                    <h4
                      className={`font-semibold ${
                        darkMode ? "text-gray-200" : "text-gray-800"
                      }`}
                    >
                      Based In
                    </h4>
                    <p
                      className={`${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Purwakarta, Jawa Barat
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <a
                      href="https://www.instagram.com/tw0ok_/"
                      aria-label="Instagram Akmal Bintang"
                      className={`text-xl transition-colors ${
                        darkMode
                          ? "text-gray-400 hover:text-yellow-400"
                          : "text-gray-600 hover:text-primary"
                      }`}
                    >
                      <FaInstagram />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/akmal-bintang-budiawan-910916280/"
                      aria-label="LinkedIn Akmal Bintang"
                      className={`text-xl transition-colors ${
                        darkMode
                          ? "text-gray-400 hover:text-yellow-400"
                          : "text-gray-600 hover:text-primary"
                      }`}
                    >
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Image */}
              <div
                className={`w-full md:w-1/2 ${
                  darkMode ? "bg-gray-700" : "bg-gray-100"
                }`}
              >
                <img
                  src="/img/letsconnect.png"
                  alt="Ilustrasi Kontak - Hubungi Akmal Bintang untuk Kerja Sama atau Pertanyaan"
                  width="500"
                  height="500"
                  loading="lazy"
                  className={`w-full h-full object-cover object-center ${
                    darkMode ? "filter brightness-90" : ""
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
