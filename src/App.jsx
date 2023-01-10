import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Test from "./components/Test";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Reporting from "./pages/Reporting";
import Tasks from "./pages/Tasks";
import Users from "./pages/Users";
import TheHeader from "./components/TheHeader";
import Overview from "./pages/Overview";
import Settings from "./pages/Settings";
import Support from "./pages/Support";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TheHeader />
        <Routes>
          <Route path="/test" element={<Test />}></Route>
          <Route path="/" element={<Overview />}>
            <Route index element={<Navigate to="/home" replace />} />
            <Route path="home" element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="projects" element={<Projects />} />
            <Route path="tasks" element={<Tasks />} />
            <Route path="reporting" element={<Reporting />} />
            <Route path="users" element={<Users />} />
            <Route path="settings" element={<Settings />} />
            <Route path="support" element={<Support />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
