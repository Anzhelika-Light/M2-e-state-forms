import React, { Component } from 'react';
import styles from './vote.module.scss';
import VoteActions from './VoteActions';
import VoteResults from './VoteResults';
import Block from './Block';

class Vote extends Component {
  state = {
    democrate: 0,
    republicans: 0,
  };

  leaveVote = propertyName => {
    this.setState(prevState => {
      const value = prevState[propertyName];
      return {
        [propertyName]: value + 1,
      };
    });
  };

  countTotal() {
    const { democrate, republicans } = this.state;
    return democrate + republicans;
  }

  countPercentage = propertyName => {
    const total = this.countTotal();
    if (!total) {
      return 0;
    }
    const value = this.state[propertyName];
    const result = (value / total) * 100;
    return Number(result.toFixed(2));
  };

  render() {
    const { democrate, republicans } = this.state;

    const total = this.countTotal();
    const democratePercentage = this.countPercentage('democrate');
    const republicPercentage = this.countPercentage('republicans');

    return (
      <div className={styles.wrapper}>
        <Block title="Vote, please">
          <VoteActions
            options={Object.keys(this.state)}
            leaveVote={this.leaveVote}
          />
        </Block>
        <Block title="Statistics">
          <VoteResults
            total={total}
            democrate={democrate}
            republicans={republicans}
            democratePercentage={democratePercentage}
            republicPercentage={republicPercentage}
          />
        </Block>
      </div>
    );
  }
}

export default Vote;
