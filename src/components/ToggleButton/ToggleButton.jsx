import React, { Component } from 'react';
import styles from './toggle-button.module.scss';

class ToggleButton extends Component {
  state = {
    isActive: false,
  };

  handleBtnClick = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }));
  };

  render() {
    const { text } = this.props;
    const { isActive } = this.state;
    const classNames = isActive ? `${styles.btn} ${styles.active}` : styles.btn;
    return (
      <button
        type="button"
        className={classNames}
        onClick={this.handleBtnClick}
      >
        {text}
      </button>
    );
  }
}

export default ToggleButton;
