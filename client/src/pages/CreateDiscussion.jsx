import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateDiscussion() {
  const [problems, setProblems] = useState([]);

  const [form, setForm] = useState({
    problemId: "",
    title: "",
    content: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    fetchProblems();
  }, []);

  const fetchProblems = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/problems");

      setProblems(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/discussions", form, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      navigate("/discuss");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="
    min-h-screen
    bg-slate-950
    text-white
    px-6
    py-10
    "
    >
      <div
        className="
      max-w-3xl
      mx-auto
      bg-slate-900
      border
      border-slate-700
      rounded-3xl
      p-8
      "
      >
        <h1
          className="
      text-3xl
      font-bold
      mb-8
      "
        >
          Ask Question 💬
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <select
            className="
      w-full
      bg-slate-800
      border
      border-slate-700
      rounded-xl
      p-3
      "
            value={form.problemId}
            onChange={(e) =>
              setForm({
                ...form,
                problemId: e.target.value,
              })
            }
          >
            <option value="">Select Problem</option>

            {problems.map((problem) => (
              <option key={problem._id} value={problem._id}>
                {problem.title}
              </option>
            ))}
          </select>

          <input
            placeholder="Discussion title"
            className="
      w-full
      bg-slate-800
      border
      border-slate-700
      rounded-xl
      p-3
      "
            value={form.title}
            onChange={(e) =>
              setForm({
                ...form,
                title: e.target.value,
              })
            }
          />

          <textarea
            placeholder="Explain your doubt..."
            rows="6"
            className="
      w-full
      bg-slate-800
      border
      border-slate-700
      rounded-xl
      p-3
      "
            value={form.content}
            onChange={(e) =>
              setForm({
                ...form,
                content: e.target.value,
              })
            }
          />

          <button
            className="
      bg-purple-600
      hover:bg-purple-700
      px-6
      py-3
      rounded-xl
      font-semibold
      "
          >
            Post Discussion
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateDiscussion;
