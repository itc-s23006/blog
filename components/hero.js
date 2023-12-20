import styles from 'styles/hero.module.css'
const Hero = ({ title, subtitle, imageOn = false }) => (
  <>
    <div className={styles.flexContainer}>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </div>
    {imageOn && <figure> [image] </figure>}
  </>
)

export default Hero
