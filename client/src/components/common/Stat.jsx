import React from "react";

export default function Stat({ title, value }) {
  return (
    <div className="stat place-items-center">
      <div className="stat-title">{title}</div>
      <div className="font-bold text-md">{value}</div>
    </div>
  );
}
