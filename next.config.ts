/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static site export
  images: {
    unoptimized: true, // Required for static export if you're using the Next.js Image component
  },
  reactStrictMode: true, // Optional, enforces React's strict mode
  trailingSlash: true, // Ensures all routes have trailing slashes for static hosting
};

export default nextConfig;
