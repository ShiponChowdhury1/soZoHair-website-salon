import fs from 'fs';

async function downloadData() {
  console.log("Fetching posts...");
  // WordPress থেকে পোস্ট আনছি
  const res = await fetch('https://sozohair.net/wp-json/wp/v2/posts?_embed=1&per_page=100');
  const posts = await res.json();
  // src/data ফোল্ডারে articles.json নামে সেভ করছি
  fs.writeFileSync('src/data/articles.json', JSON.stringify(posts, null, 2));

  console.log("Fetching categories...");
  // WordPress থেকে ক্যাটাগরি আনছি
  const catRes = await fetch('https://sozohair.net/wp-json/wp/v2/categories?per_page=100');
  const categories = await catRes.json();
  // src/data ফোল্ডারে categories.json নামে সেভ করছি
  fs.writeFileSync('src/data/categories.json', JSON.stringify(categories, null, 2));

  console.log("All data downloaded successfully! Check your src/data folder.");
}

downloadData();