import React, { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10,}$/;

    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (formData.phone && !phoneRegex.test(formData.phone)) {
      newErrors.phone = "Phone number must contain only digits (min 10).";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "", // clear error on change
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("phone", formData.phone);
    form.append("message", formData.message);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzkmnuIpNiQtTKY1tfLvkEa2_GL4oxxYVCoNJ5mdZ82WmaC2PBl1wcSobNWyip0lsYlLw/exec",
        {
          method: "POST",
          body: form,
        }
      );

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Error submitting form: " + error.message);
    }

    setIsSubmitting(false);
  };

  return (
    <div id="contact" className="w-full min-h-screen bg-[#F6F6F6] flex flex-col md:flex-row">
      {/* Left Section - Contact Info */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-6 py-12 md:px-12 lg:px-20">
        <h4 className="text-xl text-[#5C3013] jishnufont mb-2">We’d love to hear from you</h4>
        <h2 className="text-[38px] sm:text-[42px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-bold text-[#083B37] sugarfont mb-6 leading-tight">
          GET IN <br /> TOUCH
        </h2>

        <div className="text-[#083B37] jishnufont space-y-4 text-base sm:text-lg mb-8">
          <div className="flex items-center gap-3">
            <span className="text-xl">📞</span>
           <a href="tel:8943300095" className="relative group text-[#3B2E1D] text-sm sm:text-base">
                +91 7593844448
                <span className="block h-[1px] max-w-0 bg-[#3B2E1D] transition-all duration-300 group-hover:max-w-full"></span>
              </a>
          </div>
          {/* <div className="flex items-center gap-3 break-all">
            <span className="text-xl">✉️</span>
            <span>zoruccidesignlab@gmail.com</span>
          </div> */}
        </div>

        <a
          href="https://wa.me/917593844448"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white border border-[#083B37] text-[#083B37] px-6 py-2.5 rounded-md shadow jishnufont hover:bg-[#083B37] hover:text-white transition text-md font-medium"
        >
          Chat with us on WhatsApp
        </a>
      </div>

      {/* Right Section - Contact Form with Background and Overlay */}
      <div className="w-full md:w-1/2 relative flex items-center justify-center jishnufont px-6 py-12 md:px-12 lg:px-20">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/group.png')" }}
        ></div>

        {/* Overlay image with opacity */}
        <div
          className="absolute inset-0 bg-cover bg-center z-10"
          style={{
            backgroundImage: "url('/overlay.png')",
            opacity: 0.90,
          }}
        ></div>

        {/* Contact Form */}
        <form className="space-y-4 w-full max-w-md relative z-20" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded bg-white/10 border border-white placeholder-white text-white focus:outline-none text-sm sm:text-base"
              required
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded bg-white/10 border border-white placeholder-white text-white focus:outline-none text-sm sm:text-base"
              required
            />
            {errors.email && (
              <p className="text-red-300 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <input
              type="text"
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 rounded bg-white/10 border border-white placeholder-white text-white focus:outline-none text-sm sm:text-base"
            />
            {errors.phone && (
              <p className="text-red-300 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded bg-white/10 border border-white placeholder-white text-white h-32 resize-none focus:outline-none text-sm sm:text-base"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-white text-[#083B37] px-6 py-2.5 rounded hover:bg-gray-200 transition font-semibold w-50 text-sm sm:text-base"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
