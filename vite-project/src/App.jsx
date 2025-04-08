// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Display from "./components/Display";
import DayLight from "./components/DayLight";
import HowItWorks from "./components/HowItWorks";

export default function App() {
  return (
    <>
      <Navbar />
      <Display />
      <DayLight />
      <HowItWorks />

      <Routes></Routes>
    </>
  );
}
