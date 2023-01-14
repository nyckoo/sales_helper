import { staticUsers } from "../constants";
import React, { useState } from "react";
import { axiosInstance } from "../axios";
import styles, { layout } from "../style";
import { arrowUpRight } from "../assets";

export default class UsersQueryList extends React.Component {
    state = {
        users: []
    }

    async componentDidMount() {
        // fetch(`https://API_LINK/users`)
        // .then((response) => response.json())
        // .then((data) => {
        //  console.log(data);
        const users = staticUsers;
        this.setState({ users });
        // }).catch((err) => {
        // console.log(err.message);
        // });
    }

    render() {
        return (
            <>
                <div className="flex flex-col">
                    {this.state.users.map((user, index) => (
                        <div className="items-center font-medium text-dimWhite flex flex-row mt-1" key={index}>
                            <div className={`min-w-[40px] h-[30px] rounded-full ${styles.flexCenter} bg-extra-gradient`}>
                                <img src={arrowUpRight} alt="star" className="object-contain" />
                            </div>
                            <p className="ml-2 text-oldWhite">
                                {user.surname}{" "}{user.name}
                            </p>
                        </div>
                    ))}
                </div>
            </>
        );
    }
};