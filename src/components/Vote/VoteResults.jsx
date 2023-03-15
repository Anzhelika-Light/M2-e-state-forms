import styles from './vote.module.scss';

const VoteResults = ({
  total,
  democrate,
  republic,
  democratePercentage,
  republicPercentage,
}) => {
  return (
    <>
      <div className={styles.element}>
        For Republicans:
        <ul>
          <li>Total: {republic}</li>
          <li>Percentage: {republicPercentage}%</li>
        </ul>
      </div>
      <div className={styles.element}>
        For Democrats:
        <ul>
          <li>Total: {democrate}</li>
          <li>Percentage: {democratePercentage}%</li>
        </ul>
      </div>
      <div className={styles.element}>Total: {total} votes</div>
    </>
  );
};

export default VoteResults;
