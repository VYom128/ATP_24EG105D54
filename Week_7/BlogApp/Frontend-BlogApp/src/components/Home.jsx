import React from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../stores/authStore";

function Home() {
  const navigate = useNavigate();
  const { isAuthenticated, currentUser } = useAuth((state) => state);

  const handleExploreArticles = (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }
    
    // Direct to the global articles page
    navigate("/articles");
  };

  const handleStartWriting = (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }

    if (currentUser?.role === "AUTHOR") {
      navigate("/author-profile/write-article");
    } else {
      navigate("/unauthorized");
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="text-center max-w-4xl px-6">
        
        <div className="mb-8 inline-flex items-center justify-center">
          <span className="bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg shadow-indigo-500/5">
            Welcome to the future of blogging
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 via-purple-400 to-cyan-400 tracking-tight leading-tight mb-8 drop-shadow-sm">
          Share Your Voice <br className="hidden sm:block" /> With The World
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-[#94a3b8] leading-relaxed mb-12 max-w-2xl mx-auto font-medium">
          A premium, modern platform where creators can publish beautiful articles,
          engage with readers, and build a community around their ideas.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-5 justify-center items-center">
          <button onClick={handleStartWriting} className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold px-10 py-4 rounded-full hover:from-indigo-400 hover:to-purple-500 shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto text-center text-lg cursor-pointer">
            Start Writing
          </button>

          <button onClick={handleExploreArticles} className="bg-[#151a2a] border border-[#222b40] text-[#cbd5e1] font-semibold px-10 py-4 rounded-full hover:bg-[#1e293b] hover:border-[#334155] hover:text-white transition-all duration-300 w-full sm:w-auto text-center text-lg hover:-translate-y-1 shadow-lg shadow-black/20 cursor-pointer">
            Explore Articles
          </button>
        </div>

        <div className="mt-20 pt-10 border-t border-[#222b40]">
          <p className="text-xs sm:text-sm text-[#475569] font-bold tracking-widest uppercase">
            Powered by React, Node.js, Express & MongoDB
          </p>
        </div>

      </div>
    </div>
  );
}

export default Home;