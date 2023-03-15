import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import styles from './vote.module.scss';

const VoteActions = ({ options, leaveVote }) => {
  const element = options.map(option => (
    <button
      key={nanoid()}
      type="button"
      className={styles.btn}
      onClick={() => leaveVote(option)}
    >
      For the {option}
    </button>
  ));
  return (
    <>
      <div className={styles.element}>
        {element}
        {/* <button
          type="button"
          className={styles.btn}
          onClick={() => leaveVote('republic')}
        >
          For the Republicans
        </button>
      </div>
      <div className={styles.element}>
        <button
          type="button"
          className={styles.btn}
          onClick={() => leaveVote('democrate')}
        >
          For Democrats
        </button> */}
      </div>
    </>
  );
};

VoteActions.defaultProps = {
  options: [],
};

VoteActions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  leaveVote: PropTypes.func.isRequired,
};

export default VoteActions;
