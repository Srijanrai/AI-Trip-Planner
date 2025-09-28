import React from "react";
export const SelectTravelesList = [
  {
    id: 1,
    title: "Just Me",
    desc: "A sole travels in exploration",
    icon: "🧑‍🚀",
    people: "1",
  },
  {
    id: 2,
    title: "A Couple",
    desc: "Two traveles in tandem",
    icon: "👩‍❤️‍👨",
    people: "2 People",
  },
  {
    id: 3,
    title: "Family",
    desc: "A group of fun loving adv",
    icon: "🏕️",
    people: "3 to 5 People",
  },
  {
    id: 4,
    title: "Friends",
    desc: "A bunch of thrill-seekes",
    icon: "⛺",
    people: "5 to 10 People",
  },
];

function GroupSizeUI({onSelectedOptions}:any) {
  return (
    <div className="mt-5 items-center grid grid-cols-2 md:grid-cols-4 gap-2">
      {SelectTravelesList.map((card, index) => (
        <div
        onClick={()=>onSelectedOptions(card.title+" "+card.people)}
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

export default GroupSizeUI;
