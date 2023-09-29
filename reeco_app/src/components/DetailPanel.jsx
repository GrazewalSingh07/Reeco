import Divider from '@mui/material/Divider';

import React from "react";

const data = [
  { title: "Supplier", value: "East Coast fruits and vegetables" },
  { title: "Shipping date", value: "Thu, Feb 10" },
  { title: "Total", value: "$ 15,023.4" },
  { title: "Category", value: "" },
  { title: "Department", value: "300-444-678" },
  { title: "Status", value: "Awaiting your appproval" },
];



export const DetailPanel = () => {
  return (
    <div className="box flex m-auto justify-center py-4 max-w-[90%] rounded-lg mt-3">
      {data?.map((el) => {
        return (
          <div className="px-2 text-left w-[220px]">
            <p className="text-lg font-bold text-gray-500">{el.title}</p>
            <p className="text-2xl font-bold">{el.value}</p>
          </div>
        );
      })}
     <Divider/>
    </div>
  );
};
