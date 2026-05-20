import { useNavigate } from "react-router";
import { useAuth } from "../stores/authStore";
import { useState, useEffect } from "react";
import axios from "axios";

function AdminProfile() {
  const currentUser = useAuth((state) => state.currentUser);
  const logout = useAuth((state) => state.logout);
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onLogout = async () => {
    await logout();
    navigate("/login");
  };

  const handleToggleStatus = async (userId, currentStatus) => {
    try {
      await axios.patch(
        `${import.meta.env.VITE_API_URL}/admin-api/users`,
        { userId, isUserActive: !currentStatus },
        { withCredentials: true }
      );
      setUsers((prev) =>
        prev.map((u) =>
          u._id === userId ? { ...u, isUserActive: !currentStatus } : u
        )
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/admin-api/users`,
          { withCredentials: true }
        );
        if (res.status === 200) setUsers(res.data.payload);
      } catch (err) {
        setError(err.response?.data?.error || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    getUsers();
  }, []);

  return (
    <div
      className="min-h-screen px-4 sm:px-6 py-6 sm:py-10 transition-colors duration-200"
      style={{ backgroundColor: "var(--bg)" }}
    >
      {/* HEADER */}
      <div
        className="rounded-2xl sm:rounded-3xl p-4 sm:p-6 mb-6 sm:mb-10 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border transition-colors duration-200"
        style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
      >
        {/* LEFT */}
        <div className="flex items-center gap-3 sm:gap-4">
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
          className="w-full sm:w-auto text-white text-sm px-4 sm:px-5 py-2 rounded-full transition"
          style={{ backgroundColor: "var(--accent)" }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          onClick={onLogout}
        >
          Logout
        </button>
      </div>

      {/* ERROR */}
      {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

      {/* LOADING */}
      {loading && (
        <p className="text-sm text-center mb-4" style={{ color: "var(--text-muted)" }}>
          Loading users...
        </p>
      )}

      {/* USERS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {users.map(
          (userObj) =>
            userObj.role !== "ADMIN" && (
              <div
                key={userObj._id}
                className="rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between border"
                style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
              >
                {/* NAME */}
                <h3 className="text-base sm:text-lg font-semibold" style={{ color: "var(--text-primary)" }}>
                  {userObj.firstName}
                </h3>

                {/* EMAIL */}
                <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
                  {userObj.email}
                </p>

                {/* STATUS */}
                <p className="text-sm mt-2" style={{ color: "var(--text-secondary)" }}>
                  Status:{" "}
                  <span className={userObj.isUserActive ? "text-green-500 font-medium" : "text-red-500 font-medium"}>
                    {userObj.isUserActive ? "Active" : "Blocked"}
                  </span>
                </p>

                {/* TOGGLE BUTTON */}
                <button
                  onClick={() => handleToggleStatus(userObj._id, userObj.isUserActive)}
                  className="mt-4 w-full sm:w-auto px-4 py-2 rounded-lg text-sm font-medium transition"
                  style={
                    userObj.isUserActive
                      ? { backgroundColor: "rgba(239,68,68,0.1)", color: "#ef4444" }
                      : { backgroundColor: "rgba(34,197,94,0.1)", color: "#22c55e" }
                  }
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = userObj.isUserActive ? "#ef4444" : "#22c55e";
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = userObj.isUserActive
                      ? "rgba(239,68,68,0.1)"
                      : "rgba(34,197,94,0.1)";
                    e.currentTarget.style.color = userObj.isUserActive ? "#ef4444" : "#22c55e";
                  }}
                >
                  {userObj.isUserActive ? "Block" : "Unblock"}
                </button>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default AdminProfile;
