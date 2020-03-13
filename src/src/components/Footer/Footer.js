import React from 'react';
import styles from './styles.module.css';

const Footer = () => {
  return (
    <section className={styles.Footer}>
      <div className={styles.divForTablet}>
        <div className={`${styles.infoDiv} ${styles.telephoneDiv}`}>
          <p>Позвонить нам</p>
          <p>
            <a href="tel:+380671112233" className={styles.forMobile}>
              +38 067 111-22-33
            </a>
          </p>
        </div>
        <div className={`${styles.infoDiv} ${styles.meilDiv}`}>
          <p>Написать нам</p>
          <p>
            <a href="mailto:CRM@SIMBIOZ.UA" className={styles.forMeil}>
              CRM@SIMBIOZ.UA
            </a>
          </p>
        </div>
      </div>
      <div className={`${styles.infoDiv} ${styles.divWithLinks}`}>
        <p>Simbioz.ua, 2020</p>
        <p>
          <a href="https://simbioz.ua/terms-and-conditions">
            Условия использования
          </a>
        </p>
        <p>
          <a href="https://simbioz.ua/privacy-policy">
            Политика конфиденциальности
          </a>
        </p>
        <p>Українська</p>
      </div>
    </section>
  );
};

export default Footer;
