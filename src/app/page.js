"use client";
import React from "react";
import RootLayout from "./layout";
import Login from "../components/Login";
import { TimeLine } from "@/components/TimeLine";

export default function Home() {
  return (
    <RootLayout>
      <Login />
      <TimeLine />
    </RootLayout>
  );
}
