import React from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1>Detect Fake Audio with AI</h1>
      <p>Protect yourself from audio deepfakes using our cutting-edge AI technology</p>
      <a href="#cta" className={styles.cta}>Get Started</a>
    </section>
  )
}

