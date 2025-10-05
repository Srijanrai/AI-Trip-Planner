import { Button } from "@/components/ui/button";
import { Clock, ExternalLink, Ticket } from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Activity } from "./ChatBox";

function PlaceCardItems({ activity }: { activity: Activity }) {
  return (
    <div>
      <Image
        src={activity.place_image_url}
        alt="image"
        height={200}
        width={400}
        className="object-cover rounded-xl "
      />
      <h2 className="font-semibold text-lg">{activity.place_name}</h2>
      <p className="text-gray-500 line-clamp-2">{activity.place_details}</p>
      <h2 className="flex flex-row text-blue-400 gap-2">
        <Ticket />
        {activity.ticket_pricing}
      </h2>
      <p className="flex flex-row text-orange-400 gap-2">
        <Clock />
        {activity?.best_time_to_visit}
      </p>
      <Link
        href={
          "https://www.google.com/maps/search/?api=1&query=" +
          activity?.place_name
        }
        target="_blank"
      >
        <Button variant={"outline"} className="w-full mt-2">
          <ExternalLink />
          View
        </Button>
      </Link>
    </div>
  );
}

export default PlaceCardItems;
