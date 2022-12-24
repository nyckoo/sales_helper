import { offers } from "../constants";
import styles, { layout } from "../style";
import { arrowDown } from "../assets";

const OfferCard = ({ uuid, title, skills, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== offers.length - 1 ? "mb-6" : "mb-0"} offers-card`}>
    {/* <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimGreen`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div> */}
    <div className="flex-1 flex flex-col ml-3 mr-3">
      <h4 className="font-poppins font-semibold text-oldWhite text-[12px] leading-[23.4px] mb-1">
        ID: {uuid}
      </h4>
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <div className="flex-1 flex flex-row font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {skills.map((item, index) => (
          <h6 key={item}>{item}{index !== skills.length - 1 ? "," : "."}&nbsp;</h6>
        ))}
      </div>
    </div>
    <div>
      <button type="button">
        <img src={arrowDown} alt="arrow-down" className="w-[23px] h-[23px] object-contain" />
      </button>
    </div>
  </div>
);

const Offers = () => (
  <section id="offers" className={layout.section}>
    <div className={`${layout.sectionInfo} flex-col`}>
      {offers.map((offer, index) => (
        <OfferCard key={offer.uuid} {...offer} index={index} />
      ))}
    </div>

    {/* <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        headline text
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        desc text
      </p>

      <Button styles={`mt-10`} />
    </div> */}
  </section>
);

export default Offers;