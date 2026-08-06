'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ChevronLeft,
  ChevronRight,
  X,
  Sparkles,
  Heart,
  Camera,
  Search,
  Grid,
  Maximize2,
  Calendar,
  MapPin,
  Users
} from 'lucide-react';
import Navbar from '@/components/shared/Navbar/Navbar';
import Footer from '@/components/shared/Footer/Footer';

// Array of all 144 fundraiser gallery images from /fundraiser
const FUNDRAISER_IMAGES = [
  // Labeled Featured Photos
  { src: '/fundraiser/Mark & Karen Before (Medium).jpg', title: 'Mark & Karen Before Getting Shaved', category: 'featured' },
  { src: '/fundraiser/Mark and Karen After Getting Shaved (Medium).jpg', title: 'Mark & Karen After Getting Shaved', category: 'featured' },
  { src: '/fundraiser/Our Honored Guest Destiny - Cancer Survivor (Medium).jpg', title: 'Honored Guest Destiny - Cancer Survivor', category: 'featured' },
  { src: '/fundraiser/Olivia Getting Shaved for her Dad (Medium).jpg', title: 'Olivia Getting Shaved for Her Dad', category: 'featured' },
  { src: '/fundraiser/Olivia Overcome with Emotion  (Medium).jpg', title: 'Olivia Overcome with Emotion', category: 'featured' },
  { src: '/fundraiser/Josh and Lisa with Olivia a very brave Volunteer (Medium).jpg', title: 'Josh & Lisa with Olivia - Brave Volunteer', category: 'featured' },
  { src: '/fundraiser/Josh and a very brave Shavee Volunteer (Medium).jpg', title: 'Josh with Shavee Volunteer', category: 'featured' },
  { src: '/fundraiser/Karen and Bootsy (Medium).jpg', title: 'Karen & Bootsy', category: 'featured' },
  { src: '/fundraiser/Mark Bootsy and Lee (Medium).jpg', title: 'Mark, Bootsy & Lee', category: 'featured' },
  { src: '/fundraiser/Bootsy taking his first swipe (Medium).jpg', title: 'Bootsy Taking His First Swipe', category: 'featured' },
  { src: '/fundraiser/Destinys Mom Watching Karen (Medium).jpg', title: "Destiny's Mom Watching Karen", category: 'featured' },
  { src: '/fundraiser/Everybody Watching (Medium).jpg', title: 'Community Supporters Watching', category: 'featured' },
  { src: '/fundraiser/Grilling Out (Medium).jpg', title: 'Community BBQ & Grilling Out', category: 'featured' },
  { src: '/fundraiser/Our Friends and Supporters (Medium).jpg', title: 'Friends & Supporters', category: 'featured' },
  { src: '/fundraiser/Rich Nesbitt and the Metro-City Allstars Volunteering (Medium).jpg', title: 'Rich Nesbitt & Metro-City Allstars', category: 'featured' },
  { src: '/fundraiser/Shaving Four of Our Heroes (Medium).jpg', title: 'Shaving Four of Our Heroes', category: 'featured' },
  { src: '/fundraiser/Some of West Chesters Finest (Medium).jpg', title: "West Chester's Finest", category: 'featured' },
  { src: '/fundraiser/Waiting for the Shaving to Begin (Medium).jpg', title: 'Waiting for Shaving to Begin', category: 'featured' },

  // Numbered Gallery Photos
  { src: '/fundraiser/002 (Medium).jpg', title: "St. Baldrick's Event Photo #2", category: 'gallery' },
  { src: '/fundraiser/003 (Medium).jpg', title: "St. Baldrick's Event Photo #3", category: 'gallery' },
  { src: '/fundraiser/027 (Medium).jpg', title: "St. Baldrick's Event Photo #27", category: 'gallery' },
  { src: '/fundraiser/038 (Medium).jpg', title: "St. Baldrick's Event Photo #38", category: 'gallery' },
  { src: '/fundraiser/042 (Medium).jpg', title: "St. Baldrick's Event Photo #42", category: 'gallery' },
  { src: '/fundraiser/043 (Medium).jpg', title: "St. Baldrick's Event Photo #43", category: 'gallery' },
  { src: '/fundraiser/046 (Medium).jpg', title: "St. Baldrick's Event Photo #46", category: 'gallery' },
  { src: '/fundraiser/048 (Medium).jpg', title: "St. Baldrick's Event Photo #48", category: 'gallery' },
  { src: '/fundraiser/054 (Medium).jpg', title: "St. Baldrick's Event Photo #54", category: 'gallery' },
  { src: '/fundraiser/055 (Medium).jpg', title: "St. Baldrick's Event Photo #55", category: 'gallery' },
  { src: '/fundraiser/056 (Medium).jpg', title: "St. Baldrick's Event Photo #56", category: 'gallery' },
  { src: '/fundraiser/061 (Medium).jpg', title: "St. Baldrick's Event Photo #61", category: 'gallery' },
  { src: '/fundraiser/062 (Medium).jpg', title: "St. Baldrick's Event Photo #62", category: 'gallery' },
  { src: '/fundraiser/064 (Medium).jpg', title: "St. Baldrick's Event Photo #64", category: 'gallery' },
  { src: '/fundraiser/065 (Medium).jpg', title: "St. Baldrick's Event Photo #65", category: 'gallery' },
  { src: '/fundraiser/067 (Medium).jpg', title: "St. Baldrick's Event Photo #67", category: 'gallery' },
  { src: '/fundraiser/070 (Medium).jpg', title: "St. Baldrick's Event Photo #70", category: 'gallery' },
  { src: '/fundraiser/071 (Medium).jpg', title: "St. Baldrick's Event Photo #71", category: 'gallery' },
  { src: '/fundraiser/077 (Medium).jpg', title: "St. Baldrick's Event Photo #77", category: 'gallery' },
  { src: '/fundraiser/078 (Medium).jpg', title: "St. Baldrick's Event Photo #78", category: 'gallery' },
  { src: '/fundraiser/080 (Medium).jpg', title: "St. Baldrick's Event Photo #80", category: 'gallery' },
  { src: '/fundraiser/081 (Medium).jpg', title: "St. Baldrick's Event Photo #81", category: 'gallery' },
  { src: '/fundraiser/082 (Medium).jpg', title: "St. Baldrick's Event Photo #82", category: 'gallery' },
  { src: '/fundraiser/088 (Medium).jpg', title: "St. Baldrick's Event Photo #88", category: 'gallery' },
  { src: '/fundraiser/101 (Medium).jpg', title: "St. Baldrick's Event Photo #101", category: 'gallery' },
  { src: '/fundraiser/104 (Medium).jpg', title: "St. Baldrick's Event Photo #104", category: 'gallery' },
  { src: '/fundraiser/109 (Medium).jpg', title: "St. Baldrick's Event Photo #109", category: 'gallery' },
  { src: '/fundraiser/110 (Medium).jpg', title: "St. Baldrick's Event Photo #110", category: 'gallery' },
  { src: '/fundraiser/112 (Medium).jpg', title: "St. Baldrick's Event Photo #112", category: 'gallery' },
  { src: '/fundraiser/113 (Medium).jpg', title: "St. Baldrick's Event Photo #113", category: 'gallery' },
  { src: '/fundraiser/114 (Medium).jpg', title: "St. Baldrick's Event Photo #114", category: 'gallery' },
  { src: '/fundraiser/115 (Medium).jpg', title: "St. Baldrick's Event Photo #115", category: 'gallery' },
  { src: '/fundraiser/116 (Medium).jpg', title: "St. Baldrick's Event Photo #116", category: 'gallery' },
  { src: '/fundraiser/117 (Medium).jpg', title: "St. Baldrick's Event Photo #117", category: 'gallery' },
  { src: '/fundraiser/120 (Medium).jpg', title: "St. Baldrick's Event Photo #120", category: 'gallery' },
  { src: '/fundraiser/121 (Medium).jpg', title: "St. Baldrick's Event Photo #121", category: 'gallery' },
  { src: '/fundraiser/123 (Medium).jpg', title: "St. Baldrick's Event Photo #123", category: 'gallery' },
  { src: '/fundraiser/125 (Medium).jpg', title: "St. Baldrick's Event Photo #125", category: 'gallery' },
  { src: '/fundraiser/126 (Medium).jpg', title: "St. Baldrick's Event Photo #126", category: 'gallery' },
  { src: '/fundraiser/127 (Medium).jpg', title: "St. Baldrick's Event Photo #127", category: 'gallery' },
  { src: '/fundraiser/128 (Medium).jpg', title: "St. Baldrick's Event Photo #128", category: 'gallery' },
  { src: '/fundraiser/131 (Medium).jpg', title: "St. Baldrick's Event Photo #131", category: 'gallery' },
  { src: '/fundraiser/133 (Medium).jpg', title: "St. Baldrick's Event Photo #133", category: 'gallery' },
  { src: '/fundraiser/135 (Medium).jpg', title: "St. Baldrick's Event Photo #135", category: 'gallery' },
  { src: '/fundraiser/136 (Medium).jpg', title: "St. Baldrick's Event Photo #136", category: 'gallery' },
  { src: '/fundraiser/137 (Medium).jpg', title: "St. Baldrick's Event Photo #137", category: 'gallery' },
  { src: '/fundraiser/138 (Medium).jpg', title: "St. Baldrick's Event Photo #138", category: 'gallery' },
  { src: '/fundraiser/139 (Medium).jpg', title: "St. Baldrick's Event Photo #139", category: 'gallery' },
  { src: '/fundraiser/142 (Medium).jpg', title: "St. Baldrick's Event Photo #142", category: 'gallery' },
  { src: '/fundraiser/143 (Medium).jpg', title: "St. Baldrick's Event Photo #143", category: 'gallery' },
  { src: '/fundraiser/144 (Medium).jpg', title: "St. Baldrick's Event Photo #144", category: 'gallery' },
  { src: '/fundraiser/145 (Medium).jpg', title: "St. Baldrick's Event Photo #145", category: 'gallery' },
  { src: '/fundraiser/148 (Medium).jpg', title: "St. Baldrick's Event Photo #148", category: 'gallery' },
  { src: '/fundraiser/150 (Medium).jpg', title: "St. Baldrick's Event Photo #150", category: 'gallery' },
  { src: '/fundraiser/151 (Medium).jpg', title: "St. Baldrick's Event Photo #151", category: 'gallery' },
  { src: '/fundraiser/153 (Medium).jpg', title: "St. Baldrick's Event Photo #153", category: 'gallery' },
  { src: '/fundraiser/156 (Medium).jpg', title: "St. Baldrick's Event Photo #156", category: 'gallery' },
  { src: '/fundraiser/157 (Medium).jpg', title: "St. Baldrick's Event Photo #157", category: 'gallery' },
  { src: '/fundraiser/158 (Medium).jpg', title: "St. Baldrick's Event Photo #158", category: 'gallery' },
  { src: '/fundraiser/165 (Medium).jpg', title: "St. Baldrick's Event Photo #165", category: 'gallery' },
  { src: '/fundraiser/166 (Medium).jpg', title: "St. Baldrick's Event Photo #166", category: 'gallery' },
  { src: '/fundraiser/167 (Medium).jpg', title: "St. Baldrick's Event Photo #167", category: 'gallery' },
  { src: '/fundraiser/168 (Medium).jpg', title: "St. Baldrick's Event Photo #168", category: 'gallery' },
  { src: '/fundraiser/169 (Medium).jpg', title: "St. Baldrick's Event Photo #169", category: 'gallery' },
  { src: '/fundraiser/170 (Medium).jpg', title: "St. Baldrick's Event Photo #170", category: 'gallery' },
  { src: '/fundraiser/171 (Medium).jpg', title: "St. Baldrick's Event Photo #171", category: 'gallery' },
  { src: '/fundraiser/173 (Medium).jpg', title: "St. Baldrick's Event Photo #173", category: 'gallery' },
  { src: '/fundraiser/174 (Medium).jpg', title: "St. Baldrick's Event Photo #174", category: 'gallery' },
  { src: '/fundraiser/175 (Medium).jpg', title: "St. Baldrick's Event Photo #175", category: 'gallery' },
  { src: '/fundraiser/177 (Medium).jpg', title: "St. Baldrick's Event Photo #177", category: 'gallery' },
  { src: '/fundraiser/179 (Medium).jpg', title: "St. Baldrick's Event Photo #179", category: 'gallery' },
  { src: '/fundraiser/183 (Medium).jpg', title: "St. Baldrick's Event Photo #183", category: 'gallery' },
  { src: '/fundraiser/185 (Medium).jpg', title: "St. Baldrick's Event Photo #185", category: 'gallery' },
  { src: '/fundraiser/187 (Medium).jpg', title: "St. Baldrick's Event Photo #187", category: 'gallery' },
  { src: '/fundraiser/189 (Medium).jpg', title: "St. Baldrick's Event Photo #189", category: 'gallery' },
  { src: '/fundraiser/190 (Medium).jpg', title: "St. Baldrick's Event Photo #190", category: 'gallery' },
  { src: '/fundraiser/193 (Medium).jpg', title: "St. Baldrick's Event Photo #193", category: 'gallery' },
  { src: '/fundraiser/194 (Medium).jpg', title: "St. Baldrick's Event Photo #194", category: 'gallery' },
  { src: '/fundraiser/195 (Medium).jpg', title: "St. Baldrick's Event Photo #195", category: 'gallery' },
  { src: '/fundraiser/196 (Medium).jpg', title: "St. Baldrick's Event Photo #196", category: 'gallery' },
  { src: '/fundraiser/197 (Medium).jpg', title: "St. Baldrick's Event Photo #197", category: 'gallery' },
  { src: '/fundraiser/198 (Medium).jpg', title: "St. Baldrick's Event Photo #198", category: 'gallery' },
  { src: '/fundraiser/200 (Medium).jpg', title: "St. Baldrick's Event Photo #200", category: 'gallery' },
  { src: '/fundraiser/202 (Medium).jpg', title: "St. Baldrick's Event Photo #202", category: 'gallery' },
  { src: '/fundraiser/204 (Medium).jpg', title: "St. Baldrick's Event Photo #204", category: 'gallery' },
  { src: '/fundraiser/205 (Medium).jpg', title: "St. Baldrick's Event Photo #205", category: 'gallery' },
  { src: '/fundraiser/206 (Medium).jpg', title: "St. Baldrick's Event Photo #206", category: 'gallery' },
  { src: '/fundraiser/207 (Medium).jpg', title: "St. Baldrick's Event Photo #207", category: 'gallery' },
  { src: '/fundraiser/208 (Medium).jpg', title: "St. Baldrick's Event Photo #208", category: 'gallery' },
  { src: '/fundraiser/209 (Medium).jpg', title: "St. Baldrick's Event Photo #209", category: 'gallery' },
  { src: '/fundraiser/210 (Medium).jpg', title: "St. Baldrick's Event Photo #210", category: 'gallery' },
  { src: '/fundraiser/211 (Medium).jpg', title: "St. Baldrick's Event Photo #211", category: 'gallery' },
  { src: '/fundraiser/212 (Medium).jpg', title: "St. Baldrick's Event Photo #212", category: 'gallery' },
  { src: '/fundraiser/213 (Medium).jpg', title: "St. Baldrick's Event Photo #213", category: 'gallery' },
  { src: '/fundraiser/215 (Medium).jpg', title: "St. Baldrick's Event Photo #215", category: 'gallery' },
  { src: '/fundraiser/218 (Medium).jpg', title: "St. Baldrick's Event Photo #218", category: 'gallery' },
  { src: '/fundraiser/220 (Medium).jpg', title: "St. Baldrick's Event Photo #220", category: 'gallery' },
  { src: '/fundraiser/221 (Medium).jpg', title: "St. Baldrick's Event Photo #221", category: 'gallery' },
  { src: '/fundraiser/223 (Medium).jpg', title: "St. Baldrick's Event Photo #223", category: 'gallery' },
  { src: '/fundraiser/224 (Medium).jpg', title: "St. Baldrick's Event Photo #224", category: 'gallery' },
  { src: '/fundraiser/225 (Medium).jpg', title: "St. Baldrick's Event Photo #225", category: 'gallery' },
  { src: '/fundraiser/227 (Medium).jpg', title: "St. Baldrick's Event Photo #227", category: 'gallery' },
  { src: '/fundraiser/228 (Medium).jpg', title: "St. Baldrick's Event Photo #228", category: 'gallery' },
  { src: '/fundraiser/230 (Medium).jpg', title: "St. Baldrick's Event Photo #230", category: 'gallery' },
  { src: '/fundraiser/234 (Medium).jpg', title: "St. Baldrick's Event Photo #234", category: 'gallery' },
  { src: '/fundraiser/236 (Medium).jpg', title: "St. Baldrick's Event Photo #236", category: 'gallery' },
  { src: '/fundraiser/238 (Medium).jpg', title: "St. Baldrick's Event Photo #238", category: 'gallery' },
  { src: '/fundraiser/239 (Medium).jpg', title: "St. Baldrick's Event Photo #239", category: 'gallery' },
  { src: '/fundraiser/242 (Medium).jpg', title: "St. Baldrick's Event Photo #242", category: 'gallery' },
  { src: '/fundraiser/243 (Medium).jpg', title: "St. Baldrick's Event Photo #243", category: 'gallery' },
  { src: '/fundraiser/244 (Medium).jpg', title: "St. Baldrick's Event Photo #244", category: 'gallery' },
  { src: '/fundraiser/245 (Medium).jpg', title: "St. Baldrick's Event Photo #245", category: 'gallery' },
  { src: '/fundraiser/246 (Medium).jpg', title: "St. Baldrick's Event Photo #246", category: 'gallery' },
  { src: '/fundraiser/247 (Medium).jpg', title: "St. Baldrick's Event Photo #247", category: 'gallery' },
  { src: '/fundraiser/249 (Medium).jpg', title: "St. Baldrick's Event Photo #249", category: 'gallery' },
  { src: '/fundraiser/250 (Medium).jpg', title: "St. Baldrick's Event Photo #250", category: 'gallery' },
  { src: '/fundraiser/251 (Medium).jpg', title: "St. Baldrick's Event Photo #251", category: 'gallery' },
  { src: '/fundraiser/252 (Medium).jpg', title: "St. Baldrick's Event Photo #252", category: 'gallery' },
  { src: '/fundraiser/253 (Medium).jpg', title: "St. Baldrick's Event Photo #253", category: 'gallery' },
  { src: '/fundraiser/254 (Medium).jpg', title: "St. Baldrick's Event Photo #254", category: 'gallery' },
  { src: '/fundraiser/255 (Medium).jpg', title: "St. Baldrick's Event Photo #255", category: 'gallery' },
  { src: '/fundraiser/256 (Medium).jpg', title: "St. Baldrick's Event Photo #256", category: 'gallery' },
  { src: '/fundraiser/257 (Medium).jpg', title: "St. Baldrick's Event Photo #257", category: 'gallery' },
  { src: '/fundraiser/258 (Medium).jpg', title: "St. Baldrick's Event Photo #258", category: 'gallery' },
  { src: '/fundraiser/259 (Medium).jpg', title: "St. Baldrick's Event Photo #259", category: 'gallery' },
  { src: '/fundraiser/260 (Medium).jpg', title: "St. Baldrick's Event Photo #260", category: 'gallery' },
];

