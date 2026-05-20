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
      <div className="bg-surface-claude border border-border-claude rounded-2xl sm:rounded-3xl p-6 sm:p-8 mb-6 sm:mb-8 shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">

        {/* LEFT */}
        <div className="flex items-center gap-4 sm:gap-6">

          {/* Avatar */}
          {currentUser?.profileImageUrl ? (
            <img
              src={currentUser.profileImageUrl}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border border-border-claude shadow-sm"
              alt="profile"
            />
          ) : (
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-border-claude text-text-claude flex items-center justify-center text-2xl font-bold shadow-sm font-serif">
              {currentUser?.firstName?.charAt(0).toUpperCase()}
            </div>
          )}

          {/* Name */}
          <div>
            <p className="font-sans text-xs sm:text-sm text-text-muted font-bold tracking-widest uppercase mb-1">
              Welcome back
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-text-claude tracking-tight">
              {currentUser?.firstName} {currentUser?.lastName}
            </h2>
            <p className="font-sans text-sm text-text-muted mt-1">{currentUser?.email}</p>
          </div>
        </div>

        {/* LOGOUT */}
        <button
          className="w-full sm:w-auto bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20 text-sm font-medium px-6 py-2.5 rounded hover:bg-red-500 hover:text-white transition-all duration-300 font-sans"
          onClick={onLogout}
        >
          Logout
        </button>
      </div>

      {/* CALL TO ACTION */}
      <div className="bg-surface-claude border border-border-claude rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center shadow-sm">
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-text-claude mb-4">Ready to read something new?</h3>
        <p className="font-sans text-text-muted text-base sm:text-lg mb-8 max-w-2xl mx-auto">
          Head over to the global articles feed to discover the latest stories, insights, and ideas from our talented authors.
        </p>
        <Link 
          to="/articles" 
          className="bg-btn-primary text-btn-primary-text font-medium px-8 py-3.5 rounded-lg hover:bg-btn-primary-hover shadow-sm transition-all duration-300 inline-block font-sans"
        >
          Explore All Articles
        </Link>
      </div>

    </div>
  );
}

export default UserProfile;
