import { staticUsers } from "../constants";
import React, { useState, useEffect } from "react";
import { axiosInstance } from "../axios";
import styles from "../style";
import { arrowUpRight } from "../assets";
import { render } from "react-dom";

const UserDetails = ({ isVisible, offerUuid }) => {
    const [match, setMatch] = useState(null);

    useEffect(() => {
        const getMatchValue = async () => {
            try {
                const url = `/offers/${offerUuid}/match`;
                const { data } = await axiosInstance.get(url);
                var match = data.match_ratio;
                console.log(data);
                setMatch(match);
            } catch (err) {
                console.log(err);
            }
        };
        getMatchValue();
    }, [match]);

    return (
        <p>
            {match}
        </p>

    );

}

const UsersQuery = ({ pageNumber, searchedUsers, offerUuid }) => {
    const [users, setUsers] = useState([]);
    const [searched, isSearched] = useState(false);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const url = `/employees/?skip=${(pageNumber - 1) * 5}&limit=5`;
                const { data } = await axiosInstance.get(url);
                console.log(data);
                setUsers(data);
                searchedUsers ? setUsers(searchedUsers) : setUsers(data);
            } catch (err) {
                console.log(err);
            }
        };
        getUsers();
    }, [pageNumber, searchedUsers]);
    // {user.surname}{" "}{user.name}&nbsp;{match}

    return (
        <>
            <div className="flex flex-col">
                {users.map((user, index) => (
                    <div className="items-center font-medium text-dimWhite flex flex-row mt-1" key={index}>
                        <div className={`min-w-[40px] h-[30px] rounded-full ${styles.flexCenter} bg-extra-gradient`}>
                            <img src={arrowUpRight} className="object-contain"
                                onClick={() => isSearched(true)} />
                        </div>
                        <p className="ml-2 text-oldWhite">
                            {user.name}{" "}{user.surname}
                            {/* {searched && <UserDetails isVisible={searched}
                                offerUuid={offerUuid} />} */}
                        </p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default UsersQuery;