import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import VideoCarsoul from "./VideoCarsoul";

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#highlight-title", {
      opacity: 1,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: "#highlight-title",
        toggleActions: "restart reverse restart reverse",
        start: "top 85%",
      },
    });
  });
  return (
    <div
      id="highlights"
      className="w-full h-[800px] max-sm:h-[600px] md:h-[1000px] md:mt-15 bg-[#101010] px-6 relative"
    >
      <div className="screen-max-width">
        <h1 className="h1 mb-20" id="highlight-title">
          HighLights
        </h1>
        <VideoCarsoul />
      </div>
    </div>
  );
};

export default Highlights;
