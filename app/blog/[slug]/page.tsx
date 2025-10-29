import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, User, ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getBlogPostBySlug, getAllBlogSlugs } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Section className="bg-gradient-to-b from-primary/5 to-background pt-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Button variant="ghost" className="mb-6" asChild>
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to blog
              </Link>
            </Button>

            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="mb-4">{post.title}</h1>

            <div className="flex items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(post.publishedAt)}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <article className="prose prose-lg max-w-4xl mx-auto">
            <MDXRemote source={post.content} />
          </article>
        </Container>
      </Section>

      <Section className="bg-gradient-to-b from-background to-primary/5">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="mb-4">Need help with security engineering?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our Forward-Deployed Engineers can help you build and operate
              world-class security programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="orange" asChild>
                <Link href="/contact" className="inline-flex items-center gap-3">
                  <span>Contact Us</span>
                </Link>
              </Button>
              <Button size="lg" variant="black" asChild>
                <Link href="/services" className="inline-flex items-center gap-3">
                  <span>View Services</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
