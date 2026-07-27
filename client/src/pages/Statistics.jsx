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

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Statistics Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
          <h2 className="text-gray-400 text-lg">Total Users</h2>
          <p className="text-5xl font-bold mt-4">{stats.totalUsers}</p>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
          <h2 className="text-gray-400 text-lg">Total Problems</h2>
          <p className="text-5xl font-bold mt-4">{stats.totalProblems}</p>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
          <h2 className="text-gray-400 text-lg">Total Submissions</h2>
          <p className="text-5xl font-bold mt-4">{stats.totalSubmissions}</p>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
