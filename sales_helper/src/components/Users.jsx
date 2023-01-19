import { staticUsers } from "../constants";
import React, { useState, useEffect } from "react";
import { axiosInstance } from "../axios";
import ModalAddUser from "./ModalAddUserForm";
import ModalAddResume from "./ModalAddResumeForm";
import styles, { layout } from "../style";
import { adduser, arrowDown, arrowUp, rightArrow, leftArrow, document_desc } from "../assets";

const UserCard = ({ name, surname, position, category, resume, id }) => {
    const [toggle, setToggle] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <div className={`flex flex-row items-center p-2 rounded-[20px] my-4 users-card`}>
            <img src={document_desc} className={`${styles.iconHover} p-[4px] h-[64px] w-[64px] object-contain`} onClick={setModalOpen} />
            {isModalOpen && <ModalAddResume isOpen={setModalOpen} id={id} />}
            <div className="flex flex-col ml-3 mr-3">
                <div className="flex-1 flex flex-row">
                    <img src={toggle ? arrowUp : arrowDown} alt="arrow-down" className="w-[24px] h-[24px] object-contain mr-3" onClick={() => setToggle(!toggle)} />
                    <h4 className="font-poppins font-semibold text-oldWhite text-[12px] leading-[23.4px] mb-1">
                        ID: {id}
                    </h4>
                </div>
                <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
                    {name}{" "}{surname}
                </h4>
                <div className="flex-1 flex flex-row font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
                    <h6>{position}{". ("}{category}{")"}</h6>
                </div>
                <h6
                    className={`${!toggle ? "hidden" : "flex"
                        } text-oldWhite text-[14px] top-20 right-0 my-2 min-w-[140px] max-w-[960px] rounded-md`}
                >{resume.content}</h6>
            </div>
        </div>
    );
};

const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [isModalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        const getOffers = async () => {
            try {
                const url = `/employees/`;
                const { data } = await axiosInstance.get(url);
                //console.log(data);
                setUsers(data);
            } catch (err) {
                console.log(err);
            }
        };
        getOffers();
    }, [page]);

    const limitPagination = (pageNr) => {
        return pageNr < 1 ? 1 : pageNr
    };

    return (
        <section id="users" className={layout.section}>
            <div className={layout.sectionInfo}>
                <div className="flex flex-row items-center my-2">
                    <h2 className={styles.heading2}>Available Users</h2>
                    <img src={adduser} className={`${styles.iconHover} mx-5 p-[4px] h-[64px] w-[64px] object-contain`} onClick={setModalOpen} />
                </div>
                {isModalOpen && <ModalAddUser isOpen={setModalOpen} />}
                <button onClick={() => setPage(limitPagination(page - 1))}><img src={leftArrow} className="w-[56x] h-[56px] object-contain" /></button>
                <button onClick={() => setPage(page + 1)}><img src={rightArrow} className="w-[56px] h-[56px] object-contain" /></button>
                <div className="flex-col">
                    {users.map((user, index) => (
                        <UserCard key={user.id} {...user} index={index + 1} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UsersList;