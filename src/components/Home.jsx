import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Minus,
  SlidersHorizontal,
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

      {/* marquee */}
      <div className="flex gap-3 overflow-x-hidden border-dotted border-black border bg-yellow-400 py-1">
        <Sparkle className="min-w-4" />{" "}
        <p className="text-nowrap">FREE TRIAL CLASS</p>
        <Sparkle className="min-w-4" />{" "}
        <p className="text-nowrap">FREE TRIAL CLASS</p>
        <Sparkle className="min-w-4" />{" "}
        <p className="text-nowrap">FREE TRIAL CLASS</p>
        <Sparkle className="min-w-4" />{" "}
        <p className="text-nowrap">FREE TRIAL CLASS</p>
        <Sparkle className="min-w-4" />{" "}
        <p className="text-nowrap">FREE TRIAL CLASS</p>
        <Sparkle className="min-w-4" />{" "}
        <p className="text-nowrap">FREE TRIAL CLASS</p>
        <Sparkle className="min-w-4" />{" "}
        <p className="text-nowrap">FREE TRIAL CLASS</p>
        <Sparkle className="min-w-4" />{" "}
        <p className="text-nowrap">FREE TRIAL CLASS</p>
      </div>

      {/* classes */}
      <div id="classes">
        <div className="my-24">
          <h1 className="text-7xl font-extralight heading">CLASSES</h1>
          <div className="grid gap-4 grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-1 mt-6">
            <div className="col-span-1 bg-stone-900 text-white p-4 card">
              <h2>INDIVIDUAL</h2>
              <p className="text-sm text-stone-500">from $69/month</p>
              <div className="iconCover">
                <ArrowUpRight className="icon" />
              </div>
            </div>

            <img
              src="https://images.pexels.com/photos/1234035/pexels-photo-1234035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="col-span-2 rounded-3xl"
            />

            <div className="col-span-1 bg-stone-900 text-white p-4 card">
              <h2>ONLINE</h2>
              <p className="text-sm text-stone-500">from $19/month</p>
              <div className="iconCover">
                <ArrowUpRight className="icon" />
              </div>
            </div>

            <div className="flex col-span-1 max-md:col-span-2 flex-col justify-center items-center border border-black rounded-3xl p-5 gap-1">
              <p className="text-sm text-center">
                Carefully selected classes for groups and individuals.
              </p>
              <Sparkle />
              <p className="text-sm text-center">
                Online classes with a program from the market's top instructors.
              </p>
              <Sparkle />
              <p className="text-sm text-center">
                Promotions & discounts for our regular customers.
              </p>
            </div>

            <div className="col-span-1 bg-stone-900 text-white p-4 card">
              <h2>GROUP</h2>
              <p className="text-sm text-stone-500">from $49/month</p>
              <div className="iconCover">
                <ArrowUpRight className="icon" />
              </div>
            </div>

            <img
              src="https://images.pexels.com/photos/8436726/pexels-photo-8436726.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              className="col-span-2 rounded-3xl min-h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* banner */}
      <div id="banner" className="rounded-3xl overflow-hidden">
        <div className="bg-[#00000071] py-24 pX-10 flex flex-col gap-5 text-white items-center">
          <h1 className="text-5xl text-center font-extralight">
            The one <i className="font-normal">yoga</i> studio <br /> you'will
            ever <i className="font-normal">need</i>.
          </h1>
          <p className="p-5 text-center">
            Establised in far 2004, we currently have 1k+ monthly customers.
          </p>
          <div className="flex gap-3 text-sm max-md:flex-col">
            <span className="bg-white uppercase py-2 px-3 border border-dotted border-black text-black rounded-full">
              20 YEARS EXPERIENCE
            </span>
            <span className="bg-white uppercase py-2 px-3 border border-dotted border-black text-black rounded-full text-center">
              4 YOGA STYLES
            </span>
            <span className="bg-white uppercase py-2 px-3 border border-dotted border-black text-black rounded-full">
              16 YOGA INSTRUCTORS
            </span>
          </div>
        </div>
      </div>

      {/* yoga names section */}
      <div className="my-24" id="yoga details">
        <Accordian
          heading="Vinyasa"
          subheading="Flow with Grace"
          description="A dynamic style of yoga that links breath with movement, creating seamless flows to build strength and flexibility."
        />
        <Accordian
          heading="Hatha"
          subheading="Balance and Harmony"
          description="A foundational practice focusing on postures and breath control to promote physical strength and mental clarity."
        />
        <Accordian
          heading="Kundalini"
          subheading="Awaken Your Energy"
          description="A spiritual practice combining movement, chanting, and meditation to awaken dormant energy and deepen self-awareness."
        />
        <Accordian
          heading="Ashtanga"
          subheading="Discipline in Practice"
          description="A structured sequence of postures performed in a specific order to enhance strength, endurance, and mental focus."
        />
      </div>

      {/* marquee */}
      <div className="flex gap-3 overflow-x-hidden border-dotted border-black border bg-stone-900 text-white py-1">
        <Sparkle className="min-w-4" />{" "}
        <p className="text-nowrap">FREE CONSULTATION</p>
        <Sparkle className="min-w-4" />{" "}
        <p className="text-nowrap">FREE CONSULTATION</p>
        <Sparkle className="min-w-4" />{" "}
        <p className="text-nowrap">FREE CONSULTATION</p>
        <Sparkle className="min-w-4" />{" "}
        <p className="text-nowrap">FREE CONSULTATION</p>
        <Sparkle className="min-w-4" />{" "}
        <p className="text-nowrap">FREE CONSULTATION</p>
        <Sparkle className="min-w-4" />{" "}
        <p className="text-nowrap">FREE CONSULTATION</p>
        <Sparkle className="min-w-4" />{" "}
        <p className="text-nowrap">FREE CONSULTATION</p>
        <Sparkle className="min-w-4" />{" "}
        <p className="text-nowrap">FREE CONSULTATION</p>
      </div>

      {/* schedule */}
      <div className="my-24">
        <h1 className="text-7xl max-sm:text-5xl font-extralight heading">
          SCHEDULE
        </h1>
        <div className="flex justify-between items-center mt-5">
          <div className="flex gap-1 border w-fit py-2 px-3 border-black rounded-full">
            <ChevronLeft className="w-5 h-5" />
            <p className="text-sm">17 JULY - 20 JULY</p>
            <ChevronRight className="w-5 h-5" />
          </div>
          <div className="p-3 border border-black rounded-full">
            <SlidersHorizontal className="w-4 h-4" />
          </div>
        </div>

        <div className="grid grid-cols-4 max-sm:grid-cols-2 rounded-3xl overflow-hidden border border-black mt-6">
          <div className="bg-stone-900 text-white flex justify-center flex-col items-center aspect-video">
            <p className="text-sm">Monday</p>
            <p className="text-2xl">17</p>
          </div>
          <div className="bg-stone-900 text-white flex justify-center flex-col items-center aspect-video">
            <p className="text-sm">Tuesday</p>
            <p className="text-2xl">18</p>
          </div>
          <div className="bg-stone-900 text-white flex justify-center flex-col items-center aspect-video max-sm:hidden">
            <p className="text-sm">Wednesday</p>
            <p className="text-2xl">19</p>
          </div>
          <div className="bg-stone-900 text-white flex justify-center flex-col items-center aspect-video max-sm:hidden">
            <p className="text-sm">Thursday</p>
            <p className="text-2xl">20</p>
          </div>
          <div className="col-span-1 border border-black p-4 text-sm text-center aspect-square flex justify-center items-center flex-col">
            <p>09:00AM - 10:00AM</p>
            <h2 className="text-xl font-semibold">HATHA</h2>
            <button className="border border-black w-full py-2 rounded-full mt-3">
              BOOK
            </button>
          </div>
          <div className="col-span-1 border border-black p-4 text-sm text-center aspect-square flex justify-center items-center flex-col"></div>
          <div className="col-span-1 border border-black p-4 text-sm text-center aspect-square flex justify-center items-center flex-col max-sm:hidden">
            <p>09:00AM - 10:00AM</p>
            <h2 className="text-xl font-semibold">HATHA</h2>
            <button className="border border-black w-full py-2 rounded-full mt-3">
              BOOK
            </button>
          </div>
          <div className="col-span-1 border border-black p-4 text-sm text-center aspect-square flex justify-center items-center flex-col max-sm:hidden"></div>
          <div className="col-span-1 border border-black p-4 text-sm text-center aspect-square flex justify-center items-center flex-col"></div>
          <div className="col-span-1 border border-black p-4 text-sm text-center aspect-square flex justify-center items-center flex-col">
            <p>09:00AM - 10:00AM</p>
            <h2 className="text-xl font-semibold">HATHA</h2>
            <button className="border border-black w-full py-2 rounded-full mt-3">
              BOOK
            </button>
          </div>
          <div className="col-span-1 border border-black p-4 text-sm text-center aspect-square flex justify-center items-center flex-col max-sm:hidden"></div>
          <div className="col-span-1 border border-black p-4 text-sm text-center aspect-square flex justify-center items-center flex-col max-sm:hidden">
            <p>09:00AM - 10:00AM</p>
            <h2 className="text-xl font-semibold">HATHA</h2>
            <button className="border border-black w-full py-2 rounded-full mt-3">
              BOOK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
