import { Button } from "@/components/ui/button";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";
import { Textarea } from "@/components/ui/textarea";
import { Globe2, Landmark, Plane, Send } from "lucide-react";
import React from "react";

function Hero() {
  const suggestions = [
    {
      title: "Create a trip",
      icon: <Globe2 className="h-4 w-4 text-blue-400" />,
    },
    {
      title: "Inspire me where to go",
      icon: <Plane className="h-4 w-4 text-blue-400" />,
    },
    {
      title: "Discover Hidden Gems",
      icon: <Landmark className="h-4 w-4 text-blue-400" />,
    },
    {
      title: "Adventure Destiniation",
      icon: <Globe2 className="h-4 w-4 text-blue-400" />,
    },
  ];
  return (
    <div className="mt-4 w-full flex justify-center">
      {/* content section*/}
      <div className="max-w-3xl w-full text-center space-y-6">
        <h1 className="text-xl md:text-4xl font-bold">
          Hey, I am your personal <span>Trip Planner</span>
        </h1>
        <p className="text-lg">
          Tell me what you want, and I'll handle the rest: Flights, hotels,
          trip-planners - all in seconds
        </p>
        {/* input section*/}
        <div>
          <div className="border rounded-2xl p-4 relative">
            <Textarea
              placeholder="Create a trip from Varanasi to Delhi"
              className="w-full h-28 bg-transparent border-none focus-visible:ring-0 shadow-none resize-none"
            />
            <Button size={"icon"} className="absolute bottom-6 right-6">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
        {/* suggestion list */}
        <div className="flex gap-5">
          {suggestions.map((suggestion, index) => {
            return (
              <div
                key={index}
                className="flex items-center gap-2 border rounded-full p-2 cursor:pointer hover:bg-primary hover:text-white  "
              >
                {suggestion.icon}
                <h2 className="text-sm">{suggestion.title}</h2>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center flex-col items-center">
          <h2 className="mt-14 my-7 flex gap-2 items-center">
            Not sure where to start? <strong>See how it works</strong>
          </h2>
          <HeroVideoDialog
            className="block dark:hidden max-w-3xl w-full max-h-3xl"
            animationStyle="top-in-bottom-out"
            videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
            thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
            thumbnailAlt="Hero Video"
          />
        </div>
      </div>
      {/* video section*/}
    </div>
  );
}

export default Hero;
