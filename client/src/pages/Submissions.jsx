import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function Submissions() {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/code/submissions",
        );

        setSubmissions(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSubmissions();
  }, []);

  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <Navbar />

      <div className="pt-28 px-8">
        <h1 className="text-4xl font-bold">My Submissions</h1>

        <div
          className="
        mt-10
        bg-slate-900
        border
        border-slate-800
        rounded-2xl
        overflow-hidden
        "
        >
          {submissions.map((submission) => (
            <div
              key={submission._id}
              className="
            p-5
            border-b
            border-slate-800
            flex
            justify-between
            "
            >
              <div>
                <p className="font-semibold">
                  Problem:
                  {submission.problemId?.title}
                </p>

                <p className="text-gray-400 mt-2">
                  Language: {submission.language}
                </p>
              </div>

              <span
                className="
              text-green-400
              font-semibold
              "
              >
                {submission.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Submissions;
