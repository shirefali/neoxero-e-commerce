import { Link } from "react-router-dom";
import { useState } from "react";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const labelClass = "block text-sm font-medium text-gray-700 mb-1";
  const inputClass =
    "w-full px-4 py-2.5 rounded-lg border border-gray-200 text-gray-900 focus:border-gray-900 focus:outline-none";
  const fieldSpacing = "mb-4";

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="container mx-auto py-12 px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Contact Us
          </h1>
          <Link
            to="/"
            className="text-gray-600 hover:text-gray-900 text-sm font-medium"
          >
            ← Continue shopping
          </Link>
        </div>

        <section className="border border-gray-200 rounded-2xl bg-gray-50/50 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6 md:p-8 flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-200 bg-white">
              <h2 className="font-semibold text-gray-900 text-lg mb-6">
                Get in touch
              </h2>
              <div className="space-y-4">
                <div>
                  <span className={labelClass}>Address</span>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    43111 Hai Trieu street,
                    <br />
                    District 1, HCMC,
                    <br />
                    Vietnam
                  </p>
                </div>
                <div>
                  <span className={labelClass}>Phone</span>
                  <p className="text-gray-600 text-sm">84-756-3237</p>
                </div>
                <div>
                  <span className={labelClass}>Email</span>
                  <p className="text-gray-600 text-sm">hello@visiocreate.com</p>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8 bg-white">
              <h2 className="font-semibold text-gray-900 text-lg mb-6">
                Send a message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className={fieldSpacing}>
                  <label htmlFor="name" className={labelClass}>
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="Your name"
                  />
                </div>
                <div className={fieldSpacing}>
                  <label htmlFor="email" className={labelClass}>
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="you@example.com"
                  />
                </div>
                <div className={fieldSpacing}>
                  <label htmlFor="message" className={labelClass}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className={`${inputClass} resize-none`}
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="py-2.5 px-6 bg-gray-900 text-white font-medium rounded-lg hover:bg-black transition-colors"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
