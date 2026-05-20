import React from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../stores/authStore";

function Home() {
  const navigate = useNavigate();
  const { isAuthenticated, currentUser } = useAuth((state) => state);

  const handleExploreArticles = (e) => {
    e.preventDefault();
    if (!isAuthenticated) { navigate("/login"); return; }
    navigate("/articles");
  };

  const handleStartWriting = (e) => {
    e.preventDefault();
    if (!isAuthenticated) { navigate("/login"); return; }
    if (currentUser?.role === "AUTHOR") {
      navigate("/author-profile/write-article");
    } else {
      navigate("/unauthorized");
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="text-center max-w-4xl px-6">

        {/* Badge */}
        <div className="mb-8 inline-flex items-center justify-center">
          <span
            className="text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest border"
            style={{
              backgroundColor: "var(--accent-faint)",
              color: "var(--accent)",
              borderColor: "var(--accent-faint)",
            }}
          >
            Welcome to the future of blogging
          </span>
        </div>

        {/* Heading */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-tight mb-8"
          style={{ color: "var(--text-primary)" }}
        >
          Share Your Voice <br className="hidden sm:block" /> With The World
        </h1>

        {/* Sub-text */}
        <p
          className="text-lg sm:text-xl md:text-2xl leading-relaxed mb-12 max-w-2xl mx-auto font-medium"
          style={{ color: "var(--text-secondary)" }}
        >
          A premium, modern platform where creators can publish beautiful
          articles, engage with readers, and build a community around their ideas.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row gap-5 justify-center items-center">
          <button
            onClick={handleStartWriting}
            className="font-bold px-10 py-4 rounded-full transition-all duration-300 w-full sm:w-auto text-center text-lg cursor-pointer shadow-sm hover:opacity-90 hover:-translate-y-0.5"
            style={{ backgroundColor: "var(--accent)", color: "#fff" }}
          >
            Start Writing
          </button>

          <button
            onClick={handleExploreArticles}
            className="font-semibold px-10 py-4 rounded-full transition-all duration-300 w-full sm:w-auto text-center text-lg hover:-translate-y-0.5 cursor-pointer border"
            style={{
              backgroundColor: "var(--surface)",
              color: "var(--text-secondary)",
              borderColor: "var(--border)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--border-hover)";
              e.currentTarget.style.color = "var(--text-primary)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.color = "var(--text-secondary)";
            }}
          >
            Explore Articles
          </button>
        </div>

        {/* Footer note */}
        <div
          className="mt-20 pt-10 border-t"
          style={{ borderColor: "var(--border)" }}
        >
          <p
            className="text-xs sm:text-sm font-bold tracking-widest uppercase"
            style={{ color: "var(--text-muted)" }}
          >
            Powered by React, Node.js, Express & MongoDB
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;