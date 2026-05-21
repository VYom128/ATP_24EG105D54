import { NavLink } from "react-router";
import { useAuth } from "../stores/authStore";
import { useTheme } from "../stores/themeStore";
import { useState } from "react";

import {
  navbarClass,
  navContainerClass,
  navBrandClass,
  navLinksClass,
  navLinkClass,
  navLinkActiveClass,
} from "../styles/common";

function Header() {
  const isAuthenticated = useAuth((state) => state.isAuthenticated);
  const user = useAuth((state) => state.currentUser);
  const { theme, toggleTheme } = useTheme();

  const [menuOpen, setMenuOpen] = useState(false);

  const getProfilePath = () => {
    if (!user) return "/";
    switch (user.role) {
      case "AUTHOR": return "/author-profile";
      case "ADMIN":  return "/admin-profile";
      default:       return "/user-profile";
    }
  };

  const closeMenu = () => setMenuOpen(false);

  const isDark = theme === "dark";

  return (
    <nav className={navbarClass}>
      <div className={`${navContainerClass} flex items-center justify-between`}>

        {/* LOGO */}
        <NavLink to="/" className={navBrandClass}>
          MyBlog
        </NavLink>

        {/* RIGHT SIDE (mobile) */}
        <div className="flex items-center gap-3 md:hidden">
          {/* THEME TOGGLE */}
          <button
            onClick={toggleTheme}
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-[#222b40] hover:border-[#334155] bg-[#151a2a] hover:bg-[#1e293b] text-[#94a3b8] hover:text-[#f8fafc] transition-all duration-200 text-base"
            style={{
              borderColor: "var(--border)",
              backgroundColor: "var(--surface)",
              color: "var(--text-secondary)",
            }}
          >
            {isDark ? "☀" : "🌙"}
          </button>

          {/* HAMBURGER */}
          <button
            className="text-2xl"
            style={{ color: "var(--text-secondary)" }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {/* NAV LINKS */}
        <ul
          className={`${navLinksClass} 
          absolute md:static top-[70px] left-0 w-full md:w-auto
          md:bg-transparent
          flex flex-col md:flex-row
          gap-4 md:gap-6
          p-4 md:p-0
          shadow-lg md:shadow-none
          border-b md:border-0
          transition-all z-50
          ${menuOpen ? "flex" : "hidden md:flex"}`}
          style={{
            backgroundColor: menuOpen ? "var(--surface)" : undefined,
            borderColor: "var(--border)",
          }}
        >
          {/* HOME */}
          <li>
            <NavLink
              to="/"
              end
              onClick={closeMenu}
              className={({ isActive }) => isActive ? navLinkActiveClass : navLinkClass}
            >
              Home
            </NavLink>
          </li>

          {/* ARTICLES (visible to everyone) */}
          <li>
            <NavLink
              to="/articles"
              onClick={closeMenu}
              className={({ isActive }) => isActive ? navLinkActiveClass : navLinkClass}
            >
              Articles
            </NavLink>
          </li>

          {/* NOT LOGGED IN */}
          {!isAuthenticated && (
            <>
              <li>
                <NavLink
                  to="/register"
                  onClick={closeMenu}
                  className={({ isActive }) => isActive ? navLinkActiveClass : navLinkClass}
                >
                  Register
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  onClick={closeMenu}
                  className={({ isActive }) => isActive ? navLinkActiveClass : navLinkClass}
                >
                  Login
                </NavLink>
              </li>
            </>
          )}

          {/* LOGGED IN */}
          {isAuthenticated && (
            <li>
              <NavLink
                to={getProfilePath()}
                onClick={closeMenu}
                className={({ isActive }) => isActive ? navLinkActiveClass : navLinkClass}
              >
                Profile
              </NavLink>
            </li>
          )}

          {/* THEME TOGGLE (desktop) */}
          <li className="hidden md:flex items-center">
            <button
              onClick={toggleTheme}
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              className="w-9 h-9 flex items-center justify-center rounded-full border transition-all duration-200 text-sm"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--surface)",
                color: "var(--text-secondary)",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "var(--border-hover)";
                e.currentTarget.style.color = "var(--text-primary)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--text-secondary)";
              }}
            >
              {isDark ? "☀" : "🌙"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;