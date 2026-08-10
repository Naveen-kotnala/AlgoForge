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
          left-10
          sm:left-20
          w-64
          sm:w-96
          h-64
          sm:h-96
          bg-purple-600/20
          blur-3xl
          rounded-full
          pointer-events-none
        "
      ></div>

      <div
        className="
          absolute
          right-10
          sm:right-20
          top-40
          w-64
          sm:w-96
          h-64
          sm:h-96
          bg-blue-600/20
          blur-3xl
          rounded-full
          pointer-events-none
        "
      ></div>

      <Navbar />

      <div
        className="
          relative
          pt-28
          sm:pt-30
          lg:pt-28
          px-4
          sm:px-6
          max-w-6xl
          mx-auto
          pb-10
        "
      >
        {/* Heading */}

        <h1
          className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            font-extrabold
            bg-linear-to-r
            from-purple-400
            to-blue-400
            text-transparent
            bg-clip-text
            mb-8
            leading-tight
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
            p-5
            sm:p-6
            flex
            justify-between
            items-center
            gap-4
          "
        >
          <div>
            <p className="text-gray-400 text-sm sm:text-base">Total Attempts</p>

            <h2
              className="
                text-4xl
                sm:text-5xl
                font-bold
                text-purple-400
                mt-2
              "
            >
              {submissions.length}
            </h2>
          </div>

          <div
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              shrink-0
            "
          >
            💻
          </div>
        </div>

        {/* Submission List */}

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
                p-4
                sm:p-5
                md:p-6
                hover:border-purple-500/50
                hover:scale-[1.01]
                sm:hover:scale-[1.02]
                transition
                duration-300
              "
            >
              {/* Main Content */}

              <div
                className="
                  flex
                  flex-col
                  md:flex-row
                  md:justify-between
                  md:items-center
                  gap-5
                "
              >
                {/* LEFT SIDE */}

                <div className="min-w-0">
                  <h2
                    className="
                      text-xl
                      sm:text-2xl
                      font-bold
                      bg-linear-to-r
                      from-white
                      to-gray-400
                      bg-clip-text
                      text-transparent
                      wrap-break-word
                    "
                  >
                    {sub.problemId?.title}
                  </h2>

                  <p
                    className="
                      mt-4
                      flex
                      flex-wrap
                      items-center
                      gap-2
                    "
                  >
                    <span className="text-gray-400">Difficulty:</span>

                    <span
                      className={`
                        px-3
                        py-1
                        rounded-full
                        text-xs
                        sm:text-sm
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
                    md:text-right
                    w-full
                    md:w-auto
                  "
                >
                  <p
                    className="
                      text-gray-400
                      flex
                      flex-wrap
                      md:justify-end
                      items-center
                      gap-2
                    "
                  >
                    <span>Language:</span>

                    <span
                      className="
                        px-3
                        py-1
                        rounded-full
                        bg-purple-500/20
                        text-purple-300
                        border
                        border-purple-500/30
                        text-xs
                        sm:text-sm
                      "
                    >
                      {sub.language}
                    </span>
                  </p>

                  <p
                    className="
                      mt-4
                      md:mt-5
                      inline-flex
                      px-4
                      py-2
                      rounded-full
                      bg-green-500/20
                      text-green-400
                      border
                      border-green-500/30
                      font-semibold
                      text-sm
                    "
                  >
                    ✅ {sub.status}
                  </p>

                  <p
                    className="
                      text-gray-400
                      text-sm
                      mt-3
                      md:mt-4
                      wrap-break-word
                    "
                  >
                    {new Date(sub.createdAt).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MySubmissions;
