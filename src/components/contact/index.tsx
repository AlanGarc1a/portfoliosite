"use client";
import { Computer, type LucideIcon, Mail, UserPen } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import * as z from "zod";

export type ContactChannel = {
  id: number;
  title: string;
  value: string;
  href: string;
  icon: LucideIcon;
};

export const contact: ContactChannel[] = [
  {
    id: 1,
    title: "email",
    value: "alangarcia2096@gmail.com",
    href: "mailto:alangarcia2096@gmail.com",
    icon: Mail,
  },
  {
    id: 2,
    title: "GitHub",
    value: "github.com/AlanGarc1a",
    href: "https://github.com/AlanGarc1a",
    icon: Computer,
  },
  {
    id: 3,
    title: "LinkedIn",
    value: "linkedin.com/in/alan-garcia",
    href: "https://www.linkedin.com/in/alan-garcia-4b1062197/",
    icon: UserPen,
  },
];

const emailSchema = z.object({
  name: z.string().min(1, "Must have a name"),
  email: z.email("Invalid email address"),
  message: z.string().min(1, "Must contain a message"),
});

type Email = z.infer<typeof emailSchema>;
type FormErrors = Partial<Record<keyof Email, string>>;
type SubmitState = "idle" | "loading" | "success" | "error";

const Contact = () => {
  const [formData, setFormData] = useState<Email>({
    name: "",
    email: "",
    message: "",
  });
  const [emailErrors, setEmailErrors] = useState<FormErrors>({});
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));

    // clear the error for this field as the user types
    if (emailErrors[id as keyof Email]) {
      setEmailErrors((prev) => ({ ...prev, [id]: undefined }));
    }
  };

  const handleEmailSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    const result = emailSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setEmailErrors({
        name: fieldErrors.name?.[0],
        email: fieldErrors.email?.[0],
        message: fieldErrors.message?.[0],
      });
      return;
    }

    setEmailErrors({});
    setSubmitState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Server error");
      setSubmitState("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setSubmitState("error");
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-8 flex flex-col gap-10">
        {/* Section label */}
        <div className="flex items-center gap-4">
          <p className="font-mono uppercase text-gold text-xs tracking-widest whitespace-nowrap">
            contact
          </p>
          <div className="flex-1 h-px bg-light-blue" />
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Left — lede + channels */}
          <div className="flex flex-col gap-6 md:w-1/2">
            <div className="flex flex-col gap-2">
              <p className="font-serif text-navy text-2xl font-bold leading-snug">
                Let&apos;s build something great together.
              </p>
              <p className="text-muted-gray text-sm leading-relaxed">
                Open to full-time and contract roles. I typically respond within
                24 hours.
              </p>
            </div>

            <div className="flex flex-col">
              {contact.map((c) => {
                const Icon = c.icon;
                return (
                  <Link
                    key={c.id}
                    href={c.href}
                    target={c.id !== 1 ? "_blank" : undefined}
                    rel={c.id !== 1 ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3 py-3 border-b border-light-blue first:border-t hover:opacity-80 transition-opacity"
                  >
                    <div className="bg-pale-blue border border-light-blue rounded-lg p-2 flex-shrink-0">
                      <Icon className="w-4 h-4 text-blue" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-mono uppercase text-muted-gray text-xs tracking-wide">
                        {c.title}
                      </p>
                      <p className="text-navy font-semibold text-sm">
                        {c.value}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right — form */}
          <form
            className="flex flex-col gap-4 md:w-1/2"
            onSubmit={handleEmailSubmit}
          >
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="name"
                className="font-mono tracking-widest text-xs text-navy uppercase"
              >
                name
              </label>
              <input
                id="name"
                placeholder="Your name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className={`bg-pale-blue px-3 py-2.5 text-sm text-ink outline-none rounded-md border transition-colors
                  ${
                    emailErrors.name
                      ? "border-red-400 focus:border-red-500"
                      : "border-light-blue focus:border-blue"
                  }`}
              />
              {emailErrors.name && (
                <p className="text-red-500 text-xs font-mono">
                  {emailErrors.name}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="font-mono tracking-widest text-xs text-navy uppercase"
              >
                email
              </label>
              <input
                id="email"
                placeholder="you@example.com"
                type="text"
                value={formData.email}
                onChange={handleChange}
                className={`bg-pale-blue px-3 py-2.5 text-sm text-ink outline-none rounded-md border transition-colors
                  ${
                    emailErrors.name
                      ? "border-red-400 focus:border-red-500"
                      : "border-light-blue focus:border-blue"
                  }`}
              />
              {emailErrors.email && (
                <p className="text-red-500 text-xs font-mono">
                  {emailErrors.email}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="message"
                className="font-mono tracking-widest text-xs text-navy uppercase"
              >
                message
              </label>
              <textarea
                id="message"
                placeholder="Tell me about your project..."
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className={`bg-pale-blue px-3 py-2.5 text-sm text-ink outline-none rounded-md border transition-colors
                  ${
                    emailErrors.name
                      ? "border-red-400 focus:border-red-500"
                      : "border-light-blue focus:border-blue"
                  }`}
              />
              {emailErrors.email && (
                <p className="text-red-500 text-xs font-mono">
                  {emailErrors.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="self-start bg-gold text-navy font-semibold font-mono text-sm px-6 py-2.5 rounded-sm hover:opacity-90 transition-opacity cursor-pointer"
            >
              {submitState === "loading"
                ? "Sending..."
                : submitState === "success"
                  ? "Sent ✓"
                  : "Send message"}
            </button>
            {submitState === "success" && (
              <p className="text-green text-sm font-mono">Message Sent</p>
            )}
            {submitState === "error" && (
              <p className="text-red-500 text-sm font-mono">
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
