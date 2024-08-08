import ActivityGraph from "../assests/Stats/ActivityGraph.jpg"
const Activity = () => {
  return (
    <div className="p-4 bg-gray-800 rounded col-span-2">
      <h2 className="text-xl">Activity</h2>
      <div className="mt-4">
        <div className="h-64 bg-gray-600 rounded overflow-hidden">
          <img className="h-full w-full " src={ActivityGraph} alt="Activity Graph" />
        </div>
      </div>
    </div>
  );
};

export default Activity;

