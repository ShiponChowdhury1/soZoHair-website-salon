import Image from "next/image";
import styles from "./OurServices.module.css";

const services = [
  { title: "Hair Color & Cuts", image: "/landing/services/ServiceCard.png" },
  { title: "Specialty Hair Services", image: "/landing/services/ServiceCard (1).png" },
  { title: "Medi-Cosmetology", image: "/landing/services/ServiceCard (2).png" },
  { title: "Waxing Services", image: "/landing/services/ServiceCard (3).png" },
  { title: "Lash & Brow Services", image: "/landing/services/ServiceCard (4).png" },
  { title: "CryoSkin Fat Loss", image: "/landing/services/ServiceCard (5).png" },
  { title: "The Relaxing Scalp Facial", image: "/landing/services/ServiceCard (6).png" },
];

export default function OurServices() {
  return (
    <section className={styles.section} id="services">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Our Services</h2>
          <p className={styles.subtitle}>
            Discover our full range of beauty and wellness services
          </p>
          <div className={styles.divider} />
        </div>

        <div className={styles.grid}>
          {services.map((service) => (
            <div key={service.title} className={styles.card}>
              <div className={styles.cardImage}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
              <div className={styles.cardBody}>
                <span className={styles.cardTitle}>{service.title}</span>
                <svg className={styles.cardArrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
