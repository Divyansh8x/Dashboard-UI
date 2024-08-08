import Cart from "../assests/Stats/Cart.png";
import Profit from "../assests/Stats/Profit.png"
import BagIcon from "../assests/Stats/Bag.png"
const Stats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className=" p-4 bg-gray-800 rounded">
        <img className="w-10 h-10" src={Cart} alt="" />
        <h2 className="text-lg">Total Orders</h2>
        <p className="text-3xl mt-2">75</p>
      </div>
      <div className="p-4 bg-gray-800 rounded">
        <img className="w-10 h-10" src={BagIcon} alt="" />
        <h2 className="text-lg">Total Delivered</h2>
        <p className="text-3xl mt-2">70</p>
      </div>
      <div className="p-4 bg-gray-800 rounded">
        <img className="w-10 h-10" src={BagIcon} alt="" />
        <h2 className="text-lg">Total Cancelled</h2>
        <p className="text-3xl mt-2">5</p>
      </div>
      <div className="p-4 bg-gray-800 rounded">
        <img className="w-12 h-10" src={Profit} alt="" />
        <h2 className="text-lg">Net Profit</h2>
        <p className="text-3xl mt-2">$6759.25</p>
      </div>
    </div>
  );
};

export default Stats;
