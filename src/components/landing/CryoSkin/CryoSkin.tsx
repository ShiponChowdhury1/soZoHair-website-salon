import Image from "next/image";
import Link from "next/link";
import styles from "./CryoSkin.module.css";

const features = [
  "Non-invasive fat reduction technology",
  "Safe, painless, and FDA-cleared procedure",
  "Visible results after just one session",
  "Targets stubborn fat areas effectively",
  "No downtime — resume daily activities immediately",
];

export default function CryoSkin() {
  return (
    <section className={styles.section} id="cryoskin">
      <div className={styles.container}>
        <div className={styles.textContent}>
          <span className={styles.label}>Advanced Technology</span>
          <h2 className={styles.heading}>
            CryoSkin – A Non-Invasive, Safe, Painless Fat Loss Technology
          </h2>
          <p className={styles.description}>
            Experience the revolutionary CryoSkin treatment that uses cold therapy
            to destroy fat cells naturally. This cutting-edge technology offers a
            safe and effective alternative to invasive procedures, helping you
            achieve your body goals with zero downtime.
          </p>
          <div className={styles.featureList}>
            {features.map((feature) => (
              <div key={feature} className={styles.featureItem}>
                <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
                <span>{feature}</span>
              </div>
            ))}
          </div>
          <Link href="#" className={styles.ctaBtn}>
            Learn More
          </Link>
        </div>

        <div className={styles.imageContent}>
          <Image
            src="/landing/Image (Cryoskin).png"
            alt="CryoSkin Fat Loss Treatment"
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
