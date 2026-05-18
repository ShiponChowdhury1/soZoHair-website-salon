import Image from "next/image";
import Link from "next/link";
import styles from "./Artists.module.css";

const artists = [
  { name: "Sarah Johnson", role: "Senior Stylist", image: "/landing/artists/team1.png" },
  { name: "Maria Garcia", role: "Color Specialist", image: "/landing/artists/team2.png" },
  { name: "Emma Wilson", role: "Spa Therapist", image: "/landing/artists/team3.png" },
  { name: "Lisa Anderson", role: "Hair Designer", image: "/landing/artists/team4.png" },
  { name: "Rachel Brown", role: "Wig Specialist", image: "/landing/artists/team5.png" },
  { name: "Jennifer Davis", role: "Beauty Expert", image: "/landing/artists/team6.png" },
];

export default function Artists() {
  return (
    <section className={styles.section} id="gallery">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>Meet Our Team</span>
          <h2 className={styles.heading}>The Artists Behind Your Look</h2>
          <div className={styles.divider} />
        </div>

        <div className={styles.grid}>
          {artists.map((artist) => (
            <div key={artist.name} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={artist.image}
                  alt={artist.name}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
                />
              </div>
              <h3 className={styles.name}>{artist.name}</h3>
              <span className={styles.role}>{artist.role}</span>
            </div>
          ))}
        </div>

        <div className={styles.ctaWrapper}>
          <Link href="#" className={styles.ctaBtn}>
            View All Artists
          </Link>
        </div>
      </div>
    </section>
  );
}
