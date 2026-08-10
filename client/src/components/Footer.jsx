import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 mt-20">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Logo */}
          <div>
            <h2 className="text-3xl font-bold text-purple-500">AlgoForge</h2>

            <p className="mt-5 text-gray-400 leading-7">
              Master Data Structures & Algorithms with an online coding platform
              built for interview preparation.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-lg mb-5">Navigation</h3>

            <div className="flex flex-col gap-3 text-gray-400">
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>

              <Link to="/problems" className="hover:text-white transition">
                Problems
              </Link>

              <Link to="/submissions" className="hover:text-white transition">
                Submissions
              </Link>

              <Link to="/profile" className="hover:text-white transition">
                Profile
              </Link>
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-semibold text-lg mb-5">Features</h3>

            <div className="flex flex-col gap-3 text-gray-400">
              <span>Online Compiler</span>
              <span>Interview Problems</span>
              <span>Progress Tracking</span>
              <span>Admin Dashboard</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-5">Connect</h3>

            <div className="flex flex-col gap-3 text-gray-400">
              <a
                href="https://github.com/Naveen-kotnala/AlgoForge"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
              >
                GitHub
              </a>

              <a
                href="www.linkedin.com/in/naveen-kotnala-0572b125a"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
              >
                LinkedIn
              </a>

              <a
                href="naveenkotnala2@gmail.com"
                className="hover:text-white transition"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} AlgoForge. All rights reserved.</p>

          <p className="mt-4 md:mt-0">
            Built with ❤️ using React, Node.js & MongoDB
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
