import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import styles, { layout } from "../style";
import Button from "./Button";

const Business = () => {
  const { authenticated } = useAuth();

  return (
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

        {authenticated ? "" : <Link to="/login"><Button type="button" styles="mt-10 border border-oldWhite" content={"Sign In"} /></Link>}
      </div>
    </section>
  )
};

export default Business;
