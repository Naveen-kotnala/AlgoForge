import AdminSidebar from "../components/AdminSidebar";

function AdminDashboard() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="flex-1 p-10">
        <h1 className="text-4xl font-bold mb-2">Welcome Admin 👋</h1>

        <p className="text-gray-400 mb-10">
          Manage your AlgoForge platform from here.
        </p>

        {/* Cards */}

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
          <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
            <p className="text-gray-400">Total Problems</p>

            <h2 className="text-4xl font-bold mt-3">0</h2>
          </div>

          <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
            <p className="text-gray-400">Users</p>

            <h2 className="text-4xl font-bold mt-3">0</h2>
          </div>

          <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
            <p className="text-gray-400">Submissions</p>

            <h2 className="text-4xl font-bold mt-3">0</h2>
          </div>

          <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
            <p className="text-gray-400">Accepted</p>

            <h2 className="text-4xl font-bold mt-3 text-green-400">0</h2>
          </div>
        </div>

        {/* Recent Activity */}

        <div className="bg-slate-900 border border-slate-800 rounded-2xl mt-10 p-8">
          <h2 className="text-2xl font-semibold mb-5">Recent Activity</h2>

          <p className="text-gray-500">No activity yet.</p>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
