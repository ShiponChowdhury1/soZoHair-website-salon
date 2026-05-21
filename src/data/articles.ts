export interface ArticleSection {
  title: string;
  text: string;
  images: string[];
}

export interface ArticleComment {
  id: number;
  name: string;
  date: string;
  text: string;
}

export interface Article {
  id: number;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  author: string;
  authorImage: string;
  date: string;
  readTime: string;
  tags: string[];
  sections: ArticleSection[];
  comments: ArticleComment[];
}

export const SOZO_ARTICLES: Article[] = [
  {
    id: 1,
    title: "How Weather Affects Your Hair",
    category: "Article",
    excerpt: "Weather and Hair. Ever wonder how your hair can look perfect one day, but suddenly becomes unmanageable the next? The weather plays a huge role in how your hair behaves.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80",
    author: "Karen Welch",
    authorImage: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=100&q=80",
    date: "March 15, 2022",
    readTime: "5 min read",
    tags: ["Hair Care", "Weather", "Tips"],
    sections: [
      {
        title: "THE SHAG",
        text: "The shag is huge! Already huge, and will continue in 2022. Short, long, and everything in-between. Wispy bangs, curtain bang, amount of face framing, we'll see it all. Wavy, curly, smooth and even straight. The shag is one of the most timeless and flattering hairstyles of all time. The shag allows the natural movement of the hair to flow free. It's a low-maintenance hairstyle that allows freedom of expression.",
        images: [
          "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=300&q=80",
          "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=300&q=80",
          "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&q=80",
          "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=300&q=80"
        ]
      },
      {
        title: "BLUNT BOBS",
        text: "The blunt bob hairstyle is timeless though it ebbs and flows in popularity. We are seeing it 'flow' right now. With or without a bang/fringe a blunt bob haircut will always be a classic and classy option. The hottest length of the blunt bob currently is just below the chin with a fringe. Next hottest option is the shoulder length 'lob' (long bob). Embrace your individuality and customize your chosen haircut!",
        images: [
          "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=300&q=80",
          "https://images.unsplash.com/photo-1583500178450-e59e4309b57b?w=300&q=80",
          "https://images.unsplash.com/photo-1541535650810-10d26f5c2ab3?w=300&q=80",
          "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=300&q=80"
        ]
      },
      {
        title: "LONG AND STRAIGHT",
        text: "Long and straight is another throwback. If you haven't seen much of it out there yet, you will. For ladies with straight hair, this frees you! No more pressure to cope with curl or wave; don't need to feel pressures to straighten! See? We're FREE! Go with what God gave you, and enjoy it! This is a wonderful hair news for everyone.",
        images: [
          "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&q=80",
          "https://images.unsplash.com/photo-1515688594390-b649af70d282?w=300&q=80",
          "https://images.unsplash.com/photo-1523264653568-d3d4032d1476?w=300&q=80",
          "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=300&q=80"
        ]
      },
      {
        title: "BANGS",
        text: "Bangs, Bangs, Bangs! Yes, I still like to call them Bangs. With the freedom thing going, I'm choosing to do that though many in the industry call it a fringe. Same thing. Bangs are the BIG thing you'll see a lot of into 2022. All sorts of Bangs, short, long, wispy, blunt, curtain, etc. There are so many varieties of Bangs to choose from! Bangs can even hide forehead lines and wrinkles; you can be free from those for a while.",
        images: [
          "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=300&q=80",
          "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=300&q=80",
          "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=300&q=80",
          "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=300&q=80"
        ]
      },
      {
        title: "VOLUME AND CURLS",
        text: "Get ready for the retro volume and big curls. For those with naturally big hair, here's to you being free. Freedom will be so nice for everyone, especially you! Liberace yourself and go with it. It's time for you to shine without a lot of work in the hair styling arena. Yes, some of those with wispy straight hair will choose to work hard or even perm their locks to have this look but you too, you can work with it. Consult your professional hair designer for the best products and easiest way for you to go with what the good Lord gave you.",
        images: [
          "https://images.unsplash.com/photo-1583500178450-e59e4309b57b?w=300&q=80",
          "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=100&q=80",
          "https://images.unsplash.com/photo-1523264653568-d3d4032d1476?w=300&q=80",
          "https://images.unsplash.com/photo-1541535650810-10d26f5c2ab3?w=300&q=80"
        ]
      },
      {
        title: "BRAIDS",
        text: "Last but not least, beautiful and creative braids. A great way to pull hair up or back or even to add some interest to a style, braids are a wonderful option. They can be dressy, casual, sporty, simple or intricate. Once free, freedom is meant to be embraced, experienced. It's always fun to see how interesting braids can be. Whether braiding all the hair in one braid or just part of the hair, the textured look that also shows off hair color in an interesting way can help with a bad hair day or be the center of attention for a hairstyle.",
        images: [
          "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=300&q=80",
          "https://images.unsplash.com/photo-1515688594390-b649af70d282?w=300&q=80",
          "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=300&q=80",
          "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=300&q=80"
        ]
      }
    ],
    comments: [
      { id: 1, name: "Sandra Beck", date: "April 2, 2022", text: "Absolutely loved this article! The tips about managing curly hair in humidity were so helpful. I've been struggling with frizz for years." },
      { id: 2, name: "Michael Torres", date: "April 5, 2022", text: "Great read! Never realized how much the weather could affect hair texture. Now I understand why my hair behaves differently in winter." },
      { id: 3, name: "Lisa Chen", date: "April 8, 2022", text: "This is exactly what I needed. Going to try some of these protective styles for the rainy season." }
    ]
  },
  {
    id: 2,
    title: "Brazilian Blowout for Smooth, Silky Hair",
    category: "Article",
    excerpt: "Brazilian blowout is the new and enhanced way to calm and condition the hair. This Professional Smoothing Treatment improves the health of the hair.",
    image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=600&q=80",
    author: "Karen Welch",
    authorImage: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=100&q=80",
    date: "April 1, 2022",
    readTime: "6 min read",
    tags: ["Brazilian Blowout", "Hair Treatment", "Smooth Hair"],
    sections: [
      { title: "THE SHAG", text: "After a Brazilian Blowout, styling your shag becomes effortless. The treatment eliminates frizz while keeping the natural texture and movement that makes the shag so desirable. Your wispy layers will fall perfectly every time.", images: ["https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=300&q=80","https://images.unsplash.com/photo-1560869713-7d0a29430803?w=300&q=80","https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&q=80","https://images.unsplash.com/photo-1562322140-8baeececf3df?w=300&q=80"] },
      { title: "BLUNT BOBS", text: "A Brazilian Blowout is perfect for blunt bobs. The sleek, smooth finish the treatment provides gives your bob that sharp, polished edge that makes it so iconic. Whether you prefer a chin-length bob or a longer lob, the results will be stunning.", images: ["https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=300&q=80","https://images.unsplash.com/photo-1583500178450-e59e4309b57b?w=300&q=80","https://images.unsplash.com/photo-1541535650810-10d26f5c2ab3?w=300&q=80","https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=300&q=80"] },
      { title: "LONG AND STRAIGHT", text: "For those with long hair seeking ultimate smoothness, the Brazilian Blowout is a game changer. It seals the hair cuticle, eliminating frizz and leaving your long locks with a gorgeous, healthy shine that lasts for months.", images: ["https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&q=80","https://images.unsplash.com/photo-1515688594390-b649af70d282?w=300&q=80","https://images.unsplash.com/photo-1523264653568-d3d4032d1476?w=300&q=80","https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=300&q=80"] },
      { title: "BANGS", text: "Bangs with a Brazilian Blowout stay perfectly in place. No more fly-aways or frizzy fringe ruining your look by midday. The treatment makes bangs incredibly manageable, whether they're wispy, blunt, or curtain-style.", images: ["https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=300&q=80","https://images.unsplash.com/photo-1560869713-7d0a29430803?w=300&q=80","https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=300&q=80","https://images.unsplash.com/photo-1562322140-8baeececf3df?w=300&q=80"] },
      { title: "VOLUME AND CURLS", text: "Even curly-haired clients benefit from Brazilian Blowout. Rather than eliminating curls, the treatment can calm frizz while preserving curl pattern, giving you bouncy, defined, frizz-free curls that are the envy of everyone around you.", images: ["https://images.unsplash.com/photo-1583500178450-e59e4309b57b?w=300&q=80","https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=100&q=80","https://images.unsplash.com/photo-1523264653568-d3d4032d1476?w=300&q=80","https://images.unsplash.com/photo-1541535650810-10d26f5c2ab3?w=300&q=80"] },
      { title: "BRAIDS", text: "Post-treatment braids look and feel luxurious. The smoothness makes braiding easier and the finished style takes on a high-shine, polished quality that looks professional and intentional. Braids after a Brazilian Blowout truly last longer too.", images: ["https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=300&q=80","https://images.unsplash.com/photo-1515688594390-b649af70d282?w=300&q=80","https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=300&q=80","https://images.unsplash.com/photo-1560869713-7d0a29430803?w=300&q=80"] }
    ],
    comments: [
      { id: 1, name: "Rachel Green", date: "April 10, 2022", text: "I had a Brazilian Blowout done last month and I'm never going back! My hair has never been this smooth." },
      { id: 2, name: "James Wilson", date: "April 12, 2022", text: "Great article. My wife has been considering this treatment and this answered all our questions." }
    ]
  },
  {
    id: 3,
    title: "Why Balayage is a Great Investment for Your Hair",
    category: "Article",
    excerpt: "Weather and Hair. Ever wonder how your hair can look perfect one day, but suddenly becomes unmanageable. Balayage is a French coloring technique.",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80",
    author: "Karen Welch",
    authorImage: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=100&q=80",
    date: "April 20, 2022",
    readTime: "7 min read",
    tags: ["Balayage", "Hair Color", "Investment"],
    sections: [
      { title: "THE SHAG", text: "Balayage and the shag are a perfect pairing. The soft, painted highlights enhance the layered texture of a shag cut, creating dimension that moves beautifully with every step. The natural sun-kissed effect makes each layer look intentional and gorgeous.", images: ["https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=300&q=80","https://images.unsplash.com/photo-1560869713-7d0a29430803?w=300&q=80","https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&q=80","https://images.unsplash.com/photo-1562322140-8baeececf3df?w=300&q=80"] },
      { title: "BLUNT BOBS", text: "Balayage on a blunt bob creates a stunning contrast. The sharp edges of the bob are beautifully offset by the soft, gradient color of balayage. It adds depth and visual interest to what could otherwise be a very one-dimensional cut.", images: ["https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=300&q=80","https://images.unsplash.com/photo-1583500178450-e59e4309b57b?w=300&q=80","https://images.unsplash.com/photo-1541535650810-10d26f5c2ab3?w=300&q=80","https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=300&q=80"] },
      { title: "LONG AND STRAIGHT", text: "Long, straight hair with balayage is the epitome of effortless chic. The highlights catch the light as your hair moves, creating a dynamic, living color that looks different in every setting. It's truly one of the most flattering combinations possible.", images: ["https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&q=80","https://images.unsplash.com/photo-1515688594390-b649af70d282?w=300&q=80","https://images.unsplash.com/photo-1523264653568-d3d4032d1476?w=300&q=80","https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=300&q=80"] },
      { title: "BANGS", text: "Balayage framing bangs is a trend that's here to stay. Lighter pieces around the face brighten your complexion and draw attention to your eyes. Whether you choose a subtle or bold contrast, face-framing balayage is always flattering.", images: ["https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=300&q=80","https://images.unsplash.com/photo-1560869713-7d0a29430803?w=300&q=80","https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=300&q=80","https://images.unsplash.com/photo-1562322140-8baeececf3df?w=300&q=80"] },
      { title: "VOLUME AND CURLS", text: "Curly hair and balayage is a match made in heaven. Each curl becomes a canvas for the color, with highlights peeking through and catching the light in unpredictable, beautiful ways. The result is a rich, multi-dimensional color effect that looks incredibly natural.", images: ["https://images.unsplash.com/photo-1583500178450-e59e4309b57b?w=300&q=80","https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=100&q=80","https://images.unsplash.com/photo-1523264653568-d3d4032d1476?w=300&q=80","https://images.unsplash.com/photo-1541535650810-10d26f5c2ab3?w=300&q=80"] },
      { title: "BRAIDS", text: "Braids with balayage are absolutely breathtaking. As you braid balayaged hair, the lighter and darker tones weave together creating a tapestry of color. Fishtail braids especially showcase this effect beautifully, making the color variation incredibly visible.", images: ["https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=300&q=80","https://images.unsplash.com/photo-1515688594390-b649af70d282?w=300&q=80","https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=300&q=80","https://images.unsplash.com/photo-1560869713-7d0a29430803?w=300&q=80"] }
    ],
    comments: [{ id: 1, name: "Emma Davis", date: "May 1, 2022", text: "I've been wanting balayage for so long, this article convinced me to finally do it!" }]
  },
  {
    id: 4,
    title: "Natural and Synthetic Wigs at SoZo Hair, Spa and Wigs",
    category: "Article",
    excerpt: "It's been 2 years since SoZo HAIR purchased Kay's Wigs. The journey of bringing premium, high-quality wigs to our community continues with absolute care.",
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&q=80",
    author: "Karen Welch",
    authorImage: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=100&q=80",
    date: "May 10, 2022",
    readTime: "8 min read",
    tags: ["Wigs", "Kay's Wigs", "Hair Solutions"],
    sections: [
      {
        title: "A LEGACY OF CARE",
        text: "Since SoZo HAIR acquired Kay's Wigs, we have dedicated ourselves to carrying on Kay's beautiful legacy of caring, professional wig services. Finding the right wig is a highly personal journey. Whether you are seeking a wig for fashion, hair loss, medical reasons, or just a fun new style, our master stylists guide you through every choice with empathy and expertise.",
        images: [
          "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=300&q=80",
          "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=300&q=80",
          "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&q=80",
          "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=300&q=80"
        ]
      },
      {
        title: "NATURAL HUMAN HAIR WIGS",
        text: "Human hair wigs offer the most natural look and feel. They can be styled, colored, cut, and treated just like your own hair. The versatility is unmatched—you can go from straight to wavy to curly using standard heat styling tools. With proper care and premium products, a natural hair wig will remain soft, vibrant, and beautiful for over a year.",
        images: [
          "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=300&q=80",
          "https://images.unsplash.com/photo-1583500178450-e59e4309b57b?w=300&q=80",
          "https://images.unsplash.com/photo-1541535650810-10d26f5c2ab3?w=300&q=80",
          "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=300&q=80"
        ]
      },
      {
        title: "SYNTHETIC WIGS & EASY BEAUTY",
        text: "Modern synthetic wigs are incredibly high quality and virtually indistinguishable from human hair. The primary benefit of synthetic fibers is their 'memory'—they retain their style, wave, and volume even after washing, requiring minimal styling. They are a lightweight, durable, and highly cost-effective solution for anyone wanting beautiful hair instantly.",
        images: [
          "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&q=80",
          "https://images.unsplash.com/photo-1515688594390-b649af70d282?w=300&q=80",
          "https://images.unsplash.com/photo-1523264653568-d3d4032d1476?w=300&q=80",
          "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=300&q=80"
        ]
      },
      {
        title: "PROFESSIONAL CUSTOM FITTING",
        text: "To ensure your wig looks incredibly natural and feels completely secure, SoZo provides professional custom fitting and customization. We cut, shape, and style the wig specifically for your face shape, head size, and personal aesthetic. We want you to feel confident, free, and absolutely gorgeous in your new hair.",
        images: [
          "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=300&q=80",
          "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=300&q=80",
          "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=300&q=80",
          "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=300&q=80"
        ]
      }
    ],
    comments: [
      { id: 1, name: "Theresa M.", date: "May 15, 2022", text: "Thank you, Karen! The wig fitting service at SoZo was life-changing for me during my medical treatment. You made me feel so special and beautiful." },
      { id: 2, name: "Sarah Higgins", date: "May 18, 2022", text: "The synthetic wigs look so realistic. I got so many compliments and no one even realized it wasn't my natural hair!" }
    ]
  },
  {
    id: 5,
    title: "MEET THE WELCH FAMILY: Passion, Purpose & Products",
    category: "Family & Legacy",
    excerpt: "Discover the heart and soul behind SoZo Hair, Spa & Wigs. Meet the Welch family and learn about their journey of passion, purpose, and their signature professional product line.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&q=80",
    author: "Karen Welch",
    authorImage: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=100&q=80",
    date: "June 1, 2022",
    readTime: "5 min read",
    tags: ["Welch Family", "About Us", "SoZo Products", "Legacy"],
    sections: [
      {
        title: "OUR FOUNDING VISION",
        text: "At the core of SoZo Hair, Spa & Wigs is a simple, powerful vision: to provide a premium sanctuary where beauty, wellness, and care meet. Founded by Karen Welch and supported by her dedicated family, SoZo was built on the values of passion, integrity, and commitment to the community. Over the years, this vision has guided every service, styling choice, and custom fitting, transforming SoZo from a local salon into a beloved community landmark.",
        images: [
          "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=300&q=80",
          "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&q=80",
          "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=300&q=80",
          "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=300&q=80"
        ]
      },
      {
        title: "PASSION & PURPOSE IN EVERY DETAIL",
        text: "For the Welch family, hair care is more than a profession—it's a calling. Every member of the family plays a unique role in making the SoZo experience unforgettable. From selecting the finest organic ingredients for our product line to training the next generation of master stylists, our focus is always on bringing out the natural beauty and confidence in everyone who walks through our doors. Purpose-driven and client-centered, we treat every customer like a member of our own family.",
        images: [
          "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=300&q=80",
          "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=300&q=80",
          "https://images.unsplash.com/photo-1583500178450-e59e4309b57b?w=300&q=80",
          "https://images.unsplash.com/photo-1541535650810-10d26f5c2ab3?w=300&q=80"
        ]
      },
      {
        title: "OUR EXCLUSIVE SOZO PRODUCT LINE",
        text: "Frustrated by the harsh chemicals and lack of effectiveness in mass-market hair products, the Welch family set out to create their own professional line: SoZo Products. Infused with natural botanicals, premium active ingredients, and restorative oils, our shampoos, conditioners, and treatment masks are designed to nourish, repair, and maintain the health of all hair types. Developed in collaboration with top scientists and tested in our own salons, SoZo Products deliver professional-grade results at home.",
        images: [
          "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=300&q=80",
          "https://images.unsplash.com/photo-1515688594390-b649af70d282?w=300&q=80",
          "https://images.unsplash.com/photo-1523264653568-d3d4032d1476?w=300&q=80",
          "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=300&q=80"
        ]
      }
    ],
    comments: [
      { id: 1, name: "David K.", date: "June 2, 2022", text: "Such a beautiful family story. It's clear that so much love and hard work goes into everything you do at SoZo!" },
      { id: 2, name: "Maria Robinson", date: "June 4, 2022", text: "I've been using the SoZo Argan Oil Mask and it is absolutely the best product I have ever put in my hair. Thank you for developing such amazing products!" }
    ]
  },
  {
    id: 6,
    title: "Sozo Drug Free Kids: Supporting Our Community's Future",
    category: "Community & Giving",
    excerpt: "At SoZo, we believe in giving back. Learn about our passionate commitment to the SoZo Drug-Free Kids initiative, helping youth build healthy, successful futures.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80",
    author: "Karen Welch",
    authorImage: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=100&q=80",
    date: "June 10, 2022",
    readTime: "4 min read",
    tags: ["Community", "Charity", "Drug-Free Kids", "Giving Back"],
    sections: [
      {
        title: "OUR MISSION FOR YOUTH",
        text: "Every child deserves a healthy, safe, and supportive environment to grow, dream, and thrive. The SoZo Drug-Free Kids initiative was born from our deep passion to support local youth and combat the challenges of substance abuse in our communities. Through educational workshops, supportive mentoring, and active community outreach, we aim to empower kids with the knowledge, confidence, and resources they need to make healthy choices and stand strong against negative peer pressure.",
        images: [
          "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=300&q=80",
          "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=300&q=80",
          "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=300&q=80",
          "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=300&q=80"
        ]
      },
      {
        title: "PARTNERSHIPS AND EDUCATION",
        text: "We work hand-in-hand with local schools, youth organizations, and family counselors to deliver practical, engaging educational programs. Our workshops focus on building self-esteem, teaching stress-management techniques, and promoting positive peer connections. By fostering open, honest conversations between parents and children, we help build stronger, healthier families and resilient communities where every child has the opportunity to succeed.",
        images: [
          "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=300&q=80",
          "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=300&q=80",
          "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=300&q=80",
          "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=300&q=80"
        ]
      },
      {
        title: "HOW YOU CAN MAKE A DIFFERENCE",
        text: "Building a drug-free future is a collective effort. A portion of every purchase of SoZo Products and every salon service goes directly toward funding the SoZo Drug-Free Kids programs and community events. We encourage our wonderful clients to join us in this mission by participating in our annual charity drives, volunteering for local youth events, or simply sharing the message of hope and support. Together, we can create a lasting positive impact on the lives of our children.",
        images: [
          "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=300&q=80",
          "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=300&q=80",
          "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=300&q=80",
          "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=300&q=80"
        ]
      }
    ],
    comments: [
      { id: 1, name: "Principal Thomas", date: "June 12, 2022", text: "Thank you SoZo for your incredible support in our local schools. The drug-free assemblies and workshops have had a massive positive impact on our middle school students." },
      { id: 2, name: "Robert Greene", date: "June 15, 2022", text: "Proud to support a salon business that actually stands up for the kids and invests in our local community's future. Keep up the phenomenal work!" }
    ]
  },
  {
    id: 7,
    title: "Color Enhancing Shampoos: Keep Your Salon Color Vibrant",
    category: "Hair Care",
    excerpt: "Protect your investment! Discover how color enhancing shampoos work, their essential benefits, and how to choose the right sulfate-free formulas for your shade.",
    image: "https://images.unsplash.com/photo-1515688594390-b649af70d282?w=600&q=80",
    author: "Karen Welch",
    authorImage: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=100&q=80",
    date: "June 20, 2022",
    readTime: "5 min read",
    tags: ["Color Care", "Shampoo", "Hair Tips", "Sulfate-Free"],
    sections: [
      {
        title: "UNDERSTANDING COLOR FADE",
        text: "There is nothing quite like the feeling of walking out of the salon with a fresh, vibrant hair color. However, maintaining that rich shade requires proper aftercare. Over time, factors like UV rays, hard water, and aggressive washing can open the hair cuticle, allowing dye molecules to escape and causing your color to fade or become brassy. Color enhancing shampoos are specifically formulated with micro-pigments that bond to the hair, refreshing and reinforcing your color with every wash.",
        images: [
          "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=300&q=80",
          "https://images.unsplash.com/photo-1515688594390-b649af70d282?w=300&q=80",
          "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&q=80",
          "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=300&q=80"
        ]
      },
      {
        title: "THE BENEFIT OF SULFATE-FREE FORMULAS",
        text: "Standard shampoos often contain harsh detergents called sulfates (like sodium lauryl sulfate), which strip away natural oils and accelerate color fading. To protect your beautiful salon investment, it is crucial to use sulfate-free color-protecting shampoos. These gentle cleansers cleanse your scalp and hair without opening the cuticle, maintaining moisture levels and preserving the integrity of the dye molecules so your color remains rich, glossy, and vibrant for weeks longer.",
        images: [
          "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=300&q=80",
          "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=300&q=80",
          "https://images.unsplash.com/photo-1583500178450-e59e4309b57b?w=300&q=80",
          "https://images.unsplash.com/photo-1541535650810-10d26f5c2ab3?w=300&q=80"
        ]
      },
      {
        title: "SELECTING THE RIGHT SHADE ENHANCER",
        text: "Choosing the correct color-enhancing shampoo depends on your specific shade and goals. Purple shampoos are essential for blondes, platinum, and grey hair to neutralize unwanted yellow and brassy tones. Blue shampoos work wonders for brunettes to counteract red or orange tones. For reds, coppers, and warm blondes, specialized depositing shampoos infuse rich warm pigments to keep the color looking freshly dyed. Consult your SoZo stylist to find the perfect color-match suite for your hair.",
        images: [
          "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=300&q=80",
          "https://images.unsplash.com/photo-1515688594390-b649af70d282?w=300&q=80",
          "https://images.unsplash.com/photo-1523264653568-d3d4032d1476?w=300&q=80",
          "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=300&q=80"
        ]
      }
    ],
    comments: [
      { id: 1, name: "Julie Peterson", date: "June 22, 2022", text: "I've been using SoZo's color protect shampoo on my blonde highlights and it is a total game changer. My hair stays ash-toned and bright, no brassiness at all!" },
      { id: 2, name: "Kelly Henderson", date: "June 25, 2022", text: "This article is so informative! I never realized sulfates were the main reason my red color washed out so fast. Changing my shampoo today!" }
    ]
  },
  {
    id: 8,
    title: "Choosing The Right Bangs for Your Face Shape",
    category: "Styling Advice",
    excerpt: "Curtain, side-swept, or blunt? Learn how to choose the most flattering bangs for your unique face shape, and tips for easy styling and maintenance.",
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&q=80",
    author: "Karen Welch",
    authorImage: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=100&q=80",
    date: "July 1, 2022",
    readTime: "6 min read",
    tags: ["Bangs", "Fringe", "Face Shapes", "Hair Styles"],
    sections: [
      {
        title: "THE POWER OF A FRINGE",
        text: "Bangs, or fringe, are one of the most transformative updates you can make to your hairstyle without changing your overall length. A well-cut fringe can instantly accentuate your eyes, highlight your cheekbones, and soften your jawline. However, because bangs frame your face so closely, choosing the right style that complements your natural bone structure and facial proportions is key to creating a balanced, harmonious look.",
        images: [
          "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=300&q=80",
          "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=300&q=80",
          "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=300&q=80",
          "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=300&q=80"
        ]
      },
      {
        title: "BANGS FOR OVAL, ROUND, & SQUARE FACES",
        text: "Different face shapes suit different fringe styles. For round faces, side-swept or textured curtain bangs elongate the face and add soft angles. Square or strong jawlines benefit from long, wispy, or rounded bangs that soften the features. Oval faces are highly versatile and can pull off almost any style, from dramatic, sharp blunt bangs to ultra-short micro-fringe. Our expert stylists specialize in analyzing your features to craft the perfect customized cut.",
        images: [
          "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=300&q=80",
          "https://images.unsplash.com/photo-1583500178450-e59e4309b57b?w=300&q=80",
          "https://images.unsplash.com/photo-1541535650810-10d26f5c2ab3?w=300&q=80",
          "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=300&q=80"
        ]
      },
      {
        title: "STYLING & GROWTH MAINTENANCE",
        text: "While bangs look incredibly chic, they do require a commitment to daily styling and regular trims. To keep them looking fresh, invest in a small round brush, a high-quality hair dryer, and a lightweight dry shampoo to prevent oil buildup. For those days when you decide to grow them out, face-framing layers and creative braiding can help transition your fringe seamlessly into the rest of your hair without any awkward in-between phases.",
        images: [
          "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&q=80",
          "https://images.unsplash.com/photo-1515688594390-b649af70d282?w=300&q=80",
          "https://images.unsplash.com/photo-1523264653568-d3d4032d1476?w=300&q=80",
          "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=300&q=80"
        ]
      }
    ],
    comments: [
      { id: 1, name: "Claire Miller", date: "July 3, 2022", text: "I got curtain bangs cut at SoZo last week and I'm obsessed! They style so easily and they frame my face perfectly." },
      { id: 2, name: "Hannah T.", date: "July 5, 2022", text: "I have a square face and was always terrified of bangs, but after reading this I think I'll try the soft wispy style!" }
    ]
  },
  {
    id: 9,
    title: "Salon Pricing: The True Value Behind the Service",
    category: "Pricing & Value",
    excerpt: "Ever wonder what goes into professional salon pricing? Discover the craftsmanship, premium products, and stylist education that ensure a luxurious experience.",
    image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=600&q=80",
    author: "Karen Welch",
    authorImage: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=100&q=80",
    date: "July 15, 2022",
    readTime: "5 min read",
    tags: ["Salon Pricing", "Stylist Experience", "Value", "Hair Care"],
    sections: [
      {
        title: "CRAFT & STYLIST EXPERIENCE LEVELS",
        text: "Professional salon pricing is directly tied to the experience, education, and artistic level of your hair designer. At SoZo, our team is structured into levels ranging from Hair Artist to Expert and Senior Master. Each level represents years of continuous training, advanced certifications in color theory and cutting-edge techniques, and a proven track record of exceptional results. When you book with a senior artist, you are investing in master-level precision and customized expertise.",
        images: [
          "https://images.unsplash.com/photo-1583500178450-e59e4309b57b?w=300&q=80",
          "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=100&q=80",
          "https://images.unsplash.com/photo-1523264653568-d3d4032d1476?w=300&q=80",
          "https://images.unsplash.com/photo-1541535650810-10d26f5c2ab3?w=300&q=80"
        ]
      },
      {
        title: "THE COST OF PREMIUM PRODUCTS",
        text: "Another major component of salon pricing is the quality of products used during your service. Cheap, mass-produced chemical dyes and shampoos strip hair of health and moisture. At SoZo, we use only high-end, nourishing color formulas (like Wella Illumina) and our signature professional-grade, botanical-infused hair care products. These premium products protect your hair's cuticle, deliver lasting shine, and ensure your scalp health remains in peak condition.",
        images: [
          "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=300&q=80",
          "https://images.unsplash.com/photo-1515688594390-b649af70d282?w=300&q=80",
          "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&q=80",
          "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=300&q=80"
        ]
      },
      {
        title: "CUSTOMIZED CARE AND LUXURY EXPERIENCE",
        text: "A visit to SoZo is never just a quick haircut; it is a personalized luxury experience designed around your unique beauty goals. Your appointment includes a deep-cleansing scalp massage, a thorough professional diagnostic consultation, custom color mixing, and expert styling advice. We dedicate our focused attention, advanced tools, and artistic skills to ensure you leave our salon feeling absolutely confident, pampered, and gorgeous.",
        images: [
          "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=300&q=80",
          "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=300&q=80",
          "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=300&q=80",
          "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=300&q=80"
        ]
      }
    ],
    comments: [
      { id: 1, name: "Victoria S.", date: "July 18, 2022", text: "This article is spot on. You really get what you pay for at SoZo. The consultation and custom color blend are absolutely worth every penny." },
      { id: 2, name: "Dina Albright", date: "July 20, 2022", text: "I appreciate the transparency about pricing levels. It helps clients understand the value and choose the right stylist for their needs." }
    ]
  },
  {
    id: 10,
    title: "How Weather Affects Your Hair & Healthy Lifestyle Tips",
    category: "Wellness & Care",
    excerpt: "Discover how changing seasons and weather impact your hair health, combined with essential, natural nutrition and lifestyle tips for gorgeous locks inside and out.",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80",
    author: "Karen Welch",
    authorImage: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=100&q=80",
    date: "July 28, 2022",
    readTime: "6 min read",
    tags: ["Weather Care", "Healthy Lifestyle", "Nutrition", "Scalp Health"],
    sections: [
      {
        title: "SEASONAL TRANSITIONS & HUMIDITY HACKS",
        text: "Our hair is highly sensitive to environmental changes. In high humidity, the hair shaft absorbs airborne moisture, causing the cuticle to swell and creating unwanted frizz. Conversely, cold winter air and dry indoor heating strip moisture, leading to static, brittleness, and split ends. Shield your hair by switching to heavier moisturizers and protective serums in the winter, and using lightweight, anti-humidity sealers (like a Brazilian Blowout) during hot, humid summers.",
        images: [
          "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=300&q=80",
          "https://images.unsplash.com/photo-1515688594390-b649af70d282?w=300&q=80",
          "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&q=80",
          "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=300&q=80"
        ]
      },
      {
        title: "NUTRITION FOR GORGEOUS HAIR FROM WITHIN",
        text: "Healthy hair begins on the inside. Since hair is made of a protein called keratin, a diet rich in high-quality proteins is essential. Incorporate nutrient-dense foods like eggs, fatty fish (rich in Omega-3s), spinach (packed with iron and vitamins A and C), and avocados into your meals. These vitamins and healthy fats nourish the hair follicles, promote natural scalp oil production, and enhance your hair's natural growth, strength, and vibrant shine.",
        images: [
          "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=300&q=80",
          "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=300&q=80",
          "https://images.unsplash.com/photo-1583500178450-e59e4309b57b?w=300&q=80",
          "https://images.unsplash.com/photo-1541535650810-10d26f5c2ab3?w=300&q=80"
        ]
      },
      {
        title: "HYDRATION & SCALP PROTECTION HABITS",
        text: "Just like your body, your hair and scalp need deep hydration to function optimally. Drinking plenty of water daily keeps your scalp moisturized, preventing dry dandruff and supporting hair growth. Additionally, protect your scalp from UV sun damage by wearing stylish hats during prolonged outdoor activities, and minimize the use of high-heat styling tools, which can deplete your hair's natural hydration and compromise its elastic strength.",
        images: [
          "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=300&q=80",
          "https://images.unsplash.com/photo-1515688594390-b649af70d282?w=300&q=80",
          "https://images.unsplash.com/photo-1523264653568-d3d4032d1476?w=300&q=80",
          "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=300&q=80"
        ]
      }
    ],
    comments: [
      { id: 1, name: "Samantha W.", date: "July 30, 2022", text: "I've started eating spinach and avocados daily and drinking 3L of water. My scalp eczema is completely gone and my hair is incredibly shiny!" },
      { id: 2, name: "David Vance", date: "August 2, 2022", text: "Excellent article that combines practical hair care with holistic healthy lifestyle tips. A must-read for everyone!" }
    ]
  },
  {
    id: 11,
    title: "Wondering Where to Begin? Come Visit Us!",
    category: "Consultation & Booking",
    excerpt: "First time visiting a professional salon or looking for a total hair makeover? Discover what to expect during our free, customized styling consultation.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80",
    author: "Karen Welch",
    authorImage: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=100&q=80",
    date: "August 5, 2022",
    readTime: "5 min read",
    tags: ["First Visit", "Consultation", "Salon Experience", "Booking"],
    sections: [
      {
        title: "WELCOME TO SOZO: YOUR STYLING SANCTUARY",
        text: "If you are feeling overwhelmed by the endless options of haircuts, colors, and treatments, or simply don't know where to start your beauty transformation, you are not alone! At SoZo Hair, Spa & Wigs, we believe every successful style begins with a warm, stress-free welcome. Our West Chester salon is designed as a relaxing sanctuary where you can sit back, enjoy a cup of tea or coffee, and discuss your personal hair goals with our friendly team of beauty experts.",
        images: [
          "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=300&q=80",
          "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&q=80",
          "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=300&q=80",
          "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=300&q=80"
        ]
      },
      {
        title: "THE COMPLIMENTARY DIAGNOSTIC CONSULTATION",
        text: "We believe in personalized, science-backed beauty. That's why we offer complimentary, one-on-one diagnostic styling consultations for all new clients. During this consultation, one of our master hair designers will analyze your natural hair texture, check your scalp health, discuss your daily styling routine and lifestyle, and listen carefully to your aesthetic preferences. This collaborative discussion allows us to create a customized cut, color, and care plan tailored uniquely to you.",
        images: [
          "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=300&q=80",
          "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=300&q=80",
          "https://images.unsplash.com/photo-1583500178450-e59e4309b57b?w=300&q=80",
          "https://images.unsplash.com/photo-1541535650810-10d26f5c2ab3?w=300&q=80"
        ]
      },
      {
        title: "WHAT TO EXPECT DURING YOUR FIRST MAKEOVER",
        text: "From the moment you step in, our focus is on your absolute comfort and satisfaction. Your first service begins with a relaxing, deep-cleansing shampoo and a soothing scalp massage. As we cut, color, or treat your hair, we explain each step and share professional styling tips so you can easily maintain your gorgeous new look at home. We also recommend the best sulfate-free, botanical-rich products from our exclusive line to keep your hair healthy and vibrant until your next visit.",
        images: [
          "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=300&q=80",
          "https://images.unsplash.com/photo-1515688594390-b649af70d282?w=300&q=80",
          "https://images.unsplash.com/photo-1523264653568-d3d4032d1476?w=300&q=80",
          "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=300&q=80"
        ]
      }
    ],
    comments: [
      { id: 1, name: "Patricia Lopez", date: "August 6, 2022", text: "My first visit to SoZo was an absolute dream. The styling consultation was so eye-opening, and my stylist knew exactly what shade of brunette would suit my skin tone. Best salon experience ever!" },
      { id: 2, name: "Emily Rogers", date: "August 10, 2022", text: "If you're wondering where to go in Cincinnati, this is it! So friendly, clean, professional, and absolutely wonderful results." }
    ]
  }
];
