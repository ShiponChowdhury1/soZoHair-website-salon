'use client';

import { useState, useEffect, useMemo, Suspense, useCallback, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  Calendar,
  Clock,
  Heart,
  Search,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ArrowRight,
  X,
  SlidersHorizontal,
} from 'lucide-react';
import Navbar from '@/components/shared/Navbar/Navbar';
import Footer from '@/components/shared/Footer/Footer';
import articlesData from '@/data/articles.json';
import categoriesData from '@/data/categories.json';

interface WPPost {
  id: number;
  date: string;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  categories: number[];
  yoast_head_json?: {
    og_image?: Array<{ url: string }>;
  };
}

interface WPCategory {
  id: number;
  name: string;
  slug: string;
  count: number;
}

const ITEMS_PER_PAGE = 12;

const FALLBACK_IMAGES = [
  "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1200&q=80",
  "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=1200&q=80",
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80",
  "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=1200&q=80",
  "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=1200&q=80",
  "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=1200&q=80",
];

const CUSTOM_CATEGORY_SLUGS: Record<string, { name: string; keywords: string[] }> = {
  "sozo-hair-salon-tips": { name: "Sozo Hair Salon Tips", keywords: ["tip", "hair care", "salon", "care", "health"] },
  "hair-cuts": { name: "Hair Cuts", keywords: ["cut", "shag", "bob", "lob", "bangs", "haircut", "fringe", "short"] },
  "hair-extensions": { name: "Hair Extensions", keywords: ["extension", "wigs", "hair extension", "length"] },
  "foiling-and-highlights": { name: "Foiling and Highlights", keywords: ["foil", "highlight", "balayage", "blonde"] },
  "professional-hair-color": { name: "Professional Hair Color", keywords: ["color", "colour", "dye", "bleach", "tint"] },
  "trendy-hair-styles": { name: "Trendy Hair Styles", keywords: ["style", "trend", "braid", "updo", "volume", "curl"] },
};

function extractPostImage(post: WPPost, index: number): string {
  if (post.yoast_head_json?.og_image?.[0]?.url) {
    const url = post.yoast_head_json.og_image[0].url;
    if (!url.includes('topleft.png') && !url.includes('logo')) {
      return url;
    }
  }

  if (post.content?.rendered) {
    const match = post.content.rendered.match(/<img[^>]+src=["']([^"']+)["']/i);
    if (match && match[1]) {
      return match[1];
    }
  }

  return FALLBACK_IMAGES[index % FALLBACK_IMAGES.length];
}

function calculateReadTime(contentHtml: string): number {
  const clean = contentHtml.replace(/\[\/?et_pb_[^\]]*\]/gi, '').replace(/<[^>]+>/g, '');
  const words = clean.split(/\s+/).length;
  return Math.max(2, Math.ceil(words / 200));
}

function cleanExcerpt(html: string): string {
  if (!html) return '';
  return html
    .replace(/\[\/?et_pb_[^\]]*\]/gi, '')
    .replace(/\[\/?et_[^\]]*\]/gi, '')
    .replace(/\[\/?caption[^\]]*\]/gi, '')
    .replace(/<p>\s*(&nbsp;|\s|<br\s*\/?>)*<\/p>/gi, '');
}

