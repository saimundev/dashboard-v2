import React from "react";

const DashboardContent = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div className="p-4 border_light_primary rounded-lg shadow">
        <h4 className="font-semibold text-sm">Total Revenue</h4>
        <h2 className="text-2xl font-semibold pt-2">$45,231.89</h2>
        <small className="text-xs text-gray-500">from last month</small>
      </div>
      <div className="p-4 border_light_primary rounded-lg shadow">
        <h4 className="font-semibold text-sm">Sales</h4>
        <h2 className="text-2xl font-semibold pt-2">+45,231.89</h2>
        <small className="text-xs text-gray-500">from last month</small>
      </div>
      <div className="p-4 border_light_primary rounded-lg shadow">
        <h4 className="font-semibold text-sm">Pending Orders</h4>
        <h2 className="text-2xl font-semibold pt-2">+45,231.89</h2>
        <small className="text-xs text-gray-500">from last month</small>
      </div>
      <div className="p-4 border_light_primary rounded-lg shadow">
        <h4 className="font-semibold text-sm">Users</h4>
        <h2 className="text-2xl font-semibold pt-2">+45,231.89</h2>
        <small className="text-xs text-gray-500">from last month</small>
      </div>
    </div>
  );
};

export default DashboardContent;
