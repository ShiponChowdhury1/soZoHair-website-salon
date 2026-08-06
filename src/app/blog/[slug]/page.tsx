import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Calendar, Clock, ArrowRight, ChevronLeft, Sparkles, Tag, Heart } from 'lucide-react';
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
    og_description?: string;
  };
}

interface WPCategory {
  id: number;
  name: string;
  slug: string;
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

const FALLBACK_IMAGES = [
  "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1200&q=80",
  "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=1200&q=80",
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80",
  "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=1200&q=80",
];

function getArticleBySlug(slugParam: string): WPPost | undefined {
  const articles = articlesData as WPPost[];
  const decoded = decodeURIComponent(slugParam).toLowerCase();
  return articles.find(
    (a) => a.slug.toLowerCase() === decoded || a.id.toString() === decoded
  );
}

function getCategoryName(id: number): string {
  const categories = categoriesData as WPCategory[];
  const cat = categories.find((c) => c.id === id);
  return cat ? cat.name.replace(/&amp;/g, '&') : 'Hair Tips';
}

function extractPostImage(post: WPPost): string {
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
  return FALLBACK_IMAGES[post.id % FALLBACK_IMAGES.length];
}

/**
 * Clean up legacy WordPress HTML styles, floats, inline widths/heights, Divi shortcodes, and broken tags.
 * Dynamically extract multiple images from paragraphs and convert them into side-by-side grid galleries.
 */
function sanitizeArticleHtml(html: string): string {
  if (!html) return '';

  // 0. Remove legacy WordPress shortcodes (Divi builder [et_pb_section...], [et_pb_row...], [caption...], WooCommerce shortcodes)
  let cleaned = html
    .replace(/\[\/?et_pb_[^\]]*\]/gi, '')
    .replace(/\[\/?et_[^\]]*\]/gi, '')
    .replace(/\[\/?caption[^\]]*\]/gi, '')
    .replace(/\[\/?woo_[^\]]*\]/gi, '')
    .replace(/\[\/?product[^\]]*\]/gi, '')
    .replace(/\[\/?woocommerce[^\]]*\]/gi, '');

  // 1. Basic cleaning of inline legacy WordPress styles
  cleaned = cleaned
    .replace(/style=["'][^"']*float:[^"']*["']/gi, '')
    .replace(/style=["'][^"']*width:[^"']*["']/gi, '')
    .replace(/style=["'][^"']*height:[^"']*["']/gi, '')
    .replace(/width=["']\d+["']/gi, '')
    .replace(/height=["']\d+["']/gi, '')
    .replace(/align=["'](left|right|center)["']/gi, '')
    .replace(/class=["']([^"']*)\b(alignleft|alignright|aligncenter)\b([^"']*)["']/gi, 'class="$1 $3"');

  // 2. Parse any paragraph containing multiple <img> tags (with optional <br> or text)
  cleaned = cleaned.replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, (match, innerContent) => {
    const imgMatches = innerContent.match(/<img[^>]+>/gi);
    if (imgMatches && imgMatches.length >= 2) {
      const textOnly = innerContent.replace(/<img[^>]+>/gi, '').replace(/<br\s*\/?>/gi, '').trim();
      const cols = imgMatches.length === 2 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
      const galleryHtml = `<div class="grid ${cols} gap-4 my-8 clear-both max-w-2xl mx-auto">${imgMatches
        .map((img: string) => `<div class="rounded-2xl overflow-hidden border border-[#EADCC9] bg-[#FAF7F2] shadow-xs p-1">${img}</div>`)
        .join('')}</div>`;
      const textHtml = textOnly ? `<p>${textOnly}</p>` : '';
      return `${galleryHtml}${textHtml}`;
    }
    return match;
  });

  // 3. Transform adjacent single-image paragraphs into a responsive side-by-side grid
  cleaned = cleaned.replace(/(?:<p[^>]*>\s*(?:<a[^>]*>)?\s*<img[^>]+>\s*(?:<\/a>)?\s*<\/p>\s*){2,3}/gi, (match) => {
    const imgMatches = match.match(/<img[^>]+>/g) || [];
    if (imgMatches.length < 2) return match;
    const cols = imgMatches.length === 2 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
    return `<div class="grid ${cols} gap-4 my-8 clear-both max-w-2xl mx-auto">${imgMatches
      .map((img) => `<div class="rounded-2xl overflow-hidden border border-[#EADCC9] bg-[#FAF7F2] shadow-xs p-1">${img}</div>`)
      .join('')}</div>`;
  });

  // 4. Remove empty paragraphs
  cleaned = cleaned.replace(/<p>\s*(&nbsp;|\s|<br\s*\/?>)*<\/p>/gi, '');

  return cleaned;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getArticleBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found | SoZo Hair Salon & Wigs',
    };
  }

  const cleanTitle = post.title.rendered.replace(/<[^>]+>/g, '');
  const cleanExcerpt = post.excerpt.rendered.replace(/<[^>]+>/g, '').trim();

  return {
    title: `${cleanTitle} | SoZo Hair Salon Journal`,
    description: post.yoast_head_json?.og_description || cleanExcerpt.slice(0, 160),
  };
}

export async function generateStaticParams() {
  const articles = articlesData as WPPost[];
  return articles.slice(0, 50).map((post) => ({
    slug: post.slug,
  }));
}

export default async function SingleBlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getArticleBySlug(slug);

  if (!post) {
    notFound();
  }

  const articles = articlesData as WPPost[];
  const categories = categoriesData as WPCategory[];
  const imageUrl = extractPostImage(post);
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const wordCount = post.content.rendered.replace(/<[^>]+>/g, '').split(/\s+/).length;
  const readTime = Math.max(2, Math.ceil(wordCount / 200));

  const relatedPosts = articles
    .filter((a) => a.id !== post.id && a.categories.some((c) => post.categories.includes(c)))
    .slice(0, 3);

  const fallbackRelated = relatedPosts.length < 3
    ? articles.filter((a) => a.id !== post.id).slice(0, 3)
    : relatedPosts;

  const topCategories = categories.slice(0, 10);

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#2D2D2D]">
      <Navbar />

      <div className="pt-[130px] sm:pt-[150px] md:pt-[160px] lg:pt-[170px] pb-16 px-4 sm:px-5 md:px-8 max-w-[var(--container-max-width)] mx-auto space-y-8">
        
        {/* Navigation Breadcrumb Bar */}
        <div className="flex items-center justify-between border-b border-[#EADCC9] pb-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#D4A59A] hover:text-[#2C1F2D] transition-colors no-underline group"
          >
            <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to All Articles</span>
          </Link>

          <span className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#D4A59A]" />
            <span>SoZo Journal Editorial</span>
          </span>
        </div>

        {/* ===== TWO-COLUMN MAGAZINE LAYOUT ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Reading Card (8 Columns) - Header & Content inside 1 unified card */}
          <main className="lg:col-span-8 bg-[#FDF8F4] rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#EADCC9] space-y-8">
            
            {/* Article Title & Metadata Header */}
            <div className="space-y-6 border-b border-[#EADCC9] pb-6">

              {/* Main Article Title */}
              <h1
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2C1F2D] leading-tight font-[family-name:var(--font-playfair)]"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />

              {/* Author & Date Bar */}
              <div className="flex items-center gap-4 text-xs font-semibold text-gray-500 flex-wrap">
                <div className="flex items-center gap-2">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0 border border-[#D4A59A] bg-[#2C1F2D]">
                    <Image
                      src="https://sozohair.net/wp-content/uploads/2014/08/Karen-Welch.jpg"
                      alt="Karen Welch"
                      fill
                      className="object-cover object-top"
                      unoptimized
                    />
                  </div>
                  <span className="text-[#2C1F2D] font-bold text-sm">Karen Welch</span>
                </div>
                <span>•</span>
                <span className="flex items-center gap-1.5 text-gray-500">
                  <Calendar className="w-3.5 h-3.5 text-[#D4A59A]" />
                  {formattedDate}
                </span>
              </div>
              
              {/* Featured Image inside Main Article Container */}
              <div className="relative h-[280px] sm:h-[380px] lg:h-[420px] w-full rounded-2xl overflow-hidden border border-[#EADCC9] bg-[#FAF7F2]">
                <Image
                  src={imageUrl}
                  alt={post.title.rendered.replace(/<[^>]+>/g, '')}
                  fill
                  priority
                  className="object-cover object-center"
                  unoptimized
                />
              </div>
            </div>

            {/* Main Article Content Body - Sanitized with float-clearing rules */}
            <div
              className="prose prose-lg max-w-none text-[#2D2D2D] font-sans leading-relaxed
                [&_img]:block [&_img]:max-w-full [&_img]:h-auto [&_img]:mx-auto [&_img]:my-6 [&_img]:rounded-2xl [&_img]:border [&_img]:border-[#EADCC9] [&_img]:clear-both [&_img]:float-none
                [&_.grid_img]:my-0 [&_.grid_img]:w-full [&_.grid_img]:h-56 sm:[&_.grid_img]:h-64 [&_.grid_img]:object-cover [&_.grid_img]:border-none
                [&_figure]:my-8 [&_figure]:clear-both [&_figure]:mx-auto [&_figcaption]:text-center [&_figcaption]:text-xs [&_figcaption]:text-gray-500 [&_figcaption]:mt-2
                [&_p]:clear-both [&_p]:my-4 [&_p]:text-gray-700 [&_p]:leading-relaxed [&_p]:text-base sm:[&_p]:text-lg [&_p]:font-light
                [&_h2]:clear-both [&_h2]:text-xl sm:[&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-[#2C1F2D] [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:font-[family-name:var(--font-playfair)]
                [&_h3]:clear-both [&_h3]:text-lg sm:[&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-[#2C1F2D] [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:font-[family-name:var(--font-playfair)]
                [&_a]:text-[#D4A59A] [&_a]:font-semibold hover:[&_a]:underline
                [&_blockquote]:border-l-4 [&_blockquote]:border-[#D4A59A] [&_blockquote]:bg-white [&_blockquote]:py-4 [&_blockquote]:px-6 [&_blockquote]:rounded-r-2xl [&_blockquote]:italic [&_blockquote]:my-6
                [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2"
              dangerouslySetInnerHTML={{ __html: sanitizeArticleHtml(post.content.rendered) }}
            />

            {/* Author Bio Box */}
            <div className="pt-8 border-t border-[#EADCC9] flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left bg-[#FAF7F2] p-6 rounded-2xl border border-[#EADCC9]">
              <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-[#D4A59A] shadow-xs bg-[#2C1F2D]">
                <Image
                  src="https://sozohair.net/wp-content/uploads/2014/08/Karen-Welch.jpg"
                  alt="Karen Welch - SoZo Hair Founder & Master Stylist"
                  fill
                  className="object-cover object-top"
                  unoptimized
                />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <h4 className="text-base font-bold text-[#2C1F2D]">Karen Welch</h4>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider bg-[#D4A59A] text-white px-2.5 py-0.5 rounded-full">Founder & Master Stylist</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed font-light pt-1">
                  Karen Welch has 32+ years of experience in the Hair Fashion Industry and is considered an expert in hair design, hair color, and beauty transformations at SoZo HAIR, Spa & Wigs in Cincinnati.
                </p>
              </div>
            </div>
          </main>

          {/* Sticky Right Sidebar Widgets (4 Columns) */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-[160px]">
            
            {/* Widget 1: Salon Appointment CTA Card */}
            <div className="bg-[#FDF8F4] p-6 sm:p-8 rounded-3xl border border-[#EADCC9] space-y-4 text-center">
              <div className="w-12 h-12 rounded-full bg-white border border-[#EADCC9] text-[#D4A59A] flex items-center justify-center mx-auto">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#2C1F2D] font-[family-name:var(--font-playfair)]">
                Book Your Hair & Spa Experience
              </h3>
              <p className="text-xs text-gray-600 font-light leading-relaxed">
                Consult with our master stylists for balayage, trendy haircuts, hair extensions, and chemical peels.
              </p>
              <a
                href="https://na0.meevo.com/FiveStarRatingApp/five-star-rating?t=104044&l=107183"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 bg-[#D4A59A] text-white text-xs font-extrabold uppercase tracking-widest rounded-full hover:bg-[#2C1F2D] transition-all no-underline"
              >
                Book Appointment
              </a>
            </div>

            {/* Widget 2: Explore Categories */}
            <div className="bg-[#FDF8F4] p-6 rounded-3xl border border-[#EADCC9] space-y-4">
              <h4 className="text-base font-bold text-[#2C1F2D] flex items-center gap-2 border-b border-[#EADCC9] pb-3">
                <Tag className="w-4 h-4 text-[#D4A59A]" />
                <span>Explore Categories</span>
              </h4>
              <div className="flex flex-wrap gap-2 pt-1">
                {topCategories.map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/blog?category=${cat.slug}`}
                    className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white text-gray-700 border border-[#EADCC9] hover:border-[#D4A59A] hover:bg-[#D4A59A] hover:text-white transition-all no-underline"
                  >
                    {cat.name.replace(/&amp;/g, '&')}
                  </Link>
                ))}
              </div>
            </div>

            {/* Widget 3: Popular Articles */}
            <div className="bg-[#FDF8F4] p-6 rounded-3xl border border-[#EADCC9] space-y-4">
              <h4 className="text-base font-bold text-[#2C1F2D] flex items-center gap-2 border-b border-[#EADCC9] pb-3">
                <Heart className="w-4 h-4 text-[#D4A59A]" />
                <span>Popular Reads</span>
              </h4>
              <div className="space-y-3">
                {fallbackRelated.map((relPost) => (
                  <Link
                    key={relPost.id}
                    href={`/blog/${relPost.slug}`}
                    className="flex items-center gap-3 group no-underline p-2 rounded-xl hover:bg-white transition-colors"
                  >
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-gray-100 border border-[#EADCC9]">
                      <Image
                        src={extractPostImage(relPost)}
                        alt={relPost.title.rendered.replace(/<[^>]+>/g, '')}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform"
                        unoptimized
                      />
                    </div>
                    <div className="space-y-1 min-w-0">
                      <span className="text-[10px] font-bold text-[#D4A59A] uppercase tracking-wider block truncate">
                        {getCategoryName(relPost.categories[0])}
                      </span>
                      <h5
                        className="text-xs font-bold text-[#2C1F2D] group-hover:text-[#D4A59A] transition-colors line-clamp-2 leading-snug"
                        dangerouslySetInnerHTML={{ __html: relPost.title.rendered }}
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </aside>
        </div>

        {/* High-Converting Salon Booking Banner */}
        <div className="bg-[#FDF8F4] rounded-3xl p-8 sm:p-10 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#EADCC9]">
          <div className="space-y-2 max-w-xl">
            <span className="text-[#D4A59A] text-xs font-bold uppercase tracking-widest flex items-center justify-center sm:justify-start gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ready for a Transformation?</span>
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#2C1F2D] font-[family-name:var(--font-playfair)]">
              Book Your Salon Appointment Today
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
              Experience professional hair care, balayage, cuts, and spa services with our master stylists in Cincinnati.
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

        {/* Recommended Articles Grid */}
        {fallbackRelated.length > 0 && (
          <section className="pt-8 border-t border-[#EADCC9] space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-[#2C1F2D] font-[family-name:var(--font-playfair)]">
                More Recommended Articles
              </h3>
              <Link href="/blog" className="text-xs font-bold text-[#D4A59A] hover:underline no-underline flex items-center gap-1">
                <span>View All Articles</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {fallbackRelated.map((relPost) => {
                const relImg = extractPostImage(relPost);
                return (
                  <Link
                    key={relPost.id}
                    href={`/blog/${relPost.slug}`}
                    className="bg-[#FDF8F4] rounded-3xl overflow-hidden border border-[#EADCC9] hover:border-[#D4A59A] transition-all duration-300 group no-underline flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative h-44 w-full bg-gray-100 overflow-hidden">
                        <Image
                          src={relImg}
                          alt={relPost.title.rendered.replace(/<[^>]+>/g, '')}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          unoptimized
                        />
                      </div>
                      <div className="p-5 space-y-2">
                        <span className="text-[10px] font-bold text-[#D4A59A] uppercase tracking-wider block">
                          {getCategoryName(relPost.categories[0])}
                        </span>
                        <h4
                          className="text-base font-bold text-[#2C1F2D] group-hover:text-[#D4A59A] transition-colors line-clamp-2 font-[family-name:var(--font-playfair)] leading-snug"
                          dangerouslySetInnerHTML={{ __html: relPost.title.rendered }}
                        />
                      </div>
                    </div>

                    <div className="px-5 pb-5 pt-0">
                      <span className="text-xs font-bold text-[#D4A59A] group-hover:text-[#2C1F2D] transition-colors inline-flex items-center gap-1">
                        <span>Read More</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}
      </div>

      <Footer />
    </main>
  );
}
