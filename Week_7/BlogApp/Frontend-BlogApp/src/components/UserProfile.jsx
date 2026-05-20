import { useAuth } from "../stores/authStore";
import { useNavigate, Link } from "react-router";

function UserProfile() {
  const logout = useAuth((state) => state.logout);
  const currentUser = useAuth((state) => state.currentUser);
  const navigate = useNavigate();

  const onLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10">

      {/* PROFILE HEADER */}
      <div
        className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 mb-6 sm:mb-8 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border transition-colors duration-200"
        style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
      >
        {/* LEFT */}
        <div className="flex items-center gap-4 sm:gap-6">

          {/* Avatar */}
          {currentUser?.profileImageUrl ? (
            <img
              src={currentUser.profileImageUrl}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border shadow-sm"
              style={{ borderColor: "var(--border)" }}
              alt="profile"
            />
          ) : (
            <div
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center text-2xl font-bold shadow-sm"
              style={{ backgroundColor: "var(--accent)", color: "#fff" }}
            >
              {currentUser?.firstName?.charAt(0).toUpperCase()}
            </div>
          )}

          {/* Name */}
          <div>
            <p
              className="text-xs sm:text-sm font-bold tracking-widest uppercase mb-1"
              style={{ color: "var(--accent)" }}
            >
              Welcome back
            </p>
            <h2
              className="text-2xl sm:text-3xl font-extrabold tracking-tight"
              style={{ color: "var(--text-primary)" }}
            >
              {currentUser?.firstName} {currentUser?.lastName}
            </h2>
            <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
              {currentUser?.email}
            </p>
          </div>
        </div>

        {/* LOGOUT */}
        <button
          className="w-full sm:w-auto text-sm font-medium px-6 py-2.5 rounded-full border transition-all duration-300"
          style={{
            backgroundColor: "rgba(239,68,68,0.1)",
            color: "#ef4444",
            borderColor: "rgba(239,68,68,0.2)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#ef4444";
            e.currentTarget.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(239,68,68,0.1)";
            e.currentTarget.style.color = "#ef4444";
          }}
          onClick={onLogout}
        >
          Logout
        </button>
      </div>

      {/* CALL TO ACTION */}
      <div
        className="rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center border transition-colors duration-200"
        style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
      >
        <h3
          className="text-2xl sm:text-3xl font-bold mb-4"
          style={{ color: "var(--text-primary)" }}
        >
          Ready to read something new?
        </h3>
        <p className="text-base sm:text-lg mb-8 max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
          Head over to the global articles feed to discover the latest stories,
          insights, and ideas from our talented authors.
        </p>
        <Link
          to="/articles"
          className="font-bold px-8 py-3.5 rounded-full shadow-sm hover:-translate-y-0.5 transition-all duration-300 inline-block"
          style={{ backgroundColor: "var(--accent)", color: "#fff" }}
        >
          Explore All Articles
        </Link>
      </div>

    </div>
  );
}

export default UserProfile;
