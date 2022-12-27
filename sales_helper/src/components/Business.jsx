import { features } from "../constants";
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

      <Button styles={`mt-10`} />
    </div>

    {/* <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div> */}
  </section>
);

export default Business;
