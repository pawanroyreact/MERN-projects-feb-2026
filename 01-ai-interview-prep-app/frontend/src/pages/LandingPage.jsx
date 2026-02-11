import React, { useState } from "react";
import HERO_IMG from "../assets/welcome_hero.jpg";
import { APP_FEATURES } from "../utils/data";
import { useNavigate } from "react-router-dom";
import { LuSparkles } from "react-icons/lu";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import Model from "../components/Model";

const LandingPage = () => {
  const navigate = useNavigate();

  const [openAuthModel, setOpenAuthModel] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  const handleCTA = () => {};

  return (
    <>
      <div className="w-full min-h-full bg-linear-to-b from-[#fffcef] via-[#fff9e6] to-[#fff5dd]">
        <div className="absolute inset-0 bg-linear-to-br from-amber-200/30 via-transparent to-orange-200/20"></div>
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pt-6 pb-20 relative z-10">
          {/* Header */}
          <header className="flex justify-between items-center mb-20 pt-4">
            <div className="text-2xl font-bold bg-linear-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
              Interview Prep AI
            </div>
            <button
              className="bg-linear-to-r from-orange-500 to-orange-600 text-sm font-semibold text-white px-6 py-3 rounded-full hover:shadow-lg hover:scale-105 border border-orange-400/50 transition-all duration-300 cursor-pointer hover:-translate-y-0.5"
              onClick={() => setOpenAuthModel(true)}
            >
              Login/Sign Up
            </button>
          </header>

          {/* Hero Content */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 mb-16">
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-orange-600 bg-orange-100/80 backdrop-blur-md px-4 py-2 rounded-full border border-orange-300/50 mb-6">
                <LuSparkles className="w-4 h-4" /> AI-Powered Interview Prep
              </div>

              <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
                Ace Your Next <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 via-orange-400 to-amber-400 font-bold">
                  Interview
                </span>
              </h1>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-xl">
                Get role-specific questions, expand answers when you need them,
                dive deeper into concepts, and organize everything your way.
                From preparation to mastery – your ultimate interview toolkit.
              </p>

              <button
                className="bg-linear-to-r from-orange-500 to-orange-600 text-base font-semibold text-white px-8 py-3.5 rounded-full hover:shadow-xl hover:scale-105 border border-orange-400/50 transition-all duration-300 cursor-pointer hover:-translate-y-1 inline-flex items-center gap-2"
                onClick={handleCTA}
              >
                Get Started
                <span>→</span>
              </button>
            </div>

            <div className="w-full lg:w-1/2 relative">
              <div className="relative w-full h-64 md:h-80 lg:h-125 rounded-2xl overflow-hidden shadow-2xl border-2 border-transparent bg-linear-to-br from-orange-400/50 via-amber-300/30 to-orange-500/50 p-1.5">
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-white shadow-lg">
                  <img
                    src={HERO_IMG}
                    alt="Hero Interview Prep"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <section>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Features that make you{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-amber-400">
                  shine
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Everything you need to ace your interviews
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* First 3 cards */}
              {APP_FEATURES.slice(0, 3).map((feature) => (
                <div
                  key={feature.id}
                  className="group bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-gray-200 hover:border-orange-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-linear-to-br from-orange-400 to-orange-600 rounded-xl mb-6 group-hover:scale-110 transition-transform"></div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.tittle}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Remaining 2 cards - full width */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-8">
              {APP_FEATURES.slice(3).map((feature) => (
                <div
                  key={feature.id}
                  className="group bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-gray-200 hover:border-orange-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-linear-to-br from-orange-400 to-orange-600 rounded-xl mb-6 group-hover:scale-110 transition-transform"></div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.tittle}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* xyz */}
      <Model
        isOpen={openAuthModel}
        onClose={() => {
          setOpenAuthModel(false);
          setCurrentPage("login");
        }}
        hideHeader
      >
        <div>
          {currentPage === "login" && <Login setCurrentPage={setCurrentPage} />}
          {currentPage === "signup" && (
            <SignUp setCurrentPage={setCurrentPage} />
          )}
        </div>
      </Model>

      {/* Footer */}
      <footer className="w-full border-t border-gray-200/50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 text-center">
          <p className="text-gray-600 font-medium">
            Made with <span className="text-orange-500">♥</span> by{" "}
            <span className="font-bold text-gray-900">Pawan Roy</span>
          </p>
        </div>
      </footer>
    </>
  );
};

export default LandingPage;
