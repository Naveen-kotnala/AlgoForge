import AdminSidebar from "../components/AdminSidebar";

function AdminDashboard() {
  const stats = [
    {
      title: "Total Problems",
      value: "0",
      icon: "🧩",
      color: "purple",
    },
    {
      title: "Total Users",
      value: "0",
      icon: "👥",
      color: "blue",
    },
    {
      title: "Submissions",
      value: "0",
      icon: "🚀",
      color: "cyan",
    },
    {
      title: "Accepted",
      value: "0",
      icon: "✓",
      color: "green",
    },
  ];

  const colorClasses = {
    purple: {
      icon: "bg-purple-500/10 text-purple-400 border-purple-500/20",
      glow: "group-hover:bg-purple-500/10",
    },
    blue: {
      icon: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      glow: "group-hover:bg-blue-500/10",
    },
    cyan: {
      icon: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
      glow: "group-hover:bg-cyan-500/10",
    },
    green: {
      icon: "bg-green-500/10 text-green-400 border-green-500/20",
      glow: "group-hover:bg-green-500/10",
    },
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex relative overflow-hidden">
      {/* Background Glows */}

      <div className="absolute -top-40 left-40 w-96 h-96 bg-purple-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="absolute top-80 right-0 w-96 h-96 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Sidebar */}

      <AdminSidebar />

      {/* Main Content */}

      <div className="relative flex-1 min-w-0 p-4 sm:p-6 md:p-8 lg:p-10">
        <div className="max-w-7xl mx-auto">
          {/* HEADER */}

          <div className="mb-8 lg:mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-xl">
                ⚡
              </div>

              <span className="text-xs sm:text-sm font-semibold text-purple-400 uppercase tracking-[0.15em]">
                Admin Control Center
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Welcome Admin{" "}
              <span className="inline-block animate-pulse">👋</span>
            </h1>

            <p className="text-gray-400 mt-3 text-sm sm:text-base max-w-2xl">
              Manage and monitor your AlgoForge coding platform from one
              powerful dashboard.
            </p>
          </div>

          {/* LIVE STATUS */}

          <div className="flex items-center gap-2 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />

            <span className="text-sm text-gray-400">
              Platform is{" "}
              <span className="text-green-400 font-medium">online</span>
            </span>
          </div>

          {/* STAT CARDS */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {stats.map((stat) => {
              const colors = colorClasses[stat.color];

              return (
                <div
                  key={stat.title}
                  className={`
                    group
                    relative
                    overflow-hidden
                    bg-slate-900/70
                    backdrop-blur-xl
                    border
                    border-slate-800
                    rounded-2xl
                    p-5
                    sm:p-6
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-slate-700
                    ${colors.glow}
                  `}
                >
                  {/* Glow */}

                  <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/2 blur-2xl rounded-full group-hover:scale-150 transition-transform duration-500" />

                  <div className="relative">
                    {/* ICON */}

                    <div
                      className={`
                        w-12
                        h-12
                        rounded-xl
                        border
                        flex
                        items-center
                        justify-center
                        text-xl
                        ${colors.icon}
                      `}
                    >
                      {stat.icon}
                    </div>

                    {/* TITLE */}

                    <p className="text-gray-400 text-sm mt-6">{stat.title}</p>

                    {/* VALUE */}

                    <h2 className="text-4xl sm:text-5xl font-extrabold mt-2 tracking-tight">
                      {stat.value}
                    </h2>

                    <p className="text-gray-600 text-xs mt-3">
                      Platform statistics
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* QUICK ACTIONS */}

          <div className="mt-8 lg:mt-10">
            <div className="mb-5">
              <h2 className="text-xl sm:text-2xl font-bold">Quick Overview</h2>

              <p className="text-gray-500 text-sm mt-1">
                Manage your platform efficiently
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Problems */}

              <div className="group bg-slate-900/70 border border-slate-800 rounded-2xl p-5 hover:border-purple-500/30 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                    🧩
                  </div>

                  <div>
                    <h3 className="font-semibold">Problem Management</h3>

                    <p className="text-gray-500 text-sm mt-1">
                      Add and manage coding problems
                    </p>
                  </div>
                </div>
              </div>

              {/* Users */}

              <div className="group bg-slate-900/70 border border-slate-800 rounded-2xl p-5 hover:border-blue-500/30 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    👥
                  </div>

                  <div>
                    <h3 className="font-semibold">User Management</h3>

                    <p className="text-gray-500 text-sm mt-1">
                      Monitor registered developers
                    </p>
                  </div>
                </div>
              </div>

              {/* Analytics */}

              <div className="group bg-slate-900/70 border border-slate-800 rounded-2xl p-5 hover:border-green-500/30 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                    📊
                  </div>

                  <div>
                    <h3 className="font-semibold">Platform Analytics</h3>

                    <p className="text-gray-500 text-sm mt-1">
                      Track platform performance
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RECENT ACTIVITY */}

          <div className="mt-8 lg:mt-10 bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-2xl overflow-hidden">
            {/* Activity Header */}

            <div className="p-5 sm:p-6 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold">
                  Recent Activity
                </h2>

                <p className="text-gray-500 text-sm mt-1">
                  Latest platform events
                </p>
              </div>

              <div className="px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-xs text-gray-400">
                Activity Feed
              </div>
            </div>

            {/* Empty Activity */}

            <div className="p-8 sm:p-12 text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-2xl">
                📭
              </div>

              <h3 className="font-semibold mt-5">No recent activity</h3>

              <p className="text-gray-500 text-sm mt-2">
                Platform activity will appear here once users start interacting
                with AlgoForge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
