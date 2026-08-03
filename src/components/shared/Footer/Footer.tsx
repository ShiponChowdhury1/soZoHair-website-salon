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
              <a href="https://www.facebook.com/SoZoHairSpaWigs/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Facebook">
                <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/sozohair1/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
                <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="YouTube">
                <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="TikTok">
                <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.74-3.99-1.72-.08-.07-.17-.17-.25-.25v6.23c.01 2.14-.62 4.35-2.22 5.8-1.74 1.64-4.37 2.22-6.66 1.65-2.61-.62-4.75-2.73-5.21-5.38-.63-3.23.95-6.67 4.09-7.69.75-.24 1.54-.34 2.33-.35v4.07c-1.26.06-2.52.79-3.08 1.93-.61 1.17-.41 2.71.48 3.67.92.98 2.5 1.2 3.73.53.94-.48 1.48-1.5 1.5-2.57V0h.28z"/>
                </svg>
              </a>
              <a href="https://x.com/bajonsalon" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="X (Twitter)">
                <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Quick Links</h4>
            <ul className={styles.columnLinks}>
              <li><Link href="/" className={styles.columnLink}>Home</Link></li>
              <li><Link href="/about" className={styles.columnLink}>About Us</Link></li>
              <li><Link href="/#services" className={styles.columnLink}>Services</Link></li>
              <li><Link href="/gallery" className={styles.columnLink}>Gallery</Link></li>
              <li><Link href="/premium-products" className={styles.columnLink}>Products</Link></li>
              <li><a href="https://na0.meevo.com/FiveStarRatingApp/five-star-rating?t=104044&l=107183" target="_blank" rel="noopener noreferrer" className={styles.columnLink}>View Our 5 Star Ratings</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Services</h4>
            <ul className={styles.columnLinks}>
              <li><Link href="/services/hair-cuts-color" className={styles.columnLink}>Hair Color &amp; Cuts</Link></li>
              <li><Link href="/services/specialty-hair" className={styles.columnLink}>Specialty Hair</Link></li>
              <li><Link href="/services/extensions-texturizing" className={styles.columnLink}>Hair Extensions</Link></li>
              <li><Link href="/services/skin-services" className={styles.columnLink}>Skin Services</Link></li>
              <li><Link href="/services/headspa" className={styles.columnLink}>HeadSpa</Link></li>
              <li><Link href="/services/cryoskin" className={styles.columnLink}>CryoSkin</Link></li>
              <li><Link href="/services/pure-plasma" className={styles.columnLink}>Pure Plasma</Link></li>
              <li><Link href="/services/scalp-facial" className={styles.columnLink}>Scalp Facial</Link></li>
              <li><Link href="/services/waxing" className={styles.columnLink}>Waxing</Link></li>
              <li><Link href="/services/lash-brow" className={styles.columnLink}>Lash &amp; Brow</Link></li>
              <li><Link href="/services/medical-spa-services" className={styles.columnLink}>Medical Spa</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Contact</h4>
            <ul className={styles.columnLinks}>
              <li><span className={styles.columnLink}>123 Beauty Lane</span></li>
              <li><span className={styles.columnLink}>Winter Garden, FL</span></li>
              <li><a href="tel:5138749999" className={styles.columnLink}>(513) 874-9999</a></li>
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
