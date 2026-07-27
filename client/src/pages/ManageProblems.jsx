import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ManageProblems() {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    fetchProblems();
  }, []);

  const fetchProblems = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get("http://localhost:5000/api/admin/problems", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setProblems(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const navigate = useNavigate();

  const deleteProblem = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this problem?",
    );

    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("token");

      await axios.delete(`http://localhost:5000/api/admin/problem/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      fetchProblems();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Manage Problems</h1>

      <div className="space-y-4">
        {problems.map((problem) => (
          <div
            key={problem._id}
            className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex justify-between items-center"
          >
            <div>
              <h2 className="text-xl font-semibold">{problem.title}</h2>
              <p className="text-gray-400">{problem.difficulty}</p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => navigate(`/admin/edit-problem/${problem._id}`)}
                className="bg-yellow-600 hover:bg-yellow-700 px-4 py-2 rounded-lg"
              >
                Edit
              </button>

              <button
                onClick={() => deleteProblem(problem._id)}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManageProblems;
