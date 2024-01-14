import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Student Organizations",
    image: "assets/clubs.png",
    description: (
      <>Read all about your favorite student organizations on campus.</>
    ),
  },
  {
    title: "Campus Life",
    image: "assets/houses.png",
    description: (
      <>
        Datasets on all of aspects of Harvard student life.
      </>
    ),
  },
  {
    title: "Academics",
    image: "assets/classes.png",
    description: <>Navigate Harvard's academics in a data-driven way.</>,
  },
];

function Feature({ title, image, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={image} width="200px" height="200px"></img>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
