import PropTypes from 'prop-types'
import styles from './ResultDisplay.module.css'
import successIcon from '../assets/success.svg'
export default function ResultDisplay({ result }) {
  console.log('Result in component:', result); // Debug log

  if (!result) {
    console.log('No result received');
    return null;
  }

  // Find the highest probability and its index
  const probabilities = result.probabilities?.[0] || [];
  const maxProbability = Math.max(...probabilities);
  const maxIndex = probabilities.indexOf(maxProbability);

  return (
    <div className={styles.results}>
      {/* <pre className={styles.debug}>{JSON.stringify(result, null, 2)}</pre> */}
      
      <div className={styles.content}>
        <div className={styles.row}>
          <strong>File:</strong> 
          <span>{result.file_name}</span>
        </div>

        <div className={styles.row}>
          <strong>Status:</strong> 
          <span>{result.status.charAt(0).toUpperCase()}{result.status.substring(1)}</span>
          <span><img src={successIcon} style={{height:"20px"}}></img></span>
        </div>

        <div className={styles.row}>
          <strong>Message:</strong> 
          <span>{result.message}</span>
        </div>

        {maxProbability > 0 && (
          <div className={styles.row}>
            <strong>Confidence:</strong>
            <div className={styles.probList}>
              <div>{maxProbability}%</div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

ResultDisplay.propTypes = {
  result: PropTypes.shape({
    file_name: PropTypes.string,
    status: PropTypes.string,
    message: PropTypes.string,
    predicted_class: PropTypes.number,
    probabilities: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number))
  }).isRequired
}