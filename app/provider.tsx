"use client";
import React, { useEffect } from "react";
import Header from "./_components/Header";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/nextjs";

export default function Provider({ children }: { children: React.ReactNode }) {
  const CreateUser = useMutation(api.user.CreateNewUser);
  const { user } = useUser();
  useEffect(() => {
    user && CreateNewUser();
  }, [user]);
  const CreateNewUser = async () => {
    if (user) {
      const result = await CreateUser({
        email: user?.primaryEmailAddress?.emailAddress ?? "",
        name: user?.fullName ?? "",
        imageUrl: user?.imageUrl ?? "",
      });
    }
  };
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
