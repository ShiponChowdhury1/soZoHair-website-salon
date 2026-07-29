"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";

interface PlasmaVideoPlayerProps {
  poster: string;
  videoSrc?: string;
  videoUrl?: string;
  duration?: string;
}

export default function PlasmaVideoPlayer({
  poster,
  videoSrc,
  videoUrl,
  duration = "1:00",
}: PlasmaVideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  if (isPlaying) {
    if (videoSrc) {
      return (
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "100%",
            aspectRatio: "16/9",
            borderRadius: 16,
            overflow: "hidden",
            backgroundColor: "#000",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
            margin: "0 auto",
          }}
        >
          <video
            ref={videoRef}
            src={videoSrc}
            poster={poster}
            controls
            autoPlay
            playsInline
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      );
    }

    if (videoUrl) {
      return (
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "100%",
            aspectRatio: "16/9",
            borderRadius: 16,
            overflow: "hidden",
            backgroundColor: "#000",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
            margin: "0 auto",
          }}
        >
          <iframe
            src={`${videoUrl}?autoplay=1&rel=0`}
            title="Pure Plasma Treatment Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: "none",
            }}
          />
        </div>
      );
    }
  }

  return (
    <div
      onClick={() => setIsPlaying(true)}
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "100%",
        aspectRatio: "16/9",
        borderRadius: 16,
        overflow: "hidden",
        cursor: "pointer",
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
        margin: "0 auto",
        transition: "transform 0.3s ease, boxShadow 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.01)";
        e.currentTarget.style.boxShadow = "0 24px 48px rgba(0, 0, 0, 0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.1)";
      }}
    >
      <Image
        src={poster}
        alt="Pure Plasma Treatment Video Preview"
        fill
        sizes="(max-width: 900px) 100vw, 1100px"
        style={{
          objectFit: "cover",
        }}
      />
      {/* Semi-transparent dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.25)",
          transition: "backgroundColor 0.3s ease",
        }}
      />

      {/* Play button overlay */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 72,
          height: 72,
          borderRadius: "50%",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
          transition: "transform 0.2s ease, backgroundColor 0.2s ease",
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            marginLeft: 4,
            color: "#C4956A",
          }}
        >
          <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
        </svg>
      </div>

      {/* Time duration badge */}
      <div
        style={{
          position: "absolute",
          bottom: 16,
          right: 16,
          backgroundColor: "rgba(0, 0, 0, 0.75)",
          color: "#fff",
          padding: "4px 8px",
          borderRadius: 4,
          fontSize: 12,
          fontWeight: 500,
          fontFamily: "sans-serif",
          letterSpacing: 0.5,
        }}
      >
        {duration}
      </div>
    </div>
  );
}
