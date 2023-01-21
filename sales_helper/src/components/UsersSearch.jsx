import React, { useState, useEffect } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import styles from "../style";
import { arrowUpRight } from "../assets";

const UsersSearch = ({ setSearchResults, filteredUsers }) => {
    const [users, setUsers] = useState([]);
    const axiosPrivate = useAxiosPrivate();

    useEffect(() => {
        const getUsers = async () => {
            try {
                const url = `/employees/?skip=0&limit=100`;
                const { data } = await axiosPrivate.get(url);
                //console.log(data);
                setSearchResults(data);
                console.log(filteredUsers);
                setUsers(filteredUsers);
                // setUsers(staticUsers); // fetch only fixed number
                // setAllUsers(data); // fetch all available users 
                // searchedUsers ? setUsers(searchedUsers) : setUsers(data);
            } catch (err) {
                console.log(err);
            }
        };
        getUsers();
    }, [filteredUsers]);

    return (
        <>
            <div className="flex flex-col">
                {users.map((user, index) => (
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
};

export default UsersSearch;