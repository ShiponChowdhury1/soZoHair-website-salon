"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import ArtistDetailPage from "./ArtistDetailPage";

export const artists = [
  {
    id: 1,
    name: "Karen Welch",
    role: "Hair Expert",
    specialty: "Precision Cuts & Color",
    rating: 5,
    image: "/landing/artists/karenWelch.png",
    description: "Expert hair artist specializing in precision cuts and color treatments.",
    fullDescription: "I am a Level 5 – Expert Hair Artist and Owner at SoZo HAIR by Bajon Salon & Spa. I have over 36 years of experience in the Hair Fashion Industry and am considered an expert in hair design and hair color.  I also feel the shampoo experience at a salon should be OUTSTANDING and take pride giving special care in that area. I am skilled with Hot Head Extensions, the benefits of extensions never cease to amaze me. They have come such a long way with the technology, wearing extensions, whether for length, fullness or manageability, is easier than ever before. Read this article I did to learn more about hair extensions. Tape-In Hair Extensions Prior to opening SoZo HAIR by Bajon Salon & Spa I worked for distributors and manufacturers such as Redken and Wella International as the Regional Director of Education teaching Wella product knowledge along with hair color theory and techniques to salons. I have many Management and Educational responsibilities at SoZo HAIR that ensure the salon is providing the very best service to every client who walks in the door.  Client service and satisfaction are my main priorities! My passion is for children in need.   Inside and outside of the salon, helping children any way I can is a focus. Through many fundraisers and volunteer vacations it fills my spirit to enjoy kids from here and afar! Knowing SoZo offers top quality products and that we donate shampoo/body wash to children with every sale of our shampoos and conditioners, my days are all that much more meaningful. I thank you for your support of the true meaning of “SoZo” (an ancient Greek, Biblical word that means to save, heal, deliver, protect and make whole). Client Reviews for Karen:  Karen always listens to me and then knows exactly how to give me the look I want – color and cut. She’s super conscientious about making sure I’m happy as well as making sure my hair has the proper amount of color, shade and highlights. Always knows what to suggest. I also LOVE the SOZO products! Her new assistant, Alicia , is also AMAZING!!! One of the BEST head massages with with the shampoo I’ve ever received I have been a client about 8 years. Karen is excellent but so is her staff. It is just such a pleasant experience every time I go that Im still coming here even though I moved an hour away five years ago. Karen does an amazing job with my hair! She always gives me little tips to make sure I can ‘do it myself’. I appreciate her suggestions. They are always good for me.",
  },
  {
    id: 2,
    name: "Mark Welch",
    role: "Master Stylist",
    specialty: "Balayage & Extensions",
    rating: 5,
    image: "/landing/artists/markWelch.png",
    description: "Master stylist with expertise in balayage techniques and hair extensions.",
    fullDescription: "I am a Level 5 – Expert Hair Artist and Owner at SoZo HAIR by Bajon Salon & Spa. I have over 36 years of experience in the Hair Fashion Industry and am considered an expert in hair design and hair color.  I also feel the shampoo experience at a salon should be OUTSTANDING and take pride giving special care in that area. I am skilled with Hot Head Extensions, the benefits of extensions never cease to amaze me. They have come such a long way with the technology, wearing extensions, whether for length, fullness or manageability, is easier than ever before. Read this article I did to learn more about hair extensions. Tape-In Hair Extensions Prior to opening SoZo HAIR by Bajon Salon & Spa I worked for distributors and manufacturers such as Redken and Wella International as the Regional Director of Education teaching Wella product knowledge along with hair color theory and techniques to salons. I have many Management and Educational responsibilities at SoZo HAIR that ensure the salon is providing the very best service to every client who walks in the door.  Client service and satisfaction are my main priorities! My passion is for children in need.   Inside and outside of the salon, helping children any way I can is a focus. Through many fundraisers and volunteer vacations it fills my spirit to enjoy kids from here and afar! Knowing SoZo offers top quality products and that we donate shampoo/body wash to children with every sale of our shampoos and conditioners, my days are all that much more meaningful. I thank you for your support of the true meaning of “SoZo” (an ancient Greek, Biblical word that means to save, heal, deliver, protect and make whole). Client Reviews for Karen:  Karen always listens to me and then knows exactly how to give me the look I want – color and cut. She’s super conscientious about making sure I’m happy as well as making sure my hair has the proper amount of color, shade and highlights. Always knows what to suggest. I also LOVE the SOZO products! Her new assistant, Alicia , is also AMAZING!!! One of the BEST head massages with with the shampoo I’ve ever received I have been a client about 8 years. Karen is excellent but so is her staff. It is just such a pleasant experience every time I go that Im still coming here even though I moved an hour away five years ago. Karen does an amazing job with my hair! She always gives me little tips to make sure I can ‘do it myself’. I appreciate her suggestions. They are always good for me.",
  },
  {
    id: 3,
    name: "Michelle S",
    role: "Wig Specialist",
    specialty: "Custom Wig Fittings",
    rating: 5,
    image: "/landing/artists/michelleS.png",
    description: "Specialist in custom wig fittings and wig styling solutions.",
     fullDescription: "I am a Level 5 – Expert Hair Artist and Owner at SoZo HAIR by Bajon Salon & Spa. I have over 36 years of experience in the Hair Fashion Industry and am considered an expert in hair design and hair color.  I also feel the shampoo experience at a salon should be OUTSTANDING and take pride giving special care in that area. I am skilled with Hot Head Extensions, the benefits of extensions never cease to amaze me. They have come such a long way with the technology, wearing extensions, whether for length, fullness or manageability, is easier than ever before. Read this article I did to learn more about hair extensions. Tape-In Hair Extensions Prior to opening SoZo HAIR by Bajon Salon & Spa I worked for distributors and manufacturers such as Redken and Wella International as the Regional Director of Education teaching Wella product knowledge along with hair color theory and techniques to salons. I have many Management and Educational responsibilities at SoZo HAIR that ensure the salon is providing the very best service to every client who walks in the door.  Client service and satisfaction are my main priorities! My passion is for children in need.   Inside and outside of the salon, helping children any way I can is a focus. Through many fundraisers and volunteer vacations it fills my spirit to enjoy kids from here and afar! Knowing SoZo offers top quality products and that we donate shampoo/body wash to children with every sale of our shampoos and conditioners, my days are all that much more meaningful. I thank you for your support of the true meaning of “SoZo” (an ancient Greek, Biblical word that means to save, heal, deliver, protect and make whole). Client Reviews for Karen:  Karen always listens to me and then knows exactly how to give me the look I want – color and cut. She’s super conscientious about making sure I’m happy as well as making sure my hair has the proper amount of color, shade and highlights. Always knows what to suggest. I also LOVE the SOZO products! Her new assistant, Alicia , is also AMAZING!!! One of the BEST head massages with with the shampoo I’ve ever received I have been a client about 8 years. Karen is excellent but so is her staff. It is just such a pleasant experience every time I go that Im still coming here even though I moved an hour away five years ago. Karen does an amazing job with my hair! She always gives me little tips to make sure I can ‘do it myself’. I appreciate her suggestions. They are always good for me.",
  },
  {
    id: 4,
    name: "Shelly V",
    role: "Spa Therapist",
    specialty: "Wellness & Skin Care",
    rating: 5,
    image: "/landing/artists/shellyV.png",
    description: "Dedicated spa therapist focused on wellness and skin care treatments.",
   fullDescription: "I am a Level 5 – Expert Hair Artist and Owner at SoZo HAIR by Bajon Salon & Spa. I have over 36 years of experience in the Hair Fashion Industry and am considered an expert in hair design and hair color.  I also feel the shampoo experience at a salon should be OUTSTANDING and take pride giving special care in that area. I am skilled with Hot Head Extensions, the benefits of extensions never cease to amaze me. They have come such a long way with the technology, wearing extensions, whether for length, fullness or manageability, is easier than ever before. Read this article I did to learn more about hair extensions. Tape-In Hair Extensions Prior to opening SoZo HAIR by Bajon Salon & Spa I worked for distributors and manufacturers such as Redken and Wella International as the Regional Director of Education teaching Wella product knowledge along with hair color theory and techniques to salons. I have many Management and Educational responsibilities at SoZo HAIR that ensure the salon is providing the very best service to every client who walks in the door.  Client service and satisfaction are my main priorities! My passion is for children in need.   Inside and outside of the salon, helping children any way I can is a focus. Through many fundraisers and volunteer vacations it fills my spirit to enjoy kids from here and afar! Knowing SoZo offers top quality products and that we donate shampoo/body wash to children with every sale of our shampoos and conditioners, my days are all that much more meaningful. I thank you for your support of the true meaning of “SoZo” (an ancient Greek, Biblical word that means to save, heal, deliver, protect and make whole). Client Reviews for Karen:  Karen always listens to me and then knows exactly how to give me the look I want – color and cut. She’s super conscientious about making sure I’m happy as well as making sure my hair has the proper amount of color, shade and highlights. Always knows what to suggest. I also LOVE the SOZO products! Her new assistant, Alicia , is also AMAZING!!! One of the BEST head massages with with the shampoo I’ve ever received I have been a client about 8 years. Karen is excellent but so is her staff. It is just such a pleasant experience every time I go that Im still coming here even though I moved an hour away five years ago. Karen does an amazing job with my hair! She always gives me little tips to make sure I can ‘do it myself’. I appreciate her suggestions. They are always good for me.",
  },
  {
    id: 5,
    name: "Mandi F",
    role: "Lash & Brow Artist",
    specialty: "Lash Extensions",
    rating: 5,
    image: "/landing/artists/mandiF.png",
    description: "Professional lash and brow artist specializing in lash extensions.",
     fullDescription: "I am a Level 5 – Expert Hair Artist and Owner at SoZo HAIR by Bajon Salon & Spa. I have over 36 years of experience in the Hair Fashion Industry and am considered an expert in hair design and hair color.  I also feel the shampoo experience at a salon should be OUTSTANDING and take pride giving special care in that area. I am skilled with Hot Head Extensions, the benefits of extensions never cease to amaze me. They have come such a long way with the technology, wearing extensions, whether for length, fullness or manageability, is easier than ever before. Read this article I did to learn more about hair extensions. Tape-In Hair Extensions Prior to opening SoZo HAIR by Bajon Salon & Spa I worked for distributors and manufacturers such as Redken and Wella International as the Regional Director of Education teaching Wella product knowledge along with hair color theory and techniques to salons. I have many Management and Educational responsibilities at SoZo HAIR that ensure the salon is providing the very best service to every client who walks in the door.  Client service and satisfaction are my main priorities! My passion is for children in need.   Inside and outside of the salon, helping children any way I can is a focus. Through many fundraisers and volunteer vacations it fills my spirit to enjoy kids from here and afar! Knowing SoZo offers top quality products and that we donate shampoo/body wash to children with every sale of our shampoos and conditioners, my days are all that much more meaningful. I thank you for your support of the true meaning of “SoZo” (an ancient Greek, Biblical word that means to save, heal, deliver, protect and make whole). Client Reviews for Karen:  Karen always listens to me and then knows exactly how to give me the look I want – color and cut. She’s super conscientious about making sure I’m happy as well as making sure my hair has the proper amount of color, shade and highlights. Always knows what to suggest. I also LOVE the SOZO products! Her new assistant, Alicia , is also AMAZING!!! One of the BEST head massages with with the shampoo I’ve ever received I have been a client about 8 years. Karen is excellent but so is her staff. It is just such a pleasant experience every time I go that Im still coming here even though I moved an hour away five years ago. Karen does an amazing job with my hair! She always gives me little tips to make sure I can ‘do it myself’. I appreciate her suggestions. They are always good for me.",
  },
  {
    id: 6,
    name: "Kaylinn R.",
    role: "Bridal Specialist",
    specialty: "Special Events",
    rating: 5,
    image: "/landing/artists/KaylinnR.png",
    description: "Bridal specialist creating stunning looks for special events and weddings.",
    fullDescription: "I am a Level 5 – Expert Hair Artist and Owner at SoZo HAIR by Bajon Salon & Spa. I have over 36 years of experience in the Hair Fashion Industry and am considered an expert in hair design and hair color.  I also feel the shampoo experience at a salon should be OUTSTANDING and take pride giving special care in that area. I am skilled with Hot Head Extensions, the benefits of extensions never cease to amaze me. They have come such a long way with the technology, wearing extensions, whether for length, fullness or manageability, is easier than ever before. Read this article I did to learn more about hair extensions. Tape-In Hair Extensions Prior to opening SoZo HAIR by Bajon Salon & Spa I worked for distributors and manufacturers such as Redken and Wella International as the Regional Director of Education teaching Wella product knowledge along with hair color theory and techniques to salons. I have many Management and Educational responsibilities at SoZo HAIR that ensure the salon is providing the very best service to every client who walks in the door.  Client service and satisfaction are my main priorities! My passion is for children in need.   Inside and outside of the salon, helping children any way I can is a focus. Through many fundraisers and volunteer vacations it fills my spirit to enjoy kids from here and afar! Knowing SoZo offers top quality products and that we donate shampoo/body wash to children with every sale of our shampoos and conditioners, my days are all that much more meaningful. I thank you for your support of the true meaning of “SoZo” (an ancient Greek, Biblical word that means to save, heal, deliver, protect and make whole). Client Reviews for Karen:  Karen always listens to me and then knows exactly how to give me the look I want – color and cut. She’s super conscientious about making sure I’m happy as well as making sure my hair has the proper amount of color, shade and highlights. Always knows what to suggest. I also LOVE the SOZO products! Her new assistant, Alicia , is also AMAZING!!! One of the BEST head massages with with the shampoo I’ve ever received I have been a client about 8 years. Karen is excellent but so is her staff. It is just such a pleasant experience every time I go that Im still coming here even though I moved an hour away five years ago. Karen does an amazing job with my hair! She always gives me little tips to make sure I can ‘do it myself’. I appreciate her suggestions. They are always good for me.",
  },
  {
    id: 7,
    name: "Damaris P.",
    role: "Hair Stylist",
    specialty: "Cuts & Color",
    rating: 5,
    image: "/landing/artists/DamarisP.png",
    description: "Talented hair stylist with a passion for cuts and color transformations.",
     fullDescription: "I am a Level 5 – Expert Hair Artist and Owner at SoZo HAIR by Bajon Salon & Spa. I have over 36 years of experience in the Hair Fashion Industry and am considered an expert in hair design and hair color.  I also feel the shampoo experience at a salon should be OUTSTANDING and take pride giving special care in that area. I am skilled with Hot Head Extensions, the benefits of extensions never cease to amaze me. They have come such a long way with the technology, wearing extensions, whether for length, fullness or manageability, is easier than ever before. Read this article I did to learn more about hair extensions. Tape-In Hair Extensions Prior to opening SoZo HAIR by Bajon Salon & Spa I worked for distributors and manufacturers such as Redken and Wella International as the Regional Director of Education teaching Wella product knowledge along with hair color theory and techniques to salons. I have many Management and Educational responsibilities at SoZo HAIR that ensure the salon is providing the very best service to every client who walks in the door.  Client service and satisfaction are my main priorities! My passion is for children in need.   Inside and outside of the salon, helping children any way I can is a focus. Through many fundraisers and volunteer vacations it fills my spirit to enjoy kids from here and afar! Knowing SoZo offers top quality products and that we donate shampoo/body wash to children with every sale of our shampoos and conditioners, my days are all that much more meaningful. I thank you for your support of the true meaning of “SoZo” (an ancient Greek, Biblical word that means to save, heal, deliver, protect and make whole). Client Reviews for Karen:  Karen always listens to me and then knows exactly how to give me the look I want – color and cut. She’s super conscientious about making sure I’m happy as well as making sure my hair has the proper amount of color, shade and highlights. Always knows what to suggest. I also LOVE the SOZO products! Her new assistant, Alicia , is also AMAZING!!! One of the BEST head massages with with the shampoo I’ve ever received I have been a client about 8 years. Karen is excellent but so is her staff. It is just such a pleasant experience every time I go that Im still coming here even though I moved an hour away five years ago. Karen does an amazing job with my hair! She always gives me little tips to make sure I can ‘do it myself’. I appreciate her suggestions. They are always good for me.",
  },
  {
    id: 8,
    name: "Elise H.",
    role: "Makeup Artist",
    specialty: "Special Occasions",
    rating: 5,
    image: "/landing/artists/Eliseh.png",
    description: "Creative makeup artist specializing in glamorous special occasion looks.",
    fullDescription: "I am a Level 5 – Expert Hair Artist and Owner at SoZo HAIR by Bajon Salon & Spa. I have over 36 years of experience in the Hair Fashion Industry and am considered an expert in hair design and hair color.  I also feel the shampoo experience at a salon should be OUTSTANDING and take pride giving special care in that area. I am skilled with Hot Head Extensions, the benefits of extensions never cease to amaze me. They have come such a long way with the technology, wearing extensions, whether for length, fullness or manageability, is easier than ever before. Read this article I did to learn more about hair extensions. Tape-In Hair Extensions Prior to opening SoZo HAIR by Bajon Salon & Spa I worked for distributors and manufacturers such as Redken and Wella International as the Regional Director of Education teaching Wella product knowledge along with hair color theory and techniques to salons. I have many Management and Educational responsibilities at SoZo HAIR that ensure the salon is providing the very best service to every client who walks in the door.  Client service and satisfaction are my main priorities! My passion is for children in need.   Inside and outside of the salon, helping children any way I can is a focus. Through many fundraisers and volunteer vacations it fills my spirit to enjoy kids from here and afar! Knowing SoZo offers top quality products and that we donate shampoo/body wash to children with every sale of our shampoos and conditioners, my days are all that much more meaningful. I thank you for your support of the true meaning of “SoZo” (an ancient Greek, Biblical word that means to save, heal, deliver, protect and make whole). Client Reviews for Karen:  Karen always listens to me and then knows exactly how to give me the look I want – color and cut. She’s super conscientious about making sure I’m happy as well as making sure my hair has the proper amount of color, shade and highlights. Always knows what to suggest. I also LOVE the SOZO products! Her new assistant, Alicia , is also AMAZING!!! One of the BEST head massages with with the shampoo I’ve ever received I have been a client about 8 years. Karen is excellent but so is her staff. It is just such a pleasant experience every time I go that Im still coming here even though I moved an hour away five years ago. Karen does an amazing job with my hair! She always gives me little tips to make sure I can ‘do it myself’. I appreciate her suggestions. They are always good for me.",
     
  },

  {
    id: 9,
    name: "Noemi Ramirez-Perez",
    role: "Bridal Specialist",
    specialty: "Special Events",
    rating: 5,
    image: "/landing/artists/noemi-ramirez-perez.png",
    description: "Experienced bridal specialist delivering beautiful looks for special events.",
     fullDescription: "I am a Level 5 – Expert Hair Artist and Owner at SoZo HAIR by Bajon Salon & Spa. I have over 36 years of experience in the Hair Fashion Industry and am considered an expert in hair design and hair color.  I also feel the shampoo experience at a salon should be OUTSTANDING and take pride giving special care in that area. I am skilled with Hot Head Extensions, the benefits of extensions never cease to amaze me. They have come such a long way with the technology, wearing extensions, whether for length, fullness or manageability, is easier than ever before. Read this article I did to learn more about hair extensions. Tape-In Hair Extensions Prior to opening SoZo HAIR by Bajon Salon & Spa I worked for distributors and manufacturers such as Redken and Wella International as the Regional Director of Education teaching Wella product knowledge along with hair color theory and techniques to salons. I have many Management and Educational responsibilities at SoZo HAIR that ensure the salon is providing the very best service to every client who walks in the door.  Client service and satisfaction are my main priorities! My passion is for children in need.   Inside and outside of the salon, helping children any way I can is a focus. Through many fundraisers and volunteer vacations it fills my spirit to enjoy kids from here and afar! Knowing SoZo offers top quality products and that we donate shampoo/body wash to children with every sale of our shampoos and conditioners, my days are all that much more meaningful. I thank you for your support of the true meaning of “SoZo” (an ancient Greek, Biblical word that means to save, heal, deliver, protect and make whole). Client Reviews for Karen:  Karen always listens to me and then knows exactly how to give me the look I want – color and cut. She’s super conscientious about making sure I’m happy as well as making sure my hair has the proper amount of color, shade and highlights. Always knows what to suggest. I also LOVE the SOZO products! Her new assistant, Alicia , is also AMAZING!!! One of the BEST head massages with with the shampoo I’ve ever received I have been a client about 8 years. Karen is excellent but so is her staff. It is just such a pleasant experience every time I go that Im still coming here even though I moved an hour away five years ago. Karen does an amazing job with my hair! She always gives me little tips to make sure I can ‘do it myself’. I appreciate her suggestions. They are always good for me.",
  },

  {
    id: 10,
    name: "Kearney",
    role: "Hair Stylist",
    specialty: "Cuts & Color",
    rating: 5,
    image: "/landing/artists/kearney.png",
    description: "Skilled hair stylist specializing in precision cuts and vibrant color.",
    fullDescription: "I am a Level 5 – Expert Hair Artist and Owner at SoZo HAIR by Bajon Salon & Spa. I have over 36 years of experience in the Hair Fashion Industry and am considered an expert in hair design and hair color.  I also feel the shampoo experience at a salon should be OUTSTANDING and take pride giving special care in that area. I am skilled with Hot Head Extensions, the benefits of extensions never cease to amaze me. They have come such a long way with the technology, wearing extensions, whether for length, fullness or manageability, is easier than ever before. Read this article I did to learn more about hair extensions. Tape-In Hair Extensions Prior to opening SoZo HAIR by Bajon Salon & Spa I worked for distributors and manufacturers such as Redken and Wella International as the Regional Director of Education teaching Wella product knowledge along with hair color theory and techniques to salons. I have many Management and Educational responsibilities at SoZo HAIR that ensure the salon is providing the very best service to every client who walks in the door.  Client service and satisfaction are my main priorities! My passion is for children in need.   Inside and outside of the salon, helping children any way I can is a focus. Through many fundraisers and volunteer vacations it fills my spirit to enjoy kids from here and afar! Knowing SoZo offers top quality products and that we donate shampoo/body wash to children with every sale of our shampoos and conditioners, my days are all that much more meaningful. I thank you for your support of the true meaning of “SoZo” (an ancient Greek, Biblical word that means to save, heal, deliver, protect and make whole). Client Reviews for Karen:  Karen always listens to me and then knows exactly how to give me the look I want – color and cut. She’s super conscientious about making sure I’m happy as well as making sure my hair has the proper amount of color, shade and highlights. Always knows what to suggest. I also LOVE the SOZO products! Her new assistant, Alicia , is also AMAZING!!! One of the BEST head massages with with the shampoo I’ve ever received I have been a client about 8 years. Karen is excellent but so is her staff. It is just such a pleasant experience every time I go that Im still coming here even though I moved an hour away five years ago. Karen does an amazing job with my hair! She always gives me little tips to make sure I can ‘do it myself’. I appreciate her suggestions. They are always good for me.",
  },
];

