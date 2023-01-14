import { useRef, useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import styles, { layout } from '../style';
import Button from "./Button";

import useAuth from '../hooks/useAuth';
import { axiosInstance } from '../axios';
const LOGIN_URL = '/auth';

const Login = () => {
    const { setAuth } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axiosInstance.post(LOGIN_URL,
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
            const accessToken = response?.data?.accessToken;
            setAuth({ user, pwd, accessToken });
            setUser('');
            setPwd('');
            navigate(from, { replace: true });
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

    return (
        <section id="login" className={`${layout.section}`}>
            <div className={`${layout.sectionInfo} flex-col`}>
                <h2 className={`${styles.heading2} mb-5`}>Sign In</h2>
                <form onSubmit={handleSubmit}>
                    <div className="py-1">
                        <label className="text-oldWhite text-[18px] p-2" htmlFor="username">Username: </label>
                        <input
                            className={styles.inputField}
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />
                    </div>
                    <div className="py-1">
                        <label className="text-oldWhite text-[18px] p-2" htmlFor="password">Password: &nbsp;</label>
                        <input
                            className={styles.inputField}
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                    </div>
                    <p className={`${styles.paragraph} max-w-[470px] mt-5 ${errMsg ? "errmsg" : "offscreen"}`} ref={errRef} aria-live="assertive">{errMsg}</p>
                    <Button styles="mt-10" content={"Log in"} type="submit" />
                </form>
            </div>

        </section>
    )
}

export default Login;