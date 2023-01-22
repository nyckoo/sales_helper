import { useRef, useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import styles, { layout } from '../style';
import Button from "./Button";
import axios from '../axios';
import useAuth from '../hooks/useAuth';

const Login = () => {
    const { setAuth, setAuthenticated, authenticated } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/dashboard";

    //const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

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
            const response = await axios.post('/auth/login',
                params,
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Accept': 'application/json'
                    }
                }
            );
            console.log(JSON.stringify(response?.data));
            const token = response?.data?.access_token;

            setAuth({ user, pwd, token });
            setUser('');
            setPwd('');

            navigate(from, { replace: true });
            setAuthenticated(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else if (err.response?.status === 422) {
                setErrMsg('Validation Error');
            } else if (err.response?.status === 500) {
                setErrMsg('Server Error');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

    return (
        <>
            {authenticated ? (
                <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
                    <div className="flex-1 flex flex-col">
                        <h2 className={styles.heading2}>Already logged in.</h2>
                        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                            Go to the dashboard section by clicking the button below.
                        </p>
                        <Link to="/dashboard"><Button type="button" styles="mt-10 border border-oldWhite" content={"See dashboard"} /></Link>
                    </div>
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
                                    //ref={userRef}
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