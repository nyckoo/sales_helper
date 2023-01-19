import { filterButtons, busyButtons } from "../constants";
import { useRef, useState, useEffect } from 'react';
import { axiosInstance } from "../axios";
import styles from "../style";
import { close } from "../assets";

const ModalAddResume = ({ isOpen, id }) => {
    const userRef = useRef();
    const errRef = useRef();

    const [desc, setDesc] = useState('');
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
            const response = await axiosInstance.put(`/employees/${id}/resume`,
                {
                    content: desc
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
                <h2 className={`${styles.heading2} mb-5`}>Update resume</h2>
                <form onSubmit={handleSubmit}>
                    <div className="py-1">
                        <label className="text-oldWhite text-[18px] p-2" htmlFor="desc">Resume description: </label>
                        <input
                            className={styles.inputField}
                            type="text"
                            id="desc"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setDesc(e.target.value)}
                            value={desc}
                            required
                        />
                    </div>
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

export default ModalAddResume;
