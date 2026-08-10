import AdminSidebar from "../components/AdminSidebar";

function AdminDashboard() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col lg:flex-row">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div
        className="
          flex-1
          p-4
          sm:p-6
          md:p-8
          lg:p-10
          min-w-0
        "
      >
        <h1
          className="
            text-2xl
            sm:text-3xl
            md:text-4xl
            font-bold
            mb-2
          "
        >
          Welcome Admin 👋
        </h1>

        <p
          className="
            text-gray-400
            mb-8
            lg:mb-10
            text-sm
            sm:text-base
          "
        >
          Manage your AlgoForge platform from here.
        </p>

        {/* Cards */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-4
            sm:gap-5
            lg:gap-6
          "
        >
          <div
            className="
              bg-slate-900
              rounded-2xl
              p-5
              sm:p-6
              border
              border-slate-800
            "
          >
            <p className="text-gray-400 text-sm sm:text-base">Total Problems</p>

            <h2 className="text-3xl sm:text-4xl font-bold mt-3">0</h2>
          </div>

          <div
            className="
              bg-slate-900
              rounded-2xl
              p-5
              sm:p-6
              border
              border-slate-800
            "
          >
            <p className="text-gray-400 text-sm sm:text-base">Users</p>

            <h2 className="text-3xl sm:text-4xl font-bold mt-3">0</h2>
          </div>

          <div
            className="
              bg-slate-900
              rounded-2xl
              p-5
              sm:p-6
              border
              border-slate-800
            "
          >
            <p className="text-gray-400 text-sm sm:text-base">Submissions</p>

            <h2 className="text-3xl sm:text-4xl font-bold mt-3">0</h2>
          </div>

          <div
            className="
              bg-slate-900
              rounded-2xl
              p-5
              sm:p-6
              border
              border-slate-800
            "
          >
            <p className="text-gray-400 text-sm sm:text-base">Accepted</p>

            <h2
              className="
                text-3xl
                sm:text-4xl
                font-bold
                mt-3
                text-green-400
              "
            >
              0
            </h2>
          </div>
        </div>

        {/* Recent Activity */}

        <div
          className="
            bg-slate-900
            border
            border-slate-800
            rounded-2xl
            mt-6
            sm:mt-8
            lg:mt-10
            p-5
            sm:p-6
            md:p-8
            overflow-hidden
          "
        >
          <h2
            className="
              text-xl
              sm:text-2xl
              font-semibold
              mb-4
              sm:mb-5
            "
          >
            Recent Activity
          </h2>

          <p className="text-gray-500 text-sm sm:text-base">No activity yet.</p>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
