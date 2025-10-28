import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  author: string;
  tags: string[];
  content: string;
}

const blogDirectory = path.join(process.cwd(), "content/blog");

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const fileNames = fs.readdirSync(blogDirectory);
    const allPosts = fileNames
      .filter((fileName) => fileName.endsWith(".mdx"))
      .map((fileName) => {
        const slug = fileName.replace(/\.mdx$/, "");
        const fullPath = path.join(blogDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);

        return {
          slug,
          title: data.title,
          description: data.description,
          publishedAt: data.publishedAt,
          author: data.author,
          tags: data.tags || [],
          content,
        } as BlogPost;
      });

    return allPosts.sort((a, b) => {
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    });
  } catch (error) {
    return [];
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(blogDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      description: data.description,
      publishedAt: data.publishedAt,
      author: data.author,
      tags: data.tags || [],
      content,
    } as BlogPost;
  } catch (error) {
    return null;
  }
}

export async function getAllBlogSlugs(): Promise<string[]> {
  try {
    const fileNames = fs.readdirSync(blogDirectory);
    return fileNames
      .filter((fileName) => fileName.endsWith(".mdx"))
      .map((fileName) => fileName.replace(/\.mdx$/, ""));
  } catch (error) {
    return [];
  }
}
