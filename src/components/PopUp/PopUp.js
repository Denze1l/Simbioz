import React, { Component } from 'react';
import style from './style.module.css';

class PopUp extends Component {
  state = {};

  render() {
    return (
      <div
        role="toolbar"
        aria-label="Закрыть"
        tabIndex={-1}
        className={style.modal_overlay}
        onClick={this.handleBackdropClick}
        onKeyUp={this.handleKeyPress}
      >
        <div className={style.modal}>
          <h2 className={style.Title}>Уведомление</h2>
          <p className={style.warning}>Вы не заполнили обязательные поля</p>
          <button className={style.okButt} type="submit">
            Ок
          </button>
        </div>
      </div>
    );
  }
}

export default PopUp;
