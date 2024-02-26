import React from "react";
import Home from "../components/Home";
import Header from "../components/Header";
import Background from "../assets/Background.png";
import About from "../components/About";
import RoadMap from "../components/RoadMap";
import Launch from "../components/Launch";

export default function LandingPage() {
  return (
    <main className="overflow-hidden">
      <div className="relative max-w-[2400px] mx-auto">
        <div className="bg-cover w-full">
          {/* <img
            src={Background}
            alt="Background"
            className="absolute w-full h-full object-fill opacity-15"
          /> */}
        </div>
        <Header />
        <section>
          <Home />
        </section>
        <section>
          <About />
        </section>
        <section>
          <RoadMap />
        </section>
        <section>
          <Launch />
        </section>
      </div>
    </main>
  );
}
