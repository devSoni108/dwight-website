/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static exports for your app
  images: {
    unoptimized: true, // Required for static exports if using the Next.js Image component
  },
  reactStrictMode: true,
  trailingSlash: true, // Ensures trailing slashes in paths (important for static hosting)
};

export default nextConfig;
