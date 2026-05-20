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
          <span className="bg-border-claude/30 text-accent-claude border border-accent-claude/20 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
            Welcome to the future of blogging
          </span>
        </div>

        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-text-claude tracking-tight leading-tight mb-8">
          Share Your Voice <br className="hidden sm:block" /> With The World
        </h1>

        <p className="font-sans text-lg sm:text-xl md:text-2xl text-text-muted leading-relaxed mb-12 max-w-2xl mx-auto font-medium">
          A premium, modern platform where creators can publish beautiful articles,
          engage with readers, and build a community around their ideas.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-5 justify-center items-center">
          <button onClick={handleStartWriting} className="bg-btn-primary text-btn-primary-text font-medium px-10 py-4 rounded-full hover:bg-btn-primary-hover transition-all duration-300 w-full sm:w-auto text-center text-lg cursor-pointer">
            Start Writing
          </button>

          <button onClick={handleExploreArticles} className="bg-btn-secondary text-btn-secondary-text border border-border-claude font-medium px-10 py-4 rounded-full hover:bg-btn-secondary-hover transition-all duration-300 w-full sm:w-auto text-center text-lg cursor-pointer">
            Explore Articles
          </button>
        </div>

        <div className="mt-20 pt-10 border-t border-border-claude">
          <p className="font-sans text-xs sm:text-sm text-text-muted font-bold tracking-widest uppercase">
            Powered by React, Node.js, Express & MongoDB
          </p>
        </div>

      </div>
    </div>
  );
}

export default Home;