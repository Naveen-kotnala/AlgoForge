import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { FaArrowLeft, FaHeart, FaUserCircle } from "react-icons/fa";

function DiscussionDetail() {
  const { id } = useParams();

  const [discussion, setDiscussion] = useState(null);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  useEffect(() => {
    fetchDiscussion();
    fetchComments();
  }, []);

  const fetchDiscussion = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/discussions/${id}`,
      );

      setDiscussion(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchComments = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/comments/${id}`);

      setComments(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addComment = async () => {
    if (!commentText.trim()) return;

    try {
      await axios.post(
        "http://localhost:5000/api/comments",
        {
          discussionId: id,
          text: commentText,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );

      setCommentText("");

      fetchComments();
    } catch (error) {
      console.log(error);
    }
  };

  const likeDiscussion = async () => {
    try {
      const res = await axios.put(
        `http://localhost:5000/api/discussions/${id}/like`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );

      setDiscussion({
        ...discussion,
        likes: res.data.likes,
      });
    } catch (error) {
      console.log(error);
    }
  };

  if (!discussion) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex justify-center items-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <Link
          to="/discuss"
          className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-8"
        >
          <FaArrowLeft />
          Back to Discussions
        </Link>

        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8">
          <div className="flex gap-3 flex-wrap">
            <span
              className="
    px-4
    py-2
    rounded-full
    bg-purple-600/20
    border
    border-purple-500
    text-purple-300
    text-sm
    "
            >
              {discussion.problemId?.title}
            </span>

            <span
              className="
    px-4
    py-2
    rounded-full
    bg-green-600/20
    border
    border-green-500
    text-green-300
    text-sm
    "
            >
              {discussion.problemId?.difficulty}
            </span>
          </div>

          <h1 className="text-4xl font-bold mt-3">{discussion.title}</h1>

          <div className="flex items-center gap-3 mt-6">
            <div
              className="
w-12
h-12
rounded-full
bg-linear-to-r
from-purple-600
to-blue-600
flex
items-center
justify-center
font-bold
text-lg
"
            >
              {discussion.userId?.name?.charAt(0)}
            </div>

            <div>
              <p>{discussion.userId?.name}</p>

              <p className="text-slate-400 text-sm">
                {new Date(discussion.createdAt).toLocaleDateString()}
              </p>
            </div>
            <div className="ml-auto flex gap-6">
              <div className="text-center">
                <p className="text-xl font-bold">❤️ {discussion.likes || 0}</p>

                <p className="text-xs text-slate-500">Likes</p>
              </div>

              <div className="text-center">
                <p className="text-xl font-bold">💬 {comments.length}</p>

                <p className="text-xs text-slate-500">Comments</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-slate-300 leading-8 whitespace-pre-wrap">
            {discussion.content}
          </div>

          <button
            onClick={likeDiscussion}
            className="
  mt-8
  flex
  items-center
  gap-2
  px-5
  py-3
  rounded-full
  border
  border-red-500/30
  bg-red-500/10
  text-red-400
  hover:bg-red-500
  hover:text-white
  transition-all
  duration-300
  shadow-lg
  shadow-red-500/10
  "
          >
            <FaHeart className="text-lg" />
            Like {discussion.likes || 0}
          </button>

          <div className="mt-10 border-t border-slate-700 pt-8">
            <h2 className="text-2xl font-bold">💬 Comments</h2>

            <div className="mt-5 flex gap-3">
              <input
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Write a comment..."
                className="
flex-1
bg-slate-800
border
border-slate-700
rounded-xl
px-4
py-3
outline-none
"
              />

              <button
                onClick={addComment}
                className="
bg-purple-600
px-5
rounded-xl
hover:bg-purple-700
"
              >
                Post
              </button>
            </div>

            <div className="mt-8 space-y-4">
              {comments.length === 0 ? (
                <p className="text-slate-400">No comments yet</p>
              ) : (
                comments.map((comment) => (
                  <div
                    key={comment._id}
                    className="
bg-slate-800
p-4
rounded-2xl
"
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className="
w-8
h-8
rounded-full
bg-purple-600
flex
items-center
justify-center
font-bold
"
                      >
                        {comment.userId?.name?.charAt(0)}
                      </div>

                      <p className="font-semibold">{comment.userId?.name}</p>
                    </div>

                    <p className="mt-3 text-slate-300">{comment.text}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiscussionDetail;
