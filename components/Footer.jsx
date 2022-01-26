 import styles from "../styles/Footer.module.css";
 import Image from "next/image";

 const Footer = () => {
   return (

   <div className={styles.container}>
     <div className={styles.item}>
          <Image src="/img/bg.png" layout="fill" alt="" objectFit="cover" />
     </div>
     <div className={styles.item}>
       <div className={styles.card}>
       <h2 className={styles.motto}>
         OH YES, WE DID THE LAMA PIZZA, WELL BAKED SLICE OF PIZZA.
       </h2>
       </div>
       <div className={styles.card}>
       <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
         <p className={styles.text}>
           1654 R. Don Road #304.
           <br /> New York, 85022
           <br /> (602) 867-1010 
         </p>
         <p className={styles.text}>
           345 R. Noburo Oda #333.
           <br /> Florianopolis, 88066
           <br /> (5548) 987-9879
         </p>
         <p className={styles.text}>
           54 R. Marie Legend #234.
           <br /> Oahu, 22123
           <br /> (602) 867-1010 
         </p>
         <p className={styles.text}>
           164 R. Jane Austen #123.
           <br /> Gold Coast, 35055
           <br /> (602) 867-1010 
         </p>
       </div>
       <div className={styles.card}>
         <h1 className={styles.title}>WORKING HOURS</h1>
         <p className={styles.text}>
           SATURDAY - SUNDAY 
           <br /> 12:00 - 24:00 
         </p>
       </div>
     </div>
    </div>
     );
 };
 
 export default Footer;
 