import articlesData from "./articles.json";

export interface ArticleComment {
  id: number;
  name: string;
  date: string;
  text: string;
}

export interface ArticleSection {
  title: string;
  text: string;
  images: string[];
}

export interface Article {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  authorImage: string;
  featuredImage: string;
  image: string;
  tags: string[];
  comments: ArticleComment[];
  sections: ArticleSection[];
}

function stripHtml(html: string): string {
  if (!html) return "";
  return html
    .replace(/\[\/?et_pb_[^\]]*\]/gi, "")
    .replace(/<[^>]+>/gi, "")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&#8217;/gi, "'")
    .replace(/&#8220;/gi, '"')
    .replace(/&#8221;/gi, '"')
    .replace(/&#8211;/gi, "-")
    .trim();
}

function extractImage(post: any): string {
  if (post.yoast_head_json?.og_image?.[0]?.url) {
    const url = post.yoast_head_json.og_image[0].url;
    if (!url.includes("topleft.png") && !url.includes("logo")) {
      return url;
    }
  }
  if (post.content?.rendered) {
    const match = post.content.rendered.match(/<img[^>]+src=["']([^"']+)["']/i);
    if (match && match[1]) {
      return match[1];
    }
  }
  return "https://sozohair.net/wp-content/uploads/2016/10/AdobeStock_51728634-Medium-300x200.jpeg";
}

export const SOZO_ARTICLES: Article[] = (articlesData as any[]).map((post, idx) => {
  const cleanTitle = stripHtml(post.title?.rendered || "");
  const cleanExcerptText = stripHtml(post.excerpt?.rendered || post.content?.rendered || "");
  const imgUrl = extractImage(post);
  const formattedDate = post.date
    ? new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
    : "Recent";

  const wordCount = (post.content?.rendered || "").replace(/<[^>]+>/g, "").split(/\s+/).length;
  const calculatedReadTime = `${Math.max(2, Math.ceil(wordCount / 200))} min read`;

  return {
    id: post.id || idx + 1,
    title: cleanTitle,
    slug: post.slug || `article-${post.id}`,
    excerpt: cleanExcerptText.slice(0, 160) + (cleanExcerptText.length > 160 ? "..." : ""),
    category: "Hair Care Tips",
    date: formattedDate,
    readTime: calculatedReadTime,
    author: "Karen Welch",
    authorImage: "https://sozohair.net/wp-content/uploads/2014/08/Karen-Welch.jpg",
    featuredImage: imgUrl,
    image: imgUrl,
    tags: ["hair", "salon", "sozo", "style", "tips"],
    comments: [
      { id: 1, name: "Jessica Hall", date: "Nov 1, 2022", text: "Such great content! Always love reading SoZo articles." }
    ],
    sections: [
      {
        title: cleanTitle,
        text: cleanExcerptText,
        images: [imgUrl]
      }
    ]
  };
});

export default SOZO_ARTICLES;
