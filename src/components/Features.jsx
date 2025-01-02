import React from 'react'
import styles from './Features.module.css'

export default function Features() {
  const features = [
    {
      title: 'AI-Powered Analysis',
      description: 'Our advanced AI model accurately detects various types of audio forgeries.'
    },
    {
      title: 'Fast Results',
      description: 'Get instant results on the authenticity of your audio files.'
    },
    {
      title: 'Multiple Forgery Types',
      description: 'Detect speech synthesis, voice conversion, and replay attacks.'
    }
  ]

  return (
    <section id="features" className={styles.features}>
      <h2>Key Features</h2>
      <div className={styles.featureList}>
        {features.map((feature, index) => (
          <div key={index} className={styles.feature}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