export default function StBaldricks2009Page() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'featured' | 'gallery'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(36);

  // Filter photos
  const filteredPhotos = useMemo(() => {
    return FUNDRAISER_IMAGES.filter((photo) => {
      const matchesCategory = selectedCategory === 'all' || photo.category === selectedCategory;
      const matchesSearch = photo.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const visiblePhotos = useMemo(() => {
    return filteredPhotos.slice(0, visibleCount);
  }, [filteredPhotos, visibleCount]);

  const handleNextLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev < filteredPhotos.length - 1 ? prev + 1 : 0));
  };

  const handlePrevLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredPhotos.length - 1));
  };

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#2D2D2D]">
      <Navbar />

      <div className="pt-[130px] sm:pt-[150px] md:pt-[160px] lg:pt-[170px] pb-20 px-4 sm:px-5 md:px-8 max-w-[var(--container-max-width)] mx-auto space-y-10">

        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between border-b border-[#EADCC9] pb-4">
          <Link
            href="/galleries"
            className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#D4A59A] hover:text-[#2C1F2D] transition-colors no-underline group"
          >
            <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Galleries</span>
          </Link>

          <span className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-1.5">
            <Heart className="w-3.5 h-3.5 text-[#D4A59A] fill-[#D4A59A]" />
            <span>SoZo Community Care</span>
          </span>
        </div>

        {/* Hero Header Section */}
        <header className="space-y-6 text-center sm:text-left py-2">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDF8F4] border border-[#EADCC9] text-xs font-bold text-[#D4A59A] uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>St. Baldrick's Foundation Fundraiser</span>
            </div>

            <div className="flex items-center gap-4 text-xs font-semibold text-gray-500">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#D4A59A]" />
                <span>West Chester, Ohio</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Camera className="w-3.5 h-3.5 text-[#D4A59A]" />
                <span>{FUNDRAISER_IMAGES.length} Event Photos</span>
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#2C1F2D] leading-tight font-[family-name:var(--font-playfair)]">
              St Baldrick’s Fundraiser at Bajon Salon (SoZo HAIR)
            </h1>
            <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed max-w-4xl">
              Celebrating our heroic volunteers, shavees, and supporters who joined together at Bajon Salon (SoZo HAIR) in West Chester to shave their heads and raise funds for childhood cancer research through the St. Baldrick’s Foundation.
            </p>
          </div>
        </header>

        {/* Gallery Controls & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[#EADCC9] pb-6">

          {/* Category Tabs */}
          <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all shrink-0 ${selectedCategory === 'all'
                  ? 'bg-[#D4A59A] text-white shadow-xs'
                  : 'bg-[#FDF8F4] text-[#2C1F2D] border border-[#EADCC9] hover:border-[#D4A59A] hover:bg-[#FAF7F2]'
                }`}
            >
              All Photos
            </button>
            <button
              onClick={() => setSelectedCategory('featured')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all shrink-0 ${selectedCategory === 'featured'
                  ? 'bg-[#D4A59A] text-white shadow-xs'
                  : 'bg-[#FDF8F4] text-[#2C1F2D] border border-[#EADCC9] hover:border-[#D4A59A] hover:bg-[#FAF7F2]'
                }`}
            >
              Featured Highlights
            </button>
            <button
              onClick={() => setSelectedCategory('gallery')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all shrink-0 ${selectedCategory === 'gallery'
                  ? 'bg-[#D4A59A] text-white shadow-xs'
                  : 'bg-[#FDF8F4] text-[#2C1F2D] border border-[#EADCC9] hover:border-[#D4A59A] hover:bg-[#FAF7F2]'
                }`}
            >
              Event Memories
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <input
              type="text"
              placeholder="Search photo captions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-full bg-[#FDF8F4] border border-[#EADCC9] text-xs font-semibold text-[#2D2D2D] focus:outline-none focus:border-[#D4A59A] focus:bg-white transition-all placeholder:text-gray-400"
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Gallery Image Grid */}
        {filteredPhotos.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 border border-[#EADCC9] text-center space-y-3">
            <Camera className="w-10 h-10 text-gray-300 mx-auto" />
            <h3 className="text-lg font-bold text-[#2C1F2D]">No matching photos found</h3>
            <p className="text-xs text-gray-500">Try searching for another keyword or switch category filters.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-5 py-2 bg-[#D4A59A] text-white text-xs font-bold rounded-full hover:bg-[#2C1F2D] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {visiblePhotos.map((photo, index) => (
              <div
                key={index}
                onClick={() => setLightboxIndex(index)}
                className="group relative bg-[#FAF7F2] rounded-2xl border border-[#EADCC9] overflow-hidden cursor-pointer shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/90 text-[#2C1F2D] flex items-center justify-center shadow-md transform scale-90 group-hover:scale-100 transition-transform">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Load More Button */}
        {visibleCount < filteredPhotos.length && (
          <div className="text-center pt-6">
            <button
              onClick={() => setVisibleCount((prev) => prev + 36)}
              className="px-8 py-3.5 bg-[#D4A59A] text-white text-xs font-extrabold uppercase tracking-widest rounded-full hover:bg-[#2C1F2D] transition-all no-underline shadow-sm"
            >
              Load More Photos ({filteredPhotos.length - visibleCount} Remaining)
            </button>
          </div>
        )}

        {/* Bottom Salon Callout */}
        <div className="pt-8 border-t border-[#EADCC9] text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="text-[#D4A59A] text-xs font-bold uppercase tracking-widest flex items-center justify-center sm:justify-start gap-1.5">
              <Heart className="w-3.5 h-3.5 fill-[#D4A59A]" />
              <span>Community & Compassion at SoZo HAIR</span>
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#2C1F2D] font-[family-name:var(--font-playfair)]">
              Support Childhood Cancer Awareness
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
              SoZo HAIR, Spa & Wigs in West Chester OH is proud to support cancer survivors, hair donations, wig solutions, and community fundraisers.
            </p>
          </div>
          <a
            href="https://na0.meevo.com/FiveStarRatingApp/five-star-rating?t=104044&l=107183"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#D4A59A] text-white text-xs font-extrabold uppercase tracking-widest rounded-full hover:bg-[#2C1F2D] transition-all no-underline shrink-0"
          >
            Book Appointment Now
          </a>
        </div>

      </div>

      {/* Full-Screen Interactive Lightbox Viewer */}
      {lightboxIndex !== null && (
        <div
          onClick={() => setLightboxIndex(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
        >
          {/* Close Button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 z-50 w-11 h-11 rounded-full bg-white/10 text-white hover:bg-white hover:text-black transition-all flex items-center justify-center border border-white/20"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Controls */}
          <button
            onClick={handlePrevLightbox}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white hover:text-black transition-all flex items-center justify-center border border-white/20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNextLightbox}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white hover:text-black transition-all flex items-center justify-center border border-white/20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Main Content Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center justify-center space-y-4"
          >
            <div className="relative w-full h-[60vh] sm:h-[72vh] rounded-2xl overflow-hidden bg-black/40 border border-white/10">
              <Image
                src={filteredPhotos[lightboxIndex].src}
                alt={filteredPhotos[lightboxIndex].title}
                fill
                className="object-contain"
                unoptimized
              />
            </div>

            <div className="text-center space-y-1">
              <h3 className="text-base sm:text-lg font-bold text-white font-[family-name:var(--font-playfair)]">
                {filteredPhotos[lightboxIndex].title}
              </h3>
              <p className="text-xs text-gray-400 font-semibold">
                Photo {lightboxIndex + 1} of {filteredPhotos.length} • St. Baldrick's Fundraiser at Bajon Salon
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
