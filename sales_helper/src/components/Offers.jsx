import { staticOffers } from "../constants";
import React, { useState } from "react";
import { axiosInstance } from "../axios";
import UsersQueryList from "./UsersQuery";
import styles, { layout } from "../style";
import { arrowDown, arrowUp, magnifyingGlass } from "../assets";
import Button from "./Button";

const OfferCard = ({ uuid, title, skills, description, index }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className={`flex flex-row p-2 rounded-[20px] ${index !== 4 ? "mb-6" : "mb-0"} offers-card`}>
      <div className={`${styles.flexBetweenCol}`}>
        <div className={`${styles.flexCenter} flex-col min-w-[80px] h-[80px] rounded-full bg-extra-gradient`}>
          <img src={magnifyingGlass} alt="star" className="w-[50%] h-[50%] object-contain" />
          <p className="text-oldWhite text-[12px]">Search</p>
        </div>
        <div className={`${styles.flexBetweenCol} h-[160px] mb-[2px]`}>
          <div className={`${styles.flexCenter} flex-col w-[60px] h-[60px] rounded-full bg-extra-gradient`}>
            <img src={arrowUp} alt="star" className="w-[50%] h-[50%] object-contain" />
            <p className="text-oldWhite text-[12px]">Up</p>
          </div>
          <div className={`${styles.flexCenter} flex-col w-[60px] h-[60px] rounded-full bg-extra-gradient`}>
            <img src={arrowDown} alt="star" className="w-[50%] h-[50%] object-contain" />
            <p className="text-oldWhite text-[12px]">Down</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-3 mr-3">
        <div>
          <div className="flex-1 flex flex-row">
            <img src={toggle ? arrowUp : arrowDown} alt="arrow-down" className="w-[24px] h-[24px] object-contain mr-3"
              onClick={() => {
                setToggle(!toggle)
              }} />
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
            } text-oldWhite text-[14px] my-2 min-w-[140px] max-w-[960px] rounded-md`}
        >{description}</h6>
        <div className="py-2 font-poppins font-medium text-dimWhite">
          <input className={styles.inputField} placeholder=" Type User Name" />
        </div>
        <div>
          <UsersQueryList />
        </div>
      </div>
    </div>
  );
};

const Offers = ({ offers, category }) => {
  const [category, setCategory] = useState("");
  console.log(category);
  return (
    <section id="offers" className={layout.section}>
      <div className={`${layout.sectionInfo} flex-col`}>
        <h2 className={`${styles.heading2} m-2`}>Current Offers</h2>
        <div className={`flex flex-row p-2 text-oldWhite`}>
          <Button content="Frontend" id="frontend" onClick={() => setCategory("frontend")} />
          <Button content="Backend" id="backend" onClick={() => setCategory("backend")} />
          <Button content="Fullstack" id="fullstack" onClick={() => setCategory("fullstack")} />
          <Button content="Mobile" id="mobile" onClick={() => setCategory("mobile")} />
        </div>
        {offers.map((offer, index) => (
          <OfferCard key={offer.uuid} {...offer} index={index} />
        ))}
      </div>
    </section>
  )
};

export default class OffersList extends React.Component {
  state = {
    offers: [],
    category: ""
  }

  async componentDidMount() {
    const offers = staticOffers;
    this.setState({ offers });
    // const response = await axiosInstance.get("/offers/?category=backend&skip=10&limit=5");
    // console.log(response.data);
    // this.setState({ offers: response.data });
  }

  render() {
    return (
      <Offers offers={this.state.offers} category={this.state.category} />
    );
  }
};