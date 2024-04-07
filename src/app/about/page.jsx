import React from 'react';
import styles from "./page.module.css";

function Page(props) {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Currency Converter App</h1>
      <div className={styles.content}>
        <p className={styles.welcome}>Welcome to the Currency Converter App! This application allows you to quickly and easily convert between different currencies using live data retrieved from a currency exchange API. Whether you're planning a trip abroad, managing international transactions, or simply curious about exchange rates, our app has got you covered.</p>

        <div className={styles.section}>
          <h2 className={styles.sectionHeading}>Technologies Used</h2>
          <div className={styles.subsection}>
            <h3 className={styles.subsectionHeading}>Next.js</h3>
            <p>Our application is built using Next.js, a React framework for building server-side rendered (SSR) and statically generated web applications. Next.js provides a seamless development experience with features like hot module reloading, automatic code splitting, and server-side rendering out of the box. This ensures fast page loads and optimal performance for our currency converter.</p>
          </div>

          <div className={styles.subsection}>
            <h3 className={styles.subsectionHeading}>CurrencyConverterApi</h3>
            <p>To fetch live currency exchange rates, we utilize the CurrencyConverterApi. This API provides accurate and up-to-date exchange rate data for various currencies around the world. By integrating this API into our application, we ensure that our users always have access to the most current exchange rates for their conversions.</p>
          </div>

          <div className={styles.subsection}>
            <h3 className={styles.subsectionHeading}>Tailwind CSS</h3>
            <p>For styling our application, we've opted for Tailwind CSS, a utility-first CSS framework that allows us to rapidly build custom designs without the need for writing traditional CSS. Tailwind CSS provides a wide range of pre-built utility classes that make it easy to create responsive layouts, custom components, and beautiful user interfaces. With Tailwind CSS, we maintain a clean and maintainable codebase while achieving a sleek and modern design for our currency converter.</p>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionHeading}>Features</h2>
          <ul className={styles.features}>
            <li>Live Currency Conversion: Get real-time exchange rates for converting between different currencies.</li>
            <li>Multi-Currency Support: Convert between a wide range of currencies, including major fiat currencies and cryptocurrencies.</li>
            <li>Customizable Interface: Tailwind CSS allows for easy customization of the app's design and layout to suit your preferences.</li>
            <li>User-Friendly Experience: Next.js provides fast page loads and seamless navigation, ensuring a smooth user experience for all users.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionHeading}>Getting Started</h2>
          <p>To get started with our currency converter app, simply visit the homepage and start converting currencies right away. No sign-up or registration required! Our intuitive interface makes it easy for users of all levels to quickly perform currency conversions with just a few clicks.</p>
        </div>
      </div>
    </div>
  );
}

export default Page;
