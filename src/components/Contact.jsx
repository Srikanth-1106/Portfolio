import React, { useRef, useState } from "react";
import { slideIn } from "../utils/motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [formData, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
      emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        alert('Message sent!');
        setForm({
          name: "",
          email: "",
          message: "",
        });
      }, (error) => {
        setLoading(false);
        console.error(error);
        alert('Failed to send message.');
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...formData,
      [name]: value,
    });
  };

  return (
    <section
      className="container mx-auto px-4 md:px-6 lg:px-12 xl:px-24 md:pt-4 lg:pt-6"
      id="contact">
      <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="bg-black-100 p-8 rounded-2xl">
          <p className={`${styles.sectionSubText} pl-0 md:pl-8`}>
            Get in touch
          </p>
          <h3 className={`${styles.sectionHeadText} pl-0 md:pl-8`}>Contact</h3>

          <form
            ref={formRef}
            className="mt-12 flex flex-col gap-8"
            onSubmit={sendEmail}>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                required
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your email</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="What's your Email address?"
                required
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="What would you want to say?"
                required
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <button
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary">
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1">
          <EarthCanvas />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
