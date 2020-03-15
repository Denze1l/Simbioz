/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from 'react';
import styles from './styles.module.css';

class Header extends Component {
  state = {
    burgerActive: false,
  };

  BurgerFunk = () => {
    const { burgerActive } = this.state;
    this.setState({
      burgerActive: !burgerActive,
    });
  };

  handleChange = () => {
    console.log('hi');
  };

  render() {
    const { burgerActive } = this.state;
    const devicewidth = document.documentElement.clientWidth;
    const tabletwidth = 768;
    return (
      <section className={styles.Header}>
        <h1
          onClick={this.handleChange}
          onKeyDown={this.handleChange}
          className={styles.Title}
        >
          simbioz
        </h1>
        {devicewidth < tabletwidth && (
          <button
            type="button"
            className={styles.buregerButton}
            onClick={this.BurgerFunk}
          >
            <span className={styles.burgerLines} />
          </button>
        )}
        {devicewidth >= tabletwidth && (
          <div className={styles.tableList}>
            <a href="https://simbioz.ua/cont" className={styles.tableLink}>
              Сотрудничество
            </a>
            <a href="https://simbioz.ua/web/login" className={styles.tableLink}>
              Вход
            </a>
          </div>
        )}
        {burgerActive && (
          <div className={styles.burgerList}>
            <a href="https://simbioz.ua/cont" className={styles.burgerLink}>
              Сотрудничество
            </a>
            <a
              href="https://simbioz.ua/web/login"
              className={styles.burgerLink}
            >
              Вход
            </a>
          </div>
        )}
      </section>
    );
  }
}

export default Header;
