// import { Link, useNavigate } from "react-router-dom";

// function Navbar() {

//   const navigate = useNavigate();

//   const logout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">

//      <div className="max-w-7xl h-16 mx-auto px-8 flex items-center justify-between">

//         {/* Logo */}
//         <Link to="/" className="flex items-center gap-2">

//           <div className="w-10 h-10 rounded-xl bg-linear-to-r from-purple-600 to-blue-500 flex items-center justify-center text-white font-bold text-xl">
//             A
//           </div>

//           <h1 className="text-2xl font-bold text-white">
//             Algo<span className="text-purple-500">Forge</span>
//           </h1>

//         </Link>

//         {/* Menu */}
//         <div className="hidden md:flex items-center gap-8 text-gray-300">

//           <Link
//             to="/problems"
//             className="hover:text-white transition duration-300"
//           >
//             Problems
//           </Link>

//           <Link
//             to="/my-submissions"
//             className="hover:text-white transition duration-300"
//           >
//             My Submissions
//           </Link>

//           <Link
//   to="/profile"
//   className="hover:text-white transition duration-300"
// >
//   Profile
// </Link>

//           <a
//             href="#"
//             className="hover:text-white transition duration-300"
//           >
//             Contests
//           </a>

//           <a
//             href="#"
//             className="hover:text-white transition duration-300"
//           >
//             Leaderboard
//           </a>

//           <a
//             href="#"
//             className="hover:text-white transition duration-300"
//           >
//             Discuss
//           </a>

//         </div>

//         {/* Buttons */}
//         <div className="flex gap-4">

//           {
//             localStorage.getItem("token") ? (

//               <button
//                 onClick={logout}
//                 className="px-5 py-2 rounded-xl text-gray-300 hover:text-white transition"
//               >
//                 Logout
//               </button>

//             ) : (

//               <Link
//                 to="/login"
//                 className="px-5 py-2 rounded-xl text-gray-300 hover:text-white transition"
//               >
//                 Login
//               </Link>

//             )
//           }

//           <Link
//             to="/signup"
//             className="px-5 py-2 rounded-xl bg-linear-to-r from-purple-600 to-blue-500 text-white font-semibold hover:scale-105 transition"
//           >
//             Get Started
//           </Link>

//         </div>

//       </div>

//     </nav>
//   )
// }

// export default Navbar;

// import { Link, NavLink } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav
//       className="
//     fixed top-0 left-0 w-full z-50
//     bg-slate-950/70
//     backdrop-blur-xl
//     border-b border-slate-800
//     "
//     >
//       <div
//         className="
//       max-w-7xl mx-auto
//       px-6 lg:px-8
//       h-20
//       flex items-center justify-between
//       "
//       >
//         {/* Logo */}

//         <Link to="/" className="flex items-center gap-2">
//           <div
//             className="
//           w-10 h-10
//           rounded-xl
//           bg-gradient-to-br
//           from-purple-600
//           to-cyan-400
//           flex items-center justify-center
//           font-bold text-xl
//           text-white
//           shadow-lg shadow-purple-500/30
//           "
//           >
//             A
//           </div>

//           <span
//             className="
//           text-2xl
//           font-extrabold
//           bg-gradient-to-r
//           from-purple-400
//           to-cyan-400
//           bg-clip-text
//           text-transparent
//           "
//           >
//             AlgoForge
//           </span>
//         </Link>

//         {/* Links */}

//         <div
//           className="
//         hidden md:flex
//         items-center gap-8
//         "
//         >
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               isActive
//                 ? "text-purple-400 font-semibold"
//                 : "text-gray-300 hover:text-white transition"
//             }
//           >
//             Home
//           </NavLink>

//           <NavLink
//             to="/problems"
//             className={({ isActive }) =>
//               isActive
//                 ? "text-purple-400 font-semibold"
//                 : "text-gray-300 hover:text-white transition"
//             }
//           >
//             Problems
//           </NavLink>

//           <NavLink
//             to="/leaderboard"
//             className="
//             text-gray-300
//             hover:text-white
//             transition
//             "
//           >
//             Leaderboard
//           </NavLink>

//           <NavLink
//             to="/discuss"
//             className="
//             text-gray-300
//             hover:text-white
//             transition
//             "
//           >
//             Discuss
//           </NavLink>
//         </div>

//         {/* Right Buttons */}

//         <div
//           className="
//         flex items-center gap-4
//         "
//         >
//           <Link
//             to="/login"
//             className="
//             hidden sm:block
//             text-gray-300
//             hover:text-white
//             transition
//             "
//           >
//             Login
//           </Link>

//           <Link
//             to="/signup"
//             className="
//             px-5 py-2.5
//             rounded-xl
//             bg-gradient-to-r
//             from-purple-600
//             to-cyan-500
//             font-semibold
//             hover:scale-105
//             transition
//             shadow-lg
//             shadow-purple-500/20
//             "
//           >
//             Get Started
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

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
          bg-gradient-to-br
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
          bg-gradient-to-r
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

          <NavLink
            to="/submissions"
            className="text-gray-300 hover:text-white transition"
          >
            My Submissions
          </NavLink>
        </div>

        {/* PROFILE */}

        <div className="relative">
          <button
            onClick={() => setOpenProfile(!openProfile)}
            className="
            w-11 h-11
            rounded-full
            bg-gradient-to-br
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
