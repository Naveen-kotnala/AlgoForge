import { useEffect, useState } from "react";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get("http://localhost:5000/api/admin/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUsers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      const token = localStorage.getItem("token");

      const confirmDelete = window.confirm(
        "Are you sure you want to delete this user?",
      );

      if (!confirmDelete) return;

      await axios.delete(`http://localhost:5000/api/admin/user/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      fetchUsers();
    } catch (error) {
      console.log(error);
    }
  };

  const changeRole = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await axios.put(
        `http://localhost:5000/api/admin/user/${id}/role`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      fetchUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      {/* Background Glow */}

      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="absolute top-72 -right-32 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12">
        {/* HEADER */}

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-xl">
              👥
            </div>

            <span className="text-xs sm:text-sm font-semibold text-blue-400 uppercase tracking-[0.15em]">
              User Management
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                Users{" "}
                <span className="bg-linear-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                  Management
                </span>
              </h1>

              <p className="text-gray-400 mt-3 text-sm sm:text-base">
                Manage AlgoForge developers, roles and access.
              </p>
            </div>

            {/* USER COUNT */}

            <div className="self-start sm:self-auto px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800">
              <p className="text-gray-500 text-xs uppercase tracking-wider">
                Total Users
              </p>

              <p className="text-2xl font-bold mt-1">{users.length}</p>
            </div>
          </div>
        </div>

        {/* USERS CONTAINER */}

        <div className="bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-2xl overflow-hidden">
          {/* TABLE HEADER */}

          <div className="px-5 sm:px-6 py-5 border-b border-slate-800 flex items-center justify-between">
            <div>
              <h2 className="text-lg sm:text-xl font-bold">All Developers</h2>

              <p className="text-gray-500 text-sm mt-1">
                View and manage registered users
              </p>
            </div>

            <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-full bg-green-500/10 border border-green-500/20">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-green-400 text-xs font-medium">Active</span>
            </div>
          </div>

          {/* TABLE */}

          {users.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full min-w-200">
                <thead>
                  <tr className="bg-slate-950/60 border-b border-slate-800">
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Developer
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Email
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Role
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {users.map((user) => (
                    <tr
                      key={user._id}
                      className="border-b border-slate-800/70 last:border-b-0 hover:bg-slate-800/30 transition-colors"
                    >
                      {/* USER */}

                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-linear-to-br from-purple-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center font-bold text-sm">
                            {user.name?.charAt(0)?.toUpperCase()}
                          </div>

                          <div>
                            <p className="font-semibold text-white">
                              {user.name}
                            </p>

                            <p className="text-gray-600 text-xs mt-1">
                              Developer
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* EMAIL */}

                      <td className="px-6 py-5">
                        <span className="text-gray-400 text-sm">
                          {user.email}
                        </span>
                      </td>

                      {/* ROLE */}

                      <td className="px-6 py-5">
                        {user.role === "admin" ? (
                          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm font-medium">
                            👑 Admin
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-gray-400 text-sm font-medium">
                            👤 User
                          </span>
                        )}
                      </td>

                      {/* ACTIONS */}

                      <td className="px-6 py-5">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => changeRole(user._id)}
                            className="
                              px-3
                              py-2
                              rounded-lg
                              bg-blue-500/10
                              border
                              border-blue-500/20
                              text-blue-400
                              hover:bg-blue-500/20
                              hover:border-blue-500/30
                              transition
                              text-sm
                              font-medium
                            "
                          >
                            {user.role === "admin"
                              ? "Remove Admin"
                              : "Make Admin"}
                          </button>

                          <button
                            onClick={() => deleteUser(user._id)}
                            className="
                              px-3
                              py-2
                              rounded-lg
                              bg-red-500/10
                              border
                              border-red-500/20
                              text-red-400
                              hover:bg-red-500/20
                              hover:border-red-500/30
                              transition
                              text-sm
                              font-medium
                            "
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            /* EMPTY STATE */

            <div className="py-16 text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-2xl">
                👥
              </div>

              <h3 className="font-semibold mt-5">No users found</h3>

              <p className="text-gray-500 text-sm mt-2">
                Registered developers will appear here.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Users;
