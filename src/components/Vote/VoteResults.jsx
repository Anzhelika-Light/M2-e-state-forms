import PropTypes from 'prop-types';
import styles from './vote.module.scss';

const VoteResults = ({
  total,
  democrate,
  republicans,
  democratePercentage,
  republicPercentage,
}) => {
  return (
    <>
      <div className={styles.element}>
        For Republicans:
        <ul>
          <li>Total: {republicans}</li>
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

VoteResults.propTypes = {
  total: PropTypes.number.isRequired,
  democrate: PropTypes.number.isRequired,
  republicans: PropTypes.number.isRequired,
  democratePercentage: PropTypes.number.isRequired,
  republicPercentage: PropTypes.number.isRequired,
};

export default VoteResults;
