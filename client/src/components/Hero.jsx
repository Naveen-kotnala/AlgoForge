import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-40 -left-32 w-96 h-96 bg-purple-600/20 blur-3xl rounded-full" />

      <div className="absolute top-40 -right-20 w-125 h-125 bg-cyan-500/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-28 lg:pt-36 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}

          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
            border border-purple-500/30 bg-purple-500/10 
            text-purple-300 text-sm mb-6"
            >
              🚀 India's Modern Coding Platform
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Master
              <span className="block text-purple-500">Data Structures</span>&
              Crack
              <span className="block text-cyan-400">Coding Interviews</span>
            </h1>

            <p className="mt-7 text-gray-400 text-lg leading-8 max-w-xl">
              Practice coding problems, solve real interview questions, write
              code in an online compiler, and track your progress — all in one
              powerful platform.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/problems"
                className="
                bg-purple-600 
                hover:bg-purple-700 
                px-8 py-4 
                rounded-xl 
                font-semibold 
                transition 
                shadow-lg shadow-purple-600/20
                "
              >
                Start Solving →
              </Link>

              <Link
                to="/problems"
                className="
                border border-slate-700 
                hover:border-purple-500 
                px-8 py-4 
                rounded-xl 
                font-semibold 
                transition
                "
              >
                Explore Problems
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-gray-400 text-sm">
              <span>✓ Online Compiler</span>

              <span>✓ Interview Problems</span>

              <span>✓ Progress Tracking</span>
            </div>
          </div>

          {/* RIGHT CODE CARD */}

          <div className="relative">
            <div
              className="
  bg-slate-900 
  border border-slate-800 
  rounded-3xl 
  shadow-2xl 
  overflow-hidden
  relative
  "
            >
              {/* Floating Card 1 */}

              <div
                className="
    absolute 
    left-4 
    top-4 
    bg-slate-900 
    border border-slate-800 
    rounded-2xl 
    p-4 
    shadow-xl
    z-10
    "
              >
                <p className="text-gray-400 text-sm">Problems Solved</p>

                <h2 className="text-3xl font-bold text-green-400">150+</h2>
              </div>

              {/* Floating Card 2 */}

              <div
                className="
    absolute 
    right-4 
    bottom-20 
    bg-slate-900 
    border border-slate-800 
    rounded-2xl 
    p-4 
    shadow-xl
    z-10
    "
              >
                <p className="text-gray-400 text-sm">Acceptance</p>

                <h2 className="text-3xl font-bold text-purple-400">98%</h2>
              </div>

              {/* Header */}

              <div
                className="
    flex justify-between items-center 
    px-5 py-4 
    border-b border-slate-800
    "
              >
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>

                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>

                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>

                <span className="text-sm text-gray-400">Solution.cpp</span>

                <span className="text-green-400 text-sm">C++</span>
              </div>

              {/* Code */}

              <div
                className="
    p-6 
    font-mono 
    text-sm 
    leading-8 
    overflow-x-auto
    mt-12
    "
              >
                <span className="text-purple-400">class</span>{" "}
                <span className="text-cyan-400">Solution</span>
                {" {"}
                <br />
                <span className="ml-5 text-purple-400">public:</span>
                <br />
                <span className="ml-5 text-blue-400">
                  vector&lt;int&gt;
                </span>{" "}
                <span className="text-yellow-300">twoSum</span>
                (vector&lt;int&gt;& nums, int target)
                <br />
                <span className="ml-5">{"{"}</span>
                <br />
                <span className="ml-10 text-gray-500">
                  // Write your code here
                </span>
                <br />
                <span className="ml-5">{"}"}</span>
                <br />
                {"}"};
              </div>

              {/* Bottom */}

              <div
                className="
    border-t border-slate-800 
    bg-slate-950 
    p-5
    "
              >
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-gray-500 text-sm">Verdict</p>

                    <p className="text-green-400 font-bold">Accepted ✓</p>
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm">Runtime</p>

                    <p>2 ms</p>
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm">Memory</p>

                    <p>8.3 MB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
