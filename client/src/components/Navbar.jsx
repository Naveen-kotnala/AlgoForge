import { Link, useNavigate } from "react-router-dom";


function Navbar() {

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };


  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">

      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">


        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">

          <div className="w-10 h-10 rounded-xl bg-linear-to-r from-purple-600 to-blue-500 flex items-center justify-center text-white font-bold text-xl">
            A
          </div>

          <h1 className="text-2xl font-bold text-white">
            Algo<span className="text-purple-500">Forge</span>
          </h1>

        </Link>



        {/* Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-300">


          <Link
            to="/problems"
            className="hover:text-white transition duration-300"
          >
            Problems
          </Link>


          <Link
            to="/my-submissions"
            className="hover:text-white transition duration-300"
          >
            My Submissions
          </Link>


          <Link
  to="/profile"
  className="hover:text-white transition duration-300"
>
  Profile
</Link>


          <a 
            href="#"
            className="hover:text-white transition duration-300"
          >
            Contests
          </a>


          <a 
            href="#"
            className="hover:text-white transition duration-300"
          >
            Leaderboard
          </a>


          <a 
            href="#"
            className="hover:text-white transition duration-300"
          >
            Discuss
          </a>


        </div>




        {/* Buttons */}
        <div className="flex gap-4">


          {
            localStorage.getItem("token") ? (

              <button
                onClick={logout}
                className="px-5 py-2 rounded-xl text-gray-300 hover:text-white transition"
              >
                Logout
              </button>

            ) : (

              <Link
                to="/login"
                className="px-5 py-2 rounded-xl text-gray-300 hover:text-white transition"
              >
                Login
              </Link>

            )
          }



          <Link
            to="/signup"
            className="px-5 py-2 rounded-xl bg-linear-to-r from-purple-600 to-blue-500 text-white font-semibold hover:scale-105 transition"
          >
            Get Started
          </Link>


        </div>


      </div>

    </nav>
  )
}

export default Navbar;