import { useEffect, useState } from "react";
import axios from "axios";

function Statistics() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalProblems: 0,
    totalSubmissions: 0,
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get("http://localhost:5000/api/admin/stats", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setStats(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const statCards = [
    {
      title: "Total Users",
      value: stats.totalUsers,
      icon: "👥",
      description: "Registered developers",
      iconBg: "bg-blue-500/10",
      iconText: "text-blue-400",
      glow: "group-hover:bg-blue-500/10",
    },
    {
      title: "Total Problems",
      value: stats.totalProblems,
      icon: "🧩",
      description: "Coding challenges",
      iconBg: "bg-purple-500/10",
      iconText: "text-purple-400",
      glow: "group-hover:bg-purple-500/10",
    },
    {
      title: "Total Submissions",
      value: stats.totalSubmissions,
      icon: "🚀",
      description: "Solutions submitted",
      iconBg: "bg-green-500/10",
      iconText: "text-green-400",
      glow: "group-hover:bg-green-500/10",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="absolute top-40 -right-32 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12">
        {/* HEADER */}

        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-xl">
              📊
            </div>

            <span className="text-sm font-medium text-purple-400 uppercase tracking-wider">
              Admin Analytics
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Statistics{" "}
            <span className="bg-linear-to-r from-purple-400 via-blue-400 to-cyan-400 text-transparent bg-clip-text">
              Dashboard
            </span>
          </h1>

          <p className="text-gray-400 mt-3 text-sm sm:text-base max-w-2xl">
            Monitor your AlgoForge platform performance and community growth
            from one place.
          </p>
        </div>

        {/* OVERVIEW HEADER */}

        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold">Platform Overview</h2>

            <p className="text-gray-500 text-sm mt-1">
              Real-time platform statistics
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-full bg-green-500/10 border border-green-500/20">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-400 text-xs font-medium">Live</span>
          </div>
        </div>

        {/* STAT CARDS */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {statCards.map((card) => (
            <div
              key={card.title}
              className={`
                group
                relative
                overflow-hidden
                bg-slate-900/70
                backdrop-blur-xl
                border
                border-slate-800
                hover:border-slate-700
                rounded-2xl
                p-6
                transition-all
                duration-300
                hover:-translate-y-1
                ${card.glow}
              `}
            >
              {/* Card Glow */}

              <div
                className="
                  absolute
                  -right-10
                  -top-10
                  w-32
                  h-32
                  bg-white/2
                  blur-2xl
                  rounded-full
                  group-hover:scale-150
                  transition-transform
                  duration-500
                "
              />

              <div className="relative">
                {/* ICON */}

                <div
                  className={`
                    w-12
                    h-12
                    rounded-xl
                    ${card.iconBg}
                    border
                    border-white/5
                    flex
                    items-center
                    justify-center
                    text-xl
                    ${card.iconText}
                  `}
                >
                  {card.icon}
                </div>

                {/* TITLE */}

                <p className="text-gray-400 text-sm font-medium mt-6">
                  {card.title}
                </p>

                {/* VALUE */}

                <p className="text-4xl sm:text-5xl font-extrabold mt-2 tracking-tight">
                  {card.value.toLocaleString()}
                </p>

                {/* DESCRIPTION */}

                <div className="flex items-center gap-2 mt-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />

                  <span className="text-gray-500 text-sm">
                    {card.description}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM INSIGHT */}

        <div className="mt-8 bg-linear-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 border border-slate-800 rounded-2xl p-5 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="w-11 h-11 shrink-0 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
              ⚡
            </div>

            <div>
              <h3 className="font-semibold">AlgoForge Platform Activity</h3>

              <p className="text-gray-400 text-sm mt-1">
                Your platform currently has{" "}
                <span className="text-white font-semibold">
                  {stats.totalUsers.toLocaleString()}
                </span>{" "}
                developers working through{" "}
                <span className="text-white font-semibold">
                  {stats.totalProblems.toLocaleString()}
                </span>{" "}
                coding problems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