export interface Artist {
  id: number;
  name: string;
  role: string;
  specialty: string;
  rating: number;
  image: string;
  description: string;
  fullDescription: string;
}

interface StarRatingProps {
  rating: number;
  size?: number;
}

function StarRating({ rating, size = 14 }: StarRatingProps) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 14 14" fill={i < rating ? "#C4956A" : "#444"}>
          <path d="M7 1l1.545 3.13L12 4.635l-2.5 2.435.59 3.44L7 8.885l-3.09 1.625.59-3.44L2 4.635l3.455-.505z" />
        </svg>
      ))}
    </div>
  );
}

interface ArtistCardProps {
  artist: Artist;
  onClick: (artist: Artist) => void;
}

export function ArtistCard({ artist, onClick }: ArtistCardProps) {
  return (
    <div
      onClick={() => onClick(artist)}
      className="relative overflow-hidden rounded-2xl cursor-pointer group"
      style={{ aspectRatio: "3/4" }}
    >
      <Image
        src={artist.image}
        alt={artist.name}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
      />

      {/* Default bottom gradient */}
      <div
        className="absolute inset-0 transition-opacity duration-400 group-hover:opacity-0"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 40%, transparent 70%)",
        }}
      />

      {/* Default bottom info */}
      <div className="absolute bottom-0 left-0 right-0 p-5 transition-opacity duration-300 group-hover:opacity-0">
        <StarRating rating={artist.rating} />
        <h3 className="text-white font-semibold text-lg mt-1">{artist.name}</h3>
        <p className="text-[#C4956A] text-xs uppercase tracking-wider font-medium">{artist.role}</p>
        <p className="text-white/70 text-xs uppercase tracking-wider mt-0.5">{artist.specialty}</p>
      </div>

      {/* Hover overlay */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={{ background: "rgba(0,0,0,0.72)" }}
      >
        <StarRating rating={artist.rating} />
        <h3 className="text-white font-bold text-xl text-center px-4">{artist.name}</h3>
        <p className="text-[#C4956A] text-xs uppercase tracking-widest font-semibold">{artist.role}</p>
        <div className="w-8 h-px mt-1" style={{ backgroundColor: "#C4956A" }} />
        <p className="text-white/80 text-xs uppercase tracking-wider">{artist.specialty}</p>
        <span className="mt-2 text-xs text-white/50 border border-white/20 rounded-full px-3 py-1">
          View Profile
        </span>
      </div>
    </div>
  );
}

