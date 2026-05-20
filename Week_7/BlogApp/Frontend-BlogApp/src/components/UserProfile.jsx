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
      <div className="bg-[#151a2a] border border-[#222b40] rounded-2xl sm:rounded-3xl p-6 sm:p-8 mb-6 sm:mb-8 shadow-lg flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">

        {/* LEFT */}
        <div className="flex items-center gap-4 sm:gap-6">

          {/* Avatar */}
          {currentUser?.profileImageUrl ? (
            <img
              src={currentUser.profileImageUrl}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-indigo-500/30 shadow-md"
              alt="profile"
            />
          ) : (
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-500 text-white flex items-center justify-center text-2xl font-bold shadow-md">
              {currentUser?.firstName?.charAt(0).toUpperCase()}
            </div>
          )}

          {/* Name */}
          <div>
            <p className="text-xs sm:text-sm text-indigo-400 font-bold tracking-widest uppercase mb-1">
              Welcome back
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#f8fafc] tracking-tight">
              {currentUser?.firstName} {currentUser?.lastName}
            </h2>
            <p className="text-sm text-[#64748b] mt-1">{currentUser?.email}</p>
          </div>
        </div>

        {/* LOGOUT */}
        <button
          className="w-full sm:w-auto bg-red-500/10 text-red-400 border border-red-500/20 text-sm font-bold px-6 py-2.5 rounded-full hover:bg-red-500 hover:text-white transition-all duration-300"
          onClick={onLogout}
        >
          Logout
        </button>
      </div>

      {/* CALL TO ACTION */}
      <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center shadow-lg">
        <h3 className="text-2xl sm:text-3xl font-bold text-[#f8fafc] mb-4">Ready to read something new?</h3>
        <p className="text-[#94a3b8] text-base sm:text-lg mb-8 max-w-2xl mx-auto">
          Head over to the global articles feed to discover the latest stories, insights, and ideas from our talented authors.
        </p>
        <Link 
          to="/articles" 
          className="bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-bold px-8 py-3.5 rounded-full hover:from-indigo-400 hover:to-cyan-400 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-1 transition-all duration-300 inline-block"
        >
          Explore All Articles
        </Link>
      </div>

    </div>
  );
}

export default UserProfile;
