import Image from "next/image";
import styles from "./PremiumHairCare.module.css";

const suites = [
  { title: "Moisture Recovery Suite", image: "/landing/premium/Image (6).png" },
  { title: "Color Endure Suite", image: "/landing/premium/Image (7).png" },
  { title: "Smooth Cure Suite", image: "/landing/premium/Image (8).png" },
  { title: "Volume Boost Suite", image: "/landing/premium/Image (9).png" },
  { title: "Damage Repair Suite", image: "/landing/premium/Image (10).png" },
  { title: "Daily Care Suite", image: "/landing/premium/Image (11).png" },
  { title: "Scalp Treatment Suite", image: "/landing/premium/Image (12).png" },
  { title: "Keratin Smooth Suite", image: "/landing/premium/Image (13).png" },
];

export default function PremiumHairCare() {
  return (
    <section className={styles.section} id="premium">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Premium Hair Care Suites</h2>
          <p className={styles.subtitle}>
            Professional-grade hair care products curated for every hair type and concern
          </p>
          <div className={styles.divider} />
        </div>

        <div className={styles.grid}>
          {suites.map((suite) => (
            <div key={suite.title} className={styles.card}>
              <div className={styles.cardImage}>
                <Image
                  src={suite.image}
                  alt={suite.title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{suite.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
