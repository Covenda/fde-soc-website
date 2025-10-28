import fs from "fs";
import path from "path";

export interface CaseStudy {
  title: string;
  slug: string;
  industry: string;
  publishedAt: string;
  challenge: string;
  approach: string;
  outcome: string;
  metrics: {
    label: string;
    before: string;
    after: string;
    improvement: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  technologies: string[];
}

const casesDirectory = path.join(process.cwd(), "content/cases");

export async function getAllCaseStudies(): Promise<CaseStudy[]> {
  const fileNames = fs.readdirSync(casesDirectory);
  const allCases = fileNames
    .filter((fileName) => fileName.endsWith(".json"))
    .map((fileName) => {
      const fullPath = path.join(casesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      return JSON.parse(fileContents) as CaseStudy;
    });

  return allCases.sort((a, b) => {
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
  try {
    const fullPath = path.join(casesDirectory, `${slug}.json`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    return JSON.parse(fileContents) as CaseStudy;
  } catch (error) {
    return null;
  }
}

export async function getAllCaseStudySlugs(): Promise<string[]> {
  const fileNames = fs.readdirSync(casesDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith(".json"))
    .map((fileName) => fileName.replace(/\.json$/, ""));
}
