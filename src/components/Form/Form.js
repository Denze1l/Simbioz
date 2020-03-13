import React, { Component } from 'react';
import styles from './Form.module.css';

class Form extends Component {
  state = {
    // imgArr: [],
  };

  render() {
    return (
      <section className={styles.FormSeaction}>
        <h1 className={styles.Titels}> Детали заказа</h1>
        <p className={styles.description}> Название услуги*</p>
        <input
          className={styles.personalInfo}
          placeholder="Заголовок с значением из последнего выбраного списка"
        />
        <p className={styles.description}>Опишите что необходимо сделать</p>
        <textarea
          rows="5"
          className={styles.personalInfo}
          placeholder="Текстовое поле для ввода"
        />
        <div className="wrap_img_add">
          <span id="outputMulti" />
        </div>
        <ul>{}</ul>
        <input
          onChange={this.handleChange}
          type="file"
          name="images"
          multiple
          accept="image/x-png,image/gif,image/jpeg,image/jpg"
          value=""
        />
        <h2 className={`${styles.Titels} ${styles.forBefore}`}>
          Контактные данные:
        </h2>
        <p className={styles.description}>Ваше имя, фамилия*</p>
        <input className={styles.personalInfo} placeholder="Имя и фамилия" />
        <p className={styles.description}>Ваш Email*</p>
        <input
          className={styles.personalInfo}
          placeholder="Электронная почта"
        />
        <p className={styles.description}>Ваш номер телефона*</p>
        <input
          className={styles.personalInfo}
          placeholder="Мобильный номер телефона"
        />

        <button type="submit" className={styles.confirmButton}>
          Отправить Заявку
        </button>
      </section>
    );
  }
}

export default Form;
