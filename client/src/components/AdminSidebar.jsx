import { Link } from "react-router-dom";

function AdminSidebar() {
  return (
    <div className="w-64 bg-slate-900 border-r border-slate-800 h-screen p-6">
      <h1 className="text-3xl font-bold text-green-400 mb-10">AlgoForge</h1>

      <div className="space-y-4">
        <Link
          to="/admin/add-problem"
          className="block bg-slate-800 hover:bg-slate-700 px-5 py-3 rounded-xl"
        >
          ➕ Add Problem
        </Link>

        <Link
          to="/admin/problems"
          className="block bg-slate-800 hover:bg-slate-700 px-5 py-3 rounded-xl"
        >
          📚 Manage Problems
        </Link>

        <Link
          to="/admin/users"
          className="block bg-slate-800 hover:bg-slate-700 px-5 py-3 rounded-xl"
        >
          👥 Users
        </Link>

        <Link
          to="/admin/stats"
          className="block bg-slate-800 hover:bg-slate-700 px-5 py-3 rounded-xl"
        >
          📊 Statistics
        </Link>
      </div>
    </div>
  );
}

export default AdminSidebar;
