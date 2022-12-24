import styles from "../style";
import { BadRequest } from "../components";

const Page404 = () => (
    <div className={`${styles.boxWidth}`}>
        <BadRequest />
    </div>
);

export default Page404;