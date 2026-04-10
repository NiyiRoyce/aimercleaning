"use client";

import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

const contactInfo = [
  { icon: "◎", label: "Phone", value: "+1 431 334 5256" },
  { icon: "◈", label: "Email", value: "aimercleaning@gmail.com" },
  { icon: "◇", label: "Hours", value: "Mon – Sat, 7am – 7pm" },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full font-body text-sm text-[#0F1F2E] bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 " +
    "focus:outline-none focus:bg-white focus:border-[#38a67e] focus:ring-2 focus:ring-[#38a67e]/10 " +
    "hover:border-gray-300 " +
    "transition-all duration-200 placeholder:text-gray-300";

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-[#E8F5F0] overflow-hidden">

      {/* Ambient blobs */}
      <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#38a67e]/12 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#38a67e]/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-14">
          <SectionLabel className="mb-4 justify-center">Contact Us</SectionLabel>
          <h2 className="font-display text-4xl lg:text-5xl font-semibold text-[#0F1F2E] leading-tight">
            Let’s Get Your Space Ready
          </h2>
          <p className="font-body text-sm text-gray-500 mt-4 max-w-sm mx-auto leading-relaxed">
            Send us your project details and receive a professional service plan within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">

          {/* ── Contact info cards (navy) ── */}
          <div className="flex flex-col gap-4">
            {contactInfo.map((item) => (
              <div
                key={item.label}
                className="group relative flex items-center gap-4 bg-[#0F1F2E] rounded-2xl px-6 py-5 overflow-hidden
                           border border-white/5
                           transition-all duration-300 ease-out
                           hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0F1F2E]/20 cursor-default"
              >
                <div aria-hidden className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-[#38a67e]/0 blur-xl transition-colors duration-300 group-hover:bg-[#38a67e]/20" />
                <div
                  className="relative z-10 flex-shrink-0 w-11 h-11 rounded-xl bg-white/8 border border-white/10
                             flex items-center justify-center text-[#38a67e]
                             transition-all duration-300
                             group-hover:bg-[#38a67e] group-hover:border-[#38a67e]
                             group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#38a67e]/30"
                >
                  {item.icon}
                </div>
                <div className="relative z-10">
                  <p className="font-body text-xs text-white/35 uppercase tracking-widest mb-0.5">
                    {item.label}
                  </p>
                  <p className="font-body text-sm font-medium text-white transition-colors duration-300 group-hover:text-[#38a67e]">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ── Form card (white) ── */}
          <div className="lg:col-span-2 reveal reveal-delay-2 bg-white rounded-3xl p-8 lg:p-10 shadow-xl shadow-[#0F1F2E]/8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-[#E8F5F0] flex items-center justify-center text-[#38a67e] text-2xl mb-6 shadow-lg shadow-[#38a67e]/10">
                  ✦
                </div>
                <h3 className="font-display text-2xl font-semibold text-[#0F1F2E] mb-2">
                  You&apos;re all set, {form.name}!
                </h3>
                <p className="font-body text-sm text-gray-500 leading-relaxed max-w-xs">
                  We&apos;ve got your request and will reach out shortly to
                  lock in your booking. Get ready for a spotless space.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-7">
                  <h3 className="font-display text-2xl font-semibold text-[#0F1F2E] mb-1">
                    Request a Quote
                  </h3>
                  <p className="font-body text-sm text-gray-400">
                    Expert service tailored to your timeline
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="group/field">
                      <label className="font-body text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2 block
                                        transition-colors duration-200 group-focus-within/field:text-[#38a67e]">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Sarah Mitchell"
                        className={inputClass}
                      />
                    </div>
                    <div className="group/field">
                      <label className="font-body text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2 block
                                        transition-colors duration-200 group-focus-within/field:text-[#38a67e]">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="sarah@email.com"
                        className={inputClass}
                      />
                    </div>
                    <div className="group/field sm:col-span-2">
                      <label className="font-body text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2 block
                                        transition-colors duration-200 group-focus-within/field:text-[#38a67e]">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 234 567 8900"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="group/field">
                    <label className="font-body text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2 block
                                      transition-colors duration-200 group-focus-within/field:text-[#38a67e]">
                      Service Needed
                    </label>
                    <select
                      name="service"
                      required
                      value={form.service}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="" disabled>Select a service...</option>

                      {/* Residential */}
                      <optgroup label="Residential Cleaning">
                        <option value="standard-home">Standard Home Clean</option>
                        <option value="deep-clean">Complete Deep Home Cleaning</option>
                        <option value="move-in">Move-In Cleaning</option>
                        <option value="move-out">Move-Out / End-of-Lease Clean</option>
                        <option value="post-renovation">Post-Renovation Clean</option>
                        <option value="sofa-carpet">Sofa & Carpet Refresh</option>
                        <option value="bathroom-kitchen">Bathroom & Kitchen Shine</option>
                        <option value="windows">Window & Glass Cleaning</option>
                      </optgroup>

                      {/* Commercial */}
                      <optgroup label="Commercial Cleaning">
                        <option value="office">Professional Office Cleaning</option>
                        <option value="retail">Retail & Storefront Cleaning</option>
                        <option value="commercial-deep">Commercial Deep Clean</option>
                        <option value="post-event">Post-Event Cleanup</option>
                      </optgroup>

                      {/* Recurring */}
                      <optgroup label="Recurring Plans">
                        <option value="weekly">Weekly Cleaning Plan</option>
                        <option value="biweekly">Bi-Weekly Cleaning Plan</option>
                        <option value="monthly">Monthly Cleaning Plan</option>
                      </optgroup>

                      {/* Other */}
                      <optgroup label="Other">
                        <option value="custom">Custom / Not Listed</option>
                      </optgroup>
                    </select>
                  </div>

                  <div className="group/field">
                    <label className="font-body text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2 block
                                      transition-colors duration-200 group-focus-within/field:text-[#38a67e]">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your space and any special requirements..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <Button type="submit" variant="primary" className="w-full justify-center">
                    Send Booking Request →
                  </Button>

                  <p className="font-body text-xs text-center text-gray-400 mt-1">
                    No spam, ever. We&apos;ll only reach out about your booking.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}