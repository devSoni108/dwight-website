/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [], // Add trusted domains for external images
  },
  // Enable static export if you're targeting a fully static site
  output: process.env.STATIC_EXPORT ? 'export' : undefined,
  trailingSlash: true, // Ensures trailing slashes for static paths (optional for static exports)
  experimental: {
    appDir: true, // Include this if using the new `app/` directory feature
  },
  reactStrictMode: true, // Enables React's Strict Mode
};

export default nextConfig;
