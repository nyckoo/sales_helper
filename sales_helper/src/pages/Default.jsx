import { Hero, Button, Offers } from "../components";

const Default = () => (
    <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
            <h3>There's Default page!</h3>
            <Hero />
        </div>
    </div>
)

export default Default