import { staticOffers, filterButtons, staticUsers } from "../constants";
import React, { useState, useEffect } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import UsersQuery from "./UsersQuery";
import UsersSearch from "./UsersSearch";
import styles, { layout } from "../style";
import { magnifyingGlass, rightArrow, leftArrow, close } from "../assets";

const PageSize = 5;
const limitPagination = (pageNr, change, totalNumber) => {
  if (change < 0) {
    return pageNr + change < 1 ? 1 : pageNr + change;
  }
  else {
    return pageNr + change > Math.ceil(totalNumber / 5) ? Math.ceil(totalNumber / 5) : pageNr + change;
  }
};


const OfferCard = ({ uuid, title, skills, description, index }) => {
  const [toggle, setToggle] = useState(false);
  const [isUsersExpanded, setUsersExpanded] = useState(false);
  const [page, setPage] = useState(1);
  const [captured, isCaptured] = useState(false);

  return (
    <div className={`offers-card rounded-[20px] ${index !== 4 ? "mb-6" : "mb-0"}`}>
      <div className={"flex flex-row p-2"}>
        <div className={`${styles.flexCenter} flex-col min-w-[80px] h-[80px] rounded-full bg-extra-gradient`}>
          <img src={magnifyingGlass} className="w-[50%] h-[50%] object-contain"
            onClick={() => {
              setToggle(!toggle);
            }} />
          <p className="text-oldWhite text-[12px]">Details</p>
        </div>
        <div className="flex flex-col ml-3 mr-3">
          <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
            {title}
          </h4>
          <div className={`${toggle ? "hidden" : "flex"} text-oldWhite text-[14px] my-2 min-w-[140px] max-w-[960px] rounded-md`}>
            {description.slice(0, 50)}...
          </div>
          <div
            className={`${!toggle ? "hidden" : "flex"
              } text-oldWhite text-[14px] my-2 min-w-[140px] max-w-[960px] rounded-md`}
          >{description}</div>
        </div>
      </div>
      {/* (users && !searchUsers) */}
      {toggle &&
        <div className="flex flex-row p-2 rounded-[20px]">
          <div className={`${styles.flexBetweenCol} w-[80px] h-[160px] mb-[2px] mt-[52px]`}>
          </div>
          <div onFocus={() => isCaptured(true)}>
            <div className="flex flex-row py-2 font-poppins font-medium text-dimWhite">
              {captured && <button
                className="ml-2 border-[2px] border-oldWhite rounded-md w-[26px]"
                onClick={() => {
                  isCaptured(false);
                }}>
                <img src={close} className="w-[100%] h-[100%]" />
              </button>}
            </div>
            {!captured && <UsersQuery offerUuid={uuid} />}
          </div>
        </div>}
    </div>
  );
};

const OffersList = () => {
  const [offers, setOffers] = useState([]);
  const [totalNumberOfOffers, setTotalNumberOfOffers] = useState(0)
  const [cat, setCat] = useState("all");
  const [page, setPage] = useState(1);
  const [leftButtonDisabled, setLeftButtonDisabled] = useState(true);
  const [rightButtonDisabled, setRightButtonDisabled] = useState(true);
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => { //async api call
    const getOffers = async () => {
      try {
        const url = `/offers/?category=${cat}&skip=${(page - 1) * PageSize}&limit=${PageSize}`;
        const { data } = await axiosPrivate.get(url);
        setOffers(data["results"]);
        setTotalNumberOfOffers(data["total_count"])
        setLeftButtonDisabled(
          page == 1
        )
        setRightButtonDisabled(
          page * PageSize >= data["total_count"]
        )
      } catch (err) {
        console.log(err);
      }
    };
    cat ? getOffers() : null;
  }, [cat, page]);

  return (
    <section className={layout.section}>
      <div className={`${layout.sectionInfo} flex-col`}>
        <h2 className={`${styles.heading2} m-2`}>Current Offers</h2>
        <>
          <div id="buttons" className={`flex-1 flex-row p-2 text-oldWhite w-screen`}>
            {filterButtons && filterButtons.map(({ uuid, content, type }) => (
              <button className={`py-3 px-4 font-poppins font-medium text-[16px] text-oldWhite bg-extra-gradient rounded-[10px] outline-none ${cat == type ? styles.focused : "m-2"}`}
                name={type} key={uuid} type="button" onClick={() => { setCat(type); setPage(1) }}>{content}</button>
            ))}
          </div>
          <div id="offers" className={`flex-col mt-2 mb-5`}>
            {offers && offers.map((offer, index) => (
              <OfferCard {...offer} index={index} key={offer.uuid} />
            ))}
          </div>
          <div className="btn-group ml-3">
            <button onClick={() => setPage(limitPagination(page, -1, totalNumberOfOffers))}
              className="pr-5" disabled={leftButtonDisabled}>
              <img src={leftArrow} className={`${leftButtonDisabled ? "" : styles.paginationEnd} w-[56x] h-[56px] object-contain`} />
            </button>
            <button onClick={() => setPage(limitPagination(page, 1, totalNumberOfOffers))}
              className="pl-5" disabled={rightButtonDisabled}>
              <img src={rightArrow} className={`${rightButtonDisabled ? "" : styles.paginationEnd} w-[56px] h-[56px] object-contain`} />
            </button>
          </div>
        </>
      </div>
    </section>
  );
};

export default OffersList;