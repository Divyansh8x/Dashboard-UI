import Sidebar from './Components/Slider';
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <div className="flex h-full bg-gray-900 text-white">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
