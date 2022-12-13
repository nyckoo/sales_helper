import { Hero, Button } from "../components";

const Page404 = () => (
    <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
            <h3>There's Error page (404)</h3>
            <Hero />
        </div>
    </div>
)

export default Page404