import React from 'react';
import styles from "./page.module.css";

function FAQPage(props) {
    return (
        <div className={styles.container}>
            <h1 className={styles.pageTitle}>Frequently Asked Questions</h1>
            <div className={styles.faqItem}>
                <h2 className={styles.question}>What payment methods do you accept?</h2>
                <p className={styles.answer}>We accept payments via credit card, debit card, PayPal, and bank transfer. If you have any specific payment requirements, please contact our support team.</p>
            </div>

            <div className={styles.faqItem}>
                <h2 className={styles.question}>How long does it take to receive my order?</h2>
                <p className={styles.answer}>The delivery time depends on various factors such as your location, shipping method, and product availability. Typically, orders are processed and shipped within 1-3 business days. Once shipped, you will receive a tracking number to monitor the status of your delivery.</p>
            </div>

            <div className={styles.faqItem}>
                <h2 className={styles.question}>Do you offer refunds or exchanges?</h2>
                <p className={styles.answer}>Yes, we offer a hassle-free refund or exchange policy. If you're not satisfied with your purchase for any reason, simply contact us within 30 days of receiving your order, and we'll arrange for a refund or exchange.</p>
            </div>

            <div className={styles.faqItem}>
                <h2 className={styles.question}>Can I cancel my order?</h2>
                <p className={styles.answer}>You can cancel your order within 24 hours of placing it. After that, the order will be processed and cannot be canceled. If you need assistance with canceling an order, please reach out to our customer support team as soon as possible.</p>
            </div>

            <div className={styles.faqItem}>
                <h2 className={styles.question}>How can I contact customer support?</h2>
                <p className={styles.answer}>You can contact our customer support team via email at support@example.com or by phone at +1-123-456-7890. Our team is available to assist you with any questions or concerns you may have.</p>
            </div>
        </div>
    );
}

export default FAQPage;
