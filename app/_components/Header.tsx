import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";

function Header() {
  const menuOptions = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact-us",
      path: "/contact-us",
    },
  ];

  return (
    <div className="flex justify-between items-center p-4">
      <div className="flex items-center gap-2">
        <Image src={"/logo.svg"} alt="logo" width={30} height={30} />
        <h2 className="text-2xl font-bold">AI Trip Planner</h2>
      </div>
      <div className="flex gap-8 items-center">
        {menuOptions.map((option) => {
          return (
            <Link
              className="text-lg center hover:scale-105 transition-all hover:text-primary"
              href={option.path}
              key={option.name}
            >
              {option.name}
            </Link>
          );
        })}
      </div>
      <SignInButton mode="modal">
        <Button>Get Started</Button>
      </SignInButton>
    </div>
  );
}

export default Header;
