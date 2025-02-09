// import React from "react";
import style from "./footer.module.css";

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.left}>
        
        <h1>Sərxan Rəhimli </h1>
     
       
      
        <a href="#" className={style.link}>
          rahimlisarkhan@gmail.com
        </a>
        <p className={style.footer_text}>Copyright © 2024</p>
      </div>

      <nav className={style.footer_nav}>
        <a href="">Karyera</a>
        <a href="">Kurs</a>
        <a href="">Portfolio</a>
        <a href="">Blog</a>
        <a href="">Haqqımızda</a>
      </nav>
    </footer>
  );
}

export default Footer;
