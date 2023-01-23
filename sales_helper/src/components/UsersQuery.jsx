import { staticUsers } from "../constants";
import React, { useState, useEffect } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import styles from "../style";
import { arrowUpRight } from "../assets";

const UsersQuery = ({ pageNumber, searchedUsers, offerUuid }) => {
    const [users, setUsers] = useState([]);
    const [searched, isSearched] = useState(false);
    const axiosPrivate = useAxiosPrivate();

    useEffect(() => {
        const getUsers = async () => {
            try {
                const url = `/offers/${offerUuid}/match?skip=${(pageNumber - 1) * 5}&limit=${pageNumber*5}`;
                const { data } = await axiosPrivate.get(url);
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
                            {user.employee.name}{" "}{user.employee.surname}{" - Match: "}{user.match_ratio.toPrecision(2) * 100}{"%"}
                            {/* searched &&  */}
                            {/* <UserDetails isVisible={searched}
                                offerUuid={offerUuid} /> */}

                        </p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default UsersQuery;