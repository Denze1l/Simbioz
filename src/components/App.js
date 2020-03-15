import React, { Component } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import LandingPage from './LandingPage/LandingPage';
import Form from './Form/Form';

class App extends Component {
  state = {
    formActivated: false,
    itemsDropDown: '',
  };

  allSelect = valueSelect => {
    this.setState({
      formActivated: true,
      itemsDropDown: {
        selectFirst: valueSelect.selectFirst.value,
        selectSecond: valueSelect.selectSecond.value,
        selectThird: valueSelect.selectThird.value,
      },
    });
  };

  returntoLP = () => {
    this.setState({ formActivated: false });
  };

  render() {
    const { formActivated, itemsDropDown } = this.state;
    return (
      <>
        <Header formActivated={this.returntoLP} />
        {formActivated ? (
          <Form itemsDropDown={itemsDropDown} />
        ) : (
          <LandingPage allSelect={this.allSelect} />
        )}
        <Footer />
      </>
    );
  }
}
export default App;
