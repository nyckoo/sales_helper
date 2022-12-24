import styles from "../style";
import { Hero, Stats, Business } from "../components";

const Default = () => (
    <div className={`${styles.boxWidth}`}>
        <Hero />
        <Stats />
        <Business />
    </div>
);

export default Default;