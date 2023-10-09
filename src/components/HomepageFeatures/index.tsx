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
    title: "House Life",
    image: "assets/houses.png",
    description: (
      <>
        A guide to all of Harvard's houses from the students that live in them.
      </>
    ),
  },
  {
    title: "Academic Guides",
    image: "assets/classes.png",
    description: <>Learn how to navigate Harvard's academics first-hand.</>,
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
