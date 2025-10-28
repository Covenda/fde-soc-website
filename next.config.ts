import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: true, // Required for static export
  },
  async redirects() {
    return [
      {
        source: "/case-studies",
        destination: "/customers/case-studies",
        permanent: true,
      },
      {
        source: "/pricing",
        destination: "/pricing/services",
        permanent: true,
      },
      {
        source: "/fde",
        destination: "/services/fde",
        permanent: true,
      },
      {
        source: "/soc",
        destination: "/services/ai-soc",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
