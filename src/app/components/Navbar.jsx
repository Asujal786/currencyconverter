import React from 'react';
import Link from "next/link";
import Image from "next/image";
import Logo from "@/app/assessts/logo.jpeg";
import styles from './Navbar.module.css'; 

function Navbar(props) {
    return (
        <>
        <div className={styles.color}></div>
        <header className={styles.header}>
           <Link  href="/"> 
               <div className={styles.logoContainer}>
                   <Image src={Logo} width={100} height={100} alt="Currency Converter Money pic"/>
                   <span className={styles.title}>Rate Swift</span>
               </div>
           </Link>
            <nav className={styles.nav}>
               <ul className={styles.navList}>
                   <li><Link   className={styles.none} href="/about">About</Link></li>
                   <li><Link   className={styles.none} href="/faq">FAQ</Link></li>
               </ul>
            </nav>
        </header>
        </>
    );
}

export default Navbar;
