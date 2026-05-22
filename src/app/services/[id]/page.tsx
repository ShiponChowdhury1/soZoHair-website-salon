import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import { services, getServiceById, getAllServiceIds } from "@/data/services";
import ScalpVideoPlayer from "@/components/services/ScalpVideoPlayer";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const service = getServiceById(id) || services[0];
  return {
    title: `${service.title} | SoZo Hair Salon & Wigs`,
    description: service.intro.slice(0, 160) + "...",
  };
}

export async function generateStaticParams() {
  return getAllServiceIds().map((id) => ({ id }));
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { id } = await params;
  const service = getServiceById(id);

  if (!service) {
    return (
      <main>
        <Navbar />
        <div style={{ minHeight: "60vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "80px 20px", textAlign: "center" }}>
          <h1 style={{ fontFamily: "var(--font-playfair), serif", fontSize: 36, fontWeight: 600, color: "#2D2D2D", marginBottom: 16 }}>Service Not Found</h1>
          <p style={{ color: "#666", marginBottom: 32 }}>The service you are looking for does not exist.</p>
          <Link href="/" style={{ padding: "12px 32px", background: "#C4956A", color: "#fff", borderRadius: 6, textDecoration: "none", fontSize: 14 }}>Return Home</Link>
        </div>
        <Footer />
      </main>
    );
  }

  const detailImg = service.heroDetailImage || service.heroImage;
  const isPricingMulti = service.type === "pricing-multi";
  const isPricingSimple = service.type === "pricing-simple";
  const isInfoBenefits = service.type === "info-benefits";
  const isInfoFaq = service.type === "info-faq";
  const isFaqStats = service.type === "faq-stats";
  const heroObjectPosition = service.id === "extensions-texturizing" ? "center center" : "right center";

  return (
    <main>
      <Navbar />

      {/* ═══════════════════════════════════════════════════════
          HERO SECTION — Figma-matching split layout
      ═══════════════════════════════════════════════════════ */}
      <section
        style={{
          position: "relative",
          width: "100%",
          minHeight: 420,
          overflow: "hidden",
          background: "#fff",
          paddingTop: 90,
        }}
      >
        {/* Background image positioned right */}
        {detailImg && (
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              width: "100%",
              zIndex: 0,
            }}
          >
            <Image
              src={detailImg}
              alt={service.title}
              fill
              style={{ objectFit: "cover", objectPosition: heroObjectPosition }}
              priority
            />
          </div>
        )}

        {/* White gradient overlay from left */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, #ffffff 30%, rgba(255,255,255,0.95) 40%, rgba(255,255,255,0.6) 55%, transparent 75%)",
            zIndex: 1,
          }}
        />

        {/* Hero text content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "var(--container-max-width, 1319px)",
            margin: "0 auto",
            padding: "80px 40px 80px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <span
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "#C4956A",
            }}
          >
            {service.badge}
          </span>

          <h1
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: 42,
              fontWeight: 600,
              color: "#2D2D2D",
              lineHeight: 1.2,
              maxWidth: 550,
              margin: 0,
            }}
          >
            {service.heroTitle}
          </h1>

          <p
            style={{
              fontSize: 15,
              color: "#666",
              lineHeight: 1.6,
              maxWidth: 480,
              margin: 0,
            }}
          >
            {service.heroSubtitle}
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 8 }}>
            <Link
              href="/#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "14px 32px",
                background: "#C4956A",
                color: "#fff",
                border: "none",
                borderRadius: 6,
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: 1,
                textDecoration: "none",
                width: "fit-content",
                transition: "all 0.3s",
              }}
            >
              Book an Appointment →
            </Link>

            {service.id === "scalp-facial" && (
              <a
                href="#more-info"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "14px 32px",
                  background: "transparent",
                  color: "#C4956A",
                  border: "1px solid #C4956A",
                  borderRadius: 6,
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: 1,
                  textDecoration: "none",
                  transition: "all 0.3s",
                }}
              >
                View More
              </a>
            )}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          MAIN CONTENT with Figma gradient background
      ═══════════════════════════════════════════════════════ */}
      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(248, 243, 238, 0) 0%, #F8F3EE 53.38%, rgba(248, 243, 238, 0) 105.74%)",
        }}
      >
        {service.id === "scalp-facial" ? (
          /* ═══════════════════════════════════════════════════════
              CUSTOM SCALP FACIAL LAYOUT — matching Figma screenshot
             ═══════════════════════════════════════════════════════ */
          <section
            id="more-info"
            style={{
              maxWidth: "var(--container-max-width, 1319px)",
              margin: "0 auto",
              padding: "60px 40px",
            }}
          >
            <div style={{ maxWidth: 900 }}>

              {/* More about Scalp Facial Treatment */}
              <h2
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: 32,
                  fontWeight: 600,
                  color: "#2D2D2D",
                  marginBottom: 12,
                  lineHeight: 1.3,
                }}
              >
                More about Scalp Facial Treatment
              </h2>
              <p
                style={{
                  fontSize: 16,
                  color: "#666",
                  marginBottom: 24,
                  fontWeight: 500,
                }}
              >
                Relaxing service with expertly trained staff!
              </p>

              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.85,
                  color: "#555",
                  marginBottom: 18,
                }}
              >
                Our head is a reservoir of vital force energy channels and acupressure points. Through the gentle art of massage, the Relaxing Scalp Facial seeks to harmonize these energies, fostering equilibrium and holistic well-being both physically and mentally.
              </p>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.85,
                  color: "#555",
                  marginBottom: 48,
                }}
              >
                By experiencing the benefits and effects of the Relaxing Scalp Facial, individuals can achieve a state of relaxation and rejuvenation for both their body and mind.
              </p>

              {/* Benefits of the Relaxing Scalp Facial Treatment */}
              <h2
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: 32,
                  fontWeight: 600,
                  color: "#2D2D2D",
                  marginBottom: 12,
                  lineHeight: 1.3,
                  marginTop: 48,
                }}
              >
                Benefits of the Relaxing Scalp Facial Treatment
              </h2>
              <p
                style={{
                  fontSize: 16,
                  color: "#666",
                  marginBottom: 8,
                  fontWeight: 500,
                }}
              >
                A Relaxing Scalp Facial offers a range of benefits and effects that promote overall well-being and relaxation.
              </p>
              <p
                style={{
                  fontSize: 15,
                  color: "#888",
                  marginBottom: 32,
                  fontStyle: "italic",
                }}
              >
                Here are a few key advantages
              </p>

              {/* Advantages List */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 24,
                  marginBottom: 40,
                }}
              >
                <div>
                  <h4
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      letterSpacing: 0.5,
                      color: "#2D2D2D",
                      marginBottom: 6,
                    }}
                  >
                    STRESS RELIEF
                  </h4>
                  <p style={{ fontSize: 15, lineHeight: 1.75, color: "#555", margin: 0 }}>
                    Our Relaxing Scalp Facial gentle massaging of the scalp and head helps to release tension and promote relaxation.
                  </p>
                </div>

                <div>
                  <h4
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      letterSpacing: 0.5,
                      color: "#2D2D2D",
                      marginBottom: 6,
                    }}
                  >
                    IMPROVED BLOOD CIRCULATION
                  </h4>
                  <p style={{ fontSize: 15, lineHeight: 1.75, color: "#555", margin: 0 }}>
                    The Scalp Facial stimulates blood flow to the scalp and head area, improving overall blood circulation. This helps nourish the hair follicles, promoting healthier hair growth.
                  </p>
                </div>

                <div>
                  <h4
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      letterSpacing: 0.5,
                      color: "#2D2D2D",
                      marginBottom: 6,
                    }}
                  >
                    DEEP RELAXATION
                  </h4>
                  <p style={{ fontSize: 15, lineHeight: 1.75, color: "#555", margin: 0 }}>
                    The Relaxing Scalp Facial induces deep relaxation through various massage techniques which helps to alleviate anxiety, promote better sleep, and enhance overall mental well-being.
                  </p>
                </div>

                <div>
                  <h4
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      letterSpacing: 0.5,
                      color: "#2D2D2D",
                      marginBottom: 6,
                    }}
                  >
                    RELIEF FROM HEADACHES AND MIGRAINES
                  </h4>
                  <p style={{ fontSize: 15, lineHeight: 1.75, color: "#555", margin: 0 }}>
                    Many individuals experience relief from headaches and migraines after receiving a Relaxing Scalp Facial treatment. The gentle pressure applied to specific points on the head can help alleviate pain and reduce the frequency of these conditions.
                  </p>
                </div>

                <div>
                  <h4
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      letterSpacing: 0.5,
                      color: "#2D2D2D",
                      marginBottom: 6,
                    }}
                  >
                    INCREASED SCALP HEALTH
                  </h4>
                  <p style={{ fontSize: 15, lineHeight: 1.75, color: "#555", margin: 0 }}>
                    Regular Scalp Facial treatments can improve the scalp’s health by removing excess oil, dead skin cells, and product build-up. This can help to prevent dandruff, itchiness, and other scalp-related issues.
                  </p>
                </div>

                <div>
                  <h4
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      letterSpacing: 0.5,
                      color: "#2D2D2D",
                      marginBottom: 6,
                    }}
                  >
                    ENHANCED HAIR TEXTURE AND SHINE
                  </h4>
                  <p style={{ fontSize: 15, lineHeight: 1.75, color: "#555", margin: 0 }}>
                    This treatment’s improved blood circulation and overall scalp health can lead to healthier hair. This often results in enhanced hair texture, increased shine, and reduced hair loss and breakage.
                  </p>
                </div>
              </div>
            </div>

            {/* Wider Video Player Container */}
            <div style={{ width: "100%", maxWidth: 1100, margin: "40px 0" }}>
              <ScalpVideoPlayer poster="/landing/services/the-relaxing-Scalp-facial.png" />
            </div>

            {/* Bottom Text Container */}
            <div style={{ maxWidth: 900 }}>
              {/* Key Notes Before Arrival */}
              <h3
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: 28,
                  fontWeight: 600,
                  color: "#2D2D2D",
                  marginBottom: 20,
                  marginTop: 24,
                }}
              >
                Key Notes Before Arrival
              </h3>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                {service.notes?.map((note, nIdx) => (
                  <li
                    key={nIdx}
                    style={{
                      fontSize: 14,
                      lineHeight: 1.75,
                      color: "#555",
                    }}
                  >
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ) : (
          <>
            {/* ── INTRO ── */}
            <section
              style={{
                maxWidth: "var(--container-max-width, 1319px)",
                margin: "0 auto",
                padding: "60px 40px 40px",
              }}
            >
              <div style={{ maxWidth: 900 }}>
                {/* Extensions page heading */}
                {service.id === "extensions-texturizing" && (
                  <h2
                    style={{
                      fontFamily: "var(--font-playfair), serif",
                      fontSize: 32,
                      fontWeight: 600,
                      color: "#2D2D2D",
                      marginBottom: 24,
                      lineHeight: 1.3,
                    }}
                  >
                    Be a Celebrity and go from short-to-long, fine-to-full, blonde to brunette in ONE visit!
                  </h2>
                )}

                <p
                  style={{
                    fontSize: 15,
                    lineHeight: 1.85,
                    color: "#555",
                  }}
                >
                  {service.intro}
                </p>

                {/* Hair Cuts extra paragraph */}
                {service.id === "hair-cuts-color" && (
                  <p
                    style={{
                      fontSize: 15,
                      lineHeight: 1.85,
                      color: "#555",
                      marginTop: 20,
                    }}
                  >
                    Be sure to check into the anti-aging benefits of microdermabrasion to get smoother, younger looking skin! SoZo Hair – your home for hair coloring and hair cuts in West Chester, Ohio.
                  </p>
                )}
              </div>
            </section>

            {/* ═══════════════════════════════════════════════════════
                PRICING TABLES — pricing-multi type
            ═══════════════════════════════════════════════════════ */}
            {isPricingMulti && service.tables && (
              <section
                style={{
                  maxWidth: "var(--container-max-width, 1319px)",
                  margin: "0 auto",
                  padding: "20px 40px 60px",
                }}
              >
                {service.tables.map((table, tIdx) => (
                  <div key={tIdx} style={{ marginBottom: tIdx < service.tables!.length - 1 ? 60 : 0 }}>
                    {/* Table title */}
                    <h3
                      style={{
                        fontFamily: "var(--font-playfair), serif",
                        fontSize: 24,
                        fontWeight: 600,
                        color: "#2D2D2D",
                        marginBottom: 4,
                      }}
                    >
                      {table.name}
                    </h3>
                    {table.sub && (
                      <p
                        style={{
                          fontSize: 12,
                          color: "#999",
                          fontStyle: "italic",
                          marginBottom: 20,
                        }}
                      >
                        {table.sub}
                      </p>
                    )}
                    {!table.sub && <div style={{ height: 20 }} />}

                    {/* Table */}
                    <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
                      <table
                        style={{
                          width: "100%",
                          borderCollapse: "collapse",
                          minWidth: 700,
                          fontSize: 14,
                        }}
                      >
                        <thead>
                          <tr>
                            {table.columns.map((col, cIdx) => (
                              <th
                                key={cIdx}
                                style={{
                                  background: cIdx === 0 ? "#C4956A" : "#D4A57A",
                                  color: "#fff",
                                  padding: "14px 16px",
                                  textAlign: "left",
                                  fontSize: 12,
                                  fontWeight: 700,
                                  letterSpacing: 0.5,
                                  textTransform: "uppercase",
                                  whiteSpace: "nowrap",
                                  borderRight: cIdx < table.columns.length - 1 ? "1px solid rgba(255,255,255,0.2)" : "none",
                                }}
                              >
                                {col}
                                {/* Sub-label for artist level headers */}
                                {cIdx > 0 && (
                                  <div style={{ fontSize: 10, fontWeight: 400, opacity: 0.8, marginTop: 2, textTransform: "capitalize" }}>
                                    Hair Artist
                                  </div>
                                )}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {table.rows.map((row, rIdx) => (
                            <tr
                              key={rIdx}
                              style={{
                                background: rIdx % 2 === 0 ? "#fff" : "#FDFAF7",
                                borderBottom: "1px solid #F0EBE5",
                              }}
                            >
                              {row.map((cell, cellIdx) => (
                                <td
                                  key={cellIdx}
                                  style={{
                                    padding: "12px 16px",
                                    fontSize: 14,
                                    color: cellIdx === 0 ? "#2D2D2D" : "#555",
                                    fontWeight: cellIdx === 0 ? 500 : 400,
                                    whiteSpace: "nowrap",
                                    borderRight: cellIdx < row.length - 1 ? "1px solid #F0EBE5" : "none",
                                  }}
                                >
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Entries count */}
                    <p style={{ fontSize: 12, color: "#999", marginTop: 10 }}>
                      Showing 1 to {table.rows.length} of {table.rows.length} entries
                    </p>
                  </div>
                ))}
              </section>
            )}

            {/* ═══════════════════════════════════════════════════════
                PRICING SIMPLE — pricing-simple type
            ═══════════════════════════════════════════════════════ */}
            {isPricingSimple && service.simpleTable && (
              <section
                style={{
                  maxWidth: "var(--container-max-width, 1319px)",
                  margin: "0 auto",
                  padding: "20px 40px 60px",
                }}
              >
                <div style={{ maxWidth: 700, overflowX: "auto" }}>
                  <table
                    style={{
                      width: "100%",
                      borderCollapse: "collapse",
                      fontSize: 14,
                    }}
                  >
                    <thead>
                      <tr>
                        {service.simpleTable.columns.map((col, cIdx) => (
                          <th
                            key={cIdx}
                            style={{
                              background: cIdx === 0 ? "#C4956A" : "#D4A57A",
                              color: "#fff",
                              padding: "14px 16px",
                              textAlign: "left",
                              fontSize: 12,
                              fontWeight: 700,
                              letterSpacing: 0.5,
                              textTransform: "uppercase",
                              borderRight: cIdx < service.simpleTable!.columns.length - 1 ? "1px solid rgba(255,255,255,0.2)" : "none",
                            }}
                          >
                            {col}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {service.simpleTable.rows.map((row, rIdx) => (
                        <tr
                          key={rIdx}
                          style={{
                            background: rIdx % 2 === 0 ? "#fff" : "#FDFAF7",
                            borderBottom: "1px solid #F0EBE5",
                          }}
                        >
                          {row.map((cell, cellIdx) => (
                            <td
                              key={cellIdx}
                              style={{
                                padding: "12px 16px",
                                fontSize: 14,
                                color: cellIdx === 0 ? "#2D2D2D" : "#555",
                                fontWeight: cellIdx === 0 ? 500 : 400,
                              }}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {service.tableNote && (
                  <p style={{ fontSize: 12, color: "#999", fontStyle: "italic", marginTop: 12 }}>
                    * {service.tableNote}
                  </p>
                )}
              </section>
            )}

            {/* ═══════════════════════════════════════════════════════
                INFO BENEFITS — info-benefits type (Extensions, Scalp Facial)
            ═══════════════════════════════════════════════════════ */}
            {isInfoBenefits && (
              <section
                style={{
                  maxWidth: "var(--container-max-width, 1319px)",
                  margin: "0 auto",
                  padding: "20px 40px 60px",
                }}
              >
                {/* Extra Content (Tape-In Extensions details) */}
                {service.extraContent && (
                  <div style={{ maxWidth: 900, marginBottom: 40 }}>
                    <h3
                      style={{
                        fontFamily: "var(--font-playfair), serif",
                        fontSize: 28,
                        fontWeight: 600,
                        color: "#2D2D2D",
                        marginBottom: 16,
                        lineHeight: 1.3,
                      }}
                    >
                      {service.extraContent.title}
                    </h3>
                    <div
                      style={{
                        fontSize: 15,
                        lineHeight: 1.85,
                        color: "#555",
                        whiteSpace: "pre-line",
                      }}
                    >
                      {service.extraContent.body}
                    </div>
                  </div>
                )}

                {service.id === "extensions-texturizing" && service.notes && (
                  <div style={{ maxWidth: 900, marginBottom: 40 }}>
                    <h3
                      style={{
                        fontFamily: "var(--font-playfair), serif",
                        fontSize: 22,
                        fontWeight: 600,
                        color: "#2D2D2D",
                        marginBottom: 16,
                      }}
                    >
                      Additional Information
                    </h3>
                    <ul
                      style={{
                        listStyle: "none",
                        padding: 0,
                        margin: 0,
                        display: "flex",
                        flexDirection: "column",
                        gap: 10,
                      }}
                    >
                      {service.notes.map((note, nIdx) => (
                        <li
                          key={nIdx}
                          style={{
                            fontSize: 14,
                            lineHeight: 1.7,
                            color: "#555",
                          }}
                        >
                          {note}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Highlights/Benefits grid */}
                {service.highlights && service.id !== "extensions-texturizing" && (
                  <div style={{ maxWidth: 900, marginBottom: 40 }}>
                    <h3
                      style={{
                        fontFamily: "var(--font-playfair), serif",
                        fontSize: 24,
                        fontWeight: 600,
                        color: "#2D2D2D",
                        marginBottom: 24,
                      }}
                    >
                      {service.id === "scalp-facial" ? "Treatment Benefits" : "Key Benefits"}
                    </h3>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                        gap: 20,
                      }}
                    >
                      {service.highlights.map((h, idx) => (
                        <div
                          key={idx}
                          style={{
                            background: "#fff",
                            padding: 24,
                            borderRadius: 8,
                            border: "1px solid #EDE7E0",
                          }}
                        >
                          <div style={{ fontSize: 24, marginBottom: 10 }}>{h.icon}</div>
                          <h4 style={{ fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: "#2D2D2D", marginBottom: 8 }}>
                            {h.title}
                          </h4>
                          <p style={{ fontSize: 13, lineHeight: 1.6, color: "#666", margin: 0 }}>
                            {h.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {service.id === "extensions-texturizing" && service.galleryImages && (
                  <div style={{ maxWidth: 900, marginTop: 16 }}>
                    <div
                      className="extensions-gallery-grid"
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                        gap: 12,
                      }}
                    >
                      {service.galleryImages.map((imageUrl, idx) => (
                        <div
                          key={idx}
                          style={{
                            position: "relative",
                            aspectRatio: "1 / 1.18",
                            borderRadius: 18,
                            overflow: "hidden",
                            background: "#F4ECE5",
                            boxShadow: "0 10px 24px rgba(45, 45, 45, 0.08)",
                          }}
                        >
                          <Image
                            src={imageUrl}
                            alt={`Salon style inspiration ${idx + 1}`}
                            fill
                            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 180px"
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </section>
            )}

            {/* ═══════════════════════════════════════════════════════
                INFO FAQ — info-faq type (Pure Plasma)
            ═══════════════════════════════════════════════════════ */}
            {isInfoFaq && (
              <section
                style={{
                  maxWidth: "var(--container-max-width, 1319px)",
                  margin: "0 auto",
                  padding: "20px 40px 60px",
                }}
              >
                {/* Highlights */}
                {service.highlights && (
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                      gap: 20,
                      marginBottom: 48,
                    }}
                  >
                    {service.highlights.map((h, idx) => (
                      <div
                        key={idx}
                        style={{
                          background: "#fff",
                          padding: 24,
                          borderRadius: 8,
                          border: "1px solid #EDE7E0",
                          display: "flex",
                          gap: 16,
                        }}
                      >
                        <span style={{ fontSize: 28, color: "#C4956A", flexShrink: 0, marginTop: 2 }}>{h.icon}</span>
                        <div>
                          <h4 style={{ fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: "#2D2D2D", marginBottom: 6 }}>
                            {h.title}
                          </h4>
                          <p style={{ fontSize: 13, lineHeight: 1.6, color: "#666", margin: 0 }}>{h.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Treats list */}
                {service.treats && (
                  <div style={{ marginBottom: 48 }}>
                    <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: 24, fontWeight: 600, color: "#2D2D2D", marginBottom: 20 }}>
                      What It Treats
                    </h3>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 10 }}>
                      {service.treats.map((t, idx) => (
                        <li key={idx} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#2D2D2D" }}>
                          <span style={{ color: "#C4956A" }}>✓</span>
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* FAQs */}
                {service.faqs && (
                  <div style={{ maxWidth: 800 }}>
                    <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: 24, fontWeight: 600, color: "#2D2D2D", marginBottom: 20 }}>
                      Frequently Asked Questions
                    </h3>
                    {service.faqs.map((faq, idx) => (
                      <details
                        key={idx}
                        style={{
                          borderBottom: "1px solid #EDE7E0",
                          marginBottom: 0,
                        }}
                      >
                        <summary
                          style={{
                            padding: "18px 0",
                            cursor: "pointer",
                            fontWeight: 600,
                            fontSize: 15,
                            color: "#2D2D2D",
                            listStyle: "none",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          {faq.q}
                          <span style={{ color: "#C4956A", fontSize: 18, fontWeight: 300 }}>+</span>
                        </summary>
                        <p style={{ padding: "0 0 18px", fontSize: 14, lineHeight: 1.75, color: "#555", margin: 0 }}>
                          {faq.a}
                        </p>
                      </details>
                    ))}
                  </div>
                )}
              </section>
            )}

            {/* ═══════════════════════════════════════════════════════
                FAQ STATS — faq-stats type (CryoSkin)
            ═══════════════════════════════════════════════════════ */}
            {isFaqStats && (
              <section
                style={{
                  maxWidth: "var(--container-max-width, 1319px)",
                  margin: "0 auto",
                  padding: "20px 40px 60px",
                }}
              >
                {/* Stats */}
                {service.stats && (
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                      gap: 24,
                      marginBottom: 48,
                    }}
                  >
                    {service.stats.map((s, idx) => (
                      <div
                        key={idx}
                        style={{
                          background: "#fff",
                          border: "1px solid #EDE7E0",
                          borderRadius: 8,
                          padding: 32,
                          textAlign: "center",
                        }}
                      >
                        <div style={{ fontFamily: "var(--font-playfair), serif", fontSize: 40, fontWeight: 700, color: "#C4956A" }}>
                          {s.num}
                        </div>
                        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: "#2D2D2D", marginTop: 8 }}>
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* FAQs */}
                {service.faqs && (
                  <div style={{ maxWidth: 800 }}>
                    <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: 24, fontWeight: 600, color: "#2D2D2D", marginBottom: 20 }}>
                      Frequently Asked Questions
                    </h3>
                    {service.faqs.map((faq, idx) => (
                      <details
                        key={idx}
                        style={{ borderBottom: "1px solid #EDE7E0" }}
                      >
                        <summary
                          style={{
                            padding: "18px 0",
                            cursor: "pointer",
                            fontWeight: 600,
                            fontSize: 15,
                            color: "#2D2D2D",
                            listStyle: "none",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          {faq.q}
                          <span style={{ color: "#C4956A", fontSize: 18, fontWeight: 300 }}>+</span>
                        </summary>
                        <p style={{ padding: "0 0 18px", fontSize: 14, lineHeight: 1.75, color: "#555", margin: 0 }}>
                          {faq.a}
                        </p>
                      </details>
                    ))}
                  </div>
                )}
              </section>
            )}

            {/* ═══════════════════════════════════════════════════════
                NOTES / POLICIES
            ═══════════════════════════════════════════════════════ */}
            {service.notes && service.notes.length > 0 && service.id !== "extensions-texturizing" && (
              <section
                style={{
                  maxWidth: "var(--container-max-width, 1319px)",
                  margin: "0 auto",
                  padding: "0 40px 60px",
                }}
              >
                <div style={{ maxWidth: 900 }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-playfair), serif",
                      fontSize: 22,
                      fontWeight: 600,
                      color: "#2D2D2D",
                      marginBottom: 16,
                    }}
                  >
                    Additional Information
                  </h3>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: 10,
                    }}
                  >
                    {service.notes.map((note, nIdx) => (
                      <li
                        key={nIdx}
                        style={{
                          fontSize: 14,
                          lineHeight: 1.7,
                          color: "#555",
                        }}
                      >
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {/* Hair Cuts extra promo */}
            {service.id === "hair-cuts-color" && (
              <section
                style={{
                  maxWidth: "var(--container-max-width, 1319px)",
                  margin: "0 auto",
                  padding: "0 40px 60px",
                }}
              >
                <div style={{ maxWidth: 900 }}>
                  <p style={{ fontSize: 14, lineHeight: 1.8, color: "#555" }}>
                    SoZo HAIR Color Tips has been named one of the most popular online resources for Coloring and Hair Highlighting.
                  </p>
                  <p style={{ fontSize: 14, lineHeight: 1.8, color: "#555", marginTop: 12 }}>
                    Consider the Kinetotherapy in West Chester Ohio and surrounding Cincinnati West Side areas for great hair highlighted and professionally dyed hair styles. SoZo Hair!
                  </p>
                </div>
              </section>
            )}
          </>
        )}
      </div>

      <Footer />
    </main>
  );
}
