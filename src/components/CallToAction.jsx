import React from 'react'
import styles from './CallToAction.module.css'

export default function CallToAction() {
  return (
    <section id="cta" className={styles.cta}>
      <h2>Ready to Detect Fake Audio?</h2>
      <p>Try our AI-powered audio forensics tool today and protect yourself from deepfakes.</p>
      <a href="/analytics" className={styles.button}>Start Analyzing</a>
    </section>
  )
}

