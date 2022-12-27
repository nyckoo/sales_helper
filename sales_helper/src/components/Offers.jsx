import { staticOffers } from "../constants";
import React, { useState } from "react";
import { axiosInstance } from "../axios";
import { layout } from "../style";
import { arrowDown, arrowUp } from "../assets";

const OfferCard = ({ uuid, title, skills, index }) => {
  const [toggle, setToggle] = useState(false);
  const desc = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";
  return (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== staticOffers.length - 1 ? "mb-6" : "mb-0"} offers-card`}>
      {/* <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimGreen`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div> */}
      <div className="flex flex-col ml-3 mr-3">
        <div>
          <div className="flex-1 flex flex-row">
            <img src={toggle ? arrowUp : arrowDown} alt="arrow-down" className="w-[23px] h-[23px] object-contain mr-3" onClick={() => setToggle(!toggle)} />
            <h4 className="font-poppins font-semibold text-oldWhite text-[12px] leading-[23.4px] mb-1">
              ID: {uuid}
            </h4>
          </div>
        </div>
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
          {title}
        </h4>
        <div className="flex-1 flex flex-row font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
          {skills.map((item, index) => (
            <h6 key={item}>{item}{index !== skills.length - 1 ? "," : "."}&nbsp;</h6>
          ))}
        </div>
        <h6
          className={`${!toggle ? "hidden" : "flex"
            } text-oldWhite text-[14px] top-20 right-0 my-2 min-w-[140px] max-w-[960px] rounded-md`}
        >{desc}</h6>
      </div>
    </div>
  );
};

const Offers = ({ offers }) => (
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

export default class OffersList extends React.Component {
  state = {
    offers: []
  }

  async componentDidMount() {
    // fetch(`https://API_LINK/offers`)
    // .then((response) => response.json())
    // .then((data) => {
    //  console.log(data);
    const offers = staticOffers;
    this.setState({ offers });
    // }).catch((err) => {
    // console.log(err.message);
    // });
  }

  render() {
    return (
      <Offers offers={this.state.offers} />
    );
  }
};