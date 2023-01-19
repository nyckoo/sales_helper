import { filterButtons, busyButtons } from "../constants";
import { useRef, useState, useEffect } from 'react';
import { axiosInstance } from "../axios";
import styles from "../style";
import { close } from "../assets";

const ModalAddUser = ({ isOpen }) => {
    const userRef = useRef();
    const errRef = useRef();

    const [username, setUsername] = useState('');
    const [surname, setSurname] = useState('');
    const [position, setPosition] = useState('');
    const [cat, setCat] = useState(null);
    const [busy, setBusy] = useState(null);
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosInstance.post("/employees/",
                {
                    name: username,
                    surname: surname,
                    position: position,
                    is_busy: busy,
                    category: Number.parseInt(cat)
                }
            );
            console.log(JSON.stringify(response?.data));
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Field');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Adding Failed');
            }
            errRef.current.focus();
        }
        isOpen(false);
    }

    return (
        <div className={styles.modalBg}>
            <div className={styles.modalContainer}>
                <div className="flex justify-end">
                    <button
                        onClick={() => {
                            isOpen(false);
                        }}>
                        <img src={close} className="w-[100%] h-[100%]" />
                    </button>
                </div>
                <h2 className={`${styles.heading2} mb-5`}>Add employee</h2>
                <form onSubmit={handleSubmit}>
                    <div className="py-1">
                        <label className="text-oldWhite text-[18px] p-2" htmlFor="username">Username: </label>
                        <input
                            className={styles.inputField}
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            required
                        />
                    </div>
                    <div className="py-1">
                        <label className="text-oldWhite text-[18px] p-2" htmlFor="surname">Surname: &nbsp;&nbsp;</label>
                        <input
                            className={styles.inputField}
                            type="text"
                            id="surname"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setSurname(e.target.value)}
                            value={surname}
                            required
                        />
                    </div>
                    <div className="py-1">
                        <label className="text-oldWhite text-[18px] p-2" htmlFor="surname">Position: &nbsp;&nbsp;&nbsp;</label>
                        <input
                            className={styles.inputField}
                            type="text"
                            id="position"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setPosition(e.target.value)}
                            value={position}
                            required
                        />
                    </div>
                    <>
                        <div id="categoryButtons" className={`flex-1 flex-row p-2 text-oldWhite w-screen`}>
                            {filterButtons && filterButtons.map(({ uuid, content, type }) => (
                                <button className={`py-3 px-4 font-poppins font-medium text-[16px] text-oldWhite bg-extra-gradient rounded-[10px] outline-none ${cat == uuid ? styles.clickEnabled : ""}`}
                                    name={content} key={uuid} type="button" onClick={() => setCat(uuid)}>{content}</button>
                            ))}
                        </div>
                        <div id="busyButtons" className={`flex-col`}>
                            {busyButtons && busyButtons.map(({ id, content, type }) => (
                                <button className={`py-3 px-4 font-poppins font-medium text-[16px] text-oldWhite bg-extra-gradient rounded-[10px] outline-none ${busy === type ? styles.clickEnabled : ""}`}
                                    name={content} key={id} type="button" onClick={() => setBusy(type)}>{content}</button>
                            ))}
                        </div>
                    </>
                    <div className="flex flex-1 items-end">
                        <button
                            onClick={() => {
                                isOpen(false);
                            }}
                            id="cancelBtn"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            id="sumbitBtn"
                        >Add</button>
                    </div>
                </form>
                <p className={`${styles.paragraph} max-w-[470px] mt-5 ${errMsg ? "errmsg" : "offscreen"}`} ref={errRef} aria-live="assertive">{errMsg}</p>
            </div>
        </div>
    );
}

export default ModalAddUser;
