import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const user = JSON.parse(localStorage.getItem("user"));

const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");

  window.location.href = "/login";
};

function Navbar() {
  const [openProfile, setOpenProfile] = useState(false);

  return (
    <nav
      className="
    fixed top-0 left-0 w-full z-50
    bg-slate-950/80
    backdrop-blur-xl
    border-b border-slate-800
    "
    >
      <div
        className="
      max-w-7xl mx-auto
      px-6 lg:px-8
      h-20
      flex items-center
      justify-between
      "
      >
        {/* LOGO */}

        <Link to="/" className="flex items-center gap-3">
          <div
            className="
          w-11 h-11
          rounded-xl
          bg-linear-to-br
          from-purple-600
          to-cyan-400
          flex items-center justify-center
          text-white
          text-xl
          font-bold
          shadow-lg
          shadow-purple-500/30
          "
          >
            A
          </div>

          <span
            className="
          text-2xl
          font-extrabold
          bg-linear-to-r
          from-purple-400
          to-cyan-400
          bg-clip-text
          text-transparent
          "
          >
            AlgoForge
          </span>
        </Link>

        {/* NAV LINKS */}

        <div
          className="
        hidden md:flex
        items-center
        gap-8
        "
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              `
    transition
    ${
      isActive
        ? "text-purple-400 font-semibold"
        : "text-gray-300 hover:text-white"
    }
    `
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/problems"
            className={({ isActive }) =>
              `
              transition
              ${
                isActive
                  ? "text-purple-400 font-semibold"
                  : "text-gray-300 hover:text-white"
              }
              `
            }
          >
            Problems
          </NavLink>

          <NavLink
            to="/leaderboard"
            className="text-gray-300 hover:text-white transition"
          >
            Leaderboard
          </NavLink>

          <NavLink
            to="/discuss"
            className="text-gray-300 hover:text-white transition"
          >
            Discuss
          </NavLink>
        </div>

        {/* PROFILE */}

        <div className="relative">
          <button
            onClick={() => setOpenProfile(!openProfile)}
            className="
            w-11 h-11
            rounded-full
            bg-linear-to-br
            from-purple-600
            to-cyan-400
            flex
            items-center
            justify-center
            text-white
            font-bold
            text-lg
            hover:scale-105
            transition
            shadow-lg
            "
          >
            N
          </button>

          {openProfile && (
            <div
              className="
              absolute
              right-0
              mt-4
              w-60
              bg-slate-900
              border border-slate-800
              rounded-2xl
              shadow-2xl
              overflow-hidden
              "
            >
              {/* USER INFO */}

              <div
                className="
              px-5 py-4
              border-b border-slate-800
              "
              >
                <p
                  className="
                text-white
                font-semibold
                "
                >
                  Naveen
                </p>

                <p
                  className="
                text-sm
                text-gray-400
                "
                >
                  Developer
                </p>
              </div>

              {/* MENU */}

              <Link
                to="/profile"
                className="
                block
                px-5 py-3
                text-gray-300
                hover:bg-slate-800
                hover:text-white
                transition
                "
              >
                👤 Profile
              </Link>

              <Link
                to="/submissions"
                className="
                block
                px-5 py-3
                text-gray-300
                hover:bg-slate-800
                hover:text-white
                transition
                "
              >
                📝 My Submissions
              </Link>

              {user?.role === "admin" && (
                <Link
                  to="/admin"
                  className="
      block
      px-5 py-3
      text-purple-400
      hover:bg-slate-800
      transition
      "
                >
                  ⚡ Admin Dashboard
                </Link>
              )}

              <Link
                to="/settings"
                className="
                block
                px-5 py-3
                text-gray-300
                hover:bg-slate-800
                hover:text-white
                transition
                "
              >
                ⚙ Settings
              </Link>

              <button
                onClick={handleLogout}
                className="
  w-full
  text-left
  px-5 py-3
  text-red-400
  hover:bg-slate-800
  transition
  "
              >
                🚪 Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
