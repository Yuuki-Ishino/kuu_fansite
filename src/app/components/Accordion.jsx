"use client";

import { useState } from "react";

export default function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-white/20 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-4 py-4  hover:bg-white/10 transition"
      >
        <span className="text-sm font-bold">{title}</span>
        <span className="text-lg">{open ? "−" : "+"}</span>
      </button>

      {open && (
        <div className="px-4 py-4 bg-white/5">
          {children}
        </div>
      )}
    </div>
  );
}
