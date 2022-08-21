import React from "react";
import { StatusBar } from "react-native";
import { Home } from "./src/screens/Home";

export default function App() {
  return (
    <>
      <StatusBar
        translucent
        statusBarStyle="light-content"
        backgroundColor="#0b0f13"
      />
      <Home />
    </>
  );
}
