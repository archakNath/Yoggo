import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Minus,
  Sparkle,
} from "lucide-react";
import React from "react";
import Accordian from "./Accordian";

const Home = () => {
  return (
    <div className="p-5 max-w-screen-xl mx-auto">
      {/* hero section */}
      <div className="image max-md:h-[50vh]" id="hero">
        {/* top button */}
        <div className="upper-cover">
          <button className="flex p-4 border border-black rounded-full items-center gap-1 hover:gap-2 transition-all">
            <ChevronLeft className="w-5 h-5" />
            <p>INDIVIDUAL YOGA</p>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="lower-cover">
          <button className="flex p-4 border border-black rounded-full items-center gap-1 hover:gap-2 transition-all">
            <p>BOOK A CLASS</p>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* details section */}
      <div className="my-24" id="details">
        <Accordian
          heading="WHY US"
          subheading="Connect your body to your soul."
          description="Through our carefully selected strategies we create a harmony between your mind and your body thus reducing stress, enhancing mental well-being & increasing emotion..."
        />
        <Accordian
          heading="BENEFIT"
          subheading="Transform Your Life"
          description="Unlock a healthier, more balanced lifestyle with yoga. Our programs are designed to improve flexibility, strength, and posture while alleviating stress and boosting mental clarity."
        />
        <Accordian
          heading="PROGRAM"
          subheading="Tailored for Everyone"
          description="Our yoga programs are thoughtfully curated to suit all levels of experience and fitness. From beginner-friendly classes that focus on the basics to advanced sessions that challenge and inspire, there's something for everyone."
        />
        <Accordian
          heading="HISTORY"
          subheading="Rooted in Tradition"
          description="Our yoga practice is deeply rooted in ancient traditions, honoring the wisdom of generations past."
        />
      </div>

      <div className="flex gap-3 overflow-x-hidden border-dotted border-black border bg-yellow-400 py-1">
        <Sparkle className="min-w-4" /> <p className="text-nowrap">FREE TRIAL CLASS</p>
        <Sparkle className="min-w-4" /> <p className="text-nowrap">FREE TRIAL CLASS</p>
        <Sparkle className="min-w-4" /> <p className="text-nowrap">FREE TRIAL CLASS</p>
        <Sparkle className="min-w-4" /> <p className="text-nowrap">FREE TRIAL CLASS</p>
        <Sparkle className="min-w-4" /> <p className="text-nowrap">FREE TRIAL CLASS</p>
        <Sparkle className="min-w-4" /> <p className="text-nowrap">FREE TRIAL CLASS</p>
        <Sparkle className="min-w-4" /> <p className="text-nowrap">FREE TRIAL CLASS</p>
        <Sparkle className="min-w-4" /> <p className="text-nowrap">FREE TRIAL CLASS</p>
      </div>
    </div>
  );
};

export default Home;
