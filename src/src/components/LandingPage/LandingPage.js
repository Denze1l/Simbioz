import React, { Component } from 'react';
import styles from './styles.module.css';

class LandingPage extends Component {
  state = {};

  render() {
    return (
      <section className={styles.LandPage}>
        <h1 className={styles.Title}>
          Сохраните свое время для приятных дел, <br />а оценку имущества
          доверьте профессионалам
        </h1>
        <h2 className={styles.Subtitle}>
          Выбирайте услугу и оформляйте заявку в несколько кликов
        </h2>
      </section>
    );
  }
}

export default LandingPage;
