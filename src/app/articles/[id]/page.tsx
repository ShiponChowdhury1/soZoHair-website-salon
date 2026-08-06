import { redirect } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  return {
    title: `Article | SoZo Hair Salon & Wigs`,
  };
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const { id } = await params;
  redirect(`/blog/${id}`);
}
