import { staticUsers } from "../constants";
import React, { useState } from "react";
import { axiosInstance } from "../axios";
import ModalWindow from "./ModalForm";
import styles, { layout } from "../style";
import { adduser, arrowDown, arrowUp } from "../assets";

const UserCard = ({ name, surname, position, category, is_busy, id }) => {
    const [toggle, setToggle] = useState(false);
    const desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    return (
        <div className={`flex flex-row p-2 rounded-[20px] ${id !== staticUsers.length - 1 ? "mb-6" : "mb-0"} users-card`}>
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
                >{desc}</h6>
            </div>
        </div>
    );
};

const Users = ({ users }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    return (
        <section id="users" className={layout.section}>
            <div className={layout.sectionInfo}>
                <div className="flex flex-row items-center my-2">
                    <h2 className={styles.heading2}>Available Users</h2>
                    <img src={adduser} className={`${styles.iconHover} mx-5 p-[4px] h-[54px] w-[54px] object-contain`} onClick={setModalOpen} />
                </div>
                {isModalOpen && <ModalWindow isOpen={setModalOpen} />}
                <div className="flex-col">
                    {users.map((user, index) => (
                        <UserCard key={user.id} {...user} index={index + 1} />
                    ))}
                </div>
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
    )
}

export default class UsersList extends React.Component {
    state = {
        users: []
    }

    async componentDidMount() {
        const users = staticUsers;
        this.setState({ users });
        // const response = await axiosInstance.get("/employees/");
        // console.log(response.data);
        // this.setState({ users: response.data });
    }

    render() {
        return (
            <Users users={this.state.users} />
        );
    }
};