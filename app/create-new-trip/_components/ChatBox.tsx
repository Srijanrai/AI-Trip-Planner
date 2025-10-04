"use client";
import React, { useEffect, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader, Send } from "lucide-react";
import axios from "axios";
import EmptyBoxState from "./EmptyBoxState";
import GroupSizeUI from "./GroupSizeUI";
import BudgetUI from "./BudgetUI";
import SelectDays from "./SelectDays";
import InterestsUI from "./InterestsUI";
import FinalUI from "./FinalUI";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useUserDetail } from "@/app/provider";
import { v4 as uuidv4 } from "uuid";

type Message = {
  role: string;
  content: string;
  ui?: string;
};
export type Hotel = {
  hotel_name: string;
  hotel_address: string;
  price_per_night: string;
  hotel_image_url: string;
  geo_coordinates: {
    latitude: number;
    longitude: number;
  };
  rating: number;
  description: string;
};
export type Activity = {
  place_name: string;
  place_details: string;
  place_image_url: string;
  geo_coordinates: {
    latitude: number;
    longitude: number;
  };
  place_address: string;
  ticket_pricing: string;
  time_travel_each_location: string;
  best_time_to_visit: string;
};
export type Itinerary = {
  day: number;
  day_plan: string;
  best_time_to_visit_day: string;
  activities: Activity[];
};

export type TripInfo = {
  budget: string;
  destination: string;
  duration: string;
  group_size: string;
  origin: string;
  hotels: Hotel[];
  itinerary: Itinerary[];
};
function ChatBox() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [isFinal, setIsFinal] = useState(false);
  const [tripDetail, setTripDetail] = useState<TripInfo>();
  const SaveTripDetail = useMutation(api.tripDetail.CreateTripDetail);
  const { userDetail, setUserDetail } = useUserDetail();
  useEffect(() => {
    const lastMsg = messages[messages.length - 1];
    if (lastMsg?.ui === "final") {
      setIsFinal(true);
      setUserInput("Ok, great");
    }
  }, [messages]);
  useEffect(() => {
    if (isFinal && userInput) {
      setUserInput("ok,great");
      onSend();
    }
  }, [isFinal]);

  const onSend = async (input?: string) => {
    const messageToSend = input ?? userInput;
    if (!messageToSend?.trim()) return;

    setLoading(true);

    const newMsg: Message = {
      role: "user",
      content: messageToSend,
    };

    setUserInput("");
    setMessages((prev) => [...prev, newMsg]);

    try {
      const result = await axios.post("/api/aimodel", {
        messages: [...messages, newMsg],
        isFinal: isFinal,
      });

      console.log("trip", result.data);
      !isFinal &&
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: result?.data?.resp,
            ui: result?.data?.ui,
          },
        ]);
      if (isFinal) {
        setTripDetail(result?.data?.trip_plan);
        const tripId = uuidv4();
        await SaveTripDetail({
          tripDetail: result?.data?.trip_plan,
          tripId: tripId,
          uid: userDetail?._id,
        });
      }
    } catch (error) {
      console.error("Error fetching AI response:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectedOptions = (v: string) => {
    setUserInput(v);
    onSend(v);
  };

  const RenderGenerativeUI = (ui: string) => {
    if (ui === "budget") {
      return <BudgetUI onSelectedOptions={handleSelectedOptions} />;
    } else if (ui === "groupSize") {
      return <GroupSizeUI onSelectedOptions={handleSelectedOptions} />;
    } else if (ui === "tripDuration") {
      return <SelectDays onSelectedOptions={handleSelectedOptions} />;
    } else if (ui === "interests") {
      return <InterestsUI onSelectedOptions={handleSelectedOptions} />;
    } else if (ui === "final") {
      return (
        <FinalUI
          viewTrip={() => console.log("view trip")}
          disable={!tripDetail}
        />
      );
    }
    return null;
  };

  return (
    <div className="h-[80vh] flex flex-col">
      <section className="flex-1 overflow-y-auto p-4">
        {messages.length === 0 && (
          <EmptyBoxState onSelectOptions={handleSelectedOptions} />
        )}

        {messages.map((msg: Message, index: number) => {
          return msg.role === "user" ? (
            <div className="flex justify-end mt-2" key={index}>
              <div className="max-w-lg bg-primary text-white px-4 py-2 rounded-lg">
                {msg.content}
              </div>
            </div>
          ) : (
            <div className="flex justify-start mt-2" key={index}>
              <div className="max-w-lg bg-gray-100 text-black px-4 py-2 rounded-lg">
                {msg.content}
                {RenderGenerativeUI(msg.ui ?? "")}
              </div>
            </div>
          );
        })}
        {loading && (
          <div className="flex justify-start mt-2">
            <div className="max-w-lg bg-gray-100 text-black px-4 py-2 rounded-lg">
              <Loader className="animate-spin h-4 w-4" />
            </div>
          </div>
        )}
      </section>
      <section>
        <div className="border rounded-2xl p-4 relative">
          <Textarea
            onChange={(e) => setUserInput(e.target.value)}
            value={userInput}
            placeholder="Create a trip from Varanasi to Delhi"
            className="w-full h-28 bg-transparent border-none focus-visible:ring-0 shadow-none resize-none"
          />
          <Button
            size="icon"
            className="absolute bottom-6 right-6"
            onClick={() => onSend()}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}

export default ChatBox;
