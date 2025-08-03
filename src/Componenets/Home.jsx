import { useGSAP } from "@gsap/react";
import home from "/home2.png";
import gsap from "gsap";
import SpinnerBorder from "./smallComponents/SpinnerBorder";
const Home = () => {
  useGSAP(() => {
    gsap.to("#home-h1", { opacity: 1, y: 0, duration: 1 });
  });
  return (
    <div className="h-[550px] md:h-[700px] flex justify-center items-center gap-2 lg:gap-8 mt-4 relative top-4 md:flex-row flex-col-reverse container ">
      <div className="md:leading-8">
        <h1
          className="font-semibold text-blue-400 text-center lg:text-left -translate-y-[100px] text-xl md:text-3xl"
          id="home-h1"
        >
          I&apos;m Eslam Ahmed
        </h1>
        <div>
          <div className="mt-2">
            <p>I&apos;m Software Enginner </p>
            <h2>
              Name : <span className="text-[#86868b] ml-15">Eslam Ahmed</span>
            </h2>
            <h2>
              Date of birth :{" "}
              <span className="text-[#86868b] ml-4">March ,6,1999</span>
            </h2>
            <h2>
              Email :{" "}
              <span className="text-[#86868b] ml-17 md:ml-7">
                ea450424@gmail.com
              </span>
            </h2>
            <h2>
              Phone : <span className="text-[#86868b] ml-15">01003834884</span>
            </h2>
          </div>
          <div className="text-center mt-4">
            <a
              href="/EslamCV.pdf"
              className="px-4 py-2 rounded-2xl bg-blue-400"
              target="_blank"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
      <div className="mb-2">
        <SpinnerBorder img={home} />
      </div>
    </div>
  );
};

export default Home;
