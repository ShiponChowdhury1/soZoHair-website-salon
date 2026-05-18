"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#wigs", label: "Wigs" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={styles.navbar} id="main-navbar">
      <div className={styles.container}>
        <ul className={styles.navLinks}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={styles.navLink}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/" className={styles.logo}>
          SoZo Hair, Spa &amp; Wigs
        </Link>

        <div className={styles.navRight}>
          <Link href="/login" className={styles.bookNowBtn}>
            Book Now
          </Link>
        </div>

        <button
          className={styles.hamburger}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.hamburgerLineOpen1 : ""}`} />
          <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.hamburgerLineOpen2 : ""}`} />
          <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.hamburgerLineOpen3 : ""}`} />
        </button>
      </div>

      {/* Mobile Overlay */}
      <div
        className={isMenuOpen ? styles.mobileOverlayOpen : styles.mobileOverlay}
        onClick={closeMenu}
      />

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ""}`}>
        <ul className={styles.mobileNavLinks}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={styles.mobileNavLink} onClick={closeMenu}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/login" className={styles.mobileBookBtn} onClick={closeMenu}>
          Book Now
        </Link>
      </div>
    </nav>
  );
}
