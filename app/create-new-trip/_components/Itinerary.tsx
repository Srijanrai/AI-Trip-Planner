import React from "react";
import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";
import Link from "next/link";
import { Clock, ExternalLink, Star, Ticket, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import HotelCardItem from "./HotelCardItem";
import PlaceCardItems from "./PlaceCardItems";
const TRIP_DATA = {
  destination: "Lucknow",
  duration: "3 days",
  origin: "Delhi",
  budget: "Moderate",
  group_size: "Family of 3-5",
  hotels: [
    {
      hotel_name: "Leela Palace Lucknow",
      hotel_address: "Sadr Bazaar, Lucknow, Uttar Pradesh 226001, India",
      price_per_night: "₹3500 - ₹4500",
      hotel_image_url:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
      geo_coordinates: {
        latitude: 26.8467,
        longitude: 80.9462,
      },
      rating: 4.5,
      description:
        "A luxurious heritage hotel offering family suites with modern amenities, close to historic sites, ideal for cultural explorations with comfortable rooms for 3-5 guests.",
    },
    {
      hotel_name: "Taj Mahal Lucknow",
      hotel_address: "Gomti Nagar, Lucknow, Uttar Pradesh 226010, India",
      price_per_night: "₹3000 - ₹4000",
      hotel_image_url:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
      geo_coordinates: {
        latitude: 26.8528,
        longitude: 81.0012,
      },
      rating: 4.3,
      description:
        "Elegant hotel in a prime location with spacious family rooms, rooftop views, and easy access to museums and local traditions, fitting a moderate budget.",
    },
    {
      hotel_name: "Fairfield by Marriott Lucknow",
      hotel_address:
        "Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010, India",
      price_per_night: "₹2800 - ₹3800",
      hotel_image_url:
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
      geo_coordinates: {
        latitude: 26.855,
        longitude: 81.0125,
      },
      rating: 4.2,
      description:
        "Modern and affordable family-friendly hotel with pool access, near historic areas, offering value for money with breakfast included for groups.",
    },
  ],
  itinerary: [
    {
      day: 1,
      day_plan:
        "Arrival from Delhi via train or flight (approx. 6-7 hours by Shatabdi Express), check-in to hotel, and explore central Lucknow's historic core with a focus on Nawabi architecture and evening cultural stroll.",
      best_time_to_visit_day:
        "Morning to evening, avoiding peak afternoon heat",
      activities: [
        {
          place_name: "Rumi Darwaza",
          place_details:
            "Iconic 18th-century gateway symbolizing Lucknow's Awadhi heritage, offering panoramic views and insights into Mughal architecture.",
          place_image_url:
            "https://images.unsplash.com/photo-1606305328416-6b3a3fa3e9e6?w=800",
          geo_coordinates: {
            latitude: 26.8667,
            longitude: 80.9125,
          },
          place_address: "Hussainabad, Lucknow, Uttar Pradesh 226003, India",
          ticket_pricing: "Free entry",
          time_travel_each_location: "1-2 hours",
          best_time_to_visit: "Late afternoon for sunset views",
        },
        {
          place_name: "Bara Imambara",
          place_details:
            "Grand 18th-century complex with a labyrinth (Bhool Bhulaiyaa) and mosque, showcasing Shia Muslim traditions and architectural marvels.",
          place_image_url:
            "https://images.unsplash.com/photo-1598043198428-d2fd4c13f6a8?w=800",
          geo_coordinates: {
            latitude: 26.8692,
            longitude: 80.9117,
          },
          place_address:
            "Imambara Road, Machchhi Bhavan, Lucknow, Uttar Pradesh 226003, India",
          ticket_pricing: "₹50 for Indians, ₹500 for foreigners",
          time_travel_each_location: "2 hours",
          best_time_to_visit: "Early morning to beat crowds",
        },
      ],
    },
    {
      day: 2,
      day_plan:
        "Full day dedicated to historic sites and local traditions, including a guided walk through old city areas and tasting Awadhi cuisine to immerse in Lucknow's cultural essence.",
      best_time_to_visit_day:
        "Morning and late afternoon for comfortable weather",
      activities: [
        {
          place_name: "Chota Imambara",
          place_details:
            "Miniature version of Bara Imambara, known as the 'Palace of Lights' with intricate Persian designs and housing tombs of Nawabs.",
          place_image_url:
            "https://images.unsplash.com/photo-1598043198429-d2fd4c13f6a8?w=800",
          geo_coordinates: {
            latitude: 26.8694,
            longitude: 80.9103,
          },
          place_address: "Hussainabad, Lucknow, Uttar Pradesh 226003, India",
          ticket_pricing: "₹50 for Indians",
          time_travel_each_location: "1.5 hours",
          best_time_to_visit: "Morning for serene ambiance",
        },
        {
          place_name: "The Residency",
          place_details:
            "Ruins of a British colonial complex from the 1857 revolt, now a museum with artifacts depicting Lucknow's role in Indian history.",
          place_image_url:
            "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
          geo_coordinates: {
            latitude: 26.8578,
            longitude: 80.9378,
          },
          place_address:
            "River Bank Colony, Lucknow, Uttar Pradesh 226001, India",
          ticket_pricing: "₹25 for Indians, ₹300 for foreigners",
          time_travel_each_location: "2 hours",
          best_time_to_visit: "Afternoon for historical tours",
        },
        {
          place_name: "Chowk Market",
          place_details:
            "Vibrant bazaar for experiencing local traditions, shopping for Chikankari embroidery, and savoring street food like kebabs reflecting Awadhi culture.",
          place_image_url:
            "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800",
          geo_coordinates: {
            latitude: 26.87,
            longitude: 80.9056,
          },
          place_address: "Chowk, Lucknow, Uttar Pradesh 226003, India",
          ticket_pricing: "Free (shopping optional)",
          time_travel_each_location: "1-2 hours",
          best_time_to_visit: "Evening for lively atmosphere",
        },
      ],
    },
    {
      day: 3,
      day_plan:
        "Morning visit to museums followed by leisure time for family reflections on history, optional local craft workshop, and departure back to Delhi.",
      best_time_to_visit_day: "Morning for museums, afternoon for relaxation",
      activities: [
        {
          place_name: "State Museum, Lucknow",
          place_details:
            "Premier museum housing artifacts from ancient to medieval times, including Buddhist relics and Nawabi artifacts, perfect for family learning on regional history.",
          place_image_url:
            "https://images.unsplash.com/photo-1578683015141-0acef2ccf1f5?w=800",
          geo_coordinates: {
            latitude: 26.8505,
            longitude: 80.9417,
          },
          place_address: "Janpath Road, Lucknow, Uttar Pradesh 226001, India",
          ticket_pricing: "₹20 for Indians",
          time_travel_each_location: "1.5 hours",
          best_time_to_visit: "Early morning when open",
        },
        {
          place_name: "Dr. Bhimrao Ambedkar Memorial",
          place_details:
            "Memorial dedicated to the architect of India's Constitution, with exhibits on his life and Lucknow's role in social reform and traditions.",
          place_image_url:
            "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
          geo_coordinates: {
            latitude: 26.8411,
            longitude: 80.9333,
          },
          place_address:
            "Vidhan Sabha Marg, Lucknow, Uttar Pradesh 226001, India",
          ticket_pricing: "Free",
          time_travel_each_location: "1 hour",
          best_time_to_visit: "Morning for guided insights",
        },
      ],
    },
  ],
};

function Itinerary() {
  const data = [
    {
      title: "Recommended Hotels",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {TRIP_DATA?.hotels?.map((hotel, index) => {
            return <HotelCardItem hotel={hotel} />;
          })}
        </div>
      ),
    },
    ...TRIP_DATA?.itinerary.map((dayData) => ({
      title: `Day ${dayData?.day}`,
      content: (
        <div>
          <p>Best Time :{dayData?.best_time_to_visit_day}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dayData?.activities.map((activity, index) => {
              return <PlaceCardItems key={index} activity={activity} />;
            })}
          </div>
        </div>
      ),
    })),
  ];
  return (
    <div className="relative w-full h-[83vh] overflow-auto">
      <Timeline data={data} tripData={TRIP_DATA} />
    </div>
  );
}

export default Itinerary;
