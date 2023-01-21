import styles from "../style";
import { Unauthorized } from "../components";

const Page404 = () => (
    <div className={`${styles.boxWidth}`}>
        <Unauthorized />
    </div>
);

export default Page404;