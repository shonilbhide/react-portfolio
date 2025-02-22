import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Contact Me</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <input name="name" placeholder="Your Name" onChange={handleChange} className="border p-2 w-full" />
        <input name="email" placeholder="Your Email" onChange={handleChange} className="border p-2 w-full mt-2" />
        <textarea name="message" placeholder="Your Message" onChange={handleChange} className="border p-2 w-full mt-2"></textarea>
        <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white">Send</button>
      </form>
    </div>
  );
}
