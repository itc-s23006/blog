import styles from 'styles/hero.module.css'
import Image from 'next/legacy/image'
import cube from 'images/cube.jpg'

const Hero = ({ title, subtitle, imageOn = false }) => (
  <div className={styles.flexContainer}>
    <div className={styles.text}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
    {imageOn && (
      <figure>
        <Image src={cube} alt='' layout='responsive' />
      </figure>
    )}
  </div>
)

export default Hero
