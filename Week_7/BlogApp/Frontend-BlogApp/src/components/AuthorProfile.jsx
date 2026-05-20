import { NavLink, Outlet, useNavigate } from "react-router";
import { useAuth } from "../stores/authStore";
import { pageWrapper, divider } from "../styles/common";

function AuthorProfile() {
  const currentUser = useAuth((state) => state.currentUser);
  const logout = useAuth((state) => state.logout);
  const navigate = useNavigate();

  const onLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <div className={`${pageWrapper} px-4 sm:px-6`}>

      {/* PROFILE HEADER */}
      <div
        className="rounded-2xl sm:rounded-3xl p-4 sm:p-6 mb-6 sm:mb-8 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border transition-colors duration-200"
        style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
      >
        {/* LEFT */}
        <div className="flex items-center gap-3 sm:gap-4">

          {/* Avatar */}
          {currentUser?.profileImageUrl ? (
            <img
              src={currentUser.profileImageUrl}
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border"
              style={{ borderColor: "var(--border)" }}
              alt="profile"
            />
          ) : (
            <div
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-lg sm:text-xl font-semibold"
              style={{ backgroundColor: "var(--accent)", color: "#fff" }}
            >
              {currentUser?.firstName?.charAt(0).toUpperCase()}
            </div>
          )}

          {/* Name */}
          <div>
            <p className="text-xs sm:text-sm" style={{ color: "var(--text-muted)" }}>
              Welcome back
            </p>
            <h2 className="text-lg sm:text-xl font-semibold" style={{ color: "var(--text-primary)" }}>
              {currentUser?.firstName}
            </h2>
          </div>
        </div>

        {/* LOGOUT */}
        <button
          className="w-full sm:w-auto text-white text-sm px-4 sm:px-5 py-2 rounded-full transition-all duration-200"
          style={{ backgroundColor: "var(--accent)" }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          onClick={onLogout}
        >
          Logout
        </button>
      </div>

      {/* NAVIGATION TABS */}
      <div
        className="flex flex-col sm:flex-row gap-2 mb-6 p-1.5 rounded-2xl sm:rounded-full w-full sm:w-fit overflow-x-auto border transition-colors duration-200"
        style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
      >
        <NavLink
          to="articles"
          className={({ isActive }) =>
            isActive
              ? "px-4 sm:px-5 py-2 rounded-full text-sm font-medium shadow-sm whitespace-nowrap transition-colors duration-200"
              : "px-4 sm:px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-200"
          }
          style={({ isActive }) =>
            isActive
              ? { backgroundColor: "var(--bg)", color: "var(--accent)", boxShadow: "0 1px 4px rgba(0,0,0,0.1)" }
              : { color: "var(--text-secondary)" }
          }
        >
          Articles
        </NavLink>

        <NavLink
          to="write-article"
          className={({ isActive }) =>
            isActive
              ? "px-4 sm:px-5 py-2 rounded-full text-sm font-medium shadow-sm whitespace-nowrap transition-colors duration-200"
              : "px-4 sm:px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-200"
          }
          style={({ isActive }) =>
            isActive
              ? { backgroundColor: "var(--bg)", color: "var(--accent)", boxShadow: "0 1px 4px rgba(0,0,0,0.1)" }
              : { color: "var(--text-secondary)" }
          }
        >
          Write Article
        </NavLink>
      </div>

      <div className={divider}></div>

      {/* CONTENT */}
      <div className="mt-4 sm:mt-6">
        <Outlet />
      </div>

    </div>
  );
}

export default AuthorProfile;