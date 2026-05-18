import Image from "next/image";
import Link from "next/link";
import styles from "./AboutSozo.module.css";

export default function AboutSozo() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h2 className={styles.heading}>About SoZo</h2>
          <p className={styles.description}>
            At SoZo Hair, Spa &amp; Wigs, we believe that every person deserves to feel
            beautiful and confident. Our team of experienced stylists and spa professionals
            is dedicated to providing personalized services that enhance your natural beauty.
          </p>
          <p className={styles.description}>
            From expert hair coloring and cuts to rejuvenating spa treatments and premium
            wig services, we offer a complete beauty experience in a warm, welcoming
            environment.
          </p>

          <div className={styles.features}>
            <div className={styles.feature}>
              <svg className={styles.featureIcon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
              <span>Expert Stylists</span>
            </div>
            <div className={styles.feature}>
              <svg className={styles.featureIcon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
              <span>Premium Quality</span>
            </div>
            <div className={styles.feature}>
              <svg className={styles.featureIcon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
              <span>Personalized Care</span>
            </div>
          </div>

          <div className={styles.buttons}>
            <Link href="#services" className={styles.learnMoreBtn}>
              Learn More
            </Link>
            <a href="#" className={styles.watchBtn}>
              <svg className={styles.playIcon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
              Watch Video
            </a>
          </div>
        </div>

        <div className={styles.imageContent}>
          <Image
            src="/landing/banner/Container.png"
            alt="SoZo Hair Salon Building"
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
