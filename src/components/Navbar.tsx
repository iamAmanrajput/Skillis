import React from "react";

const Navbar: React.FC = () => {
  return (
    <header
      className="sticky top-0 z-50
         bg-customSoft/70
         backdrop-blur-lg backdrop-saturate-150
         border-b border-customAccent/70"
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-customPrimary/20 flex items-center justify-center">
            <span className="text-customPrimary font-bold text-lg">AI</span>
          </div>
          <span className="text-slate-800 font-semibold text-lg">
            InterviewAI
          </span>
        </div>

        <ul className="hidden md:flex items-center gap-8 text-slate-600 font-medium">
          <li className="hover:text-primary transition">Home</li>
          <li className="hover:text-primary transition">Practice</li>
          <li className="hover:text-primary transition">Feedback</li>
          <li className="hover:text-primary transition">Pricing</li>
        </ul>

        <div className="flex items-center gap-3">
          <button className="hidden sm:block text-slate-600 hover:text-primary transition">
            Login
          </button>
          <button
            className="bg-customPrimary text-white px-5 py-2 rounded-xl font-medium
               hover:opacity-90 transition"
          >
            Start Interview
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
