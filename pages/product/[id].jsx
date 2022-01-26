import { useState } from 'react';
import styles from "../../styles/Product.module.css";
import Image from "next/image"

const Product = () => {
    const [size, setSize] = useState(0);
    const pizza = {
        id: 1,
        img: "/img/pizza.png",
        name: "CAMPAGNOLA",
        price: [19.9, 23.9, 27.9],
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    }
    
    return (
  <div className={styles.container}>
  <div className={styles.left}>
  <div className={styles.imgContainer}>
        <Image src={pizza.img} layout='fill' alt="" objectFit='contain' />
  </div>
  </div>
  <div className={styles.right}>
      <h1 className={styles.title}>{pizza.name}</h1>
      <span>${pizza.price[size]}</span>
  </div>
  </div>
  );
};

export default Product;