function BlogContent() {
  const articles = articlesData as WPPost[];
  const categories = categoriesData as WPCategory[];
  const searchParams = useSearchParams();
  const categorySlugParam = searchParams.get('category');

  const pillsRef = useRef<HTMLDivElement>(null);
  const gridSectionRef = useRef<HTMLDivElement>(null);
  const sortDropdownRef = useRef<HTMLDivElement>(null);

  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);
  const [activeCustomCategory, setActiveCustomCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'latest' | 'oldest' | 'az'>('latest');
  const [isSortOpen, setIsSortOpen] = useState<boolean>(false);
  const [likedPostIds, setLikedPostIds] = useState<number[]>([]);
  const [showSavedOnly, setShowSavedOnly] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Close sort dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortDropdownRef.current && !sortDropdownRef.current.contains(event.target as Node)) {
        setIsSortOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Hero Slider state
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  // Scroll category pills smoothly left/right
  const scrollPills = (direction: 'left' | 'right') => {
    if (pillsRef.current) {
      const scrollAmount = direction === 'left' ? -280 : 280;
      pillsRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Featured top 5 articles for carousel
  const featuredArticles = useMemo(() => {
    return articles.slice(0, 5);
  }, [articles]);

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev + 1) % featuredArticles.length);
  }, [featuredArticles.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev - 1 + featuredArticles.length) % featuredArticles.length);
  }, [featuredArticles.length]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, nextSlide]);

  useEffect(() => {
    setCurrentPage(1);
    if (!categorySlugParam) {
      setSelectedCategoryId(null);
      setActiveCustomCategory(null);
      return;
    }

    const foundCat = categories.find(
      (c) => c.slug.toLowerCase() === categorySlugParam.toLowerCase()
    );

    if (foundCat) {
      setSelectedCategoryId(foundCat.id);
      setActiveCustomCategory(null);
      return;
    }

    if (CUSTOM_CATEGORY_SLUGS[categorySlugParam]) {
      setActiveCustomCategory(categorySlugParam);
      const customName = CUSTOM_CATEGORY_SLUGS[categorySlugParam].name.toLowerCase();
      const matchedCatByName = categories.find((c) =>
        c.name.toLowerCase().includes(customName) || customName.includes(c.name.toLowerCase())
      );
      setSelectedCategoryId(matchedCatByName ? matchedCatByName.id : null);
    } else {
      setSelectedCategoryId(null);
      setActiveCustomCategory(null);
    }
  }, [categorySlugParam, categories]);

  // Reset page to 1 whenever filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategoryId, activeCustomCategory, searchQuery, sortBy, showSavedOnly]);

  const toggleLikePost = (id: number) => {
    setLikedPostIds((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const isPostInCategory = (post: WPPost, catId: number, catObj?: WPCategory) => {
    if (post.categories && post.categories.includes(catId)) {
      return true;
    }

    if (catObj) {
      const searchTerms = [
        catObj.name.toLowerCase().replace(/&amp;/g, '&'),
        catObj.slug.toLowerCase(),
        ...catObj.slug.split('-').filter((w) => w.length > 2),
      ];

      const fullText = (
        post.title.rendered +
        ' ' +
        post.excerpt.rendered +
        ' ' +
        post.content.rendered
      ).toLowerCase();

      return searchTerms.some((term) => term && fullText.includes(term));
    }

    return false;
  };

  const getCategoryLocalCount = (cat: WPCategory) => {
    const targetCatObj = categories.find((c) => c.id === cat.id) || cat;
    return articles.filter((post) => isPostInCategory(post, cat.id, targetCatObj)).length;
  };

  const filteredArticles = useMemo(() => {
    let list = [...articles];

    if (showSavedOnly) {
      list = list.filter((post) => likedPostIds.includes(post.id));
    }

    if (selectedCategoryId !== null) {
      const targetCatObj = categories.find((c) => c.id === selectedCategoryId);
      const directMatches = list.filter((post) => post.categories.includes(selectedCategoryId));
      if (directMatches.length > 0) {
        list = directMatches;
      } else if (targetCatObj) {
        list = list.filter((post) => isPostInCategory(post, selectedCategoryId, targetCatObj));
      } else {
        list = directMatches;
      }
    } else if (activeCustomCategory && CUSTOM_CATEGORY_SLUGS[activeCustomCategory]) {
      const keywords = CUSTOM_CATEGORY_SLUGS[activeCustomCategory].keywords;
      list = list.filter((post) => {
        const text = (post.title.rendered + ' ' + post.excerpt.rendered + ' ' + post.content.rendered).toLowerCase();
        return keywords.some((kw) => text.includes(kw));
      });
    }

    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (post) =>
          post.title.rendered.toLowerCase().includes(q) ||
          post.excerpt.rendered.toLowerCase().includes(q)
      );
    }

    if (sortBy === 'az') {
      list.sort((a, b) => a.title.rendered.localeCompare(b.title.rendered));
    } else if (sortBy === 'oldest') {
      list.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    } else {
      list.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }

    return list;
  }, [articles, categories, selectedCategoryId, activeCustomCategory, searchQuery, sortBy, showSavedOnly, likedPostIds]);

  // Total pages calculation
  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE) || 1;

  // Sliced articles for active page
  const currentArticles = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredArticles.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredArticles, currentPage]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      gridSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const getCategoryName = (id: number) => {
    const cat = categories.find((c) => c.id === id);
    return cat ? cat.name.replace(/&amp;/g, '&') : 'Hair Tips';
  };

  const topCategories = useMemo(() => {
    return categories
      .map((cat) => ({
        ...cat,
        localCount: getCategoryLocalCount(cat),
      }))
      .filter((cat) => cat.localCount > 0 && cat.name.toLowerCase() !== 'uncategorized')
      .sort((a, b) => b.localCount - a.localCount)
      .slice(0, 15);
  }, [categories, articles]);

  const currentCategoryTitle = useMemo(() => {
    if (showSavedOnly) return 'Your Saved Articles ❤️';
    if (categorySlugParam && CUSTOM_CATEGORY_SLUGS[categorySlugParam]) {
      return CUSTOM_CATEGORY_SLUGS[categorySlugParam].name;
    }
    if (selectedCategoryId !== null) {
      const cat = categories.find((c) => c.id === selectedCategoryId);
      if (cat) return cat.name.replace(/&amp;/g, '&');
    }
    return 'All Hair Tips & Salon Articles';
  }, [categorySlugParam, selectedCategoryId, categories, showSavedOnly]);

  const currentFeaturedSlide = featuredArticles[currentSlideIndex];

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#2D2D2D]">
      <Navbar />

      <div className="pt-[130px] sm:pt-[150px] md:pt-[160px] lg:pt-[170px] pb-16 px-4 sm:px-5 md:px-8 max-w-[var(--container-max-width)] mx-auto space-y-8">

        {/* ===== FEATURED ARTICLE HERO CAROUSEL ===== */}
        {currentFeaturedSlide && !categorySlugParam && !searchQuery && !showSavedOnly && (
          <section
            className="relative rounded-3xl overflow-hidden bg-[#FDF8F4] text-[#2C1F2D] border border-[#EADCC9] group/hero transition-all shadow-xs"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[380px] sm:min-h-[420px] lg:min-h-[440px]">
              
              {/* Slider Image Column (50% split, full clear image) */}
              <div className="lg:col-span-6 relative h-[280px] sm:h-[360px] lg:h-auto overflow-hidden bg-[#FAF7F2]">
                <Link href={`/blog/${currentFeaturedSlide.slug}`} className="block w-full h-full">
                  <Image
                    src={extractPostImage(currentFeaturedSlide, currentSlideIndex)}
                    alt={currentFeaturedSlide.title.rendered.replace(/<[^>]+>/g, '')}
                    fill
                    priority
                    className="object-cover object-center transition-transform duration-700 group-hover/hero:scale-105"
                    unoptimized
                  />
                </Link>
              </div>

              {/* Slider Content Column */}
              <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6 bg-[#FDF8F4]">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#D4A59A] uppercase tracking-wider">
                    <span>{getCategoryName(currentFeaturedSlide.categories[0])}</span>
                    <span>•</span>
                    <span className="text-gray-500 flex items-center gap-1.5 font-semibold">
                      <Calendar className="w-3.5 h-3.5 text-[#D4A59A]" />
                      {new Date(currentFeaturedSlide.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                  </div>

                  <Link href={`/blog/${currentFeaturedSlide.slug}`} className="no-underline block group/herotitle">
                    <h2
                      className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#2C1F2D] leading-snug font-[family-name:var(--font-playfair)] line-clamp-2 group-hover/herotitle:text-[#D4A59A] transition-colors"
                      dangerouslySetInnerHTML={{ __html: currentFeaturedSlide.title.rendered }}
                    />
                  </Link>

                  <div
                    className="text-gray-600 text-xs sm:text-sm line-clamp-3 font-light leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: cleanExcerpt(currentFeaturedSlide.excerpt.rendered) }}
                  />
                </div>

                {/* Slider Bottom Controls */}
                <div className="flex items-center justify-between pt-5 border-t border-[#EADCC9]">
                  <Link
                    href={`/blog/${currentFeaturedSlide.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#D4A59A] hover:bg-[#2C1F2D] text-white text-xs font-extrabold uppercase tracking-wider rounded-full transition-all shadow-xs no-underline"
                  >
                    <span>Read Featured Story</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  {/* Next / Prev Arrows */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={prevSlide}
                      aria-label="Previous article"
                      className="w-10 h-10 rounded-full bg-white hover:bg-[#D4A59A] text-gray-700 hover:text-white flex items-center justify-center transition-all border border-[#EADCC9] cursor-pointer shadow-xs"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={nextSlide}
                      aria-label="Next article"
                      className="w-10 h-10 rounded-full bg-white hover:bg-[#D4A59A] text-gray-700 hover:text-white flex items-center justify-center transition-all border border-[#EADCC9] cursor-pointer shadow-xs"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ===== PAGE TITLE ===== */}
        <div className="text-center max-w-3xl mx-auto space-y-2 pt-2">
          <span className="text-[#D4A59A] text-xs sm:text-sm font-bold tracking-[3px] uppercase block">
            SoZo Hair & Salon Journal
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2C1F2D] tracking-tight font-[family-name:var(--font-playfair)]">
            {currentCategoryTitle}
          </h1>
          <p className="text-sm sm:text-base text-gray-600 font-light max-w-xl mx-auto">
            Discover expert styling advice, hair care tips, and salon secrets from our master team.
          </p>
        </div>

        {/* ===== CONTROLS & CATEGORY TABS BAR ===== */}
        <div className="border-b border-[#EADCC9] pb-6 space-y-4">
          
          {/* Top Row: Search Input + Sort Select + Saved Toggle */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Box */}
            <div className="w-full md:max-w-md relative">
              <input
                type="text"
                placeholder="Search articles by title or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-5 py-3 pl-11 rounded-full bg-[#FAF7F2] border border-[#EADCC9] text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#D4A59A] focus:bg-white transition-all"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-4 top-4" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-3.5 text-xs text-gray-400 hover:text-gray-600 cursor-pointer font-bold flex items-center gap-1"
                >
                  <X className="w-3.5 h-3.5" /> Clear
                </button>
              )}
            </div>

            {/* Sort & Saved Controls */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-end flex-wrap sm:flex-nowrap">
              {/* Custom Luxury Sort By Dropdown */}
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-600 relative" ref={sortDropdownRef}>
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#D4A59A]" />
                <span className="whitespace-nowrap">Sort by:</span>

                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsSortOpen(!isSortOpen)}
                    className="bg-[#FAF7F2] border border-[#EADCC9] hover:border-[#D4A59A] text-xs font-bold text-[#2C1F2D] rounded-xl px-3 py-2 flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <span>
                      {sortBy === 'latest' ? 'Latest First' : sortBy === 'oldest' ? 'Oldest First' : 'A–Z Title'}
                    </span>
                    <ChevronDown className={`w-3.5 h-3.5 text-[#D4A59A] transition-transform duration-200 ${isSortOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isSortOpen && (
                    <div className="absolute right-0 top-full mt-1.5 w-36 bg-white border border-[#EADCC9] rounded-2xl shadow-md py-1.5 z-50 overflow-hidden animate-in fade-in duration-150">
                      {[
                        { id: 'latest', label: 'Latest First' },
                        { id: 'oldest', label: 'Oldest First' },
                        { id: 'az', label: 'A–Z Title' },
                      ].map((opt) => {
                        const isSelected = sortBy === opt.id;
                        return (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => {
                              setSortBy(opt.id as any);
                              setIsSortOpen(false);
                            }}
                            className={`w-full text-left px-4 py-2 text-xs font-bold transition-all flex items-center justify-between cursor-pointer ${
                              isSelected
                                ? 'bg-[#D4A59A] text-white font-extrabold'
                                : 'text-gray-700 hover:bg-[#FAF7F2] hover:text-[#D4A59A]'
                            }`}
                          >
                            <span>{opt.label}</span>
                            {isSelected && <span className="text-white font-bold text-[10px]">✓</span>}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>

              {/* Saved Articles Toggle */}
              <button
                onClick={() => setShowSavedOnly(!showSavedOnly)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                  showSavedOnly
                    ? 'bg-[#2C1F2D] text-white border-[#2C1F2D]'
                    : 'bg-[#FAF7F2] text-gray-700 border-[#EADCC9] hover:border-[#D4A59A]'
                }`}
              >
                <Heart className={`w-3.5 h-3.5 ${showSavedOnly ? 'fill-white text-white' : 'fill-red-500 text-red-500'}`} />
                <span>Saved ({likedPostIds.length})</span>
              </button>
            </div>
          </div>

          {/* Bottom Row: Category Navigation Row with Arrow Controls */}
          <div className="pt-3 border-t border-[#EADCC9] flex items-center gap-2">
            
            {/* Left Scroll Arrow */}
            <button
              onClick={() => scrollPills('left')}
              aria-label="Scroll categories left"
              className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#EADCC9] hover:border-[#D4A59A] hover:bg-[#D4A59A] hover:text-white text-gray-600 transition-all cursor-pointer shrink-0"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Scrollable Pills Bar without scrollbar line */}
            <div
              ref={pillsRef}
              className="flex items-center gap-2 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden scroll-smooth py-1 px-1 flex-1"
            >
              <Link
                href="/blog"
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 no-underline shrink-0 ${
                  selectedCategoryId === null && !categorySlugParam && !showSavedOnly
                    ? 'bg-[#D4A59A] text-white'
                    : 'bg-[#FAF7F2] text-gray-700 border border-[#EADCC9] hover:border-[#D4A59A] hover:bg-[#FDF8F4]'
                }`}
              >
                All Articles
              </Link>

              {/* Custom Category Pills */}
              {Object.entries(CUSTOM_CATEGORY_SLUGS).map(([slug, item]) => {
                const isActive = categorySlugParam === slug;
                return (
                  <Link
                    key={slug}
                    href={`/blog?category=${slug}`}
                    className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 no-underline shrink-0 ${
                      isActive
                        ? 'bg-[#D4A59A] text-white'
                        : 'bg-[#FAF7F2] text-gray-700 border border-[#EADCC9] hover:border-[#D4A59A] hover:bg-[#FDF8F4]'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}

              {/* Top WordPress Categories Pills */}
              {topCategories.map((cat) => {
                const isActive = categorySlugParam === cat.slug || selectedCategoryId === cat.id;
                if (Object.keys(CUSTOM_CATEGORY_SLUGS).includes(cat.slug)) return null;
                return (
                  <Link
                    key={cat.id}
                    href={`/blog?category=${cat.slug}`}
                    className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 no-underline shrink-0 ${
                      isActive
                        ? 'bg-[#D4A59A] text-white'
                        : 'bg-[#FAF7F2] text-gray-700 border border-[#EADCC9] hover:border-[#D4A59A] hover:bg-[#FDF8F4]'
                    }`}
                  >
                    {cat.name.replace(/&amp;/g, '&')}
                  </Link>
                );
              })}
            </div>

            {/* Right Scroll Arrow */}
            <button
              onClick={() => scrollPills('right')}
              aria-label="Scroll categories right"
              className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#EADCC9] hover:border-[#D4A59A] hover:bg-[#D4A59A] hover:text-white text-gray-600 transition-all cursor-pointer shrink-0"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ===== ACTIVE FILTER NOTIFICATION BANNER ===== */}
        {(categorySlugParam || searchQuery || showSavedOnly) && (
          <div className="flex flex-wrap items-center justify-between bg-[#FDF8F4] border border-[#EADCC9] px-5 py-3 rounded-2xl gap-3">
            <div className="flex items-center gap-2 text-sm text-[#2C1F2D]">
              <span className="font-semibold text-[#D4A59A] uppercase tracking-wider text-xs">Active Filter:</span>
              <span className="font-bold">{currentCategoryTitle}</span>
              {searchQuery && <span className="text-gray-500 text-xs">matching &quot;{searchQuery}&quot;</span>}
              <span className="text-gray-500 text-xs">({filteredArticles.length} posts found)</span>
            </div>
            <Link
              href="/blog"
              onClick={() => {
                setSearchQuery('');
                setShowSavedOnly(false);
              }}
              className="text-xs font-semibold text-[#D4A59A] hover:underline no-underline flex items-center gap-1"
            >
              <X className="w-3.5 h-3.5" /> Reset All Filters
            </Link>
          </div>
        )}

        {/* ===== ARTICLES CARDS GRID (4 PER ROW ON DESKTOP) ===== */}
        <div ref={gridSectionRef} className="scroll-mt-40 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentArticles.map((post, idx) => {
            const imageUrl = extractPostImage(post, idx);
            const primaryCategoryName = post.categories.length > 0 ? getCategoryName(post.categories[0]) : 'Hair Care';
            const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            });
            const readTime = calculateReadTime(post.content.rendered);
            const isLiked = likedPostIds.includes(post.id);

            return (
              <article
                key={post.id}
                className="bg-[#FDF8F4] rounded-3xl shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden border border-[#EADCC9] hover:border-[#D4A59A] flex flex-col justify-between group relative"
              >
                <div>
                  {/* Card Image Container (Clickable to details page) */}
                  <div className="relative h-52 w-full overflow-hidden bg-[#FAF7F2] group/img">
                    <Link href={`/blog/${post.slug}`} className="block w-full h-full">
                      <Image
                        src={imageUrl}
                        alt={post.title.rendered.replace(/<[^>]+>/g, '')}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover group-hover/img:scale-105 transition-transform duration-500"
                        unoptimized
                      />
                    </Link>
                    
                    {/* Category Pill Badge */}
                    <div className="absolute top-3 left-3 bg-[#2C1F2D]/90 backdrop-blur-md text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md pointer-events-none">
                      {primaryCategoryName}
                    </div>

                    {/* Bookmark / Like Button (Fix hover visibility) */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        toggleLikePost(post.id);
                      }}
                      aria-label="Save article"
                      className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md border transition-all cursor-pointer z-10 group/heart ${
                        isLiked
                          ? 'bg-[#D4A59A] text-white border-[#D4A59A] scale-110 shadow-md'
                          : 'bg-black/50 text-white border-white/30 hover:bg-white hover:border-red-300 shadow-sm'
                      }`}
                    >
                      <Heart
                        className={`w-4 h-4 transition-colors ${
                          isLiked
                            ? 'fill-white text-white'
                            : 'text-white group-hover/heart:text-red-500 group-hover/heart:fill-red-500'
                        }`}
                      />
                    </button>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-5 space-y-3">
                    <div className="text-[11px] font-semibold text-gray-400 flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-gray-500">
                        <Calendar className="w-3.5 h-3.5 text-[#D4A59A]" />
                        {formattedDate}
                      </span>
                      <span className="flex items-center gap-1.5 text-gray-500">
                        <Clock className="w-3.5 h-3.5 text-[#D4A59A]" />
                        {readTime} min read
                      </span>
                    </div>

                    {/* Clickable Title */}
                    <Link href={`/blog/${post.slug}`} className="no-underline block group/title">
                      <h2
                        className="text-base font-bold text-[#2C1F2D] group-hover/title:text-[#D4A59A] transition-colors line-clamp-2 font-[family-name:var(--font-playfair)] leading-snug"
                        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                      />
                    </Link>

                    <div
                      className="text-gray-600 text-xs line-clamp-2 leading-relaxed font-light"
                      dangerouslySetInnerHTML={{ __html: cleanExcerpt(post.excerpt.rendered) }}
                    />
                  </div>
                </div>

                {/* Card Footer - Read More Link */}
                <div className="px-5 pb-5 pt-3 border-t border-[#EADCC9] flex items-center justify-between">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D4A59A] group-hover:text-[#2C1F2D] transition-colors no-underline"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <span className="text-[10px] font-semibold text-gray-400">SoZo Hair</span>
                </div>
              </article>
            );
          })}
        </div>

        {/* ===== NUMERIC PAGINATION ===== */}
        {totalPages > 1 && (
          <div className="flex justify-end pt-8 pb-4">
            {/* Pagination Controls Bar (Clean Flat Border, Soft Cream) */}
            <div className="flex items-center gap-1.5 flex-wrap justify-center bg-[#FDF8F4] p-1.5 rounded-full border border-[#EADCC9]">
              {/* Prev Button */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  currentPage === 1
                    ? 'opacity-40 text-gray-400 cursor-not-allowed'
                    : 'text-[#2C1F2D] hover:bg-[#FAF7F2] hover:text-[#D4A59A] cursor-pointer'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Prev</span>
              </button>

              {/* Page Numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                if (
                  totalPages > 7 &&
                  pageNum !== 1 &&
                  pageNum !== totalPages &&
                  Math.abs(pageNum - currentPage) > 1
                ) {
                  if (pageNum === 2 && currentPage > 3) return <span key={pageNum} className="px-1 text-gray-400 text-xs">...</span>;
                  if (pageNum === totalPages - 1 && currentPage < totalPages - 2) return <span key={pageNum} className="px-1 text-gray-400 text-xs">...</span>;
                  return null;
                }

                return (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`w-9 h-9 rounded-full text-xs font-bold transition-all flex items-center justify-center cursor-pointer border ${
                      currentPage === pageNum
                        ? 'bg-[#D4A59A] text-white border-[#D4A59A]'
                        : 'text-gray-700 border-transparent hover:border-[#EADCC9] hover:bg-[#FAF7F2] hover:text-[#D4A59A]'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}

              {/* Next Button */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  currentPage === totalPages
                    ? 'opacity-40 text-gray-400 cursor-not-allowed'
                    : 'text-[#2C1F2D] hover:bg-[#FAF7F2] hover:text-[#D4A59A] cursor-pointer'
                }`}
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Empty State */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-16 bg-[#FDF8F4] rounded-3xl border border-[#EADCC9] max-w-xl mx-auto p-8 shadow-xs">
            <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-800">No articles found</h3>
            <p className="text-sm text-gray-500 mt-1">
              We couldn&apos;t find any articles matching your search or category filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setShowSavedOnly(false);
              }}
              className="mt-5 inline-block px-6 py-2.5 bg-[#D4A59A] text-white text-xs font-bold rounded-full uppercase tracking-wider shadow-xs hover:bg-[#2C1F2D] transition-colors cursor-pointer"
            >
              Reset Filters & View All
            </button>
          </div>
        )}

      </div>

      <Footer />
    </main>
  );
}

export default function BlogPage() {
  return (
    <Suspense fallback={<div className="text-center py-32 text-gray-500 font-medium">Loading articles...</div>}>
      <BlogContent />
    </Suspense>
  );
}
