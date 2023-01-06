import { Link } from "react-router-dom";

import styles, { layout } from "../style";
import Button from "./Button";

const Business = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        You do the business, <br className="sm:block hidden" /> we’ll handle
        the people.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Without having to worry about the right candidates
        and fully relying on searching algorithm that is created for only this reason -
        you're all set to plan your company growth!
      </p>

      <Link to="/login"><Button styles="mt-10" content={"Log in"} /></Link>
    </div>
  </section>
);

export default Business;
