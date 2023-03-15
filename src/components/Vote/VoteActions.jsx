import styles from './vote.module.scss';

const VoteActions = ({ leaveVote }) => {
  return (
    <>
      <div className={styles.element}>
        <button
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
        </button>
      </div>
    </>
  );
};

export default VoteActions;
