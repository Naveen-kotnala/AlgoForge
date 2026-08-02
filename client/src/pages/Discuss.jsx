import { useEffect, useState } from "react";
import axios from "axios";
import DiscussionCard from "../components/DiscussionCard";
import { FaSearch, FaPlus } from "react-icons/fa";

function Discuss() {
  const [problems, setProblems] = useState([]);

  const [form, setForm] = useState({
    problemId: "",
    title: "",
    content: "",
  });
  const [filter, setFilter] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [discussions, setDiscussions] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchDiscussions();
    fetchProblems();
  }, []);

  const fetchDiscussions = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/discussions");

      setDiscussions(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredDiscussions = discussions.filter((item) => {
    const textMatch =
      item.title?.toLowerCase().includes(search.toLowerCase()) ||
      item.content?.toLowerCase().includes(search.toLowerCase()) ||
      item.problemId?.title?.toLowerCase().includes(search.toLowerCase());

    const difficultyMatch =
      filter === "All" || item.problemId?.difficulty === filter;

    return textMatch && difficultyMatch;
  });

  const fetchProblems = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/problems");

      setProblems(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createDiscussion = async () => {
    try {
      await axios.post("http://localhost:5000/api/discussions", form, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setShowModal(false);

      setForm({
        problemId: "",
        title: "",
        content: "",
      });

      fetchDiscussions();
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
max-w-6xl
mx-auto
text-center
py-8
relative
"
      >
        <div
          className="
absolute
top-0
left-1/2
-translate-x-1/2
w-72
h-72
bg-purple-600
rounded-full
blur-[100px]
opacity-20
"
        />

        <div className="relative z-10">
          <div
            className="
text-4xl
mb-2
"
          >
            💬
          </div>

          <h1
            className="
text-4xl
md:text-5xl
font-extrabold
bg-linear-to-r
from-purple-400
to-blue-400
bg-clip-text
text-transparent
"
          >
            AlgoForge Discuss
          </h1>

          <p
            className="
mt-3
text-slate-400
text-base
"
          >
            Ask questions • Share solutions • Learn together 🚀
          </p>

          <div
            className="
mt-5
flex
justify-center
gap-3
flex-wrap
"
          >
            <span
              className="
px-4
py-2
rounded-full
bg-slate-900
border
border-slate-700
text-sm
"
            >
              🔥 170+ Problems
            </span>

            <span
              className="
px-4
py-2
rounded-full
bg-slate-900
border
border-slate-700
text-sm
"
            >
              💬 Community
            </span>

            <span
              className="
px-4
py-2
rounded-full
bg-slate-900
border
border-slate-700
text-sm
"
            >
              👨‍💻 Developers
            </span>
          </div>
        </div>
      </div>

      {/* SEARCH + BUTTON */}
      <div
        className="
max-w-6xl
mx-auto
mt-8
flex
flex-wrap
gap-4
items-center
"
      >
        <p
          className="
text-slate-400
font-medium
"
        >
          Filter:
        </p>

        {["All", "Easy", "Medium", "Hard"].map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`
px-6
py-3
rounded-2xl
border
backdrop-blur-xl
transition-all
duration-300
font-semibold

hover:-translate-y-1
hover:shadow-lg

${
  filter === item
    ? "bg-linear-to-r from-purple-600 to-blue-600 border-purple-400 text-white shadow-purple-500/30"
    : "bg-slate-900/70 border-slate-700 text-slate-300 hover:border-purple-500"
}

`}
          >
            {item === "All" && "✨ "}

            {item === "Easy" && "🟢 "}

            {item === "Medium" && "🟡 "}

            {item === "Hard" && "🔴 "}

            {item}
          </button>
        ))}
      </div>

      <div
        className="
      max-w-6xl
      mx-auto
      mt-10
      flex
      flex-col
      md:flex-row
      gap-4
      justify-between
      "
      >
        <div
          className="
        flex
        items-center
        bg-slate-900
        border
        border-slate-700
        rounded-2xl
        px-5
        py-3
        flex-1
        shadow-lg
shadow-black/20
hover:border-purple-500
transition
        "
        >
          <FaSearch
            className="
          text-slate-400
          "
          />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search discussions..."
            className="
          bg-transparent
          outline-none
          ml-3
          w-full
          text-white
          "
          />
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="
bg-linear-to-r
from-purple-600
to-blue-600
hover:scale-105
px-6
py-3
rounded-2xl
flex
items-center
gap-2
font-semibold
transition
shadow-lg
shadow-purple-500/30
"
        >
          <FaPlus />
          Ask Question
        </button>
      </div>

      {/* DISCUSSIONS */}

      <div
        className="
      max-w-6xl
      mx-auto
      mt-10
      grid
      md:grid-cols-2
      gap-6
      "
      >
        {filteredDiscussions.length === 0 ? (
          <p
            className="
            text-center
            text-slate-400
            col-span-2
            "
          >
            No discussions found
          </p>
        ) : (
          filteredDiscussions.map((item) => (
            <DiscussionCard key={item._id} discussion={item} />
          ))
        )}
      </div>

      {showModal && (
        <div
          className="
fixed
inset-0
bg-black/60
backdrop-blur-sm
flex
items-center
justify-center
z-50
"
        >
          <div
            className="
bg-slate-900
border
border-slate-700
rounded-3xl
p-8
w-full
max-w-lg
"
          >
            <h2 className="text-2xl font-bold mb-5">Ask Question 💬</h2>

            <select
              className="
w-full
bg-slate-800
p-3
rounded-xl
mb-4
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
              placeholder="Title"
              className="
w-full
bg-slate-800
p-3
rounded-xl
mb-4
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
              className="
w-full
bg-slate-800
p-3
rounded-xl
mb-4
"
              rows="5"
              value={form.content}
              onChange={(e) =>
                setForm({
                  ...form,
                  content: e.target.value,
                })
              }
            />

            <div className="flex gap-3">
              <button
                onClick={createDiscussion}
                className="
bg-purple-600
px-5
py-3
rounded-xl
"
              >
                Post
              </button>

              <button
                onClick={() => setShowModal(false)}
                className="
bg-slate-700
px-5
py-3
rounded-xl
"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Discuss;
