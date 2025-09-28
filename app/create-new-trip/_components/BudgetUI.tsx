import React from "react";
export const SelectBudgetOptions = [
  {
    id: 1,
    title: "Cheap",
    desc: "Stay conscious of costs",
    icon: "⛺", // Tent = camping/backpacking travel, budget consciousness
    color: "bg-green-100 text-green-600",
  },
  {
    id: 2,
    title: "Moderate",
    desc: "Keep cost on the average side",
    icon: "🏨", // Hotel = comfortable moderate travel with lodging
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    id: 3,
    title: "Luxury",
    desc: "Don't worry about cost",
    icon: "🚁",
    color: "bg-purple-100 text-purple-600",
  },
];

function BudgetUI({ onSelectedOptions }: any) {
  return (
    <div className="mt-5 items-center grid grid-cols-2 md:grid-cols-4 gap-2">
      {SelectBudgetOptions.map((card, index) => (
        <div
          onClick={() => onSelectedOptions(card.title + " " + card.desc)}
          key={index}
          className="flex items-center gap-2 border rounded-lg p-3 cursor-pointer hover:border-primary hover:text-primary "
        >
         <div className={`${card.color}`}> {card.icon} </div>
          <h2 className="text-sm">{card.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default BudgetUI;
