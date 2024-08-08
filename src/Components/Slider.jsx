import TopIcon from "../assests/Slider/TopIcon.svg";
import HomeIcon from "../assests/Slider/Home.svg";
import Grid from "../assests/Slider/Grid.svg";
import List from "../assests/Slider/List.svg";
import ShoppingBag from "../assests/Slider/ShoppingBag.svg";
import Wallet from "../assests/Slider/Wallet.svg";
import Exit from "../assests/Slider/Exit.svg"
const Sidebar = () => {
  return (
    <div className="w-1/7 bg-gray-800 p-8">
      <div className="mb-8 flex justify-center items-center">
        <div>
          <img className="w-12 h-12" src={TopIcon} alt="" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center space-y-4">
        <div className="h-8 w-8 ">
          <img className="w-8 h-8" src={HomeIcon} alt="" />
        </div>
        <div className="h-8 w-8 ">
          <img className="h-8 w-8" src={Grid} alt="" />
        </div>
        <div className="h-8 w-8 ">
          <img className="h-8 w-8" src={List} alt="" />
        </div>
        <div className="h-8 w-8 ">
          <img className="h-8 w-8" src={Wallet} alt="" />
        </div>
        <div className="h-8 w-8 ">
          <img className="h-8 w-8" src={ShoppingBag} alt="" />
        </div>
        <div className="h-8 w-8 fixed bottom-2 ">
          <img className="h-8 w-8" src={Exit} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
