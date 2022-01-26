import React from 'react';
import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
        <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo debitis minus necessitatibus, autem ipsa dolore. Laudantium repudiandae quisquam necessitatibus similique fugiat eveniet facere tenetur voluptatem, praesentium magnam! Repellat, eos consequatur!
        </p>
        <div className={styles.wrapper}>
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
        </div>

    </div>
    );
};

export default PizzaList;
