"use client"

import { useState } from "react"
import { IconUser, IconMail, IconSend, IconWorldCheck, IconSchool, IconHash } from '@tabler/icons-react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    university: "",
    batch: "",
    department: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // ==========================================
    // 🔥 API INTEGRATION POINT (PAYLOAD CMS) 🔥
    // Once your CMS is up, you will replace the setTimeout below with this:
    //
    // await fetch('/api/contact-submissions', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData)
    // });
    // ==========================================

    // Temporary simulation for now:
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setFormData({ name: "", email: "", university: "", batch: "", department: "", message: "" })
      setTimeout(() => setIsSuccess(false), 3000)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-blue-400 flex flex-col items-center justify-center p-6 md:p-12">
      <h1 className="text-4xl md:text-6xl text-white font-extrabold mb-10 tracking-tight animate-in slide-in-from-bottom-4 duration-500">
        Contact Us
      </h1>

      {/* Added animate-in for a smooth scale/fade entry */}
      <div className="bg-white w-full max-w-5xl rounded-[2.5rem] shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 animate-in fade-in zoom-in-95 duration-700">
        {/* Left Branding Section */}
        <div className="hidden md:flex bg-[#1e3a8a] flex-col items-center justify-center p-10 relative overflow-hidden">
          <div className="absolute top-10 left-10 text-yellow-400 font-bold text-2xl rotate-12">
            △
          </div>
          <div className="absolute bottom-20 right-10 text-yellow-400 font-bold text-2xl -rotate-12">
            △
          </div>

          <div className="relative z-10 flex flex-col items-center text-center">
            <Image
              src="/CIS-Community-Main-Logo.png"
              alt="CIS Logo"
              width={300}
              height={300}
              className="mb-6 hover:scale-105 transition-transform duration-500"
              priority
            />
            <h3 className="text-white text-2xl font-bold mb-2">Contact the Community</h3>
            <p className="text-blue-200 font-medium max-w-xs leading-relaxed">
              Fill out your academic details and we'll get back to you shortly.
            </p>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="p-8 md:p-12 bg-white">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in touch</h2>

          {isSuccess && (
            <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-xl font-medium animate-in slide-in-from-top-2">
              Message sent successfully!
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <IconUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
              <Input
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="pl-12 py-6 rounded-xl bg-gray-50 text-md"
                required
              />
            </div>

            <div className="relative">
              <IconMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
              <Input
                name="email"
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="pl-12 py-6 rounded-xl bg-gray-50 text-md"
                required
              />
            </div>

            <div className="relative">
              <IconSchool className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
              <Input
                name="university"
                placeholder="University"
                value={formData.university}
                onChange={handleChange}
                className="pl-12 py-6 rounded-xl bg-gray-50 text-md"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative">
                <IconHash className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
                <Input
                  name="batch"
                  placeholder="Batch (e.g. 2024)"
                  value={formData.batch}
                  onChange={handleChange}
                  className="pl-12 py-6 rounded-xl bg-gray-50 text-md"
                  required
                />
              </div>
              <div className="relative">
                <IconWorldCheck className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
                <Input
                  name="department"
                  placeholder="Department"
                  value={formData.department}
                  onChange={handleChange}
                  className="pl-12 py-6 rounded-xl bg-gray-50 text-md"
                  required
                />
              </div>
            </div>

            <Textarea
              name="message"
              rows={3}
              placeholder="Your Message..."
              value={formData.message}
              onChange={handleChange}
              className="p-4 rounded-xl bg-gray-50 text-md resize-none"
              required
            />

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#1e3a8a] hover:bg-black text-white font-bold py-6 rounded-xl shadow-lg transition-all group text-md"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <IconSend className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
