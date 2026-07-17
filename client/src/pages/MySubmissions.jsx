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
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <div className="pt-24 px-8">
        <h1 className="text-3xl font-bold mb-8">My Submissions</h1>

        <div className="space-y-4">
          {submissions.map((sub) => (
            <div
              key={sub._id}
              className="
           bg-slate-900
              border
          border-slate-800
            rounded-xl
             p-5
              mb-4
              flex
              justify-between
            items-center
                "
            >
              <div>
                <h2 className="text-xl font-bold">{sub.problemId?.title}</h2>

                <p className="text-gray-400 mt-2">
                  Difficulty:
                  {sub.problemId?.difficulty}
                </p>
              </div>

              <div className="text-right">
                <p>
                  Language:
                  <span className="text-purple-400">{sub.language}</span>
                </p>

                <p className="text-green-400 mt-2">{sub.status}</p>

                <p className="text-gray-400 mt-2">
                  {new Date(sub.createdAt).toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MySubmissions;
