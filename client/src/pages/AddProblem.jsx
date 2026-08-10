import AdminSidebar from "../components/AdminSidebar";
import ProblemForm from "../components/ProblemForm";

function AddProblem() {
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
          overflow-y-auto
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
          Add New Problem
        </h1>

        <p
          className="
            text-gray-400
            mb-6
            sm:mb-8
            text-sm
            sm:text-base
          "
        >
          Fill all the required details below.
        </p>

        <div
          className="
            bg-slate-900
            border
            border-slate-800
            rounded-2xl
            p-4
            sm:p-6
            md:p-8
            shadow-xl
            overflow-hidden
          "
        >
          <ProblemForm />
        </div>
      </div>
    </div>
  );
}

export default AddProblem;
