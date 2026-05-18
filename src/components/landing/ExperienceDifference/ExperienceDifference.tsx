import styles from "./ExperienceDifference.module.css";

export default function ExperienceDifference() {
  return (
    <section className={styles.section} id="experience">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>Salon &amp; Spa Experience</span>
          <h2 className={styles.heading}>
            Experience the <span className={styles.headingAccent}>Difference</span>
          </h2>
          <div className={styles.divider} />
        </div>

        <div className={styles.cards}>
          {/* Card 1 - Expert Stylists */}
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="6" cy="6" r="3" />
                <path d="M8.12 8.12L12 12" />
                <path d="M20 4L8.12 15.88" />
                <circle cx="6" cy="18" r="3" />
                <path d="M14.8 14.8L20 20" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Expert Stylists</h3>
            <p className={styles.cardDescription}>
              Our team of certified professionals brings years of expertise
              and passion to every appointment, ensuring you leave looking
              and feeling your absolute best.
            </p>
          </div>

          {/* Card 2 - Premium Products */}
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 2h8l4 10H4L8 2z" />
                <path d="M12 12v10" />
                <path d="M8 22h8" />
                <path d="M7 12l-2 4" />
                <path d="M17 12l2 4" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Premium Products</h3>
            <p className={styles.cardDescription}>
              We use only the finest salon-grade products from top brands
              to deliver exceptional results that maintain the health and
              vitality of your hair.
            </p>
          </div>

          {/* Card 3 - Relaxing Environment */}
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                <line x1="9" y1="9" x2="9.01" y2="9" />
                <line x1="15" y1="9" x2="15.01" y2="9" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Relaxing Environment</h3>
            <p className={styles.cardDescription}>
              Step into our beautifully designed salon and unwind in a
              warm, welcoming atmosphere where luxury meets comfort
              at every turn.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
