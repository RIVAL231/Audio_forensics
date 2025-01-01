import { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './FileUpload.module.css'

export default function FileUpload({ onFileUpload, isLoading }) {
  const [selectedFile, setSelectedFile] = useState(null)

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0])
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (selectedFile) {
      onFileUpload(selectedFile)
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label htmlFor="file-input" className={styles.fileLabel}>
        Choose Audio File
      </label>
      <input
        id="file-input"
        type="file"
        accept=".wav,.mp3,.ogg"
        onChange={handleFileChange}
        className={styles.fileInput}
      />
      {selectedFile && (
        <div className={styles.fileName}>
          Selected: {selectedFile.name}
        </div>
      )}
      <button 
        type="submit" 
        disabled={!selectedFile || isLoading} 
        className={styles.button}
      >
        {isLoading ? 'Processing...' : 'Upload and Analyze'}
      </button>
    </form>
  )
}

FileUpload.propTypes = {
  onFileUpload: PropTypes.func.isRequired,
  isLoading: PropTypes.bool
}

FileUpload.defaultProps = {
  isLoading: false
}
