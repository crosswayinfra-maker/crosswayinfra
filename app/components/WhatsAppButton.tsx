"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919582728046"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-green-500 px-5 py-3 text-white shadow-2xl transition hover:scale-110 hover:bg-green-600"
    >
      <FaWhatsapp size={32} />
      <span className="hidden md:block font-semibold">
        Chat on WhatsApp
      </span>
    </a>
  );
}