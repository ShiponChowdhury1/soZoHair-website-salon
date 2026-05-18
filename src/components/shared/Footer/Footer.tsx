import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.container}>
        <div className={styles.topRow}>
          {/* Brand */}
          <div className={styles.brand}>
            <span className={styles.brandName}>SoZo Hair, Spa &amp; Wigs</span>
            <p className={styles.brandDescription}>
              Your premier destination for luxury hair, spa, and wig services.
              Experience the difference with our expert team.
            </p>
            <div className={styles.socials}>
              <a href="#" className={styles.socialLink} aria-label="Facebook">
                <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#" className={styles.socialLink} aria-label="Instagram">
                <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="#" className={styles.socialLink} aria-label="Twitter">
                <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Quick Links</h4>
            <ul className={styles.columnLinks}>
              <li><Link href="#home" className={styles.columnLink}>Home</Link></li>
              <li><Link href="#about" className={styles.columnLink}>About Us</Link></li>
              <li><Link href="#services" className={styles.columnLink}>Services</Link></li>
              <li><Link href="#gallery" className={styles.columnLink}>Gallery</Link></li>
              <li><Link href="#premium" className={styles.columnLink}>Products</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Services</h4>
            <ul className={styles.columnLinks}>
              <li><Link href="#services" className={styles.columnLink}>Hair Color &amp; Cuts</Link></li>
              <li><Link href="#services" className={styles.columnLink}>Specialty Hair</Link></li>
              <li><Link href="#cryoskin" className={styles.columnLink}>CryoSkin</Link></li>
              <li><Link href="#services" className={styles.columnLink}>Waxing</Link></li>
              <li><Link href="#services" className={styles.columnLink}>Lash &amp; Brow</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Contact</h4>
            <ul className={styles.columnLinks}>
              <li><span className={styles.columnLink}>123 Beauty Lane</span></li>
              <li><span className={styles.columnLink}>Winter Garden, FL</span></li>
              <li><a href="tel:+1234567890" className={styles.columnLink}>(123) 456-7890</a></li>
              <li><a href="mailto:info@sozohair.com" className={styles.columnLink}>info@sozohair.com</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className={styles.bottomRow}>
          <span className={styles.copyright}>
            © {new Date().getFullYear()} SoZo Hair, Spa &amp; Wigs. All rights reserved.
          </span>
          <div className={styles.bottomLinks}>
            <Link href="/privacy-policy" className={styles.bottomLink}>Privacy Policy</Link>
            <Link href="/terms-of-service" className={styles.bottomLink}>Terms of Service</Link>
            <Link href="/cookie-policy" className={styles.bottomLink}>Cookie Policy</Link>
            <Link href="/return-refund" className={styles.bottomLink}>Return &amp; Refund</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
