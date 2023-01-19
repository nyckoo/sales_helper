import { staticOffers, filterButtons, staticUsers } from "../constants";
import React, { useState, useEffect } from "react";
import { axiosInstance } from "../axios";
import UsersQuery from "./UsersQuery";
import UsersSearch from "./UsersSearch";
import styles, { layout } from "../style";
import { arrowDown, arrowUp, magnifyingGlass, rightArrow, leftArrow, close } from "../assets";

const limitPagination = (pageNr) => {
  return pageNr < 1 ? 1 : pageNr
};

const OfferCard = ({ uuid, title, skills, description, index }) => {
  const [toggle, setToggle] = useState(false);
  const [isUsersExpanded, setUsersExpanded] = useState(false);
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [captured, isCaptured] = useState(false);

  const handleSearchChange = (e) => {
    let input = e.target.value.toLowerCase();
    if (!input) return setFilteredUsers(users);
    const resultsArray = users.filter(user => user.name.toLowerCase().includes(input) || user.surname.toLowerCase().includes(input));
    //console.log(resultsArray);
    return setFilteredUsers(resultsArray);
  };

  return (
    <div className={`offers-card rounded-[20px] ${index !== 4 ? "mb-6" : "mb-0"}`}>
      <div className={"flex flex-row p-2"}>
        <div className={`${styles.flexCenter} flex-col min-w-[80px] h-[80px] rounded-full bg-extra-gradient`}>
          <img src={magnifyingGlass} className="w-[50%] h-[50%] object-contain"
            onClick={() => {
              setUsersExpanded(!isUsersExpanded);
            }} />
          <p className="text-oldWhite text-[12px]">Search</p>
        </div>
        <div className="flex flex-col ml-3 mr-3">
          <div className="flex-1 flex flex-row">
            <img src={toggle ? arrowUp : arrowDown} alt="arrow-down" className="w-[24px] h-[24px] object-contain mr-3"
              onClick={() => {
                setToggle(!toggle)
              }} />
            <h4 className="font-poppins font-semibold text-oldWhite text-[12px] leading-[23.4px] mb-1">
              ID: {uuid}
            </h4>
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
        </div>
      </div>
      {/* (users && !searchUsers) */}
      {isUsersExpanded &&
        <div className="flex flex-row p-2 rounded-[20px]">
          <div className={`${styles.flexBetweenCol} w-[80px] h-[160px] mb-[2px] mt-[52px]`}>
            {!captured &&
              <div className={`${styles.flexCenter} flex-col w-[60px] h-[60px] rounded-full bg-extra-gradient`}>
                <img src={arrowUp} className="w-[50%] h-[50%] object-contain" onClick={() => setPage(limitPagination(page - 1))} />
                <p className="text-oldWhite text-[12px]">Up</p>
              </div>}
            {!captured &&
              <div className={`${styles.flexCenter} flex-col w-[60px] h-[60px] rounded-full bg-extra-gradient`}>
                <img src={arrowDown} className="w-[50%] h-[50%] object-contain" onClick={() => setPage(page + 1)} />
                <p className="text-oldWhite text-[12px]">Down</p>
              </div>}
          </div>
          <div onFocus={() => isCaptured(true)}>
            <div className="flex flex-row py-2 font-poppins font-medium text-dimWhite">
              <input
                className={styles.inputField}
                type="text"
                id="search"
                placeholder="Type Name/Surname"
                onInput={handleSearchChange}
              />
              {captured && <button
                className="ml-2 border-[2px] border-oldWhite rounded-md w-[26px]"
                onClick={() => {
                  isCaptured(false);
                }}>
                <img src={close} className="w-[100%] h-[100%]" />
              </button>}
            </div>
            {captured && <UsersSearch setSearchResults={setUsers} filteredUsers={filteredUsers} />}
            {!captured && <UsersQuery setAllUsers={setUsers} pageNumber={page} offerUuid={uuid} />}
          </div>
        </div>}
    </div>
  );
};

const OffersList = () => {
  const [offers, setOffers] = useState([]);
  const [cat, setCat] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => { //async api call
    const getOffers = async () => {
      try {
        const url = `/offers/?category=${cat}&skip=${(page - 1) * 5}&limit=5`;
        const { data } = await axiosInstance.get(url);
        console.log(data);
        setOffers(data);
        //setOffers(staticOffers)
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
              <button className={`py-3 px-4 font-poppins font-medium text-[16px] text-oldWhite bg-extra-gradient rounded-[10px] outline-none ${styles.clickFocus}`}
                name={type} key={uuid} type="button" onClick={() => setCat(type)}>{content}</button>
            ))}
          </div>
          <button onClick={() => setPage(limitPagination(page - 1))}><img src={leftArrow} className="w-[56x] h-[56px] object-contain" /></button>
          <button onClick={() => setPage(page + 1)}><img src={rightArrow} className="w-[56px] h-[56px] object-contain" /></button>
          <div id="offers" className={`flex-col`}>
            {offers && offers.map((offer, index) => (
              <OfferCard key={offer.uuid} {...offer} index={index} allUsers={users} />
            ))}
          </div>
        </>
      </div>
    </section>
  );
};

export default OffersList;