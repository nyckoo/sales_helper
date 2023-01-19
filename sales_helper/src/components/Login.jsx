import { useRef, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles, { layout } from '../style';
import Button from "./Button";
import { axiosInstance } from '../axios';
import useAuth from '../hooks/useAuth';

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
    const [success, setSuccess] = useState(false);

    //const formData = new FormData();
    //const fs = require('fs')
    //const path = require('path')

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const params = new URLSearchParams();
        params.append("username", user);
        params.append("password", pwd);
        params.append("grant_type", "password");
        try {
            const response = await axiosInstance.post('/auth/login',
                params,
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'withCredentials': true,
                        'Accept': 'application/json'
                    }
                }
            );
            console.log(JSON.stringify(response?.data));
            const token = response?.data?.access_token;
            //console.log(response?.data?.access_token);
            //axiosInstance.defaults.headers.common = { 'Authorization': `Bearer ${token}` }

            setAuth(token);
            //setUser('');
            //setPwd('');
            setSuccess(true);
            navigate(from, { replace: true });
        } catch (err) {
            if (!err?.response) {
                setErrMsg('Server Error');
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
        <>
            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <a href="#">Go to Home</a>
                    </p>
                </section>
            ) : (
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
            )}
        </>
    )
}

export default Login;