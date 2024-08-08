import { recentOrders } from "../Constants/Orders";

const RecentOrders = () => {
  return (
    <div className="p-4  col-span-1">
      <h2 className="text-xl mb-4">Recent Orders</h2>
      <table className="min-w-full table-auto">
        <thead className="bg-gray-900">
          <tr>
            <th className="px-16 py-4">Customer</th>
            <th className="px-16 py-4">Order No.</th>
            <th className="px-16 py-4">Amount</th>
            <th className="px-16 py-4">Status</th>
          </tr>
        </thead>
        <tbody>
          {recentOrders.map((order, index) => (
            <tr key={index} className="bg-gray-900">
              <td className="border px-4 py-2 flex items-center">
                <div className="h-8 w-8 bg-gray-900 rounded-full mr-2"></div>{" "}
                {/* Placeholder for customer avatar */}
                {order.customer}
              </td>
              <td className="border px-4 py-2">{order.orderNo}</td>
              <td className="border px-4 py-2">{order.amount}</td>
              <td
                className={`border px-4 py-2 ${
                  order.status === "Delivered"
                    ? "text-green-500"
                    : order.status === "Cancelled"
                    ? "text-red-500"
                    : "text-yellow-500"
                }`}
              >
                {order.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;
