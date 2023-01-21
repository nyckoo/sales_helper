import { Link } from "react-router-dom";

import styles from "../style";
import Button from "./Button";

const Unauthorized = () => (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
        <div className="flex-1 flex flex-col">
            <h2 className={styles.heading2}>Log in first.</h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                You're not authorized to proceed!
            </p>
            <Link to="/login"><Button type="button" styles="mt-10 border border-oldWhite" content={"Log in"} /></Link>
        </div>
    </section>
);

export default Unauthorized;
