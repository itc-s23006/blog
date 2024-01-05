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
      <figure className={styles.image}>
        <Image
          src={cube}
          alt=''
          layout='responsive'
          sizes='(min-width:1152px) 1152px, 100vw'
        />
      </figure>
    )}
  </div>
)

export default Hero
