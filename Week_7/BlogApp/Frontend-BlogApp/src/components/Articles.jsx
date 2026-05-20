import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { useAuth } from "../stores/authStore";

import {
  articleGrid,
  articleCardClass,
  articleTitle,
  ghostBtn,
  loadingClass,
  errorClass,
  timestampClass,
  emptyStateClass,
} from "../styles/common.js";

function Articles() {
  const navigate = useNavigate();
  const currentUser = useAuth((state) => state.currentUser);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      setLoading(true);
      try {
        let res = await axios.get(
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

  const formatDateIST = (date) => {
    return new Date(date).toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  const navigateToArticleByID = (articleObj) => {
    navigate(`/article/${articleObj._id}`, {
      state: articleObj,
    });
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center"><p className={loadingClass}>Loading articles...</p></div>;
  }

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-10 min-h-screen">
      <div className="mb-10 text-center">
        <h2 className="font-serif text-4xl font-bold text-text-claude tracking-tight mb-3">Explore Articles</h2>
        <p className="font-sans text-text-muted text-lg max-w-2xl mx-auto">Discover the latest stories, insights, and ideas from our community of writers.</p>
      </div>

      {error && <p className={errorClass}>{error}</p>}

      {articles.length === 0 && !loading && !error ? (
        <div className={emptyStateClass}>
          <p className="text-text-claude text-lg font-medium">No articles available yet</p>
          <p className="text-text-muted mt-2">Check back later or become an author to publish your own.</p>
        </div>
      ) : (
        <div className={`${articleGrid} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8`}>
          {articles.map((articleObj) => (
            <div className={`${articleCardClass} group flex flex-col h-full`} key={articleObj._id} onClick={() => navigateToArticleByID(articleObj)}>
              
              <div className="flex flex-col flex-grow">
                <span className="bg-border-claude/50 text-text-muted border border-border-claude text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-widest w-fit mb-4 font-sans">
                  {articleObj.category || "General"}
                </span>

                <p className={`${articleTitle} text-lg sm:text-xl mb-3`}>
                  {articleObj.title}
                </p>

                <p className="font-sans text-sm sm:text-base text-text-muted leading-relaxed line-clamp-3 mb-4">
                  {articleObj.content}
                </p>

                <div className="mt-auto pt-4 border-t border-border-claude flex items-center justify-between">
                  <p className={`${timestampClass} text-xs font-medium`}>
                    {formatDateIST(articleObj.createdAt)}
                  </p>
                  
                  <button
                    className="text-accent-claude font-semibold hover:text-accent-hover transition-colors text-sm flex items-center gap-1 cursor-pointer font-sans"
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
  );
}

export default Articles;