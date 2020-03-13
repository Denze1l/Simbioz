import React, { Component } from 'react';
import style from './PopUp.module.css';

class PopUp extends Component {
  state = {};

  render() {
    const { clickClosePopUp } = this.props;

    return (
      <div
        role="toolbar"
        aria-label="Закрыть"
        tabIndex={-1}
        className={style.modal_overlay}
        onClick={clickClosePopUp}
        onKeyUp={clickClosePopUp}
      >
        <div className={style.modal}>
          <h2 className={style.Title}>Уведомление</h2>
          <p className={style.warning}>Вы не заполнили обязательные поля</p>
          <button className={style.okButt} onClick={clickClosePopUp}>
            Ок
          </button>
        </div>
      </div>
    );
  }
}

export default PopUp;
