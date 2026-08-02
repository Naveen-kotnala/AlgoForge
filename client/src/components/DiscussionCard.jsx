import { FaHeart, FaCommentDots, FaUserCircle, FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";

function DiscussionCard({ discussion }) {
  const difficultyColor = {
    Easy: "text-green-400 bg-green-400/10 border-green-400/30",
    Medium: "text-yellow-400 bg-yellow-400/10 border-yellow-400/30",
    Hard: "text-red-400 bg-red-400/10 border-red-400/30",
  };

  return (
    <Link to={`/discuss/${discussion._id}`}>
      <div
        className="
      group
      bg-slate-900/70
      backdrop-blur-xl
      border
      border-slate-700
      rounded-3xl
      p-6
      shadow-lg
      hover:-translate-y-2
      hover:shadow-purple-500/20
      transition-all
      duration-300
      cursor-pointer
      "
      >
        {/* Top Section */}

        <div className="flex justify-between items-center">
          <span
            className={`
          px-3 py-1
          rounded-full
          text-xs
          border
          ${
            difficultyColor[discussion.problemId?.difficulty] ||
            difficultyColor.Easy
          }
          `}
          >
            {discussion.problemId?.difficulty || "Easy"}
          </span>

          <div
            className="
        flex
        gap-3
        text-sm
        text-slate-400
        "
          >
            <span className="flex items-center gap-1">
              <FaHeart className="text-pink-400" />
              {discussion.likes || 0}
            </span>

            <span className="flex items-center gap-1">
              <FaCommentDots className="text-blue-400" />
              {discussion.comments || 0}
            </span>
          </div>
        </div>

        {/* Problem Name */}

        <h3
          className="
      mt-5
      text-sm
      text-purple-400
      font-semibold
      "
        >
          {discussion.problemId?.title || "Problem"}
        </h3>

        {/* Discussion Title */}

        <h2
          className="
      mt-2
      text-xl
      font-bold
      text-white
      group-hover:text-purple-400
      transition
      "
        >
          {discussion.title}
        </h2>

        {/* Content */}

        <p
          className="
      mt-3
      text-slate-400
      line-clamp-3
      "
        >
          {discussion.content}
        </p>

        {/* Footer */}

        <div
          className="
      mt-6
      pt-4
      border-t
      border-slate-700
      flex
      justify-between
      items-center
      "
        >
          {/* User */}

          <div
            className="
        flex
        items-center
        gap-2
        text-slate-300
        "
          >
            <FaUserCircle
              className="
          text-2xl
          text-purple-400
          "
            />

            <span>{discussion.userId?.name || "User"}</span>
          </div>

          {/* Time */}

          <div
            className="
        flex
        items-center
        gap-1
        text-xs
        text-slate-500
        "
          >
            <FaClock />
            Just now
          </div>
        </div>
      </div>
    </Link>
  );
}

export default DiscussionCard;
