import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const weekdayLabels = ["S", "M", "T", "W", "T", "F", "S"];

// Builds the last N calendar months as {label, year, cells} where each cell
// is either null (padding before day 1 / after the last day) or a Date —
// a simple month-block calendar instead of one giant scrolling row, so it
// always fits its card with no horizontal overflow.
function buildMonths(count = 6) {
  const now = new Date();
  const result = [];
  for (let i = count - 1; i >= 0; i--) {
    const year = now.getFullYear();
    const month = now.getMonth() - i;
    const first = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const leadingBlanks = first.getDay();
    const cells = Array.from({ length: leadingBlanks }).map(() => null);
    for (let d = 1; d <= daysInMonth; d++) {
      cells.push(new Date(first.getFullYear(), first.getMonth(), d));
    }
    result.push({
      label: months[first.getMonth()],
      year: first.getFullYear(),
      cells,
    });
  }
  return result;
}

function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/users/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProfile(res.data);
      } catch (err) {
        console.error("Failed to load profile:", err);
      }
    };
    fetchProfile();
  }, []);

  if (!profile) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex justify-center items-center text-xl">
        Loading Profile...
      </div>
    );
  }

  const easy = profile.easy || 0;
  const medium = profile.medium || 0;
  const hard = profile.hard || 0;
  const difficultyTotal = easy + medium + hard || 1;

  // Ring geometry
  const R = 66;
  const STROKE = 14;
  const CIRC = 2 * Math.PI * R;
  const easyLen = (easy / difficultyTotal) * CIRC;
  const mediumLen = (medium / difficultyTotal) * CIRC;
  const hardLen = (hard / difficultyTotal) * CIRC;

  const monthBlocks = buildMonths(6);
  const activeDays = profile.activity?.length || 0;

  return (
    <div className="min-h-screen bg-[#020617] text-white relative">
      {/* Background glow — contained so it can never cause page overflow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-600/20 blur-3xl rounded-full"></div>
        <div className="absolute right-20 top-40 w-96 h-96 bg-blue-600/20 blur-3xl rounded-full"></div>
      </div>

      <Navbar />

      <div className="relative pt-28 px-6 max-w-7xl mx-auto pb-16">
        <div className="grid lg:grid-cols-[320px_1fr] gap-6 items-start">
          {/* ================= LEFT: PROFILE SIDEBAR ================= */}
          <div className="space-y-6 min-w-0">
            {/* Profile card */}
            <div className="bg-linear-to-br from-purple-900/40 via-slate-900 to-blue-900/40 border border-slate-700 rounded-3xl p-8 text-center">
              <div className="w-28 h-28 mx-auto rounded-full bg-linear-to-r from-purple-500 to-blue-500 p-1 shadow-xl">
                <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center text-4xl font-bold">
                  {profile.user.name.charAt(0).toUpperCase()}
                </div>
              </div>

              <h1 className="text-2xl font-extrabold mt-5 bg-linear-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                {profile.user.name}
              </h1>
              <p className="text-gray-400 text-sm mt-1 truncate">
                {profile.user.email}
              </p>

              <div className="inline-flex mt-4 px-4 py-1.5 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 text-sm">
                ⭐ Level {profile.level}
              </div>

              <button className="w-full mt-6 py-2.5 rounded-xl bg-linear-to-r from-purple-500 to-blue-500 font-semibold hover:opacity-90 transition">
                Edit Profile
              </button>

              {/* XP mini bar */}
              <div className="mt-6 text-left">
                <div className="flex justify-between text-xs text-gray-400 mb-2">
                  <span>XP</span>
                  <span>{profile.xp}/100</span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-linear-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-700"
                    style={{ width: `${Math.min(profile.xp, 100)}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Stats card */}
            <div className="bg-slate-900/80 border border-slate-700 rounded-3xl p-6">
              <h2 className="text-lg font-bold mb-2">Your Stats</h2>

              <div className="flex items-center justify-between py-3 border-b border-slate-800">
                <span className="flex items-center gap-2 text-gray-300">
                  🔥 Current Streak
                </span>
                <span className="font-bold text-orange-400">
                  {profile.streak} days
                </span>
              </div>

              <div className="flex items-center justify-between py-3 border-b border-slate-800">
                <span className="flex items-center gap-2 text-gray-300">
                  🏆 Longest Streak
                </span>
                <span className="font-bold text-purple-300">
                  {profile.longestStreak} days
                </span>
              </div>

              <div className="flex items-center justify-between py-3">
                <span className="flex items-center gap-2 text-gray-300">
                  🎖️ Badges Earned
                </span>
                <span className="font-bold text-blue-300">
                  {profile.badges?.length || 0}
                </span>
              </div>
            </div>
          </div>

          {/* ================= RIGHT: SOLVED / BADGES / ACTIVITY ================= */}
          <div className="space-y-6 min-w-0">
            <div className="grid md:grid-cols-[1fr_300px] gap-6">
              {/* Difficulty ring */}
              <div className="bg-slate-900/80 border border-slate-700 rounded-3xl p-8 min-w-0">
                <div className="flex flex-col sm:flex-row items-center gap-8">
                  <div className="relative w-44 h-44 shrink-0">
                    <svg
                      viewBox="0 0 160 160"
                      className="w-full h-full -rotate-90"
                    >
                      <circle
                        cx="80"
                        cy="80"
                        r={R}
                        fill="none"
                        stroke="#1e293b"
                        strokeWidth={STROKE}
                      />
                      <circle
                        cx="80"
                        cy="80"
                        r={R}
                        fill="none"
                        stroke="#4ade80"
                        strokeWidth={STROKE}
                        strokeLinecap="round"
                        strokeDasharray={`${easyLen} ${CIRC - easyLen}`}
                      />
                      <circle
                        cx="80"
                        cy="80"
                        r={R}
                        fill="none"
                        stroke="#facc15"
                        strokeWidth={STROKE}
                        strokeLinecap="round"
                        strokeDasharray={`${mediumLen} ${CIRC - mediumLen}`}
                        strokeDashoffset={-easyLen}
                      />
                      <circle
                        cx="80"
                        cy="80"
                        r={R}
                        fill="none"
                        stroke="#f87171"
                        strokeWidth={STROKE}
                        strokeLinecap="round"
                        strokeDasharray={`${hardLen} ${CIRC - hardLen}`}
                        strokeDashoffset={-(easyLen + mediumLen)}
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-4xl font-bold">
                        {profile.solved}
                      </span>
                      <span className="text-gray-400 text-sm mt-1">Solved</span>
                    </div>
                  </div>

                  <div className="flex-1 w-full grid grid-cols-3 sm:grid-cols-1 gap-3">
                    <div className="bg-linear-to-br from-green-900/40 to-slate-900 border border-green-500/30 rounded-2xl px-5 py-3 flex sm:justify-between items-center gap-2 flex-col sm:flex-row hover:scale-105 transition">
                      <span className="text-green-400 font-semibold">Easy</span>
                      <span className="text-2xl font-bold">{easy}</span>
                    </div>
                    <div className="bg-linear-to-br from-yellow-900/40 to-slate-900 border border-yellow-500/30 rounded-2xl px-5 py-3 flex sm:justify-between items-center gap-2 flex-col sm:flex-row hover:scale-105 transition">
                      <span className="text-yellow-400 font-semibold">
                        Medium
                      </span>
                      <span className="text-2xl font-bold">{medium}</span>
                    </div>
                    <div className="bg-linear-to-br from-red-900/40 to-slate-900 border border-red-500/30 rounded-2xl px-5 py-3 flex sm:justify-between items-center gap-2 flex-col sm:flex-row hover:scale-105 transition">
                      <span className="text-red-400 font-semibold">Hard</span>
                      <span className="text-2xl font-bold">{hard}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Badges */}
              <div className="bg-slate-900/80 border border-slate-700 rounded-3xl p-6 flex flex-col min-w-0">
                <h2 className="text-lg font-bold">
                  🏆 Badges{" "}
                  <span className="text-purple-300">
                    {profile.badges?.length || 0}
                  </span>
                </h2>

                {profile.badges?.length ? (
                  <div className="flex flex-wrap gap-3 mt-5">
                    {profile.badges.map((badge, index) => (
                      <div
                        key={index}
                        className="bg-slate-800 border border-slate-700 px-4 py-2.5 rounded-xl flex items-center gap-2 hover:scale-105 transition"
                      >
                        <span className="text-xl">{badge.icon}</span>
                        <span className="text-sm font-semibold">
                          {badge.name}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-sm mt-5">
                    No badges yet — keep solving to unlock your first one 🚀
                  </p>
                )}
              </div>
            </div>

            {/* Activity — month-wise calendar, LeetCode style but overflow-safe */}
            <div className="bg-slate-900/80 border border-slate-700 rounded-3xl p-8 min-w-0">
              <div className="flex flex-wrap justify-between items-center gap-3">
                <h2 className="text-xl font-bold">
                  {activeDays}{" "}
                  <span className="text-gray-400 font-normal">
                    active days in the past year
                  </span>
                </h2>
                <p className="text-sm text-gray-400">
                  Current streak:{" "}
                  <span className="text-orange-400 font-semibold">
                    {profile.streak}
                  </span>{" "}
                  · Max streak:{" "}
                  <span className="text-purple-300 font-semibold">
                    {profile.longestStreak}
                  </span>
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-6">
                {monthBlocks.map((block, bi) => (
                  <div
                    key={bi}
                    className="bg-slate-800/40 border border-slate-700/60 rounded-2xl p-4"
                  >
                    <p className="text-sm font-semibold text-gray-300 mb-3">
                      {block.label} {block.year}
                    </p>

                    <div className="grid grid-cols-7 gap-1 mb-1">
                      {weekdayLabels.map((wd, wi) => (
                        <span
                          key={wi}
                          className="text-[9px] text-gray-600 text-center"
                        >
                          {wd}
                        </span>
                      ))}
                    </div>

                    <div className="grid grid-cols-7 gap-1">
                      {block.cells.map((date, ci) => {
                        if (!date) {
                          return <div key={ci} className="w-3.5 h-3.5" />;
                        }
                        const dateString = date.toISOString().split("T")[0];
                        const solvedToday =
                          profile.activity?.includes(dateString);
                        return (
                          <div
                            key={ci}
                            title={dateString}
                            className={`w-3.5 h-3.5 rounded-sm cursor-pointer transition ${
                              solvedToday ? "bg-green-500" : "bg-slate-700"
                            }`}
                          />
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-gray-500 mt-6 text-sm">
                Every green box represents a coding day 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
