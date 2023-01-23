import { staticUsers } from "../constants";
import React, { useState, useEffect } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import styles from "../style";
import {arrowDown, arrowUp} from "../assets";

const PageSize = 5;
const limitPagination = (pageNr, change, totalNumber) => {
  if(change < 0) {
    return pageNr + change < 1 ? 1 : pageNr + change;
  }
  else{
    return pageNr + change > Math.ceil(totalNumber/5) ? Math.ceil(totalNumber/5) : pageNr + change;
  }
};


const UsersQuery = ({offerUuid }) => {
    const [users, setUsers] = useState([]);
    const axiosPrivate = useAxiosPrivate();
    const [page, setPage] = useState(1)
    const [topButtonDisabled, setTopButtonDisabled] = useState(true);
    const [bottomButtonDisabled, setBottomButtonDisabled] = useState(true);
    const [totalNumberOfOffers, setTotalNumberOfOffers] = useState(0)

    useEffect(() => {
        const getUsers = async () => {
            try {
                const url = `/offers/${offerUuid}/match?skip=${(page - 1) * 5}&limit=${page*5}`;
                const { data } = await axiosPrivate.get(url);
                setUsers(data["results"]);
                setTotalNumberOfOffers(data["total_count"])
                setTopButtonDisabled(
                    page==1
                )
                setBottomButtonDisabled(
                    page*PageSize >= data["total_count"]
                )
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
                    <img src={arrowUp} className="w-[50%] h-[50%] object-contain" 
                    onClick={() => setPage(limitPagination(page, -1, totalNumberOfOffers))} disabled={topButtonDisabled}/>
                </div>
                {users.map((user, index) => (
                    <div className="items-center font-medium text-dimWhite flex flex-row mt-1" key={index}>
                        <p className="ml-2 text-oldWhite">
                            {user.employee.name}{" "}{user.employee.surname}{" - Match: "}{(user.match_ratio * 100).toFixed(2)}{"%"}
                        </p>
                    </div>
                ))}
                <div className={`${styles.flexCenter} flex-col w-[50px] h-[50px] rounded-full mt-5 ml-20`}>
                    <img src={arrowDown} className="w-[50%] h-[50%] object-contain" 
                    onClick={() => setPage(limitPagination(page, 1, totalNumberOfOffers))} disabled={bottomButtonDisabled}/>
                </div>
            </div>
        </>
    );
};

export default UsersQuery;