import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [openProfile, setOpenProfile] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));
  const isLoggedIn = !!localStorage.getItem("token");

  const closeMobileMenu = () => {
    setOpenMenu(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.location.href = "/";
  };

  const userInitial = user?.name?.charAt(0).toUpperCase() || "";

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
          px-4 sm:px-6 lg:px-8
        "
      >
        <div className="h-20 flex items-center justify-between">

          {/* LOGO */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex items-center gap-3"
          >
            <div
              className="
                w-10 h-10 sm:w-11 sm:h-11
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
                text-xl sm:text-2xl
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

          {/* DESKTOP NAV LINKS */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `transition ${
                  isActive
                    ? "text-purple-400 font-semibold"
                    : "text-gray-300 hover:text-white"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/problems"
              className={({ isActive }) =>
                `transition ${
                  isActive
                    ? "text-purple-400 font-semibold"
                    : "text-gray-300 hover:text-white"
                }`
              }
            >
              Problems
            </NavLink>

            <NavLink
              to="/leaderboard"
              className={({ isActive }) =>
                `transition ${
                  isActive
                    ? "text-purple-400 font-semibold"
                    : "text-gray-300 hover:text-white"
                }`
              }
            >
              Leaderboard
            </NavLink>

            <NavLink
              to="/discuss"
              className={({ isActive }) =>
                `transition ${
                  isActive
                    ? "text-purple-400 font-semibold"
                    : "text-gray-300 hover:text-white"
                }`
              }
            >
              Discuss
            </NavLink>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">

            {/* MOBILE MENU */}
            <button
              onClick={() => setOpenMenu(!openMenu)}
              className="
                md:hidden
                w-10 h-10
                rounded-xl
                border border-slate-700
                bg-slate-900
                text-gray-300
                hover:text-white
                hover:border-purple-500
                transition
                flex items-center justify-center
              "
            >
              {openMenu ? "✕" : "☰"}
            </button>

            {/* GUEST */}
            {!isLoggedIn ? (
              <div className="flex items-center gap-3">
                <Link
                  to="/login"
                  className="
                    px-4 py-2
                    text-gray-300
                    hover:text-white
                    transition
                  "
                >
                  Login
                </Link>

      <Link
  to="/signup"
  className="px-4 py-2 text-gray-300 hover:text-white transition"
>
  Sign Up
</Link>
              </div>
            ) : (
              /* LOGGED IN */
              <div className="relative">
                <button
                  onClick={() => setOpenProfile(!openProfile)}
                  className="
                    w-10 h-10 sm:w-11 sm:h-11
                    rounded-full
                    bg-linear-to-br
                    from-purple-600
                    to-cyan-400
                    flex items-center justify-center
                    text-white
                    font-bold
                    text-lg
                    hover:scale-105
                    transition
                    shadow-lg
                    shadow-purple-500/20
                  "
                >
                  {userInitial}
                </button>

                {/* PROFILE DROPDOWN */}
                {openProfile && (
                  <div
                    className="
                      absolute
                      right-0
                      top-14
                      w-60
                      bg-slate-900
                      border border-slate-800
                      rounded-2xl
                      shadow-2xl
                      overflow-hidden
                      z-50
                    "
                  >
                    {/* USER INFO */}
                    <div className="px-5 py-4 border-b border-slate-800">
                      <p className="text-white font-semibold">
                        {user?.name}
                      </p>

                      <p className="text-sm text-gray-400">
                        {user?.role === "admin" ? "Admin" : "Developer"}
                      </p>
                    </div>

                    <Link
                      to="/profile"
                      onClick={() => setOpenProfile(false)}
                      className="
                        block px-5 py-3
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
                      onClick={() => setOpenProfile(false)}
                      className="
                        block px-5 py-3
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
                        onClick={() => setOpenProfile(false)}
                        className="
                          block px-5 py-3
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
                      onClick={() => setOpenProfile(false)}
                      className="
                        block px-5 py-3
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
            )}
          </div>
        </div>

        {/* MOBILE MENU */}
        {openMenu && (
          <div className="md:hidden border-t border-slate-800 py-4">
            <div className="flex flex-col gap-1">

              <NavLink
                to="/"
                onClick={closeMobileMenu}
                className="px-4 py-3 rounded-xl text-gray-300 hover:bg-slate-900 hover:text-white"
              >
                Home
              </NavLink>

              <NavLink
                to="/problems"
                onClick={closeMobileMenu}
                className="px-4 py-3 rounded-xl text-gray-300 hover:bg-slate-900 hover:text-white"
              >
                Problems
              </NavLink>

              <NavLink
                to="/leaderboard"
                onClick={closeMobileMenu}
                className="px-4 py-3 rounded-xl text-gray-300 hover:bg-slate-900 hover:text-white"
              >
                Leaderboard
              </NavLink>

              <NavLink
                to="/discuss"
                onClick={closeMobileMenu}
                className="px-4 py-3 rounded-xl text-gray-300 hover:bg-slate-900 hover:text-white"
              >
                Discuss
              </NavLink>

              {!isLoggedIn && (
                <>
                  <Link
                    to="/login"
                    onClick={closeMobileMenu}
                    className="px-4 py-3 rounded-xl text-gray-300 hover:bg-slate-900 hover:text-white"
                  >
                    Login
                  </Link>

                  <Link
                    to="/signup"
                    onClick={closeMobileMenu}
                    className="px-4 py-3 rounded-xl text-purple-400 hover:bg-slate-900"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;