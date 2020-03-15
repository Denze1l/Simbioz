import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PopUp from '../PopUp/PopUp';
import styles from './Form.module.css';

class Form extends Component {
  state = {
    file: '',
    imagePreviewUrl: '',
    name: '',
    description: '',
    firstLastName: '',
    mail: '',
    tellNumber: '',
    popUp: false,
    itemsDropDown: '',
  };

  componentDidMount() {
    const { itemsDropDown } = this.props;
    const chosenItem = itemsDropDown.selectThird;
    this.setState({
      itemsDropDown,
      name: chosenItem,
    });
  }

  handleInput = e => {
    const nameInput = e.target.name;
    this.setState({
      [nameInput]: e.target.value,
    });
  };

  handleImageChange = e => {
    e.preventDefault();

    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file,
        imagePreviewUrl: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };

  handleSubmit(e) {
    e.preventDefault();
    const { name, firstLastName, mail, tellNumber } = this.state;
    if (name && firstLastName && mail && tellNumber) {
      console.log(this.state);
    } else {
      this.setState({
        popUp: true,
      });
    }
  }

  clickClosePopUp() {
    this.setState({
      popUp: false,
    });
  }

  render() {
    const {
      imagePreviewUrl,
      name,
      description,
      firstLastName,
      mail,
      tellNumber,
      popUp,
    } = this.state;

    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = <img src={imagePreviewUrl} alt="select img" />;
    } else {
      $imagePreview = <></>;
    }

    return (
      <>
        <form
          className={styles.FormSeaction}
          onSubmit={e => this.handleSubmit(e)}
        >
          <h1 className={styles.Titels}> Детали заказа</h1>
          <p className={styles.description}> Название услуги*</p>
          <p className={styles.personalInfo}>{name}</p>
          <p className={styles.description}>Опишите что необходимо сделать</p>
          <textarea
            rows="5"
            className={styles.personalInfo}
            placeholder="Текстовое поле для ввода"
            onChange={e => this.handleInput(e)}
            value={description}
            name="description"
          />
          <div className="wrap_img_add">
            <span id="outputMulti" />
          </div>
          <ul>{}</ul>
          <input onChange={e => this.handleImageChange(e)} type="file" />
          <div className={styles.imgPreview}>{$imagePreview}</div>
          <h2 className={`${styles.Titels} ${styles.forBefore}`}>
            Контактные данные:
          </h2>
          <p className={styles.description}>Ваше имя, фамилия*</p>
          <input
            className={styles.personalInfo}
            placeholder="Имя и фамилия"
            onChange={e => this.handleInput(e)}
            value={firstLastName}
            name="firstLastName"
          />
          <p className={styles.description}>Ваш Email*</p>
          <input
            className={styles.personalInfo}
            placeholder="Электронная почта"
            onChange={e => this.handleInput(e)}
            value={mail}
            type="email"
            name="mail"
          />
          <p className={styles.description}>Ваш номер телефона*</p>
          <input
            className={styles.personalInfo}
            placeholder="Мобильный номер телефона"
            onChange={e => this.handleInput(e)}
            value={tellNumber}
            type="tel"
            name="tellNumber"
          />
          <button type="submit" className={styles.confirmButton}>
            Отправить Заявку
          </button>
        </form>
        {popUp && <PopUp clickClosePopUp={e => this.clickClosePopUp(e)} />}
      </>
    );
  }
}

Form.propTypes = {
  itemsDropDown: PropTypes.string.isRequired,
};
export default Form;
