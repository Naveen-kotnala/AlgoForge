import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function MySubmissions() {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(
          "http://localhost:5000/api/submissions/my-submissions",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        console.log("SUBMISSIONS:", res.data);
        setSubmissions(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSubmissions();
  }, []);

  return (
    <div
      className="
      min-h-screen
      bg-[#020617]
      text-white
      relative
      overflow-hidden
      "
    >
      {/* Background Glow */}
      <div
        className="
        absolute
        top-20
        left-20
        w-96
        h-96
        bg-purple-600/20
        blur-3xl
        rounded-full
        "
      ></div>
      <div
        className="
        absolute
        right-20
        top-40
        w-96
        h-96
        bg-blue-600/20
        blur-3xl
        rounded-full
        "
      ></div>

      <Navbar />

      <div
        className="
        relative
        pt-28
        px-6
        max-w-6xl
        mx-auto
        "
      >
        {/* Heading */}
        <h1
          className="
          text-5xl
          font-extrabold
          bg-linear-to-r
          from-purple-400
          to-blue-400
          text-transparent
          bg-clip-text
          mb-8
          "
        >
          My Submissions 🚀
        </h1>

        {/* Stats Card */}
        <div
          className="
          mb-8
          bg-linear-to-br
          from-purple-900/40
          to-slate-900
          border
          border-purple-500/30
          rounded-3xl
          p-6
          flex
          justify-between
          items-center
          "
        >
          <div>
            <p className="text-gray-400">Total Attempts</p>
            <h2
              className="
              text-5xl
              font-bold
              text-purple-400
              mt-2
              "
            >
              {submissions.length}
            </h2>
          </div>

          <div className="text-6xl">💻</div>
        </div>

        {/* Submission List Start */}
        <div className="space-y-5">
          {submissions.map((sub) => (
            <div
              key={sub._id}
              className="
              bg-linear-to-br
              from-slate-900
              to-purple-900/20
              border
              border-slate-700
              rounded-3xl
              p-6
              hover:border-purple-500/50
              hover:scale-[1.02]
              transition
              duration-300
              flex
              justify-between
              items-center
              "
            >
              {/* LEFT SIDE */}
              <div>
                <h2
                  className="
                  text-2xl
                  font-bold
                  bg-linear-to-r
                  from-white
                  to-gray-400
                  bg-clip-text
                  text-transparent
                  "
                >
                  {sub.problemId?.title}
                </h2>

                <p className="mt-4">
                  <span className="text-gray-400">Difficulty:</span>
                  <span
                    className={`
                    ml-2
                    px-3
                    py-1
                    rounded-full
                    text-sm
                    ${
                      sub.problemId?.difficulty === "Easy"
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : sub.problemId?.difficulty === "Medium"
                          ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                          : "bg-red-500/20 text-red-400 border border-red-500/30"
                    }
                    `}
                  >
                    {sub.problemId?.difficulty}
                  </span>
                </p>
              </div>

              {/* RIGHT SIDE */}
              <div
                className="
                text-right
                "
              >
                <p className="text-gray-400">
                  Language:
                  <span
                    className="
                    ml-2
                    px-3
                    py-1
                    rounded-full
                    bg-purple-500/20
                    text-purple-300
                    border
                    border-purple-500/30
                    "
                  >
                    {sub.language}
                  </span>
                </p>

                <p
                  className="
                  mt-5
                  inline-flex
                  px-4
                  py-2
                  rounded-full
                  bg-green-500/20
                  text-green-400
                  border
                  border-green-500/30
                  font-semibold
                  "
                >
                  ✅ {sub.status}
                </p>

                <p
                  className="
                  text-gray-400
                  mt-4
                  "
                >
                  {new Date(sub.createdAt).toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* submission list close */}
      </div>
      {/* main container close */}
    </div>
    // page close
  );
}

export default MySubmissions;
