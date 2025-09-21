"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function PopularCityList() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full pt-20">
      <h2 className="max-w-5xl pl-4 mx-auto text-xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Popular Destination to visit..
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <img
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Europe",
    title: "Explore the beautiful city of Paris.",
    src: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=3556&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Asia",
    title: "Discover the ancient temples of Kyoto.",
    src: "https://images.unsplash.com/photo-1538099571052-9aa91ee69641?q=80&w=3387&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "America",
    title: "Experience the vibrant culture of New York City.",
    src: "https://images.unsplash.com/photo-1549924231-f129b911e442?q=80&w=2333&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Australia",
    title: "Visit the stunning Sydney Opera House.",
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2515&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Africa",
    title: "Go on an exciting safari in Kenya.",
    src: "https://images.unsplash.com/photo-1549887530-70b6cd4ef7f7?q=80&w=2793&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "South America",
    title: "Explore the vibrant streets of Rio de Janeiro.",
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2048&auto=format&fit=crop",
    content: <DummyContent />,
  },
];
