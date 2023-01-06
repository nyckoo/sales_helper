import styles from "../style";
import { arrowUpRight } from "../assets";

const SignIn = () => (
  <div className={`${styles.flexCenter} w-[120px] h-[120px] rounded-full bg-green-gradient p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <span className="text-gradient">Sign</span>
      </p>

      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">In</span>
        </p>
        <img src={arrowUpRight} alt="arrow-upright" className="w-[23px] h-[23px] object-contain" />
      </div>
    </div>
  </div>
);

export default SignIn;