export default function Artists({ isStandalonePage = false }: { isStandalonePage?: boolean }) {
  const [showAll] = useState(isStandalonePage);
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);
  const router = useRouter();

  const visibleArtists = showAll ? artists : artists.slice(0, 6);

  // Show detail page when artist selected
  if (selectedArtist) {
    return (
      <ArtistDetailPage
        artist={selectedArtist}
        onBack={() => setSelectedArtist(null)}
        onSelectArtist={setSelectedArtist}
      />
    );
  }

  return (
    <section className="w-full py-24 md:py-32" style={{ backgroundColor: "#FDF9F5" }}>
      <div className="max-w-[var(--container-max-width,1200px)] mx-auto px-5 sm:px-8 lg:px-10 flex flex-col items-center gap-14">

        {/* Header */}
        <div className={`flex flex-col gap-4 ${isStandalonePage ? 'items-start text-left w-full' : 'items-center text-center'}`}>
          {!isStandalonePage && (
            <span className="text-[13px] font-medium tracking-[3px] uppercase text-[#C4956A]">
              Meet Our Experts
            </span>
          )}
          <h2
            className="text-4xl md:text-[42px] font-semibold text-[#2D2D2D] leading-[1.2]"
            style={{ fontFamily: "var(--font-playfair, serif)" }}
          >
            {isStandalonePage ? "Relax, you're in good hands" : "The Artists Behind Your Look"}
          </h2>
          <p className={`text-[#666] text-[15px] leading-[1.8] mt-1 ${isStandalonePage ? 'max-w-xl text-left' : 'max-w-md text-center'}`}>
            Our passionate team of beauty professionals is dedicated to making you look and feel your absolute best with expert care and artistry.
          </p>
          {!isStandalonePage && (
            <div className="w-[60px] h-0.5 bg-[#C4956A] mt-2 rounded-[1px]" />
          )}
          {isStandalonePage && (
            <Link
              href="/booking"
              className="mt-4 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-white font-medium text-[15px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(212,165,154,0.35)] no-underline"
              style={{ backgroundColor: "#D4A59A" }}
            >
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                <rect x="2" y="3" width="12" height="11" rx="1.5" stroke="white" strokeWidth="1.4"/>
                <path d="M5 2v2M11 2v2M2 7h12" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
              Book Your Appointment
            </Link>
          )}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
          {visibleArtists.map((artist) => (
            <ArtistCard
              key={artist.id}
              artist={artist}
              onClick={(a) => {
                if (isStandalonePage) {
                  setSelectedArtist(a);
                } else {
                  router.push("/teams");
                }
              }}
            />
          ))}
        </div>

        {/* CTA Button */}
        {!isStandalonePage && (
          <Link
            href="/teams"
            className="mt-4 inline-flex items-center justify-center px-9 py-3.5 text-white rounded-md text-[15px] font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(196,149,106,0.3)] no-underline"
            style={{ backgroundColor: "#C4956A" }}
          >
            Meet the Full Team
          </Link>
        )}
      </div>
    </section>
  );
}
