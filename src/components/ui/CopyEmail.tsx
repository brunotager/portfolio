"use client";

import { useState, useEffect } from "react";

interface CopyEmailProps {
  isPrimary?: boolean;
}

export function CopyEmail({ isPrimary }: CopyEmailProps = {}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("brunotager@gmail.com"); // Updated email
      setCopied(true);
    } catch (err) {
      console.error("Failed to copy email", err);
    }
  };

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  if (isPrimary) {
    return (
      <button
        onClick={handleCopy}
        className="bg-brand-accent text-white hover:bg-[#b08731] px-[24px] py-3 rounded-full font-medium relative overflow-hidden inline-flex items-center justify-center min-w-[220px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
      >
        <span
          className={`transition-all duration-200 ease-out ${
            copied ? "-translate-y-12 opacity-0" : "translate-y-0 opacity-100"
          }`}
        >
          Copy email
        </span>
        <span
          className={`absolute transition-all duration-200 ease-out ${
            copied ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          Copied. Let&apos;s Talk.
        </span>
      </button>
    );
  }

  return (
    <div className="relative inline-block group">
      <button
        onClick={handleCopy}
        className="text-brand-text font-medium relative overflow-hidden h-6 w-[145px] text-left"
      >
        <span
          className={`block transition-all w-full duration-200 ease-out ${
            copied ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100 group-hover:text-brand-accent group-hover:underline decoration-1 underline-offset-4"
          }`}
        >
          Copy email
        </span>
        <span
          className={`block absolute top-0 left-0 whitespace-nowrap text-brand-accent transition-all duration-200 ease-out ${
            copied ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
          }`}
        >
          Copied. Let&apos;s Talk.
        </span>
      </button>

      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-brand-text text-brand-bg text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        Click to copy
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-brand-text"></div>
      </div>
    </div>
  );
}
