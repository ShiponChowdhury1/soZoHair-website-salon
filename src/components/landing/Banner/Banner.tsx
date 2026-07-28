"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Banner.module.css";

export default function Banner() {
  const [videoError, setVideoError] = useState(false);

  return (
    <section className={styles.section} id="home">
      {/* Background Media */}
      <div className={styles.backgroundImage}>
        {!videoError ? (
          <video
            src="/sozo_hair_banner-video.mp4"
            poster="/landing/background.png"
            autoPlay
            loop
            muted
            playsInline
            onError={() => setVideoError(true)}
            className="w-full h-full object-cover"
          />
        ) : (
          <Image
            src="/landing/background.png"
            alt="SoZo Hair Salon Interior"
            fill
            style={{ objectFit: "cover" }}
            sizes="100vw"
            priority
          />
        )}
      </div>

      {/* Gradient Overlay */}
      <div className={styles.overlay} />

      {/* Content */}
      <div className={styles.content}>
        <span className={styles.subtitle}>Welcome to SoZo Hair, Spa &amp; Wigs</span>
        <h1 className={styles.heading}>Your Beauty, Our Passion</h1>
        <p className={styles.description}>
          Discover a world of luxury hair and spa treatments tailored just for you.
          Let our expert stylists bring out the best in your look.
        </p>
        <div className={styles.buttons}>
          <Link href="/booking" className={styles.bookNowBtn}>
            Book Now
          </Link>
          <a href="tel:5138749999" className={styles.callBtn}>
            <svg className={styles.callIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Call Us
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator}>
        <span className={styles.scrollDot} />
        <span className={styles.scrollLine} />
      </div>
    </section>
  );
}
