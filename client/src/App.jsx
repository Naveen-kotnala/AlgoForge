import Profile from "./pages/Profile";
import MySubmissions from "./pages/MySubmissions";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Submissions from "./pages/Submissions";

import Home from "./pages/Home";
import Problems from "./pages/Problems";
import CodeEditor from "./pages/CodeEditor";

import AddProblem from "./pages/AddProblem";
import AdminDashboard from "./pages/AdminDashboard";
import ManageProblems from "./pages/ManageProblems";
import Users from "./pages/Users";
import Statistics from "./pages/Statistics";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/problems" element={<Problems />} />
        <Route path="/code/:id" element={<CodeEditor />} />
        <Route path="/submissions" element={<Submissions />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my-submissions" element={<MySubmissions />} />
        <Route path="/profile" element={<Profile />} />

        {/* Admin */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/add-problem" element={<AddProblem />} />

        <Route path="/admin/edit-problem/:id" element={<AddProblem />} />

        <Route path="/admin/users" element={<Users />} />

        <Route path="/admin/stats" element={<Statistics />} />

        <Route path="/admin/problems" element={<ManageProblems />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
