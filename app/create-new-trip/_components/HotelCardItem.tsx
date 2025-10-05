import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Hotel } from "./ChatBox";
import { Star, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
function HotelCardItem({ hotel }: { hotel: Hotel }) {
  return (
    <div className="flex flex-col gap-1">
      <Image
        className="rounded-xl shadow object-cover mb-2"
        src={hotel?.hotel_image_url}
        alt="hotel-image"
        width={400}
        height={200}
      />
      <h2 className="font-semibold text-lg">{hotel.hotel_name}</h2>
      <h2 className="text-gray-500">{hotel.hotel_address}</h2>
      <div className="flex justify-between">
        <p className="flex gap-2 text-green-500">
          <Wallet />
          {hotel?.price_per_night}
        </p>
        <p className="flex gap-2 text-yellow-500">
          <Star />
          {hotel?.rating}
        </p>
      </div>
      <Link
        href={
          "https://www.google.com/maps/search/?api=1&query=" + hotel?.hotel_name
        }
        target="_blank"
      >
        <Button variant={"outline"} className=" w-full mt-1">
          View
        </Button>
      </Link>
      {/* <p className="line-clamp-2 text-gray-500">
                     {hotel?.description}
                   </p> */}
    </div>
  );
}

export default HotelCardItem;
