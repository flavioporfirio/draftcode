import "./App.css";
import Dashboard from "./Pages/Dashboard";
import Sidebar from "./Pages/Sidebar";

export default function App() {
  return (
    <div className="app">
      <Sidebar />
      <Dashboard />
    </div>
  );
}
