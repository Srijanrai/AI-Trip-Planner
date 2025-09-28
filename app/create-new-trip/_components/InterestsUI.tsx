import React from "react";
export const SelectInterestsList = [
  {
    id: 1,
    title: "Adventure",
    desc: "Thrilling hikes, rafting, and outdoor exploration",
    icon: "🧗‍♂️",
    interest: "Adventure",
  },

  {
    id: 2,
    title: "Culture & History",
    desc: "Museums, historic sites, and local traditions",
    icon: "🏛️",
    interest: "Culture & History",
  },
  {
    id: 3,
    title: "Food & Cuisine",
    desc: "Local dishes, street food, and culinary tours",
    icon: "🍜",
    interest: "Food & Cuisine",
  },
  {
    id: 4,
    title: "Spiritual Journey",
    desc: "Temples, retreats, and inner peace",
    icon: "🧘‍♂️",
    interest: "Spiritual Journey",
  },
];

function InterestsUI({ onSelectedOptions }: any) {
  return (
    <div className="mt-5 items-center grid grid-cols-2 md:grid-cols-4 gap-2">
      {SelectInterestsList.map((card, index) => (
        <div
          onClick={() => onSelectedOptions(card.title + " " + card.desc)}
          key={index}
          className="flex items-center gap-2 border rounded-lg p-3 cursor-pointer hover:border-primary hover:text-primary "
        >
          {card.icon}
          <h2 className="text-sm">{card.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default InterestsUI;
