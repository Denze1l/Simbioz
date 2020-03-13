import React, { Component } from 'react';

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
  };

  handleInputName = e => {
    this.setState({
      name: e.target.value,
    });
  };

  handleInputDescription = e => {
    this.setState({
      description: e.target.value,
    });
  };

  handleImageChange = e => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };

  handleInputFistLastName = e => {
    this.setState({
      firstLastName: e.target.value,
    });
  };

  handleInputMail = e => {
    this.setState({
      mail: e.target.value,
    });
  };

  handleInputTellNumber = e => {
    this.setState({
      tellNumber: e.target.value,
    });
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
          ><h1 className={styles.Titels}> Детали заказа</h1>
          <p className={styles.description}> Название услуги*</p>
          <input
            className={styles.personalInfo}
            placeholder="Заголовок с значением из последнего выбраного списка"
            onChange={e => this.handleInputName(e)}
            value={name}
          />
          />
          <p className={styles.description}>Опишите что необходимо сделать</p>
          <textarea
            rows="5"
            className={styles.personalInfo}
            placeholder="Текстовое поле для ввода"
            onChange={e => this.handleInputDescription(e)}
            value={description}
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
            onChange={e => this.handleInputFistLastName(e)}
            value={firstLastName}
          />
          <p className={styles.description}>Ваш Email*</p>
          <input
            className={styles.personalInfo}
            placeholder="Электронная почта"
            onChange={e => this.handleInputMail(e)}
            value={mail}
            type="email"
          />
          <p className={styles.description}>Ваш номер телефона*</p>
          <input
            className={styles.personalInfo}
            placeholder="Мобильный номер телефона"
            onChange={e => this.handleInputTellNumber(e)}
            value={tellNumber}
            type="tel"
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

export default Form;
