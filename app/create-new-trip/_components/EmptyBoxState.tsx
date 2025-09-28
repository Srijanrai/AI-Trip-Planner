import React from "react";
import { suggestions } from "@/app/_components/Hero";
function EmptyBoxState({onSelectOptions}:any) {
  return (
    <div className="mt-6">
      <h2 className="font-bold text-3xl text-center">
        Start Planning new Trip
      </h2>
      <p className="text-center text-gray-400 mt-2">
        Discover personalized travel itenaries, finf best destinations, and plan
        your dream vacation effortlessly with the power of AI. Let our smart
        assistant do the work while you enjoy the journey.{" "}
      </p>
      <div className="flex flex-col  gap-5">
        {suggestions.map((suggestion, index) => {
          return (
            <div
              onClick={() => onSelectOptions(suggestion.title)}
              key={index}
              className="flex items-center gap-2 border rounded-lg p-3 cursor:pointer hover:border-primary hover:text-primary  "
            >
              {suggestion.icon}
              <h2 className="text-sm">{suggestion.title}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default EmptyBoxState;
