import { Link } from "react-router-dom";

import styles from "../style";
import { matcher_main } from "../assets";
import SignIn from "./SignIn";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
          Check out the next level<br className="sm:block hidden" />{" "}
          <span className="text-gradient">Job & Developer</span>{" "}
        </h1>
        {/* <div className="ss:flex hidden md:mr-4 mr-0">
          <Link to="/login"><SignIn /></Link>
        </div> */}
      </div>

      <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
        matching tool.
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our solution relies on selecting the most appriopriate candidates based on their experience and skillset
        for a job position, maximizing effectiveness of the process.
      </p>
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={matcher_main} className="w-[100%] h-[100%] z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 green__gradient" />
      {/* gradient end */}
    </div>

    {/* <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted />
    </div> */}
  </section>
);

export default Hero;
