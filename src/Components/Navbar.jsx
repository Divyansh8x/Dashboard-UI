import SearchIcon from "../assests/Navbar/SearchIcon.svg";
import MessageIcon from "../assests/Navbar/Message.svg";
import SettingIcon from "../assests/Navbar/Settings.svg";
import NotificationIcon from "../assests/Navbar/Notification.svg";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-800 ">
      <div className="flex items-center space-x-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-700 text-white px-4 py-2 rounded-full focus:outline-none"
          />
          <div className="absolute top-2 right-2 h-6 w-6 rounded">
            <img src={SearchIcon} alt="" />
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="h-8 w-8 ">
          <img className="w-8 h-8" src={MessageIcon} alt="" />
        </div>
        <div className="h-8 w-8 ">
          <img className="w-8 h-8" src={SettingIcon} alt="" />
        </div>
        <div className="h-8 w-8 ">
          <img className="w-8 h-8" src={NotificationIcon} alt="" />
        </div>
        <div className="h-8 w-8 rounded-2xl bg-gray-500 "></div>
        <div className="h-8 w-8 full"></div>
        {/* User Avatar Placeholder */}
      </div>
    </div>
  );
};

export default Navbar;
