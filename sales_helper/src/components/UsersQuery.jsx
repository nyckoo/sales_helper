import { staticUsers } from "../constants";
import React, { useState, useEffect } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import styles from "../style";
import {arrowDown, arrowUp} from "../assets";

const UsersQuery = ({offerUuid }) => {
    const [users, setUsers] = useState([]);
    const [searched, isSearched] = useState(false);
    const axiosPrivate = useAxiosPrivate();
    const [page, setPage] = useState(1)

    useEffect(() => {
        const getUsers = async () => {
            try {
                const url = `/offers/${offerUuid}/match?skip=${(page - 1) * 5}&limit=${page*5}`;
                const { data } = await axiosPrivate.get(url);
                console.log(data);
                setUsers(data);
            } catch (err) {
                console.log(err);
            }
        };
        getUsers();
    }, [page]);
    // {user.surname}{" "}{user.name}&nbsp;{match}

    return (
        <>
            <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
                Matching Employees: 
            </h4>
            <div className="flex flex-col">
                <div className={`${styles.flexCenter} flex-col w-[50px] h-[50px] rounded-full mb-5 ml-20`}>
                    <img src={arrowUp} className="w-[50%] h-[50%] object-contain" onClick={() => setPage(page, -1)} />
                </div>
                {users.map((user, index) => (
                    <div className="items-center font-medium text-dimWhite flex flex-row mt-1" key={index}>
                        <p className="ml-2 text-oldWhite">
                            {user.employee.name}{" "}{user.employee.surname}{" - Match: "}{(user.match_ratio * 100).toFixed(2)}{"%"}
                        </p>
                    </div>
                ))}
                <div className={`${styles.flexCenter} flex-col w-[50px] h-[50px] rounded-full mt-5 ml-20`}>
                    <img src={arrowDown} className="w-[50%] h-[50%] object-contain" onClick={() => setPage(page + 1)} />
                </div>
            </div>
        </>
    );
};

export default UsersQuery;