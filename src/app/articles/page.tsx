import { redirect } from "next/navigation";

interface ArticlesPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function ArticlesPage({ searchParams }: ArticlesPageProps) {
  const { category } = await searchParams;
  if (category) {
    redirect(`/blog?category=${encodeURIComponent(category)}`);
  }
  redirect('/blog');
}
