import styles from "./Hero.module.css"

const Hero = () => {
    return (
        <section className={styles.hero}>
        <button className={styles.first}>Ash Creek Capital Advisors</button><br></br>
        <button className={styles.second}>Business advisory and investment banking services<br></br>
        to small and medium-sized business</button>
    </section>
    )
}

export default Hero