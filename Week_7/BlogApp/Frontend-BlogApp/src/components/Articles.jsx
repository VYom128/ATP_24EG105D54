import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

import {
  articleCardClass,
  articleTitle,
  loadingClass,
  errorClass,
  timestampClass,
} from "../styles/common.js";

function Articles() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [articles, setArticles] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const getArticles = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/user-api/articles`,
          { withCredentials: true }
        );
        if (res.status === 200) {
          setArticles(res.data.payload);
        }
      } catch (err) {
        setError(err.response?.data?.error || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    getArticles();
  }, []);

  // Build unique category list from fetched articles
  const categories = useMemo(() => {
    const cats = new Set(articles.map((a) => a.category).filter(Boolean));
    return ["All", ...Array.from(cats)];
  }, [articles]);

  // Filtered articles
  const filtered = useMemo(() => {
    if (activeCategory === "All") return articles;
    return articles.filter((a) => a.category === activeCategory);
  }, [articles, activeCategory]);

  const formatDateIST = (date) =>
    new Date(date).toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
    });

  const navigateToArticleByID = (articleObj) =>
    navigate(`/article/${articleObj._id}`, { state: articleObj });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className={loadingClass}>Loading articles...</p>
      </div>
    );
  }

  return (
    <div
      className="w-full min-h-screen px-4 sm:px-6 py-10 transition-colors duration-300"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <div className="max-w-5xl mx-auto">

        {/* ── HEADER ── */}
        <div className="mb-8 text-center">
          <h2
            className="text-4xl font-extrabold tracking-tight mb-2"
            style={{ color: "var(--text-primary)" }}
          >
            Explore Articles
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            Discover the latest stories, insights, and ideas from our community.
          </p>
        </div>

        {/* ── CATEGORY FILTER PILLS ── */}
        {categories.length > 1 && (
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {categories.map((cat) => {
              const isActive = cat === activeCategory;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border transition-all duration-200 cursor-pointer"
                  style={{
                    backgroundColor: isActive ? "var(--accent)" : "var(--surface)",
                    color: isActive ? "#fff" : "var(--text-secondary)",
                    borderColor: isActive ? "var(--accent)" : "var(--border)",
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        )}

        {error && <p className={errorClass}>{error}</p>}

        {/* ── EMPTY STATE ── */}
        {filtered.length === 0 && !loading && !error && (
          <div
            className="rounded-2xl py-16 text-center border border-dashed"
            style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
          >
            <p className="text-lg font-medium" style={{ color: "var(--text-muted)" }}>
              No articles in this category yet
            </p>
            <p className="mt-2 text-sm" style={{ color: "var(--text-muted)" }}>
              Try a different category or check back later.
            </p>
          </div>
        )}

        {/* ── ARTICLES GRID ── */}
        {filtered.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((articleObj) => (
              <div
                key={articleObj._id}
                className={`${articleCardClass} group flex flex-col h-full`}
                style={{
                  backgroundColor: "var(--surface)",
                  borderColor: "var(--border)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-hover)";
                  e.currentTarget.style.backgroundColor = "var(--surface-hover)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.backgroundColor = "var(--surface)";
                }}
              >
                <div className="flex flex-col flex-grow">

                  {/* Category tag */}
                  <span
                    className="text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest w-fit mb-4 border"
                    style={{
                      backgroundColor: "var(--accent-faint)",
                      color: "var(--accent)",
                      borderColor: "var(--accent-faint)",
                    }}
                  >
                    {articleObj.category || "General"}
                  </span>

                  {/* Title */}
                  <p
                    className={`${articleTitle} text-lg sm:text-xl mb-3`}
                    style={{ color: "var(--text-primary)" }}
                  >
                    {articleObj.title}
                  </p>

                  {/* Excerpt */}
                  <p
                    className="text-sm leading-relaxed line-clamp-3 mb-4"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {articleObj.content}
                  </p>

                  {/* Footer row */}
                  <div
                    className="mt-auto pt-4 border-t flex items-center justify-between"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <p
                      className={`${timestampClass} text-xs font-medium`}
                      style={{ color: "var(--text-muted)" }}
                    >
                      {formatDateIST(articleObj.createdAt)}
                    </p>

                    <button
                      className="font-semibold text-sm flex items-center gap-1 cursor-pointer transition-colors"
                      style={{ color: "var(--accent-light)" }}
                      onClick={() => navigateToArticleByID(articleObj)}
                    >
                      Read <span className="text-lg leading-none">→</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}

export default Articles;