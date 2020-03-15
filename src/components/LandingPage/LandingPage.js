import React, { Component } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import dropDown from './dropDown.json';

class LandingPage extends Component {
  state = {
    selectFirst: '',
    selectSecond: '',
    selectThird: '',
  };

  handleSelectOne = e => {
    this.setState({
      selectFirst: e,
      selectSecond: '',
      selectThird: '',
    });
  };

  handleSelectSecond = e => {
    this.setState({
      selectSecond: e,
      selectThird: '',
    });
  };

  handleSelectThird = e => {
    const { allSelect } = this.props;

    this.setState({ selectThird: e }, () => allSelect(this.state));
  };

  render() {
    const { selectFirst, selectSecond, selectThird } = this.state;

    return (
      <section className={styles.LandPage}>
        <h1 className={styles.Title}>
          Сохраните свое время для приятных дел, <br />а оценку имущества
          доверьте профессионалам
        </h1>
        <h2 className={styles.Subtitle}>
          Выбирайте услугу и оформляйте заявку в несколько кликов
        </h2>

        <Select
          className={styles.dropDown}
          onChange={e => this.handleSelectOne(e)}
          placeholder="Выберите тип услуги"
          options={dropDown.map((option, index) => ({
            value: option.name,
            label: option.name,
            select: index,
          }))}
        />
        {selectFirst && (
          <Select
            value={selectSecond}
            className={styles.dropDown}
            onChange={e => this.handleSelectSecond(e)}
            placeholder="Выберите подвид"
            options={dropDown[selectFirst.select].children.map(
              (option, index) => ({
                value: option.name,
                label: option.name,
                select: index,
              }),
            )}
          />
        )}
        {selectSecond && (
          <Select
            value={selectThird}
            className={styles.dropDown}
            onChange={e => this.handleSelectThird(e)}
            placeholder="Выберите услугу"
            options={dropDown[selectFirst.select].children[
              selectSecond.select
            ].nephews.map((option, index) => ({
              value: option.name,
              label: option.name,
              select: index,
            }))}
          />
        )}
      </section>
    );
  }
}

LandingPage.propTypes = {
  allSelect: PropTypes.func.isRequired,
};

export default LandingPage;
