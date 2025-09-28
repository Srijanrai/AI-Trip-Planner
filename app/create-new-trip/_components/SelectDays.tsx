import { Button } from "@/components/ui/button";
import React, { useState } from "react";
type SelectDaysProps = {
  onSelectedOptions: (value: string) => void;
};

function SelectDays({onSelectedOptions} : SelectDaysProps) {
    console.log(onSelectedOptions);
  const [days, setDays] = useState<number>(3);
  return (
    <div className="mt-5 items-center flex flex-col">
      <h2>How many days do you want to plan the trip ? </h2>
      <div className="p-6 flex gap-6 items-center justify-center">
        <Button
          className="text-3xl cursor-pointer"
          onClick={() => setDays(days - 1)}
        >
          -
        </Button>
        <span className="text-2xl">{days}</span>
        <Button
          className="text-3xl cursor-pointer"
          onClick={() => setDays(days + 1)}
        >
          +
        </Button>
      </div>
      <Button onClick={() => onSelectedOptions(days.toString() +" days")}>Add date</Button>
    </div>
  );
}

export default SelectDays;
