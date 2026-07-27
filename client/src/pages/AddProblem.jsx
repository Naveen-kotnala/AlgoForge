import AdminSidebar from "../components/AdminSidebar";
import ProblemForm from "../components/ProblemForm";

function AddProblem() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex">
      <AdminSidebar />

      <div className="flex-1 p-10 overflow-y-auto">
        <h1 className="text-4xl font-bold mb-2">Add New Problem</h1>

        <p className="text-gray-400 mb-8">
          Fill all the required details below.
        </p>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">
          <ProblemForm />
        </div>
      </div>
    </div>
  );
}

export default AddProblem;
