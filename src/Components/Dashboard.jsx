import Arrow from "../assests/Icons/Arrow.svg";
import Goal from "../assests/Icons/goal.png";
import Icon from "../assests/Icons/burger.png";
import Table from "../assests/Icons/table.png";
import Navbar from "../Components/Navbar";
import Stats from "./Stats";
import Activity from "./Activity";
import RecentOrders from "./RecentOrders";
import Feedback from "./Feedback";

const Dashboard = () => {
  return (
    <div className="w-full">
      <Navbar />
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl">Dashboard</h1>
        </div>
        <Stats />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <Activity />
          <div className="space-y-6">
            <div className="flex justify-between items-center p-4 bg-gray-800 rounded">
              <div className="flex items-center gap-4">
                <img className="w-12 h-12" src={Goal} alt="Goal Icon" />
                <h2 className="text-xl">Goals</h2>
              </div>
              <img className="w-8 h-8 ml-auto" src={Arrow} alt="Arrow Icon" />
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-800 rounded">
              <div className="flex items-center gap-4">
                <img
                  className="w-12 h-12"
                  src={Icon}
                  alt="Popular Dishes Icon"
                />
                <h2 className="text-xl">Popular Dishes</h2>
              </div>
              <img className="w-8 h-8 ml-auto" src={Arrow} alt="Arrow Icon" />
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-800 rounded">
              <div className="flex items-center gap-4">
                <img className="w-12 h-12" src={Table} alt="Menus Icon" />
                <h2 className="text-xl">Menus</h2>
              </div>
              <img className="w-8 h-8 ml-auto" src={Arrow} alt="Arrow Icon" />
            </div>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <RecentOrders />
            <Feedback />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
