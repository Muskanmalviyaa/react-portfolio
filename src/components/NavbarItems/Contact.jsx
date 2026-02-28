import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    note: "",
  });
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // later you can connect EmailJS or API here
    setShowModal(true);
    setFormData({ name: "", email: "", note: "" });
  };

  return (
    <div className=" text-[#1b1637] py-16 px-6 flex flex-col items-center">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#938bd1] to-[#ffffff] text-center mb-10"
      >
        Contact Me
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-[#2a2550] p-8 rounded-2xl shadow-lg w-full max-w-md flex flex-col gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-3 rounded-lg bg-[#1b1637] text-[#fcfcfd] placeholder-[#c1c1c9] focus:outline-none focus:ring-2 focus:ring-[#fcfcfd]"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-3 rounded-lg bg-[#1b1637] text-[#fcfcfd] placeholder-[#c1c1c9] focus:outline-none focus:ring-2 focus:ring-[#fcfcfd]"
        />
        <textarea
          name="note"
          placeholder="Your Message"
          value={formData.note}
          onChange={handleChange}
          required
          rows={4}
          className="p-3 rounded-lg bg-[#1b1637] text-[#fcfcfd] placeholder-[#c1c1c9] focus:outline-none focus:ring-2 focus:ring-[#fcfcfd]"
        />
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.92 }}
          type="submit"
          className="bg-[#fcfcfd] text-[#1b1637] font-semibold py-3 rounded-lg hover:bg-[#1b1637] hover:text-[#fcfcfd] transition"
        >
          Send Message
        </motion.button>
      </motion.form>

      {/* Success Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#2a2550] p-8 rounded-2xl text-center shadow-xl max-w-sm"
            >
              <h3 className="text-[#c1c1c9] text-xl font-bold mb-4">Thank You!</h3>
              <p className="text-[#c1c1c9] mb-6">
                Your message has been successfully sent.
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="bg-[#fcfcfd] text-[#1b1637] px-6 py-2 rounded-lg font-semibold hover:bg-[#c1c1c9] transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Contact;
